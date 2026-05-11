<div align="center">
<img src="public/png/nav-avatar.png" alt="Logo" width="120" height="120">

  # Berat Turan - Personal Portfolio

  **A modern, highly interactive, and responsive portfolio web application.**

  🌍 **[beratturandev.netlify.app](https://beratturandev.netlify.app/)** 🌍

  <br />

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![TanStack Router](https://img.shields.io/badge/TanStack%20Router-FF4154?style=for-the-badge&logo=react&logoColor=white)](https://tanstack.com/router)
  [![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://beratturandev.netlify.app/)
</div>

<br />

## 🌟 Overview

This is my personal portfolio website, designed to showcase my projects, skills, and experience as a **Mobile & Full-Stack Developer**. Built with a focus on **performance**, **clean architecture**, and **user experience (UX/UI)**, the project features dynamic theming, internationalization, and smooth micro-animations.

The application is fully deployed and continuously integrated via Netlify CI/CD pipeline.

## ✨ Features

- **🌓 Dark & Light Mode:** Seamlessly switch between themes with smooth color transitions and tailored gradients.
- **🌍 Internationalization (i18n):** Native support for Turkish (TR) and English (EN) languages. State is managed efficiently for instant translation updates.
- **🎵 Ambient Sound:** Optional background sound toggle for an immersive user experience.
- **📱 Fully Responsive:** Carefully crafted layouts that look perfect on mobile devices, tablets, and large desktop screens.
- **🚀 High Performance:** Powered by Vite and React for lightning-fast build times and optimized production bundles.
- **🛣️ Modern Routing:** Utilizes `@tanstack/react-router` for safe, declarative, and efficient navigation.
- **🎨 Custom Design System:** Built without heavy CSS frameworks. Relies on a scalable CSS variable system (`styles.css`) for ultimate design control and consistency.

## 🛠️ Tech Stack

### Core Technologies
- **[React](https://reactjs.org/)** - UI Library
- **[TypeScript](https://www.typescriptlang.org/)** - Static Typing
- **[Vite](https://vitejs.dev/)** - Build Tool & Dev Server
- **[@tanstack/react-router](https://tanstack.com/router)** - Routing

### Styling & Assets
- **Vanilla CSS** with deep CSS variable architecture for theming.
- **[Lucide React](https://lucide.dev/)** - Modern and clean icon set.

## 📂 Project Structure

```text
src/
├── components/        # Reusable UI components (Navbar, HeroSection, Projects, etc.)
├── data/              # Static data, translations (TR/EN), and constants
├── routes/            # TanStack Router page definitions and root configuration
├── styles.css         # Global CSS variables, utility classes, and custom animations
└── index.tsx          # Main application entry point
public/
├── mp3/               # Audio assets
├── pdf/               # Resumes / Documents
├── png/               # Image assets and icons
└── svg/               # Vector graphics
```

## 💻 Local Development

While the project is live, you can still clone and run it locally to inspect the code architecture.

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BeratTrn/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to http://localhost:3000 (or the port specified in your terminal) to view the local build.

## 💡 Architecture & Design Decisions

- **Why no Tailwind CSS?** To maintain absolute control over the design system, animations, and gradient effects, I opted for a custom CSS architecture. This allows for highly specific, premium visual details like glassmorphism borders and custom scroll triggers without being constrained by utility class rules.
- **Why TanStack Router?** For its excellent type safety and developer experience. It ensures that routes and parameters are always strictly typed, reducing runtime errors.

## 📫 Contact

**Berat Turan**
- **Email:** [turanberatr@gmail.com](mailto:turanberatr@gmail.com)
- **LinkedIn:** [Berat Turan](https://www.linkedin.com/in/berat-turan-471bb3299)
- **GitHub:** [@BeratTrn](https://github.com/BeratTrn)

<br />

<div align="center">
  <i>"Öğrenmek, Yaşamak ve Gelişmek."</i>
</div>
