# Portfolio Website

A personal portfolio website built with Next.js, Tailwind CSS, and Prismic CMS.

## Features

- Modern UI with 3D geometric shapes and gradient backgrounds
- Responsive design that works on all devices
- Content management via Prismic CMS
- Interactive components with smooth animations
- Social media integration
- Blog section for sharing articles and thoughts
- Projects showcase with detailed information
- Slice Simulator for Prismic slice development

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom classes
- **CMS**: Prismic with custom types
- **Typography**: Urbanist (Google Font)
- **Icons**: React Icons
- **Deployment**: Vercel

## Getting Started

First, run the development server:

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

## Project Structure
```
├── .next/                # Next.js build output
├── customtypes/          # Prismic custom type definitions
│   ├── blog_post/        # Blog post type
│   ├── home_page/        # Home page type
│   ├── page/             # Generic page type
│   ├── project/          # Project type
│   └── settings/         # Site settings type
├── node_modules/         # Dependencies
├── public/               # Static assets
│   ├── sounds/           # Audio files
│   ├── file.svg          # SVG assets
│   ├── globe.svg
│   ├── next.svg
│   ├── noisetexture.jpg  # Texture overlay
│   ├── vercel.svg
│   └── window.svg
├── src/                  # Source code
│   ├── app/              # Next.js app router pages
│   │   ├── [uid]/        # Dynamic page routes
│   │   ├── api/          # API routes
│   │   │   ├── exit-preview/
│   │   │   ├── preview/ 
│   │   │   └── revalidate/
│   │   ├── blog/         # Blog section
│   │   │   └── [uid]/    # Dynamic blog post routes
│   │   ├── projects/     # Projects section
│   │   │   └── [uid]/    # Dynamic project routes
│   │   ├── slice-simulator/ # Prismic slice simulator
│   │   ├── globals.css   # Global CSS styles
│   │   ├── favicon.ico   # Site favicon
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Homepage component
│   ├── components/       # React components
│   │   ├── Bounded.tsx   # Bounded container component
│   │   ├── Button.tsx    # Button component
│   │   ├── ContentBody.tsx # Content wrapper
│   │   ├── Footer.tsx    # Site footer
│   │   ├── Header.tsx    # Site header
│   │   ├── Heading.tsx   # Heading component
│   │   └── NavBar.tsx    # Navigation bar
│   ├── slices/           # Prismic slice components
│   │   ├── Biography/    # Biography slice
│   │   ├── ContentIndex/ # Content index slice
│   │   ├── Hero/         # Hero section slice
│   │   ├── ImageBlock/   # Image block slice
│   │   ├── TechList/     # Technology list slice
│   │   ├── TextBlock/    # Text block slice
│   │   └── index.tsx     # Slices entry point
│   └── prismicio.ts      # Prismic configuration
├── .gitignore            # Git ignore rules
├── eslint.config.mjs     # ESLint configuration
├── next-config.js        # Next.js configuration
├── next-env.d.ts         # Next.js TypeScript declarations
├── package-lock.json     # Dependency lock file
├── package.json          # Project metadata and dependencies
├── postcss.config.mjs    # PostCSS configuration
└── slicemachine.config.js # Prismic Slice Machine configuration
└── tsconfig.json         # TypeScript configuration

```

## Prismic CMS Setup

1. Create a Prismic account at [prismic.io](https://prismic.io)
2. Create a new repository
3. Import the custom types from the `customtypes` folder
4. Connect your repository to this project using the Prismic client in `src/prismicio.ts`


## Prismic Slice Development

This project includes a slice simulator for developing and testing Prismic slices:

```bash
npm run slicemachine
# or
yarn slicemachine
```

This will start the Slice Machine UI at [http://localhost:9999](http://localhost:9999).

## Customization

- Modify the background gradient in `globals.css`
- Change the font by updating the import in `src/app/layout.tsx`
- Add or remove slices in the `src/slices` directory
- Customize the header and footer components
