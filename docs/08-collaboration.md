# 08. Collaboration

Two people, two AI tools, one repo. This document exists so neither of you has to guess who is doing what or how to avoid standing on each other.

| | |
|---|---|
| **Ollie** | Cursor. Owns the repo, the client relationship, content and SEO |
| **[Name]** | Codex with GPT-6 Astra. Owns the build, components and technical implementation |

---

## 1. Ownership

**The GitHub repo and the Vercel project both sit under Ollie's account**, or under an organisation Ollie controls. This is a client project and the asset should not live in a collaborator's personal account.

Add the second developer as a collaborator with write access. Same on Vercel.

The domain, the Resend account and the Google Search Console property are also Ollie's.

---

## 2. Branching

`main` is always deployable. Nobody pushes to it directly.

One branch per phase:

```
phase/0-scaffold
phase/1-chrome
phase/2-components
phase/3-home
phase/4-services-template
phase/5-service-pages
phase/6-storage-jobs-about
phase/7-forms
phase/8-legal
phase/9-seo
phase/10-performance
```

Later, smaller work uses a description rather than a phase:

```
fix/header-scroll-shift
content/about-copy-update
```

### Working a branch

```bash
git checkout main
git pull                                 # always start from current main
git checkout -b phase/3-home
# ... work ...
git add -A
git commit -m "Phase 3: home page"
git push -u origin phase/3-home
```

Then open a pull request on GitHub. The other person looks at the Vercel preview URL, not the diff. Merge when the gate passes.

Delete the branch after merging. GitHub offers a button.

### Why pull requests for two people

Not for process. For the preview URL. Every branch gets its own deployed site, which means whoever did not write the code can check it on a real phone before it reaches `main`. That is worth far more than reading a diff.

---

## 3. Who does what

### Phases 0 to 4: one person, sequential

Foundations feed components, components feed Home, Home proves the patterns, the service template proves the content model. These cannot be parallelised and should be done by the same person.

**Recommended: the Codex build handles 0 to 4.** It is the most technical stretch and consistency matters more here than anywhere else.

Ollie reviews each gate in a browser. Reviewing is not passive here; the gates contain judgement calls that need a second pair of eyes, particularly the service grid icon decision in phase 2.

### Phase 5 onward: parallel

| Phase | Who | Why |
|---|---|---|
| 5. Six service pages | Ollie | Content files only, no component work. Sits in Cursor comfortably |
| 6. Storage, Recent Jobs, About | Ollie | Same, mostly content |
| 7. Forms | Codex | Route handlers, Resend, validation, upload handling |
| 8. Legal | Ollie | Content |
| 9. SEO plumbing | Either | Schema and metadata are mechanical. Ollie if he wants the SEO in his hands |
| 10. Performance | Codex | Technical audit |
| 11. Launch | Ollie | Client answers, redirects, Search Console |

**Phases 5 and 7 can run at the same time.** They touch different files entirely, one in `/content`, one in `/app/api` and `/lib`. That is the only genuinely safe overlap in the build.

Phases 6 and 8 can also overlap with 7.

---

## 4. Rules for not standing on each other

**Never two people in the same file at the same time.** The phase split above is designed so this does not happen. If it has to, say so before starting.

**Always `git pull` before starting work.** Half of all merge conflicts come from branching off a stale `main`.

**Small commits.** One logical change each. A commit containing an entire phase is impossible to review and impossible to partially undo.

**Push at the end of every session,** even if the work is unfinished. A branch on GitHub is a backup. A branch on a laptop is not.

**Say what you are starting.** A message saying "taking phase 6 now" costs nothing and prevents the only expensive problem here.

---

## 5. Keeping two AI tools consistent

Both tools read `AGENTS.md` from the repo root. That is the shared brain and it is why the rules live there rather than in anyone's personal settings.

If the Cursor version in use does not pick up `AGENTS.md` automatically, add a pointer rather than duplicating the rules:

```
.cursor/rules/project.mdc
---
alwaysApply: true
---
Read AGENTS.md at the repo root before any work. It governs this project.
Page content comes from /docs/pages. Copy is supplied, never generated.
```

**Never let the rules diverge between the two tools.** One source, pointed at from both.

### Formatting

Two AI agents with different default formatting will produce enormous diffs full of nothing. Commit a Prettier config before phase 1 and have both tools respect it.

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "printWidth": 100
}
```

### Same Node version

```
// .nvmrc
22
```

Commit `package-lock.json` and use `npm ci` rather than `npm install` when picking up someone else's branch. It installs exactly the locked versions rather than resolving fresh ones and quietly changing the lockfile.

---

## 6. Secrets

`.env.local` is gitignored and stays that way. Never commit a key.

Commit `.env.example` instead, listing the names with no values:

```
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
ENQUIRY_TO_EMAIL=
ENQUIRY_FROM_EMAIL=
```

Real values go into Vercel, for both preview and production, by whoever owns the accounts. Share them between yourselves through a password manager, not Slack or WhatsApp.

---

## 7. Handling merge conflicts

They will happen, usually in `package-lock.json` or a shared content file. Nothing dramatic:

```bash
git checkout main
git pull
git checkout phase/6-storage-jobs-about
git merge main
# fix the conflicts the editor shows you
git add -A
git commit
git push
```

For `package-lock.json` specifically, do not hand-edit it. Take either version, then run `npm install` to regenerate it correctly.

If a conflict looks genuinely confusing, ask the other person rather than guessing. They wrote it twenty minutes ago and will know in seconds.

---

## 8. Review

The person who did not write the phase checks the gate. Always.

Review the **preview URL**, not the code. The gates in `06-build-plan.md` are written to be checked in a browser at 390px, 768px and 1440px, because that is where the problems on this site will be.

Two questions worth asking on every review:

1. Does the copy match the page doc exactly?
2. Is there anything on screen that is not in a doc?

The second catches invented copy, stock imagery and improvised components, which are the three most likely failures.

---

## 9. A short daily rhythm

Nothing formal. Enough that neither of you is surprised.

- Say which phase you are picking up before you start
- Push at the end of every session
- Open the PR when the phase is done, not when it is perfect
- Whoever did not build it reviews the preview within a day, so nothing sits blocked

---

## 10. Setup checklist

Run once, in order, before any code:

- [ ] Ollie creates the GitHub repo, private, under his account or org
- [ ] Second developer added as a collaborator with write access
- [ ] Ollie creates the Vercel project and connects the repo
- [ ] Second developer added to the Vercel project
- [ ] `AGENTS.md` and `/docs` committed to `main`
- [ ] `.prettierrc`, `.nvmrc`, `.env.example` committed
- [ ] `.cursor/rules/project.mdc` pointing at `AGENTS.md` if needed
- [ ] Both confirm `npm run dev` works locally
- [ ] Branch naming agreed
- [ ] Phase ownership agreed, per section 3
