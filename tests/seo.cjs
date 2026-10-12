/* eslint-disable @typescript-eslint/no-require-imports -- Isolated TypeScript checks without adding a test dependency. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) {
  return originalResolve.call(
    this,
    request.startsWith("@/") ? path.join(root, request.slice(2)) : request,
    ...args,
  );
};
for (const extension of [".ts", ".tsx"])
  require.extensions[extension] = (module, filename) =>
    module._compile(
      ts.transpileModule(fs.readFileSync(filename, "utf8"), {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          target: ts.ScriptTarget.ES2022,
          jsx: ts.JsxEmit.ReactJSX,
          esModuleInterop: true,
        },
      }).outputText,
      filename,
    );

const originModule = require.resolve("../lib/site-origin.ts");
const { site } = require("../content/site.ts");
const savedEnv = { ...process.env };
const savedDomain = site.domain;
const savedAnalytics = site.decisions.analytics;
const loadOrigin = (env) => {
  for (const key of [
    "VERCEL_ENV",
    "VERCEL_URL",
    "NEXT_PUBLIC_SITE_URL",
    "SITE_INDEXING_ENABLED",
    "SITE_ANALYTICS_ENABLED",
  ])
    delete process.env[key];
  Object.assign(process.env, env);
  delete require.cache[originModule];
  return require(originModule);
};
let checks = 0;
function check(name, fn) {
  fn();
  checks++;
  console.log("PASS " + name);
}

check("preview cannot inherit production origin or enable tracking/indexing", () => {
  site.domain = "https://live.example";
  site.decisions.analytics = "vercel-cookieless";
  const config = loadOrigin({
    VERCEL_ENV: "preview",
    VERCEL_URL: "review.vercel.app",
    NEXT_PUBLIC_SITE_URL: "https://live.example",
    SITE_INDEXING_ENABLED: "true",
    SITE_ANALYTICS_ENABLED: "true",
  });
  assert.equal(config.siteOrigin.origin, "https://review.vercel.app");
  assert.equal(config.indexingEnabled, false);
  assert.equal(config.trackingEnabled, false);
  assert.throws(() => config.resolveSiteOrigin({ VERCEL_ENV: "preview" }));
});
check("production fails without an origin and remains gated without client decisions", () => {
  site.domain = savedDomain;
  site.decisions.analytics = savedAnalytics;
  assert.throws(() => loadOrigin({ VERCEL_ENV: "production" }));
  const config = loadOrigin({
    VERCEL_ENV: "production",
    NEXT_PUBLIC_SITE_URL: "https://live.example",
    SITE_INDEXING_ENABLED: "true",
    SITE_ANALYTICS_ENABLED: "true",
  });
  assert.equal(config.indexingEnabled, false);
  assert.equal(config.trackingEnabled, false);
});
check("launch requires matching confirmed origin and explicit flags", () => {
  site.domain = "https://live.example";
  site.decisions.analytics = "vercel-cookieless";
  let config = loadOrigin({
    VERCEL_ENV: "production",
    NEXT_PUBLIC_SITE_URL: "https://live.example",
  });
  assert.equal(config.indexingEnabled, false);
  assert.equal(config.trackingEnabled, false);
  config = loadOrigin({
    VERCEL_ENV: "production",
    NEXT_PUBLIC_SITE_URL: "https://live.example",
    SITE_INDEXING_ENABLED: "true",
    SITE_ANALYTICS_ENABLED: "true",
  });
  assert.equal(config.indexingEnabled, true);
  assert.equal(config.trackingEnabled, true);
  config = loadOrigin({
    VERCEL_ENV: "production",
    NEXT_PUBLIC_SITE_URL: "https://wrong.example",
    SITE_INDEXING_ENABLED: "true",
  });
  assert.equal(config.indexingEnabled, false);
  for (const value of [
    "javascript:alert(1)",
    "https://user:secret@live.example",
    "https://live.example/path",
    "https://live.example?email=test",
  ])
    assert.throws(() =>
      config.resolveSiteOrigin({ VERCEL_ENV: "production", NEXT_PUBLIC_SITE_URL: value }),
    );
});
site.domain = savedDomain;
site.decisions.analytics = savedAnalytics;
const config = loadOrigin({});
check("temporary images and unconfirmed service drafts are excluded from production", () => {
  const reviewFile = require.resolve("../lib/review.ts");
  const pagesFile = require.resolve("../content/services/pages.ts");
  process.env.VERCEL_ENV = "production";
  delete require.cache[reviewFile];
  delete require.cache[pagesFile];
  assert.equal(require(reviewFile).temporaryImagesEnabled, false);
  assert(!require(pagesFile).servicePages.some((page) => page.slug === "private-deliveries"));
  delete process.env.VERCEL_ENV;
  delete require.cache[reviewFile];
  delete require.cache[pagesFile];
});
const { seoPages } = require("../content/seo-pages.ts");
const { servicePages } = require("../content/services/pages.ts");
const { pageMetadata } = require("../lib/metadata.ts");
const sitemap = require("../app/sitemap.ts").default;
const robots = require("../app/robots.ts").default;
const { businessSchema, serviceSchema } = require("../lib/structured-data.ts");
const { cleanTrackingUrl, linkConversion, formConversion } = require("../lib/tracking.ts");

check("sitemap matches implemented routes and dynamically includes registered services", () => {
  const paths = seoPages.map((p) => p.path);
  assert.equal(new Set(paths).size, paths.length);
  assert.equal(new Set(seoPages.map((p) => p.meta.title)).size, paths.length);
  assert.equal(new Set(seoPages.map((p) => p.meta.description)).size, paths.length);
  assert.deepEqual(
    sitemap().map((p) => new URL(p.url).pathname),
    paths,
  );
  for (const service of servicePages) assert(paths.includes(`/services/${service.slug}`));
  for (const blocked of ["/api/quote", "/dev/components"]) assert(!paths.includes(blocked));
  assert.deepEqual(robots(), { rules: { userAgent: "*", disallow: "/" } });
  for (const page of seoPages) {
    const meta = pageMetadata(page.path);
    assert.equal(meta.alternates.canonical, config.absoluteUrl(page.path));
    assert.equal(meta.description, page.meta.description);
    assert.equal(meta.robots.index, false);
  }
});
check("structured data has stable provider references and no placeholders or ratings", () => {
  const encoded = JSON.stringify(businessSchema);
  assert(!/PLACEHOLDER_|AggregateRating|"Review"|"Rating"/.test(encoded));
  const org = businessSchema["@graph"].find((n) => n["@type"] === "Organization");
  for (const page of servicePages)
    assert.equal(
      serviceSchema(`/services/${page.slug}`, page.hero.title, page.meta.description).provider[
        "@id"
      ],
      org["@id"],
    );
});
check("tracking drops unknown paths, foreign URLs, queries and fragments", () => {
  const paths = seoPages.map((p) => p.path),
    origin = "https://live.example";
  assert.equal(
    cleanTrackingUrl(`${origin}/quote?email=private@example.com#secret`, paths, origin),
    `${origin}/quote`,
  );
  for (const url of [
    "/dev/components",
    "/api/quote",
    "/unknown/person@example.com",
    "https://foreign.example/quote",
    "javascript:alert(1)",
  ])
    assert.equal(cleanTrackingUrl(url, paths, origin), null);
  assert.equal(linkConversion("tel:+441234567890"), "phone_click");
  assert.equal(linkConversion("https://wa.me/441234567890?text=private"), "whatsapp_click");
  assert.equal(linkConversion("https://wa.me.evil.example/123"), null);
  assert.equal(linkConversion("mailto:private@example.com"), null);
  assert.equal(formConversion({ form: "quote", email: "private@example.com" }), "quote_submitted");
  assert.equal(formConversion({ form: "contact" }), "contact_submitted");
  assert.equal(formConversion({ form: "unknown" }), null);
});
check("JSON-LD escapes executable markup", () => {
  const { renderToStaticMarkup } = require("react-dom/server");
  const { createElement } = require("react");
  const { JsonLd } = require("../components/JsonLd.tsx");
  const html = renderToStaticMarkup(
    createElement(JsonLd, { data: { text: "</script><script>alert(1)</script>" } }),
  );
  assert.equal((html.match(/<script/g) || []).length, 1);
  assert(html.includes("\\u003c/script>"));
});

const decode = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'");
async function httpChecks() {
  const origin = process.env.SEO_TEST_ORIGIN || "http://127.0.0.1:3000";
  const titles = new Set();
  const summary = [];
  const documents = new Map();
  for (const page of seoPages) {
    const response = await fetch(origin + page.path);
    assert.equal(response.status, 200, page.path);
    const html = await response.text();
    documents.set(page.path, html);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, page.path + " has one H1");
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow");
    assert(response.headers.get("content-security-policy").includes("object-src 'none'"));
    const meta = (name) =>
      decode(
        html.match(new RegExp(`<meta (?:name|property)="${name}" content="([^"]*)"`))?.[1] || "",
      );
    const canonical = decode(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] || "");
    const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] || "");
    assert.equal(title, page.meta.title);
    assert(!titles.has(title));
    titles.add(title);
    assert.equal(meta("description"), page.meta.description);
    assert.equal(new URL(canonical).href, new URL(page.path, origin).href);
    assert.equal(meta("robots"), "noindex, nofollow");
    assert(html.includes('lang="en-GB"'));
    assert(!/<script[^>]+src="[^"]*(?:insights|analytics)/.test(html));
    const schemas = [
      ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
    ].map((m) => JSON.parse(m[1]));
    assert(schemas.some((s) => s["@graph"]));
    assert(!/PLACEHOLDER_|AggregateRating|"Review"|"Rating"/.test(JSON.stringify(schemas)));
    const breadcrumbs = schemas.filter((s) => s["@type"] === "BreadcrumbList");
    assert.equal(breadcrumbs.length, page.path === "/" ? 0 : 1);
    for (const schema of breadcrumbs)
      for (const item of schema.itemListElement)
        if (item.item) assert.equal(new URL(item.item).origin, origin);
    if (page.path.startsWith("/services/")) assert(schemas.some((s) => s["@type"] === "Service"));
    const faq = schemas.find((s) => s["@type"] === "FAQPage");
    if (faq)
      assert.equal(faq.mainEntity.length, (html.match(/<details class="faq-item/g) || []).length);
    const images = [meta("og:image"), meta("twitter:image")];
    assert(images[0]);
    assert.equal(images[1], images[0]);
    assert.equal(new URL(images[0]).origin, origin);
    const image = await fetch(images[0]);
    assert.equal(image.status, 200, images[0]);
    assert(image.headers.get("content-type").startsWith("image/png"));
    const bytes = Buffer.from(await image.arrayBuffer());
    assert.equal(bytes.readUInt32BE(16), 1200);
    assert.equal(bytes.readUInt32BE(20), 630);
    summary.push({
      path: page.path,
      descriptionLength: page.meta.description.length,
      imageBytes: bytes.length,
    });
  }
  for (const [path, html] of documents) {
    for (const match of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
      const url = new URL(decode(match[1]), origin + path);
      if (url.origin !== origin) continue;
      assert(documents.has(url.pathname), path + " links to missing page " + url.pathname);
      if (url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        assert(
          documents.get(url.pathname).includes('id="' + id + '"'),
          path + " missing anchor " + id,
        );
      }
    }
  }
  for (const route of ["/dev/components", "/missing-page"]) {
    const response = await fetch(origin + route);
    const html = await response.text();
    if (route === "/missing-page") assert.equal(response.status, 404);
    assert(/noindex/.test(html));
  }
  const slash = await fetch(origin + "/services/", { redirect: "manual" });
  assert.equal(slash.status, 308);
  assert.equal(new URL(slash.headers.get("location"), origin).pathname, "/services");
  const sitemapText = await (await fetch(origin + "/sitemap.xml")).text();
  assert.equal((sitemapText.match(/<loc>/g) || []).length, seoPages.length);
  assert(!(sitemapText.includes("/dev/") || sitemapText.includes("/api/")));
  const robotsText = await (await fetch(origin + "/robots.txt")).text();
  assert(robotsText.includes("Disallow: /"));
  assert(!robotsText.includes("Allow: /"));
  console.log(JSON.stringify(summary, null, 2));
  console.log(
    `PASS HTTP, metadata, schema, image and exclusion checks across ${seoPages.length} public pages`,
  );
}
(async () => {
  if (process.argv.includes("--http")) await httpChecks();
  console.log(`${checks} isolated SEO/tracking checks passed`);
})()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => {
    process.env = savedEnv;
  });
