# VNDO Atlas

> **A quiet editorial atlas for places, architecture and the details that remain after a journey.**

VNDO Atlas is an interactive travel editorial experience built around a parchment-paper collage system. It combines asymmetric composition, Cormorant Garamond typography, marginal notes and destination-led storytelling across 13 countries in Asia.

The project is intentionally small and focused: one expressive landing page, one central destination data contract and one synchronized interaction model. When a visitor changes destination, the hero image, title, description, caption, marker and navigation context all change from the same active record.

**Repository:** [github.com/vietdoo/vndo-atlas](https://github.com/vietdoo/vndo-atlas)

## Highlights

| Area | What is included |
| --- | --- |
| Editorial interface | Parchment palette, asymmetrical layout, collage imagery and paper-like motion |
| Destination experience | 13 destinations with synchronized hero and card states |
| Default destination | Việt Nam is the first and default destination |
| Content language | Vietnamese UI copy with Vietnamese-capable typography fallback |
| Brand system | VNDO Atlas wordmark, SVG mark and editorial visual tokens |
| Asset strategy | Optimized WebP destination images and SVG favicon committed to the repository |
| Deployment | Vite production build with ready-to-use Vercel configuration |
| Accessibility | Semantic controls, keyboard destination navigation, dialog semantics and visible interaction states |

## Destinations

The current editorial set includes:

**Việt Nam, Trung Quốc, Nhật Bản, Thái Lan, Hàn Quốc, Campuchia, Lào, Indonesia, Malaysia, Singapore, Ấn Độ, Sri Lanka and Nepal.**

The visible interface remains Vietnamese by design. English documentation is provided for maintainers, contributors and deployment workflows.

## Technology

| Layer | Technology |
| --- | --- |
| UI | React 19 and TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 with a custom editorial CSS system |
| Routing | Wouter with a single primary route |
| Typography | Cormorant Garamond, Noto Serif and JetBrains Mono |
| Iconography | lucide-react and the VNDO Atlas SVG mark |
| Runtime | Node.js 20+ |
| Package manager | pnpm 10.4.1 |
| Hosting targets | Vercel, Manus WebDev static hosting or another Vite-compatible host |

## Requirements

Install the following before starting development:

| Requirement | Recommended version |
| --- | --- |
| Node.js | 20 or newer; Node.js 22 is recommended |
| pnpm | 10.4.1, defined by `package.json` |
| Git | Any current release |

Verify the installed versions:

```bash
node --version
pnpm --version
git --version
```

If pnpm is not installed, install the repository-compatible major version:

```bash
npm install --global pnpm@10.4.1
```

## Local development

Clone the repository and install dependencies:

```bash
git clone https://github.com/vietdoo/vndo-atlas.git
cd vndo-atlas
pnpm install
```

Start the Vite development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is already occupied, Vite will select the next available port and print the correct URL in the terminal.

The development server supports hot module replacement. The most frequently edited files are:

```text
client/src/data/destinations.ts   Destination content and image paths
client/src/pages/Home.tsx         Page structure and interaction state
client/src/index.css              Design tokens and visual system
client/index.html                 Metadata, fonts and favicon
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `pnpm run dev` | Start the Vite development server on port 3000 |
| `pnpm run check` | Run TypeScript validation without emitting files |
| `pnpm run build` | Build the Vite frontend and the local Node production bundle |
| `pnpm run preview` | Serve the generated Vite output locally |
| `pnpm run start` | Start the generated Node production server after `pnpm run build` |
| `pnpm run format` | Format project files with Prettier |

Run the standard verification sequence before opening a pull request:

```bash
pnpm run check
pnpm run build
git diff --check
```

To inspect the Vite production output locally:

```bash
pnpm run build
pnpm run preview
```

To run the bundled Node server instead:

```bash
pnpm run build
pnpm run start
```

The Node server serves `dist/public` and provides the local production runtime. Vercel uses the Vite output directory configured in `vercel.json`.

## Project structure

```text
vndo-atlas/
├── client/
│   ├── index.html                  # Document metadata, fonts and favicon
│   ├── public/
│   │   └── assets/                 # Repository-local WebP images and SVG mark
│   └── src/
│       ├── data/destinations.ts    # Typed content contract for 13 destinations
│       ├── pages/Home.tsx           # Editorial page and synchronized state
│       ├── components/             # Shared components and shadcn/ui primitives
│       ├── hooks/                  # Reusable React hooks
│       ├── App.tsx                 # Theme provider and route entry
│       └── index.css               # Design tokens and visual system
├── server/index.ts                 # Local Node production server
├── shared/                         # Compatibility types from the template
├── vercel.json                     # Vercel framework, build and output settings
├── package.json                    # Scripts, dependencies and package metadata
├── pnpm-lock.yaml                  # Reproducible dependency lockfile
└── README.md
```

## Content and destination data

All destination content is centralized in `client/src/data/destinations.ts`. Each record follows the same contract:

```ts
type Destination = {
  name: string;
  country: string;
  phonetic: string;
  title: string;
  description: string;
  aside: string;
  image: string;
  marker: string;
};
```

Keep the destination contract as the single source of truth. Do not create separate React state values for the title, image, caption or description. `Home.tsx` derives the active and adjacent destinations from one `activeIndex`, which prevents mixed-country content during navigation.

When adding a destination, update the data contract first, then verify the following states on desktop and mobile:

1. The hero image and architectural alt text.
2. The title, phonetic label, aside and description.
3. The previous and next destination controls.
4. The hero caption and destination index.
5. The destination list card and selected state.

## Repository-local assets

All runtime images are stored directly in `client/public/assets` so the project can be cloned and deployed without a Manus Storage route or external image hotlink.

| Asset type | Location | Runtime path |
| --- | --- | --- |
| Destination collages | `client/public/assets/*.webp` | `/assets/<filename>.webp` |
| VNDO Atlas mark | `client/public/assets/vndo-atlas-mark.svg` | `/assets/vndo-atlas-mark.svg` |

The current asset set is optimized for this editorial experience and is approximately 4.8 MB in the source repository. Vite copies it into `dist/public/assets` during production builds. If the collection grows substantially, consider moving large media to a dedicated CDN, object storage provider or image service while keeping the data contract unchanged.

The Vite configuration explicitly sets `publicDir` to `client/public`, ensuring that repository-local assets are served consistently in both development and production preview.

## Environment variables

The core interface does not require an API key. Destination navigation, content rendering and repository-local assets work without additional configuration.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_ANALYTICS_ENDPOINT` | Optional | Umami-compatible analytics endpoint used by the document script |
| `VITE_ANALYTICS_WEBSITE_ID` | Optional | Analytics website identifier |
| `BUILT_IN_FORGE_API_URL` | Not required on Vercel | Manus runtime integration variable; not needed for repository-local assets |
| `BUILT_IN_FORGE_API_KEY` | Not required on Vercel | Manus runtime secret; never commit a real value |

For Vercel, configure optional variables under **Project Settings → Environment Variables**. Do not add secrets to `.env` files that are committed to Git. If analytics is not required, remove or conditionally disable the analytics script in `client/index.html` rather than deploying unresolved placeholder values.

## Deploy to Vercel with GitHub

The repository includes the following Vercel configuration:

```json
{
  "framework": "vite",
  "installCommand": "pnpm install --frozen-lockfile",
  "buildCommand": "pnpm run build",
  "outputDirectory": "dist/public"
}
```

Deploy through the Vercel dashboard:

1. Open [Vercel New Project](https://vercel.com/new).
2. Import `vietdoo/vndo-atlas` from GitHub.
3. Keep the repository root as the project root.
4. Select the Vite framework preset.
5. Confirm the install command, build command and output directory match the configuration above.
6. Add analytics environment variables only if analytics is enabled.
7. Select **Deploy**.

After Git integration is enabled, new commits pushed to `main` can trigger automatic deployments. Because all runtime images and the favicon are committed under `client/public/assets`, the Vercel deployment does not depend on `/manus-storage/...` routes.

## Deploy to Vercel with the CLI

Install and authenticate the Vercel CLI:

```bash
npm install --global vercel
vercel login
```

From the repository root, create a preview deployment:

```bash
vercel
```

After reviewing the preview, deploy to production:

```bash
vercel --prod
```

When prompted, select the existing Vercel project or create a new one. Keep the repository root, `pnpm run build` as the build command and `dist/public` as the output directory.

## Git workflow

Create a focused branch for each change:

```bash
git checkout -b feature/describe-the-change
```

Validate, review and commit the change:

```bash
pnpm run check
pnpm run build
git diff --check
git add .
git commit -m "Describe the change"
git push -u origin feature/describe-the-change
```

Open a pull request against `main` and include a short description of the visual or content change. For destination updates, include desktop and mobile verification notes.

## Design principles

The interface follows a contemporary editorial collage direction:

* **Material:** warm parchment, ink brown, jade and cinnabar accents.
* **Composition:** asymmetric placement, margin notes and deliberate negative space rather than a conventional centered grid.
* **Typography:** Cormorant Garamond carries the travel writing; Noto Serif preserves Vietnamese readability; JetBrains Mono handles utility labels and coordinates.
* **Motion:** interactions should feel like paper ephemera moving across a page, with restrained transitions and reduced-motion support.
* **Voice:** copy should be observant, specific and unhurried. Avoid generic tourism language and maintain the tone of a field note.

When editing the interface, ask whether a change reinforces or dilutes this design philosophy.

## Accessibility and quality expectations

Preserve semantic buttons and links, visible focus states, descriptive image alt text, keyboard navigation and dialog semantics. Keep `lang="vi"` on the document and retain the Vietnamese-capable font fallback.

Before merging a UI change, verify:

```text
[ ] TypeScript check passes
[ ] Production build passes
[ ] No external runtime image paths were introduced accidentally
[ ] Destination state remains synchronized
[ ] Desktop and mobile layouts remain readable
[ ] Keyboard and reduced-motion behavior remain usable
```

## License

The project is published under the MIT License as declared in `package.json`. Review the license and provenance of any new third-party image, font or media asset before adding it to the repository.

## References

1. [Vite — Static deployment guide][1]
2. [Vercel — Vite deployment documentation][2]
3. [pnpm — Installation guide][3]
4. [Node.js — Downloads][4]

[1]: https://vite.dev/guide/static-deploy.html "Vite static deployment guide"
[2]: https://vercel.com/docs/frameworks/frontend/vite "Vercel Vite deployment documentation"
[3]: https://pnpm.io/installation "pnpm installation guide"
[4]: https://nodejs.org/en/download "Node.js downloads"
