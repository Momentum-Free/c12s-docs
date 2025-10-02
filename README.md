# C12s Docs Site

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## Astro Starter Kit (docs version): Starlight + Hono on Cloudflare Workers with Static Assets
See base repo [here](https://github.com/Momentum-Free/astro-template-for-hono-workers-assets).

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images and small videos can be added to `src/assets/` and embedded in Markdown with a relative link.

Static (_and unprocessed_) assets, like favicons, SVGs, etc., can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun i`             | Installs dependencies                            |
| `bun dev`             | Builds site & starts local wrangler server at `localhost:8787`      |
| `bun run hot`           | Starts local Astro dev server (without wrangler) with hot-reloading at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying (similar to `dev`)     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord community](https://astro.build/chat).
