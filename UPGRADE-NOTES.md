# Portfolio upgrade — 12 November 2026

## Files changed

- `index.html`: resume-led content, section order, balanced featured projects, certifications and accessible navigation.
- `projects.html`: retained the four existing archive projects, restored older attendance/OCR information, expanded implementation details and aligned navigation/footer patterns.
- `styles.css`: removed an obsolete forced card background and 106 byte-identical top-level rule blocks, keeping each final occurrence in its original cascade position.
- `polish.css` (new): shared reading scale, spacing, card layouts, responsive fixes and visible-by-default content. Loads after the original stylesheet; theme colors now come from the shared emerald palette in `styles.css`.
- `script.js`: shared menu controls, keyboard focus handling, section tracking, scroll progress, progressive reveal and motion preferences.
- `README.md`: local preview instructions, file responsibilities and content-maintenance guidance.

The resume PDF already had local changes before this work; it was read and preserved without modification. `projects.html` was already untracked during the original upgrade. The original upgrade was local-only; the final-polish task authorizes committing and pushing the intended portfolio files, including the unchanged latest resume PDF. No dependencies were added.

## Content and structure

The homepage now follows Hero → About → Experience → Featured Projects → Hackathons & Innovation → Technical Skills → Education → Certifications & Learning → Beyond Engineering → Contact. All original section IDs remain available. Desktop, mobile and section-rail labels follow the same sequence, numbered 00–09.

- Hero: AI/ML, Generative AI and Agentic Systems positioning; concise introduction including Nokia. Replaced the stale 15K+ corpus statistic with the resume-supported 169 CyberShield tests. Profile artwork, social links and resume actions remain.
- Nokia: Student Intern, August 2025–July 2026; approximately 90% validation-time reduction, 500+ pages across hundreds of documents in under 60 seconds, 3+ R&D/QA teams, Git/Agile collaboration and the full supplied automation stack.
- CyberShield AI: 30+ REST APIs; BM25 + FAISS, RRF and MMR; approximately 85% Recall@5 and 0.6287 MRR in a retrieval group; 87.5% accuracy and 100% precision in a separate URL-risk-triage group; 169 tests. Source and existing live demo retained. No outdated detection/retrieval/triage claims were introduced.
- Better Call Kanoon: 1.8K+ legal chunks, 7+ Indian laws, 90%+ retrieval accuracy over 30+ queries, English/Hindi voice, citations and guardrails. Telephony is explicitly planned. The PDF's 80% reduction in unsupported responses is explicitly a target, not a measured outcome.
- SideQuest AI: latest mobile-first exploration, Groq/Python mission pipeline, fallback handling and XP details; repository, vision-verification approach and source-documented Render demo retained. Earlier implementation status is distinguished from the latest resume description.
- Buy or Wait: 250+ requests, 25K+ events, 90-day forecasting, constraint reasoning, 16+ documents, reconciliation, payment-plan validation and 250+ compliant decisions; existing evidence-extraction details retained.
- Technical skills: all five requested categories; relevant original technologies preserved without proficiency percentages.
- Education: college, degree, 9.43 CGPA, graduation 2026 and Bengaluru, Karnataka.
- Learning: Claude Code 101, HackerRank Python, Microsoft/EY AI Skills Passport, NPTEL, IBM SkillsBuild and the existing Kaushalya MLOps workshop.
- Beyond Engineering: all four existing speedsolving, wrestling, powerlifting and scouting achievements retained.

All six original project titles remain across the homepage and archive. AI Job Application Copilot retains its five-agent LangGraph workflow, FAISS/BM25, XGBoost, FastAPI/React/PostgreSQL/Docker/AWS context, 92% retrieval, 88% matching and under-two-second response metric. Those original metrics were preserved, not independently re-evaluated.

Tracked Git history contained an earlier attendance implementation using OpenCV, DeepFace and Tesseract OCR, with 95% face recognition, 98% OCR accuracy and 80% fewer manual errors. This was restored as the primary attendance presentation. The local archive's Flutter/TensorFlow Lite/Firebase, liveness, offline sync and dashboard description remains in expandable historical notes; its liveness metric is clearly separate from OCR accuracy. No attendance repository URL was supplied, so none was invented.

Every original anchor-link destination remains represented across the two pages. The earlier archive's secondary email and LinkedIn URLs are retained in an explicitly labeled historical disclosure; main contact actions use the resume/homepage details.

## Design and interaction changes

Shared section widths, clearer headings, larger reading text, consistent card padding and wrapping tags improve scanning. Featured cards share structure and equal heights when displayed side by side. Native expandable details preserve technical depth. Certificates use consistent 155px previews with `object-fit: contain`; the original Claude image opens at full size. Existing placeholder SVGs remain labeled as placeholders.

Both pages use a real mobile-menu button with expanded state, Escape handling, focus return, focus containment, close-on-link behavior and resize reset. Closed menus are inert. Active section links expose `aria-current`. A skip link reaches the main content. Reveal effects enhance visible-by-default content, so JavaScript failure and reduced-motion preferences do not conceal sections. Existing hover, background, pointer and scroll effects remain available.

Fixed a missing hero wrapper closing tag, overflowing hero decoration, tablet menu breakpoint, narrow footer overflow, duplicate/fractional section numbers and incorrect decorative technology icons. No project or credential image was replaced with generated artwork.

## Verification performed

