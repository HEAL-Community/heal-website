# HEAL

Healthcare Education and Awareness Lab (HEAL)

> Building Healthier Communities Through Communication.

## About

HEAL is a healthcare education and awareness institution focused on advancing health communication through health education, health journalism, healthcare documentation, digital health, and community engagement.

This repository contains the source code and technical documentation for the official HEAL digital platform.

## Objectives

The HEAL digital platform is designed to:

1. Establish HEAL's official institutional presence online.
2. Communicate HEAL's mission, vision, departments, projects, and institutional work.
3. Publish and organize health, research, and educational knowledge.
4. Support community engagement, partnerships, volunteering, and communication.
5. Provide a scalable digital foundation for HEAL's future programs and services.

## Technology Stack

### Core

- Next.js
- TypeScript
- React
- Tailwind CSS
- shadcn/ui
- npm

### Monorepository

- npm Workspaces

### Content & Data

- Sanity — Content Management System
- Neon PostgreSQL — Operational Database
- Drizzle — Database ORM

### Communication

- SendByte — Email API, notifications, and newsletter infrastructure

### Engineering & Infrastructure

- GitHub — Source Control
- GitHub Actions — CI/CD
- Vercel — Application Deployment
- Cloudflare — DNS and Edge Infrastructure

### Documentation

- Markdown / MDX
- Docs-as-Code
- Git-based version control

> Turborepo is intentionally deferred from Version 1.0.

## Repository Structure

```text
heal/
├── apps/
│   ├── web/          # HEAL website
│   └── studio/       # Sanity Studio
│
├── packages/
│   ├── ui/           # Shared UI components
│   ├── database/     # Database and Drizzle integration
│   ├── email/        # SendByte integration
│   ├── validation/   # Shared validation schemas
│   └── config/       # Shared configuration
│
├── docs/             # HEAL documentation
├── scripts/          # Development and maintenance scripts
├── .github/          # GitHub workflows and configuration
│
├── package.json
└── package-lock.json

## Project Stewardship

The HEAL digital platform is built, architected, and managed solely by **AbdulRaheem Olurode**, Founder and Technical Lead of HEAL.

The project is developed as an institutionally owned platform, with its architecture, documentation, engineering decisions, and technical direction maintained under HEAL's governance.
---
