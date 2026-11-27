import type { Language } from '../i18n/ui';

export const site = {
  brand: '0xMARO',
  domain: 'https://0xmaro.dev',
  /** Public source repo — /security links every claim to the file behind it. */
  repo: 'https://github.com/0xmaro/0xmaro.github.io',
  social: {
    // Owner-supplied and verified: the sameAs allowlist for
    // JSON-LD and the proof-gated footer/About links.
    github: 'https://github.com/0xmaro',
    linkedin: 'https://www.linkedin.com/in/amar-mohamed-0xmaro',
    tryhackme: 'https://tryhackme.com/p/0xmaro',
    x: 'https://x.com/0_xmaro',
    youtube: 'https://www.youtube.com/@0xmaro',
    instagram: 'https://www.instagram.com/its_0xmaro',
    facebook: 'https://www.facebook.com/0xmaro',
  },
  handles: {
    discord: 'its_0xmaro',
  },
} as const;

interface SectionConfig {
  enabled: boolean;
  inNav: boolean;
}

/**
 * Master switch for whole sections.
 * `enabled: false` removes the section's routes and links everywhere.
 */
export const sections = {
  writeups: { enabled: true, inNav: true },
  // The notes routes are in place, so the section can be enabled — but it stays out
  // of the nav until the stream has content worth a nav slot.
  notes: { enabled: true, inNav: false },
  // Routes stay built; the nav slot waits until the section has published
  // content — an empty page one click from every page reads as abandoned.
  // Flip back to true with the first published project / proven station.
  projects: { enabled: true, inNav: true },
  labs: { enabled: true, inNav: false },
  arsenal: { enabled: true, inNav: true },
  journey: { enabled: true, inNav: true },
  uses: { enabled: true, inNav: false },
  hire: { enabled: false, inNav: false },
  about: { enabled: true, inNav: true },
  search: { enabled: true, inNav: false },
  // linked from the footer, not the nav.
  security: { enabled: true, inNav: false },
} as const satisfies Record<string, SectionConfig>;

export type SectionKey = keyof typeof sections;

/** Locale-independent paths (same slug in both languages). */
export const sectionPaths: Record<SectionKey, string> = {
  writeups: '/writeups',
  notes: '/notes',
  projects: '/projects',
  labs: '/labs',
  arsenal: '/arsenal',
  journey: '/journey',
  uses: '/uses',
  hire: '/hire',
  about: '/about',
  search: '/search',
  security: '/security',
};

/** Default page meta per locale. */
export const siteDescription: Record<Language, string> = {
  en: 'Application security, written by someone who ships the code. Every writeup ends with a fix.',
  ar: 'أمن تطبيقات مكتوب بقلم واحد بيكتب الكود نفسه. كل تحليل بينتهي بإصلاح حقيقي.',
};
