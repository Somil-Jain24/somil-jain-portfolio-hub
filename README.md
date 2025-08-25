# Somil Jain — Portfolio Hub

Professional personal portfolio built with Vite, React + TypeScript and Tailwind CSS. It showcases projects, skills, education, certifications, and contact links in a compact, responsive layout.

## Checklist
- Update or run the project locally
- Edit components (Hero, Footer, Certifications)
- Troubleshoot build/JSX issues

## Quick start (Windows PowerShell)
Open PowerShell and run:

```powershell
cd "C:\Users\somil\OneDrive\Desktop\port\somil-jain-portfolio-hub"
npm install
npm run dev
```

- Visit the URL printed by Vite (commonly `http://localhost:5173/` or `http://localhost:8080/`).
- Build for production:

```powershell
npm run build
npm run preview
```

## What this repo contains
- src/components — React components (Hero, Projects, Certifications, Footer, etc.)
- src/components/ui — Reusable UI primitives (Button, Card, Toast...)
- src/index.css — custom animations and global styles
- public/lovable-uploads — profile and favicon assets

## Features
- Framed hero image and contact links (email, LinkedIn, GitHub)
- Projects list with action buttons
- Sections: Education, Skills, Certifications, Achievements
- Light entrance animations (fade/slide/scale)

## Editing tips
- Contact links: `src/components/Hero.tsx` and `src/components/Footer.tsx` (email uses `mailto:`)
- Certifications: `src/components/Certifications.tsx` — currently rendered as a vertical list. Revert to paired or grid layout by editing the component markup.
- Button component: supports `asChild` (Radix Slot) so anchors can be styled as buttons without nesting interactive elements.

## Troubleshooting
- If you see a syntax error like "Expression expected" near JSX, open the file mentioned in the error and look for:
	- stray JSX outside a function/component return
	- duplicate exports or repeated component declarations
	- a missing comma or bracket in object literals used inside JSX
- Common fix: format the file and run `npm run dev` to get a fresh compile error with a stack trace.

## Quality gates
- Run the dev server (`npm run dev`) to surface TypeScript/JSX errors.
- Run `npm run build` before deploying to ensure production build succeeds.

## Optional improvements
- Add a GitHub Actions workflow to run `npm ci` and `npm run build` on push.
- Add `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` if you accept outside contributions.

## Contact
- Email: somiljain024@gmail.com
- LinkedIn: https://www.linkedin.com/in/somil-jain-a10b1729b/
- GitHub: https://github.com/Somil-Jain24

---

If you want, I can also add a CI workflow, a short CONTRIBUTING guide, or a commit hook that runs a quick TypeScript check. Tell me which and I will add it.

