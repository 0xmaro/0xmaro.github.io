import type { Language } from '../i18n/ui';

export interface ProofItem {
  /** The headline figure, e.g. "#3 EG". Western digits only. */
  value: string;
  /** Verification URL. Empty means the item is NOT rendered. */
  href: string;
  label: Record<Language, string>;
  /** Which i18n key to use for the "verify" affordance. */
  verifyKey: 'proof.verify' | 'proof.seeProjects';
}

/**
 * Proof strip data. Every figure must link to a verifiable source before it
 * is shown. Until `href` is filled the StatStrip skips the item.
 *
 * TODO(proof): fill the three URLs below:
 *  - TryHackMe public profile
 *  - CAT Reloaded CTF official results
 *  - projects section (real after Phase 3)
 */
export const proofItems: ProofItem[] = [
  {
    value: '#3 EG',
    href: 'https://tryhackme.com/p/0xmaro',
    label: {
      en: 'TryHackMe · Cyber Security 101 (#138 Global)',
      ar: 'TryHackMe · مسار Cyber Security 101 (#138 عالمياً)',
    },
    verifyKey: 'proof.verify',
  },
  {
    value: '6th / 200+',
    href: 'https://0xmaro.github.io/journey/cat-reloaded-2025/leaderboard.webp',
    label: {
      en: 'CAT Reloaded CTF · team liel0x1',
      ar: 'مسابقة CAT Reloaded · فريق liel0x1',
    },
    verifyKey: 'proof.verify',
  },
  {
    value: '#19 / 400+',
    href: 'https://0xmaro.github.io/journey/ascwg-2025/scoreboard.webp',
    label: {
      en: 'Arab Security Cyber Wargames (ASCWG 2025)',
      ar: 'مسابقة Arab Security Cyber Wargames (ASCWG 2025)',
    },
    verifyKey: 'proof.verify',
  },
];
