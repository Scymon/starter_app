# Starter App Template

This app is the base app for Schimke Studios designed apps. It functions as the starting base for app ideas and a way to build on a working structure that can help other apps.

# STARTER_APP // Schimke Studios Base Template

The foundational container for multi-platform application development. This repository serves as the baseline for all projects, utilizing a formalized, mechanical design language titled **Slate Coal**.

---

## 🛠 Project Onboarding: State of Play

To replicate the current architecture, follow this sequence to establish the filesystem, design tokens, and structural reset.

### 1. Filesystem Initialization

The project utilizes a multi-environment directory tree to separate logic by platform while maintaining a shared core for assets and utilities.

**Directory Mapping:**

- `docs/`: Project notes and documentation.
- `scripts/`: Automation and build utilities.
- `src/`: Platform-specific logic.
  - `desktop/`: Electron/Node.js environment.
  - `mobile/`: Capacitor/Mobile-web environment.
  - `python/`: Backend or utility logic.
  - `web/`: The primary browser interface.
- `shared/`: The single source of truth for the system.
  - `assets/`: Design tokens, resets, and themes.
  - `config/`, `constants/`, `types/`, `utils/`: Global logic shared across platforms.
- `tests/`: Quality assurance and validation.

### 2. The Structural Reset (`shared/assets/reset.css`)

We use a "Clean Room" approach to CSS. The `reset.css` defines the **Mechanical Structure** (layout, padding, grid-math, and typography weights) without hardcoding visual aesthetics.

**Key Principles:**

- **Mobile-First Flex:** Defaults to stack-based navigation.
- **Desktop Grid:** Transitions to a 200px sidebar at `900px+` viewports.
- **Variable Dependency:** All colors must be mapped to `var()` tokens defined in the theme layer.

### 3. The Visual Layer (`shared/assets/darktheme.css`)

The **Slate Coal** theme provides the visual identity. It maps technical tokens (Backgrounds, Accents, Borders) to the Schimke Studios variables defined in the reset.

**Palette Constants:**

- Background: `#0b0d12`
- Accent: `#d0d4de`
- Surface: `#050608`

---

## 🚀 Deployment Guide

### Local Setup

1. Clone the repository to your local drive (e.g., `D:\Portal\Projects\Apps\starter_app`).
2. Initialize git: `git init`.
3. Link to remote: `git remote add origin https://github.com/Scymon/starter_app.git`.

### Usage

This app functions as a **Template**. When starting a new project:

1. Copy the `starter_app` directory.
2. Update the `brand` and `title` variables in the `index.html` and `reset.css` layers.
3. Inject platform-specific logic into the corresponding `src/` folders.

---

_SYS_STATUS: NOMINAL_
