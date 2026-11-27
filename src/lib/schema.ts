import { getRelativeLocaleUrl } from 'astro:i18n';
import { site } from '../config/site';
import { isRealProof } from './proof';
import type { Language } from '../i18n/ui';

/**
 * JSON-LD builders, serialised by src/components/seo/JsonLd.astro.
 * Emitted per page, no duplicates: WebSite on the home of each locale only,
 * Person on home + About, BreadcrumbList on writeup / project / nested archive
 * pages. TechArticle/CreativeWork stay hand-built in their layouts where the
 * entry data lives.
 */

export type JsonLdNode = Record<string, unknown>;

import type { Journey } from './proof';

/**
 * Person — sameAs carries ONLY verified profile URLs (no proof,
 * no render). Credentials and awards mirror the verified Journey collection so
 * search engines and AI systems (SEO + GEO) can resolve Ammar Mohamed / 0xMARO
 * with concrete, source-backed entities.
 */
export const personSchema = (knowsAbout: string[] = []): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ammar Mohamed (0xMARO)',
  alternateName: ['0xMARO', '0xmaro', 'Amar Mohamed', 'Ammar Mohammed'],
  url: 'https://0xmaro.github.io/',
  jobTitle: 'Application Security Engineer & Full-Stack Developer',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Benha University',
  },
  sameAs: Object.values(site.social).filter(isRealProof),
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certified Digital Forensics Professional (eCDFP)',
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: 'INE Security' },
      url: 'https://certs.ine.com/611368b6-296f-4e8c-9a36-131b180b9970#acc.VeHPfYTG',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certified AppSec Practitioner (CAP) — With Merit',
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: 'The SecOps Group' },
      url: 'https://0xmaro.github.io/journey/cap-2025/certificate.webp',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Foundation Level Threat Intelligence Analyst (FTIA)',
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: 'arcX' },
      url: 'https://arcx.io/verify-certificate?id=decd43f6509692e4c565b1f0741c5feb4f4195ae&k=31f0a80d820642609757baf50259d75b',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Cyber Security (120 hrs) & DFIR Bootcamp',
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: 'Information Technology Institute (ITI)' },
      url: 'https://0xmaro.github.io/journey/iti-cybersecurity-2024/certificate.webp',
    },
  ],
  award: [
    'TryHackMe Cyber Security 101 — Rank #3 Egypt & #138 Global (Oct 2024)',
    'CAT Reloaded CTF (CAT Station V.6) — 6th Place / 200+ Teams',
    'Arab Security Cyber Wargames (ASCWG 2025) — Rank #19 / 400+ Teams',
    'ICMTC 2025 (Military Technical College) — Top 25 Onsite Finalist',
    'Official Technical Judge — Codeavour 5.0 International & Mechaverse League',
  ],
  ...(knowsAbout.length > 0 ? { knowsAbout } : {}),
});

/**
 * ProfilePage + ItemList for /journey (SEO + GEO): makes every verified
 * milestone, certification, CTF rank, and teaching engagement machine-readable.
 */
export const journeySchema = (lang: Language, siteUrl: URL, stations: Journey[]): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name:
    lang === 'ar'
      ? 'المسار المهني والشهادات — 0xMARO'
      : 'Journey, Certifications & CTF Track Record — 0xMARO',
  url: new URL(getRelativeLocaleUrl(lang, '/journey'), siteUrl).href,
  inLanguage: lang,
  mainEntity: personSchema(),
  hasPart: {
    '@type': 'ItemList',
    numberOfItems: stations.length,
    itemListElement: stations.map((s, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: s.data.event[lang],
      description: s.data.summary?.[lang] ?? s.data.learned[lang],
      url: new URL(getRelativeLocaleUrl(lang, `/journey/${s.id}`), siteUrl).href,
    })),
  },
});

/** Dedicated milestone dossier JSON-LD (SEO + GEO). */
export const journeyMilestoneSchema = (
  lang: Language,
  siteUrl: URL,
  station: Journey
): JsonLdNode => {
  const firstImg = station.data.media.find((m) => m.type === 'image');
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: station.data.event[lang],
    description: station.data.summary?.[lang] ?? station.data.learned[lang],
    inLanguage: lang,
    url: new URL(getRelativeLocaleUrl(lang, `/journey/${station.id}`), siteUrl).href,
    ...(station.data.date ? { datePublished: station.data.date.toISOString().slice(0, 10) } : {}),
    ...(firstImg ? { image: new URL(firstImg.src, siteUrl).href } : {}),
    ...(station.data.skills.length > 0 ? { keywords: station.data.skills.join(', ') } : {}),
    author: {
      '@type': 'Person',
      name: 'Ammar Mohamed (0xMARO)',
      url: 'https://0xmaro.github.io/',
    },
    ...(isRealProof(station.data.proof) ? { sameAs: station.data.proof } : {}),
  };
};

/**
 * WebSite — home page of each locale only.
 *
 * `potentialAction` points at this locale's search page, which
 * reads `?q=` on load and keeps it in the URL, so the target is a real, working
 * entry point rather than a declaration.
 */
export const websiteSchema = (lang: Language, siteUrl: URL): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.brand,
  url: new URL(getRelativeLocaleUrl(lang, '/'), siteUrl).href,
  inLanguage: lang,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${new URL(getRelativeLocaleUrl(lang, '/search'), siteUrl).href}?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export interface Crumb {
  /** Localized label — always a t() value, never a string literal (rule 3). */
  name: string;
  /** Locale-independent path; omitted only by a trailing crumb. */
  path?: string;
}

/** BreadcrumbList — trail built from getRelativeLocaleUrl() only (rule 4). */
export const breadcrumbSchema = (lang: Language, siteUrl: URL, crumbs: Crumb[]): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    // JSON.stringify drops the key when a trailing crumb has no path.
    item: crumb.path ? new URL(getRelativeLocaleUrl(lang, crumb.path), siteUrl).href : undefined,
  })),
});