- Inspected both HTML documents, all JavaScript, the original CSS/media queries, local images/SVGs and the complete resume PDF before implementation; consulted tracked history for older attendance content.
- Parsed both final HTML documents: one H1 per page, unique IDs, all local files and all same-page/cross-page anchor targets resolve.
- Compared original and final project titles, achievement-card counts and link destinations; all retained. Checked local image dimensions and PDF readability. Resume SHA-256 stayed `84f93e957d194a2c0a5843a1d8ef0f989606e0a9657ea250c92cdeb6b9b061fd`.
- Ran `node --check script.js` and `git diff --check` successfully. The repository has no package manifest, build command or existing automated test suite.
- Tested both pages in headless Chrome at 1920, 1440, 1366, 1024, 768, 390 and 320 pixels: 14 page/viewport combinations, with no page overflow, content overflow, broken loaded images or JavaScript exceptions.
- Checked menu opening, initial focus, Escape/focus return, Tab containment and closing on a navigation link on both pages at 1024px and 390px.
- Checked expanded project details at 390px, certificate sizing/containment, resume download markup, reduced-motion visibility and content visibility with JavaScript disabled.
- Reviewed screenshots of both pages at desktop/mobile sizes and all homepage sections at desktop size, including the mobile menu.
- Reviewed the final Git diff and separately inspected the untracked archive and new stylesheet. Temporary verification scripts are not part of the final project.

### External links

Read-only HTTP checks returned **200** for all five project repositories (CyberShield AI, Better Call Kanoon, AI Job Application Copilot, Buy or Wait and SideQuest AI), the GitHub profile, both live-demo URLs, the Claude personal verification URL, NPTEL/IBM/HackerRank/EY issuer pages, the Google Fonts stylesheet and every remaining Simple Icons image URL. GitHub connector metadata also confirmed all five repositories exist.

Current LinkedIn returned **429** and LeetCode returned **403**, so automated verification of these profiles is inconclusive; their existing links remain. The earlier LinkedIn URL returned 200 but remains labeled historical. Google Fonts preconnect origins return 404 when fetched as documents; they are connection hints, and the actual font stylesheet returned 200.

A successful page response confirms reachability only. Project application workflows and the project-level evaluation claims were not re-tested. Email delivery, telephone calling and credential ownership were not independently verified.

## Items that still need owner input

1. Supply personal credential previews/verification links for HackerRank, Microsoft/EY, NPTEL and IBM SkillsBuild. Issuer websites are labeled as issuer links, never personal verification.
2. Confirm whether SideQuest's README should be updated to describe the latest Groq pipeline. Its currently accessible README documents an earlier OpenRouter provider and explicitly unverified live inference/vision accuracy. The portfolio prioritizes the latest brief and keeps this source difference visible in implementation notes.
3. Confirm or retire the historical contact URLs and attendance mobile-variant metrics when convenient. They were preserved rather than silently discarded.
4. Manually check LinkedIn and LeetCode in a normal signed-in browser if needed; automated requests were limited by their servers.

## Final emerald-theme pass — 12 November 2026

The local `main` branch and `origin/main` were both at `717ba66` after a fresh fetch. The existing remote is `https://github.com/MoAftab-01/portfolio.git`. The working changes were the expected portfolio upgrade and pre-existing resume PDF; no unrelated work was found.

Restored the original Git-history emerald primary accent (`#00d99a`), keeping `#d6ff68` for headline, statistic and selected credential highlights. Consolidated the palette into one color-token block in `styles.css`, removed the conflicting lime accent from `polish.css`, replaced repeated emerald/lime RGB channels with shared variables and changed forced neutral glass backgrounds to shared dark green glass surfaces. Borders, hover surfaces, focus rings, buttons, navigation and rail now use the same palette on both pages. Existing layout, type scale, animation geometry and JavaScript remain unchanged.

Content and link comparisons against the pre-polish files passed byte-for-byte for both HTML bodies and all anchor destinations. JavaScript is unchanged; all six projects, ten homepage sections, historical notes, four extracurricular cards and local assets remain. The pre-existing latest resume PDF keeps its recorded SHA-256 and is included unchanged in the intended portfolio commit so the published download stays current.

Final validation executed:

- `node --check script.js` and `git diff --check` passed. There is no existing build command or package-managed test suite.
- Both pages passed Chrome checks at 1920, 1440, 1366, 1024, 768, 390 and 320px, with no page/content overflow or browser exceptions. Computed styles confirmed emerald primary accents, lime highlights and dark green surfaces/emerald borders on every glass card.
- Keyboard menu checks passed on both pages at 1024 and 390px: opening, initial focus, Tab containment, Escape/focus return, inert closed state and closing on a link. Reduced-motion and JavaScript-disabled content visibility passed.
- Expanded details, certificate containment, the resume action, project navigation, local files, unique IDs and anchors passed. Desktop/mobile screenshots were inspected.
- Fresh HTTP checks returned 200 for all project repositories, both live demos, the Claude credential, all remaining icon URLs, NPTEL, IBM SkillsBuild and EY. The fresh run received 403 from LeetCode and HackerRank and 999 from current LinkedIn; these are automated-access limitations, not proof of a broken link. Existing destinations were preserved.

The authorized commit message is `Finalize portfolio upgrade and restore emerald theme`. Only the seven named portfolio source/documentation files and the unchanged updated resume PDF are intended for staging. Temporary QA files, caches, logs and browser profiles are excluded. Git push and production-deployment confirmation are reported separately after publication; no domain or Vercel settings are changed.

## Uniform green accents — 13 November 2026

The owner requested removal of the remaining yellow-lime highlights shown in the hero screenshot. All stylesheet uses of the separate lime palette now use the existing emerald accent/RGB tokens, including headlines, statistics, credential text, metric panels, button glow and hover states. Removed the unused lime tokens and advanced both pages' stylesheet versions to refresh cached styles. The two generated certificate placeholder SVGs also use emerald instead of lime; genuine certificate artwork remains unchanged. Content, layout, JavaScript and the resume PDF are unchanged. Earlier references to lime highlights above describe the previous version and are superseded by this correction.
