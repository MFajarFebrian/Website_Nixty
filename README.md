# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment

This project is set up to automatically deploy to GitHub Pages whenever changes are pushed to the master branch.

### Manual Deployment

You can also manually deploy the site using:

```bash
# Generate static files
npm run generate

# Deploy to GitHub Pages
npm run deploy
```

### Continuous Deployment

The project uses GitHub Actions for continuous deployment. When you push to the master branch, the workflow will:
1. Build the application
2. Deploy it to GitHub Pages

You can see the deployment workflow in `.github/workflows/deploy.yml`.
