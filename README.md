# AI Engineering Workflow & Agent Runtime Guide

Static multilingual documentation site for comparing AI engineering workflow frameworks and agent harness/runtime tools: AI-DLC, Spec-Driven Development, GitHub Spec Kit, OpenSpec, AWS AI-DLC Workflows, GSD / Get Shit Done, Superpowers, Hermes Agent, and related coding agent CLIs.

Live site: <https://anhtnt90dev.github.io/framework-compare/>

## Local development

```bash
npm install
npm run docs:dev
```

Open the local URL printed by VitePress. The English site is under `/en/`; the Vietnamese site is under `/vi/`.

## Build

```bash
npm run docs:build
```

The static output is generated at `docs/.vitepress/dist`.

## GitHub Pages

This repository includes `.github/workflows/deploy.yml`. After pushing to GitHub:

1. Go to **Settings -> Pages**.
2. Set **Build and deployment** to **GitHub Actions**.
3. Push to `main`.

The workflow sets `BASE_PATH` to `/${{ github.event.repository.name }}/`, so it works for project pages such as `https://<owner>.github.io/<repo>/`.

For a custom domain or organization root site, set `BASE_PATH=/` in the workflow.
