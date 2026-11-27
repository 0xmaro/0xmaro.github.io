# 0xMARO

**Ammar Mohammed Abdelrahman** — Full-Stack Developer & Application Security enthusiast.

> *I build systems that work. I break systems that work.*

This repository powers **[0xmaro.github.io](https://0xmaro.github.io)** ([العربية](https://0xmaro.github.io/ar/)) — my personal engineering, software development, and cybersecurity portfolio. It serves as a public technical publication documenting systems I have built, how they fail under adversarial review, and how to fix them at the code level.

---

## About the Website

The site is organized around verifiable technical work rather than static resumes:

- **Projects** ([`/projects`](https://0xmaro.github.io/projects/)) — Bilingual engineering and software case studies covering architecture, technical decisions, and security considerations.
- **Case Files & Writeups** ([`/writeups`](https://0xmaro.github.io/writeups/)) — Cybersecurity research and root-cause analyses, each ending with a real code-level fix.
- **Engineering Notes** ([`/notes`](https://0xmaro.github.io/notes/)) — Concise technical notes and TILs on web security, static site hardening, and tooling behavior.
- **Arsenal** ([`/arsenal`](https://0xmaro.github.io/arsenal/)) — A capability table mapping tools and technologies directly to the projects and analyses where they were used.
- **Journey & Labs** ([`/journey`](https://0xmaro.github.io/journey/) · [`/labs`](https://0xmaro.github.io/labs/)) — A chronological record of engineering builds, training, university teaching and judging, certifications, and CTF competitions backed by verifiable artifacts.
- **Security Posture** ([`/security`](https://0xmaro.github.io/security/)) — A build-time audit of the site's own Content Security Policy, SHA-pinned CI supply chain, deployment gates, and disclosure policy.

---

## Areas of Interest

- **Full-Stack Development** — Designing and shipping web applications, backend APIs, relational data models, and accessible interfaces.
- **Application Security** — Auditing authentication, authorization, injection classes, browser security policies, and writing code-level remediations.
- **Cybersecurity Research** — Investigating real failure modes in production systems, static build pipelines, and CTF challenges.
- **Digital Forensics (DFIR)** — Forensic acquisition, Windows/Linux artifact analysis, network forensics, and incident timeline reconstruction.
- **Embedded Systems & Engineering Projects** — Hardware-to-software integration with microcontrollers (ESP32, Arduino) and discrete digital logic design.

---

## Featured Work

### [Qader A1 — ESP32 Wi-Fi Radar Robot](https://0xmaro.github.io/projects/qader-a1/)
Software lead for an end-to-end university robotics project that evolved from an Arduino Uno + IR prototype (V1) into a self-hosted ESP32 Wi-Fi web server (V2) featuring real-time browser radar telemetry, motor control, laser targeting, and return-to-start navigation.  
Source: [github.com/0xmaro/Qader-A1](https://github.com/0xmaro/Qader-A1)

### [Autonomous Logic Tank](https://0xmaro.github.io/projects/autonomous-logic-tank/)
An obstacle-avoiding and line-following autonomous tank built purely from discrete digital logic ICs (`IC 7400/7404`, dual 555 timers, `CD74HC4051` multiplexer/demultiplexer, `L298` motor driver, IR arrays, and ultrasonic sensing) — zero microcontrollers and zero firmware.

### [0xMARO Personal Website (`0xmaro.github.io`)](https://0xmaro.github.io/projects/0xmaro-site/)
A self-audited bilingual (EN/AR) security engineering publication running on static GitHub Pages with a strict `'self'`-only Content Security Policy, zero third-party runtime origins, SHA-pinned GitHub Actions, and automated build gates. Includes [Case #01 (CWE-200)](https://0xmaro.github.io/writeups/search-index-leaked-hidden-pages/), a root-cause analysis and fix for static search index leakage.

---

## Technology Stack

- **Framework & Language:** Astro 7, TypeScript (strict)
- **Content & Highlighting:** Astro Content Collections (Zod), MDX, YAML data collections, Shiki (build-time syntax highlighting)
- **Search:** Pagefind static client-side search with separate English and Arabic indexes
- **Styling & Typography:** Plain CSS with custom design tokens (`src/styles/tokens.css`), CSS logical properties for RTL/LTR parity, self-hosted IBM Plex fonts (Sans, Sans Arabic, Mono, Sans Condensed), dark/light theme tokens, and print stylesheet
- **Feeds & Metadata:** `@astrojs/sitemap` (multilingual), `@astrojs/rss` (EN & AR feeds), build-time Open Graph image generation (`satori`, `@resvg/resvg-js`, `sharp`)
- **Quality & Testing:** Vitest, ESLint, Prettier, Astro Check, Lighthouse CI
- **Hosting & CI/CD:** GitHub Pages deployed via GitHub Actions with every workflow action pinned to a full commit SHA

---

## Website Features

- **Bilingual Localization (EN / AR):** Full English and Arabic support with native LTR/RTL layout mirroring and same-page language switching.
- **Dark & Light Themes:** Default dark theme (`darkroom`) and light theme (`paper`) initialized via an external script with zero inline JavaScript.
- **Static Search & Command Palette:** Client-side Pagefind search across published case studies, writeups, and notes, accessible via `/search` or `Cmd/Ctrl + K`.
- **Responsive & Print-Ready Layouts:** Mobile-first responsive design with dedicated print styles for technical reading.
- **Self-Audited Security Posture:** Strict `'self'`-only meta CSP, zero third-party runtime origins, automated copy/link/index build gates, and a live [`/security`](https://0xmaro.github.io/security/) page generated from repository source at build time.
- **Content Discovery:** Faceted writeup filtering, bilingual RSS feeds ([EN](https://0xmaro.github.io/rss.xml) · [AR](https://0xmaro.github.io/rss-ar.xml)), and structured metadata.

---

## Design Philosophy

> **Everything on this site must prove something. If it doesn't, cut it.**

This project is built around evidence-based engineering. Instead of listing unverified skills or stacking badges, every claim, tool, and milestone is tied to concrete artifacts: architecture decisions, real repositories, root-cause analyses, code-level fixes, and verifiable proofs. Clear technical documentation and real project outcomes matter more than surface-level presentation.

---

## Find Me Online

- **Website:** [0xmaro.github.io](https://0xmaro.github.io) ([العربية](https://0xmaro.github.io/ar/))
- **LinkedIn:** [linkedin.com/in/amar-mohamed-0xmaro](https://www.linkedin.com/in/amar-mohamed-0xmaro)
- **GitHub:** [github.com/0xmaro](https://github.com/0xmaro)
- **TryHackMe:** [tryhackme.com/p/0xmaro](https://tryhackme.com/p/0xmaro)
- **X:** [x.com/0_xmaro](https://x.com/0_xmaro)
- **YouTube:** [youtube.com/@0xmaro](https://www.youtube.com/@0xmaro)
