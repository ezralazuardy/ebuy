<div>
  <img alt="Vercel" src="https://deploy-badge.vercel.app?url=https://ebuy.au.auth0.com&logo=vercel&name=vercel" />
  <img alt="CodeQL Analysis" src="https://github.com/ezralazuardy/ebuy/actions/workflows/github-code-scanning/codeql/badge.svg" />
  <img alt="License" src="https://img.shields.io/github/license/ezralazuardy/ebuy" />
</div>

## 🛒 ebuy

A Dummy App for E-Commerce Workflow.

### 🚀 quickstart

Please setup your own `.env.local` based on `.env.example` before running the project.

```bash
# install dependencies
bun install

# pull environment variables from vercel
vercel env pull .env.local

# run the project
bun dev
```

### ☁️ services

This project is using the following services:

- [x] [Clerk](https://clerk.com) for Authentication
- [x] [Vercel](https://vercel.com) for Hosting and Storage (Postgres)
- [x] [Bun](https://bun.sh) for Development

> Written in [Typescript](https://typescriptlang.org) using [Next](https://nextjs.org) and [Bun](https://bun.sh). Powered by [Vercel](https://vercel.com) and [Clerk](https://clerk.com).
