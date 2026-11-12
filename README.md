# Mohammed Aftab Ahamed — Portfolio Draft

Responsive AI/ML engineering portfolio built with plain HTML, CSS and JavaScript. The homepage prioritizes the latest resume; `projects.html` preserves the wider project archive. The Emerald AI glass theme, profile image and original visual effects are retained. No build step or dependencies are required.

## Run locally

Open `index.html` directly in a browser, use VS Code Live Server, or run:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173/`.

## Edit

- Homepage and featured projects: `index.html`
- Additional projects and historical implementation notes: `projects.html`
- Original design and effects: `styles.css`
- Shared emerald palette and dark green glass colors: the single `:root` block in `styles.css`; `--accent` is emerald and `--lime` is the highlight color.
- Shared layout, reading scale and responsive refinements: `polish.css` (loaded last)
- Navigation, scroll progress, reveal and pointer effects: `script.js`
- Profile background: `assets/profile-bg.png`
- Resume download: `assets/Mohammed-Aftab-Resume.pdf`
- Content preservation, verification results and outstanding credentials: `UPGRADE-NOTES.md`

Keep the navigation links in both HTML files aligned when adding sections. Certificate issuer links are labeled separately from personal verification links. Preserve the distinction between retrieval evaluation and URL risk triage metrics.

## Deploy free with GitHub Pages

1. Create a GitHub repository, e.g. `portfolio`.
2. Put all files from this folder in the repository root.
3. Push to the `main` branch.
4. In GitHub: **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose **main** and **/ (root)**, then **Save**.
7. GitHub will publish the site at `https://<username>.github.io/portfolio/`.

## Before putting it on your resume

The portfolio uses the local resume PDF and the supplied upgrade brief as its content sources. Personal credential previews and verification links are still needed for HackerRank, Microsoft/EY, NPTEL and IBM SkillsBuild. Existing placeholder artwork is clearly labeled. See `UPGRADE-NOTES.md` for the remaining source differences and verification limits.
