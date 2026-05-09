
## ALX Listing App

The ALX Listing App project aims to scaffold and lay the foundational structure for a modern Airbnb clone. This  milestone focuses on setting up a well-organized and scalable codebase using Next.js, TypeScript, TailwindCSS, and ESLint. By establishing a clean folder structure, reusable components, and adhering to best practices, the project ensures a solid starting point for building a dynamic, responsive, and user-friendly property listing page.

<h3>Project Structure </h3>

```
🌈 ALX-LISTING-APP/
│
├── 📁 components/
|    ├──🗃️common/
|        └──📄Button.tsx
         └──📄Card.tsx                # Reusable React components
├── 📁 constants/                 # Application constants & config
│   └── 📄 index.ts               # Barrel file for constants
├── 📁 interfaces/                # TypeScript type definitions
│   └── 📄 index.ts               # Barrel file for interfaces
├── 📁 node_modules/              # Project dependencies (auto-generated)
│
├── 📁 pages/                     # Next.js pages directory
│   ├── 🗃️ api/                   # API routes
│   ├── 📄 _document.tsx          # Custom Document component
│   └── 📄 index.tsx              # Home page
│
├── 📁 public/                    # Static assets
|   └──🗃️assets/                  # Contains all static files that are served directly without processing by webpack(images, fonts, icons, and other binary files).
├── 📁 styles/                    # Global styles
│   └── 📄 globals.css            # Global CSS styles
│
├── 📄 .gitignore                 # Git ignore rules
├── 📄 eslint.config.mjs          # ESLint configuration
├── 📄 next-env.d.ts              # Next.js TypeScript definitions
├── 📄 next.config.ts             # Next.js configuration
├── 📄 package-lock.json          # Dependency lock file
├── 📄 package.json               # Project dependencies & scripts
├── 📄 postcss.config.mjs         # PostCSS configuration
├── 📄 README.md                  # Project documentation (you are here!)
└── 📄 tsconfig.json              # TypeScript configuration
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, by writing one of the following into your terminal.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
