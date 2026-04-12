# Every App Starter Package

**The reusable, production-ready foundation for any web, mobile, desktop, or full-stack project.**

Built for Schimke Studios and designed to be instantly customizable by any developer.  
Start with a clean mechanical structure, shared design tokens, and platform-specific folders — then build whatever you dream up.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](CHANGELOG.md)

---

## ✨ Why This Starter?

- **Truly multi-platform** — One shared core, four ready-to-extend environments
- **Mechanical-first design** — “Clean Room” CSS that separates structure from visuals
- **Slate Coal** design language included — dark-by-default, token-driven, instantly themeable
- **Production-ready out of the box** — folder conventions, reset, tokens, and scripts that scale

---

## 🗂 Folder Structure

```bash
.
├── docs/                  # Project notes, architecture decisions, and guides
├── scripts/               # Automation, build, and deployment utilities
├── src/
│   ├── desktop/           # Electron / Node.js environment
│   ├── mobile/            # Capacitor / mobile-web environment
│   ├── python/            # Backend services or CLI utilities
│   └── web/               # Primary browser interface (HTML/CSS/JS)
├── shared/                # Single source of truth — never duplicated
│   ├── assets/            # Design tokens, resets, themes
│   ├── config/            # Environment & app configuration
│   ├── constants/         # Global constants
│   ├── types/             # Shared TypeScript / JSDoc types
│   └── utils/             # Pure helper functions
├── tests/                 # Unit, integration, and E2E tests
└── README.md
```

## 🚀 Quick Start

1. Clone & rename

```
git clone https://github.com/Scymon/starter_app.git my-new-app
cd my-new-app
```

2. Update branding (one place only)
   Edit `shared/config/brand.json` (or the variables in `shared/assets/reset.css` if you prefer the old style).
3. Install & run

```
# Web (primary)
cd src/web && npm install && npm run dev

# Desktop
cd src/desktop && npm install && npm run electron

# Mobile
cd src/mobile && npm install && npm run capacitor:serve

# Python backend (if needed)
cd src/python && pip install -r requirements.txt && python main.py
```

Start building — all platforms already share the same shared/ assets and utils.

## 🎨 Design System — Slate Coal

We use a two-layer “Clean Room” approach:

shared/assets/reset.css — Mechanical Structure only (layout, grid math, mobile-first flex → desktop grid at 900px, typography weights).
shared/assets/darktheme.css — Pure visual layer that maps everything to CSS variables.

---

### Core Palette (already in the theme):

Background: #0b0d12
Accent: #d0d4de
Surface: #050608

## All colors are referenced via var(--color-\*) so you can swap themes in seconds.

## 🛠 Customization Guide

Replace branding in shared/config/.
Add platform-specific code only inside its src/ folder.
Extend the design system by adding new tokens to shared/assets/ — everything stays modular.
(Optional) Swap any folder for a modern framework (Next.js, Tauri, Flutter, etc.) — the shared/ core still works.

---

## 📋 What’s Included (Production-Ready)

Mobile-first responsive baseline
Dark theme with easy light-theme toggle
Shared utilities, types, and constants
Basic test setup ready
Git-friendly .gitignore and scripts folder

---

## 🤝 Contributing

We welcome improvements! See CONTRIBUTING.md for guidelines.

## 📄 License

## MIT — feel free to use this starter in commercial or personal projects.

SYS_STATUS: POLISHED & READY FOR FORK
Made with care at Schimke Studios ✝️☦️
