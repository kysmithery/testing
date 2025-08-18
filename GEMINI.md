# GEMINI.md: AI Collaboration Guide

This document provides essential context for AI models interacting with this project. Adhering to these guidelines will ensure consistency and maintain code quality.

## 1. Project Overview & Purpose

- **Primary Goal:**  
  This project provides an example Next.js app integrated with the Sentry SDK to catch and report errors as well as monitor performance on both the front end and back end. It demonstrates how to configure Sentry with a Next.js project, including error handling, performance monitoring, and deployment integration.

- **Business Domain:**  
  Developer tools / observability and monitoring.

## 2. Core Technologies & Stack

- **Languages:**  
  JavaScript (Next.js framework)

- **Frameworks & Runtimes:**  
  Next.js (React-based framework for server-side rendered React applications)

- **Databases:**  
  No databases are configured or implied in this example.

- **Key Libraries/Dependencies:**  
  - `@sentry/nextjs` — official Sentry SDK for Next.js to handle error reporting and performance monitoring  
  - `next` — React framework

- **Package Manager(s):**  
  npm or Yarn (example commands use both)

## 3. Architectural Patterns

- **Overall Architecture:**  
  Monolithic server-side rendered React application architecture using Next.js. The app integrates closely with Sentry for telemetry.

- **Directory Structure Philosophy:**  
  - `sentry.server.config.js` and `sentry.client.config.js`: Configuration and initialization of Sentry SDK for server-side and client-side respectively.  
  - `next.config.js`: Configures the Next.js app and automates Sentry integration with source map uploading.  
  - `_error.js`: Custom error handling page used by Next.js to catch exceptions and forward them to Sentry.  
  - Typical Next.js project structure is implied with the above Sentry customization files supplementing it.  
  
## 4. Coding Conventions & Style Guide

- **Formatting:**  
  No explicit linter or style guide files are shown but conventions likely follow JavaScript/TypeScript norms used in Next.js projects.

- **Naming Conventions:**  
  - Files: lowercase with dots (e.g., `_error.js`)  
  - Variables and functions follow camelCase style.

- **API Design:**  
  This project example does not expose a public API; it shows frontend/backend error handling with Next.js.

- **Error Handling:**  
  Sentry’s SDK captures errors globally via `_error.js`. Error monitoring and performance tracing are integrated via the official SDK.

## 5. Key Files & Entrypoints

- **Main Entrypoint(s):**  
  The Next.js standard entrypoint is used (such as `pages/index.js`), with `_error.js` customized for error reporting.

- **Configuration:**  
  - `sentry.server.config.js` (server SDK config)  
  - `sentry.client.config.js` (client SDK config)  
  - `next.config.js` (Next.js configuration including Sentry Webpack plugin)  
  - `.sentryclirc` (Sentry CLI config likely created by wizard for auth token)

- **CI/CD Pipeline:**  
  No specific CI/CD files found in this example repo. Instructions exist for deploying on Vercel with Sentry integration.

## 6. Development & Testing Workflow

- **Local Development Environment:**  
  Create and run Next.js app using standard commands like `npx create-next-app`. Configure Sentry SDK via `sentry-wizard` tool. Local builds upload source maps to Sentry.

- **Testing:**  
  No explicit test framework or tests included in this example.

- **CI/CD Process:**  
  Deployment to Vercel is suggested, with environment variable `SENTRY_AUTH_TOKEN` required for source map upload during builds.

## 7. Specific Instructions for AI Collaboration

- **Contribution Guidelines:**  
  None indicated explicitly in the example repository.

- **Infrastructure (IaC):**  
  No Infrastructure as Code files included.

- **Security:**  
  Be mindful to not expose the Sentry authentication token publicly. Use environment variables for secrets.

- **Dependencies:**  
  Add dependencies with `npm` or `yarn`. Sentry SDK is central to this project.

- **Commit Messages:**  
  No commit guidelines specified in the repository or example.

---

This GEMINI.md context provides a comprehensive overview of this Next.js example project integrated with Sentry for error monitoring and performance tracking. Its primary purpose is to help any AI collaborator understand the project scope, design system integration, and structure before contributing or generating code.

---
