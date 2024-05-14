<div>
  <img alt="Vercel" src="https://deploy-badge.vercel.app?url=https://ebuy.au.auth0.com&logo=vercel&name=vercel" />
  <img alt="CodeQL Analysis" src="https://github.com/ezralazuardy/ebuy/actions/workflows/github-code-scanning/codeql/badge.svg" />
  <img alt="License" src="https://img.shields.io/github/license/ezralazuardy/ebuy" />
</div>

## 🛒 ebuy

A Dummy App for E-Commerce Workflow.

🔗 https://ebuy.vercel.app

<br/>

<img width="1440" alt="ebuy" src="https://github.com/ezralazuardy/ebuy/assets/24422019/a7e0bc79-5cb0-49f7-b3a8-c16428d3f00c" />

> The demo uses [Clerk](https://clerk.com) for the authentication, it should be safe enough to be used.

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

### 🗂️ libraries

This project is using the following libraries:

- [x] [clerk](https://clerk.com) for authentication
- [x] [stripe](https://stripe.com) for payment gateway
- [x] [use-shopping-cart](https://useshoppingcart.com) for stripe wrapper
- [x] [jotai](https://jotai.org) for state management
- [x] [shadcn/ui](https://ui.shadcn.com) for UI component
- [x] [drizzle](https://orm.drizzle.team) for typescript ORM
- [x] [inversivy](https://inversify.io) for typescript IoC

> Written in [Typescript](https://typescriptlang.org) using [Next](https://nextjs.org) and [Bun](https://bun.sh). Powered by [Vercel](https://vercel.com) and [Clerk](https://clerk.com).
