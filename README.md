# DS European staging

Review work lives on `staging/website`. Do not merge or push this work to `main` without
an explicit release decision. This is currently phase 0 setup, so the starter homepage
remains. The client website is built in the later phases.

Read `AGENTS.md`, the phase prompts and `docs/staging-review.md` before continuing.
The original specification and page copy remain unchanged.

## Getting Started

Use Node 22, install the locked packages with `npm ci`, then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font/google` to load Montserrat at weights 400 and 700. Brand CSS
comes from the supplied document. Unknown client values in `content/site.ts` begin with
`PLACEHOLDER_` and must not be used to construct links or treated as enabled decisions.
`.env.example` lists future integration settings; keep actual secrets in ignored environment files.

Before a review, run `npm run build`, `npm run lint` and `npx tsc --noEmit`. Human review
gates remain separate from these automated checks. This staging branch is non-indexable.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
