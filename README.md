# Sreeraj - Personal Portfolio Website

A modern, high-performance personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lenis Smooth Scroll**. Designed specifically for a first-year B.Tech CSE (Artificial Intelligence) student at **Thejus Engineering College, Thrissur**.

---

## 🎨 Design System & Palette

- **Background:** Deep space navy (`#090d16`)
- **Surface / Cards:** Frosted glassmorphism (`#0f172a` with `rgba(148, 163, 184, 0.12)` border)
- **Primary Glow:** Electric Cyan (`#38bdf8`)
- **Accent:** Neural Indigo (`#818cf8`)
- **Typography:** Plus Jakarta Sans (body), Space Grotesk (headings), JetBrains Mono (accents/tags)

---

## 🚀 Quick Start (Local Development)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local dev server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## ✏️ How to Customize Your Content

All of your portfolio data (bio, college details, social links, skills, projects, and timeline) is centralized in a single file:

📁 **`src/data.js`**

### Modifying Your Info:
1. Open [`src/data.js`](src/data.js).
2. Edit:
   - `name`: Your full display name
   - `role`: Branch & specialization
   - `college`: College details
   - `tagline` & `bio`: Your personal story and elevator pitch
   - `skills`: Add or modify programming languages, tools, or AI technologies
   - `projects`: Update project descriptions, GitHub URLs, and live deployment links
   - `education`: Update academic years and accomplishments
   - `socialLinks`: Paste your actual GitHub, LinkedIn, and email address

---

## 🌐 Deploying Online

### Option A: Deploy to Vercel (Recommended)
1. Push this folder to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio build"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select your repository.
4. Framework preset will automatically detect **Vite**. Click **Deploy**!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and connect your GitHub repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy**.

