import type { Language } from '../i18n/ui';

export type L10n = Record<Language, string>;

export interface SpecimenPlate {
  id: string;
  code: string;
  lens: 'build' | 'break';
  image: string;
  alt: L10n;
  title: L10n;
  meta: L10n;
  caption: L10n;
  href: string;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'research' | 'archived';
export type ProjectKind = 'hardware' | 'security-web' | 'fullstack' | 'embedded-research';

export interface ShowcaseProject {
  id: string;
  index: string;
  name: string;
  status: ProjectStatus;
  kind: ProjectKind;
  year: string;
  tagline: L10n;
  story: L10n;
  engineeringDecision: L10n;
  securityAngle: L10n;
  stack: string[];
  architectureNodes: string[];
  media?: {
    primary: string;
    primaryAlt: L10n;
    secondary?: string;
    secondaryAlt?: L10n;
  };
  primaryLink?: {
    label: L10n;
    href: string;
  };
  secondaryLink?: {
    label: L10n;
    href: string;
  };
  draftNote?: L10n;
}

export interface WorkbenchResearch {
  id: string;
  code: string;
  title: L10n;
  summary: L10n;
  target: string;
  cwe: string[];
  owasp: string[];
  status: 'in-progress';
  tools: string[];
}

export interface EcosystemEvidence {
  label: L10n;
  href: string;
}

export interface SkillDomain {
  id: string;
  code: string;
  lens: 'build' | 'break';
  title: L10n;
  summary: L10n;
  tools: string[];
  evidence: EcosystemEvidence[];
}

export interface CommunityHighlight {
  id: string;
  tag: L10n;
  title: L10n;
  org: L10n;
  date: string;
  body: L10n;
  mediaType: 'image' | 'video';
  src: string;
  poster?: string;
  alt: L10n;
  href: string;
}

export interface StoryChapter {
  num: string;
  phase: L10n;
  title: L10n;
  lens: 'build' | 'break';
  body: L10n;
  takeaway: L10n;
  image: string;
  imageAlt: L10n;
  href: string;
}

/**
 * Hero specimen plates — real visual artifacts from Ammar's verified journey.
 */
export const heroSpecimens: SpecimenPlate[] = [
  {
    id: 'qader-a1',
    code: 'PLATE 01 · HARDWARE',
    lens: 'build',
    image: '/journey/qader-a1-2024/robot-radar-setup.webp',
    alt: {
      en: 'Qader A1 ESP32 Wi-Fi radar robot prototype with ultrasonic sensor and web control setup',
      ar: 'نموذج روبوت قادر A1 المبني على ESP32 مع حساس الرادار وواجهة التحكم عبر Wi-Fi',
    },
    title: {
      en: 'Qader A1 — ESP32 Wi-Fi Radar Robot',
      ar: 'قادر A1 — روبوت رادار Wi-Fi بمتحكم ESP32',
    },
    meta: {
      en: 'Benha University · Software Lead · Jul 2024',
      ar: 'جامعة بنها · قائد البرمجيات · يوليو 2024',
    },
    caption: {
      en: 'Bridged C++ firmware with an HTML/CSS/JS control interface — exposing how embedded devices create real network attack surfaces.',
      ar: 'ربطت firmware بلغة C++ بواجهة تحكم ويب عبر Wi-Fi — وهنا بدأت أفهم أسطح الهجوم الشبكية للأجهزة المدمجة.',
    },
    href: '/journey/04-qader-a1-2024',
  },
  {
    id: 'logic-tank',
    code: 'PLATE 02 · ZERO-CODE',
    lens: 'build',
    image: '/journey/logic-tank-2024/circuit-schematic.webp',
    alt: {
      en: 'Pure digital logic circuit schematic for the zero-code autonomous obstacle-avoiding tank',
      ar: 'مخطط الدائرة المنطقية الكامل لدبابة ذاتية الحركة بدون أي كود برمجي',
    },
    title: {
      en: 'Autonomous Tank — Pure Digital Logic',
      ar: 'دبابة ذاتية الحركة — منطق رقمي صرف بدون كود',
    },
    meta: {
      en: 'IC 7400/7404 · Dual 555 · Zero Software · Dec 2024',
      ar: 'بوابات منطقية 7400/7404 · مؤقتات 555 · ديسمبر 2024',
    },
    caption: {
      en: 'State machines built directly out of NAND/NOT gates, IR arrays, ultrasonic sensors, and multiplexers — stripping every abstraction down to voltage.',
      ar: 'بناء آلة حالات كاملة من البوابات المنطقية والحساسات بدون أي متحكم دقيق — لفهم تدفق التحكم من مستوى الإشارة.',
    },
    href: '/journey/09-digital-logic-tank-2024',
  },
  {
    id: 'cap-ecdfp',
    code: 'PLATE 03 · APPSEC & DFIR',
    lens: 'break',
    image: '/journey/cap-2025/certificate.webp',
    alt: {
      en: 'Certified AppSec Practitioner (CAP) Passed With Merit certificate from The SecOps Group',
      ar: 'شهادة Certified AppSec Practitioner (CAP) بتقدير امتياز من The SecOps Group',
    },
    title: {
      en: 'CAP (With Merit) & INE eCDFP',
      ar: 'شهادتا CAP بامتياز وINE eCDFP',
    },
    meta: {
      en: 'The SecOps Group · INE Security · 2025',
      ar: 'The SecOps Group · INE Security · 2025',
    },
    caption: {
      en: 'Auditing OWASP failure modes systematically led me back into my own auth, session, and upload code — fixing six real flaws I had missed.',
      ar: 'مراجعة أنماط فشل OWASP دفعتني لتدقيق كود المصادقة والجلسات ورفع الملفات في مشاريعي وإصلاح 6 ثغرات حقيقية.',
    },
    href: '/journey/11-cap-with-merit-2025',
  },
  {
    id: 'icmtc-ascwg',
    code: 'PLATE 04 · CTF OPS',
    lens: 'break',
    image: '/journey/icmtc-2025/onsite-team-1.webp',
    alt: {
      en: 'Team liel0x1 competing onsite at the ICMTC 2025 cybersecurity finals',
      ar: 'فريق liel0x1 في الجولة النهائية الحضورية لمسابقة ICMTC 2025',
    },
    title: {
      en: 'Team liel0x1 — ICMTC, ASCWG & CAT CTF',
      ar: 'فريق liel0x1 — ICMTC وASCWG وCAT Reloaded',
    },
    meta: {
      en: 'Top 25 ICMTC · #19/400+ ASCWG · 6th/200+ CAT',
      ar: 'أفضل 25 ICMTC · المركز 19 ASCWG · السادس CAT',
    },
    caption: {
      en: 'Competition taught speed under pressure; production systems taught what speed costs. Both halves belong in the same engineer.',
      ar: 'المسابقات علّمتني السرعة تحت الضغط، والأنظمة الإنتاجية علّمتني ثمن السرعة — والاتنين في نفس المهندس.',
    },
    href: '/journey/13-icmtc-2025',
  },
  {
    id: 'gdg-trainer',
    code: 'PLATE 05 · COMMUNITY',
    lens: 'break',
    image: '/journey/gdg-campus-2025/teaching-members.webp',
    alt: {
      en: 'Teaching cybersecurity fundamentals to university students at GDG on Campus Benha',
      ar: 'شرح أساسيات الأمن السيبراني وتدريب الطلاب في GDG جامعة بنها',
    },
    title: {
      en: 'Cybersecurity Instructor & CTF Author',
      ar: 'مدرب أمن سيبراني ومؤلف تحديات CTF',
    },
    meta: {
      en: 'GDG on Campus Benha & CIC · 2025',
      ar: 'GDG جامعة بنها وCIC · 2025',
    },
    caption: {
      en: 'Authored vulnerable PHP challenges, co-organized WARZONE CTF, and taught a 27-week cybersecurity track across two university campuses.',
      ar: 'أعدّيت تحديات PHP مصابة للطلاب وشاركت في تنظيم CTF وقدّمت مساراً تدريبياً من 27 أسبوعاً في جامعتين.',
    },
    href: '/journey/10-gdg-campus-trainer-2025',
  },
];

/**
 * Projects & Hardware Builds — strictly verified from the repo.
 * Clearly distinguishes Completed, In Progress, Research, and Archived.
 */
export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'qader-a1',
    index: 'PRJ-01',
    name: 'Qader A1',
    status: 'completed',
    kind: 'hardware',
    year: '2024',
    tagline: {
      en: 'ESP32 Wi-Fi radar robot with real-time browser control, ultrasonic mapping, laser targeting & return-to-start navigation.',
      ar: 'روبوت رادار يعمل بمتحكم ESP32 مع تحكم فوري من المتصفح وتتبع بالموجات فوق الصوتية وعودة تلقائية لنقطة البداية.',
    },
    story: {
      en: 'Led the full software stack at Benha University, evolving V1 (Arduino Uno + IR receiver) into V2 — a self-hosted ESP32 Wi-Fi web server serving an interactive radar UI and multi-directional motor telemetry.',
      ar: 'قدتُ كامل الجانب البرمجي في جامعة بنها، من النسخة الأولى (Arduino Uno + IR) إلى النسخة الثانية كخادم ويب على ESP32 بواجهة رادار تفاعلية وتحكم متعدد الاتجاهات.',
    },
    engineeringDecision: {
      en: 'Replaced line-of-sight IR remote control with an embedded HTTP control surface on ESP32 so sensor sweeps and motion state stay synchronized in real time.',
      ar: 'استبدلتُ التحكم بالأشعة تحت الحمراء بخادم HTTP مدمج على ESP32 لمزامنة قراءات الرادار وحركة المواتير لحظياً.',
    },
    securityAngle: {
      en: 'Exposing actuators over a local Wi-Fi AP made embedded attack surfaces concrete — inspiring later IoT security auditing.',
      ar: 'إتاحة التحكم الفيزيائي عبر شبكة Wi-Fi محلية جعلت أسطح هجوم إنترنت الأشياء ملموسة ومهّدت لاحقاً لأبحاث أمن الـ IoT.',
    },
    stack: ['ESP32', 'Arduino', 'C++', 'Embedded C', 'HTML/CSS/JS', 'Ultrasonic Radar'],
    architectureNodes: [
      'Browser Radar UI',
      'ESP32 Wi-Fi AP',
      'C++ Firmware Loop',
      'Motors + Ultrasonic',
    ],
    media: {
      primary: '/journey/qader-a1-2024/robot-radar-setup.webp',
      primaryAlt: {
        en: 'Qader A1 robot with radar and ESP32 wiring',
        ar: 'روبوت قادر A1 مع إعداد الرادار وESP32',
      },
      secondary: '/journey/qader-a1-2024/demo-with-professor.webp',
      secondaryAlt: {
        en: 'Demonstrating Qader A1 with university professor',
        ar: 'عرض مشروع قادر A1 مع أستاذ المادة',
      },
    },
    primaryLink: {
      label: { en: 'Read full case study', ar: 'اقرأ دراسة الحالة الكاملة' },
      href: '/projects/qader-a1',
    },
    secondaryLink: {
      label: { en: 'Journey milestone dossier', ar: 'ملف المحطة الموثّق' },
      href: '/journey/04-qader-a1-2024',
    },
  },
  {
    id: 'logic-tank',
    index: 'PRJ-02',
    name: 'Autonomous Logic Tank',
    status: 'completed',
    kind: 'hardware',
    year: '2024',
    tagline: {
      en: 'Zero-code autonomous obstacle-avoiding and line-following tank built purely from discrete digital logic ICs.',
      ar: 'دبابة ذاتية الحركة لتفادي العوائق وتتبع المسار مبنية بالكامل من دوائر منطق رقمي بدون سطر كود واحد.',
    },
    story: {
      en: 'Designed and wired an autonomous state machine with zero microcontrollers and zero firmware — combining IR TCRT5000 arrays, HC-SR04 ultrasonic sensing, dual 555 timers, L298 motor driver, IC 7400/7404 NAND/NOT gates, and a CD74HC4051 mux/demux.',
      ar: 'صممتُ ووصلتُ آلة حالات ذاتية بالكامل بدون متحكمات دقيقة أو برمجة — باستخدام حساسات IR TCRT5000 وموجات فوق صوتية HC-SR04 ومؤقتي 555 وبوابات 7400/7404 وCD74HC4051.',
    },
    engineeringDecision: {
      en: 'Encoded steering priority directly in combinational logic truth tables and hardware timers instead of software interrupts.',
      ar: 'ترجمة أولويات التوجيه مباشرة إلى جداول حقيقة ومؤقتات هاردوير بدلاً من المقاطعات البرمجية.',
    },
    securityAngle: {
      en: 'Stripping away every software abstraction sharpens how you reason about deterministic state transitions and hardware boundaries.',
      ar: 'التجرد من كل طبقات البرمجيات يمنح فهماً دقيقاً لانتقالات الحالة والحدود الفيزيائية للأنظمة.',
    },
    stack: [
      'IC 7400/7404',
      'Dual 555 Timers',
      'CD74HC4051',
      'L298 Driver',
      'TCRT5000 IR',
      'HC-SR04',
    ],
    architectureNodes: [
      'IR + Ultrasonic',
      '555 Timing Stage',
      'NAND/NOT + Mux',
      'L298 Motor Drive',
    ],
    media: {
      primary: '/journey/logic-tank-2024/circuit-schematic.webp',
      primaryAlt: {
        en: 'Full digital logic circuit schematic for the autonomous tank',
        ar: 'المخطط الإلكتروني الكامل لدائرة الدبابة المنطقية',
      },
      secondary: '/journey/logic-tank-2024/team-demo.webp',
      secondaryAlt: {
        en: 'Live hardware demonstration of the digital logic tank',
        ar: 'تجربة عملية حية للدبابة الرقمية',
      },
    },
    primaryLink: {
      label: { en: 'Read full case study', ar: 'اقرأ دراسة الحالة الكاملة' },
      href: '/projects/autonomous-logic-tank',
    },
    secondaryLink: {
      label: { en: 'Schematic & demo dossier', ar: 'المخطط والتجربة العملية' },
      href: '/journey/09-digital-logic-tank-2024',
    },
  },
  {
    id: '0xmaro-site',
    index: 'PRJ-03',
    name: '0xmaro.github.io',
    status: 'completed',
    kind: 'security-web',
    year: '2026',
    tagline: {
      en: 'Self-audited bilingual (EN/AR) security engineering platform with strict self-only CSP, SHA-pinned CI supply chain, and visibility-gated search.',
      ar: 'منصة هندسة أمنية ثنائية اللغة (عربي/إنجليزي) بسياسة CSP صارمة وسلسلة توريد CI مثبّتة بـ SHA وبحث محكوم بقواعد الإظهار.',
    },
    story: {
      en: 'Built on Astro with zero third-party runtime origins, self-hosted fonts, automated link/copy/index build gates, and a live /security posture page derived directly from repository source at build time.',
      ar: 'مبنية على Astro بدون أي مصادر خارجية وقت التشغيل، وبخطوط مستضافة محلياً، وبوابات تحقق آلية للروابط والبحث وصفحة أمان تُقرأ مباشرة من الكود.',
    },
    engineeringDecision: {
      en: "Disabled inline scripts and inline stylesheets globally so a static GitHub Pages meta CSP can enforce script-src 'self' and style-src 'self' without exceptions.",
      ar: 'تعطيل أي سكربتات أو أنماط مضمّنة عالمياً لفرض سياسة CSP صارمة (self فقط) على GitHub Pages بدون استثناءات.',
    },
    securityAngle: {
      en: 'Audited my own Pagefind build pipeline and published Case #01 (CWE-200) with 3 verified fix commits after catching hidden-page index leakage.',
      ar: 'دقّقتُ خط بناء Pagefind ونشرتُ القضية #01 (CWE-200) مع 3 commits إصلاح حقيقية بعد اكتشاف تسريب الصفحات المخفية في الفهرس.',
    },
    stack: ['Astro 7', 'TypeScript', 'Pagefind', 'Strict CSP', 'Vitest', 'Bilingual RTL'],
    architectureNodes: [
      'Content Collections',
      'forSurface() Gate',
      'Static CSP Build',
      'Exact-Count Pagefind',
    ],
    primaryLink: {
      label: { en: 'Read architecture case study', ar: 'اقرأ الدراسة المعمارية' },
      href: '/projects/0xmaro-site',
    },
    secondaryLink: {
      label: { en: 'Case #01 (CWE-200) & posture', ar: 'القضية #01 (CWE-200)' },
      href: '/writeups/search-index-leaked-hidden-pages',
    },
  },
  {
    id: 'gymos',
    index: 'PRJ-04',
    name: 'GymOS',
    status: 'in-progress',
    kind: 'fullstack',
    year: '2026',
    tagline: {
      en: 'Production gym management system with authentication, role permissions, and invoicing — currently undergoing full case-study & AppSec documentation.',
      ar: 'نظام إدارة صالات رياضية إنتاجي يشمل المصادقة والصلاحيات والفواتير — قيد التوثيق الكامل كدراسة حالة وتحليل أمني.',
    },
    story: {
      en: 'A real full-stack application built with Laravel, MySQL, and Svelte. Auditing my own invoice endpoint uncovered a numeric IDOR (CWE-639 / OWASP A01:2021) — currently being written up with the exact patch.',
      ar: 'تطبيق Full-Stack حقيقي مبني بـ Laravel وMySQL وSvelte. تدقيق نقطة الفواتير فيه كشف ثغرة IDOR (CWE-639) يجري حالياً توثيقها مع الإصلاح البرمجي الكامل.',
    },
    engineeringDecision: {
      en: 'Paired Laravel API authorization policies with a reactive Svelte frontend to keep billing state and role boundaries explicit.',
      ar: 'الربط بين سياسات التفويض في Laravel وواجهة Svelte للحفاظ على حدود الصلاحيات والفوترة واضحة.',
    },
    securityAngle: {
      en: 'Target of upcoming Case File: "I attacked the gym system I built" — CWE-639 missing ownership check, patched at the policy layer.',
      ar: 'هدف ملف القضية القادم حول ثغرة IDOR (CWE-639) وإصلاحها على مستوى طبقة التفويض.',
    },
    stack: ['Laravel', 'MySQL', 'Svelte', 'REST API', 'Burp Suite', 'Postman'],
    architectureNodes: ['Svelte Client', 'Laravel API', 'Policy Gate', 'MySQL Ledger'],
    draftNote: {
      en: 'Full architectural breakdown & IDOR writeup currently in authoring.',
      ar: 'التحليل المعماري الكامل وملف ثغرة IDOR قيد الكتابة حالياً.',
    },
  },
  {
    id: 'dprims',
    index: 'PRJ-05',
    name: 'DPRIMS',
    status: 'research',
    kind: 'embedded-research',
    year: '2026',
    tagline: {
      en: 'Rail-defect detection system running on ESP32 hardware — private embedded engineering & security documentation in progress.',
      ar: 'نظام كشف عيوب قضبان السكك الحديدية يعمل على ESP32 — مشروع أنظمة مدمجة خاص قيد التوثيق.',
    },
    story: {
      en: 'An ESP32-based rail-defect detection system combining hardware sensing with real-world operational constraints. Kept private while architecture and security posture notes are being finalized.',
      ar: 'نظام قائم على ESP32 لاكتشاف عيوب القضبان يجمع بين الاستشعار الفيزيائي وقيود التشغيل الواقعية. محفوظ كمشروع خاص لحين اكتمال التوثيق.',
    },
    engineeringDecision: {
      en: 'Built around ESP32 edge processing to handle sensor acquisition directly on constrained hardware.',
      ar: 'مبني حول المعالجة الطرفية على ESP32 للتعامل مع قراءات الحساسات مباشرة على هاردوير محدود الموارد.',
    },
    securityAngle: {
      en: 'Listed under the IoT / Embedded domain in Arsenal; telemetry integrity and embedded attack surface notes are being documented.',
      ar: 'مدرج تحت مجال إنترنت الأشياء والأنظمة المدمجة؛ يجري توثيق سلامة الإشارات والوضع الأمني.',
    },
    stack: ['ESP32', 'Embedded Systems', 'IoT Sensing'],
    architectureNodes: ['Rail Sensors', 'ESP32 Edge Node', 'Defect Detection', 'Telemetry'],
    draftNote: {
      en: 'Private system — public architectural dossier coming soon.',
      ar: 'نظام خاص — الملف المعماري العام قيد الإعداد.',
    },
  },
  {
    id: 'riyadat',
    index: 'PRJ-06',
    name: 'Riyadat',
    status: 'archived',
    kind: 'fullstack',
    year: '2025',
    tagline: {
      en: 'Production web system built for real users — archived build with engineering retrospective queued for publication.',
      ar: 'نظام ويب إنتاجي لمستخدمين حقيقيين — مشروع مؤرشف بانتظار نشر المراجعة الهندسية الكاملة.',
    },
    story: {
      en: 'One of the production systems that shaped my transition from shipping features to auditing how real user workflows, authentication, and permissions fail under adversarial input.',
      ar: 'أحد الأنظمة الإنتاجية التي شكّلت تحولي من بناء الميزات إلى تدقيق كيفية تعثر المصادقة والصلاحيات تحت المدخلات العدائية.',
    },
    engineeringDecision: {
      en: 'Preserved in the archive honestly rather than hidden — every shipped system leaves lessons worth examining.',
      ar: 'محفوظ في الأرشيف بشفافية بدلاً من إخفائه — كل نظام حقيقي يترك دروساً هندسية تستحق التوثيق.',
    },
    securityAngle: {
      en: 'Retrospective security review and lessons-learned dossier queued in the authoring pipeline.',
      ar: 'مراجعة أمنية بأثر رجعي وقسم الدروس المستفادة قيد التجهيز.',
    },
    stack: ['Full-Stack Web', 'Authentication', 'Permissions'],
    architectureNodes: ['Web Interface', 'Auth & Roles', 'Application Core', 'Archive'],
    draftNote: {
      en: 'Archived — retrospective case study queued.',
      ar: 'مؤرشف — دراسة الحالة المرجعية قيد التحضير.',
    },
  },
];

/**
 * Real draft writeups currently in src/content/writeups/en/ (draft: true).
 * Surfaced transparently as "On the Workbench" so visitors see active research.
 */
export const workbenchResearch: WorkbenchResearch[] = [
  {
    id: 'idor-in-invoice-api',
    code: 'DRAFT · CASE 02',
    title: {
      en: "I attacked the gym system I built. Here's what I found.",
      ar: 'هاجمتُ نظام الجيم الذي بنيتُه بنفسي — وهذا ما وجدته',
    },
    summary: {
      en: 'An IDOR in GymOS v1.2: a numeric invoice ID with no ownership check, the exploitation pass, and the Laravel authorization fix.',
      ar: 'ثغرة IDOR في GymOS v1.2: معرّف فاتورة رقمي بدون تحقق من الملكية، ومسار الاستغلال والإصلاح البرمجي في Laravel.',
    },
    target: 'GymOS v1.2 — self-built',
    cwe: ['CWE-639'],
    owasp: ['A01:2021'],
    status: 'in-progress',
    tools: ['Burp Suite', 'Postman'],
  },
  {
    id: 'ascwg-2025-buzzer-beater',
    code: 'DRAFT · CASE 03',
    title: {
      en: 'ASCWG 2025: the challenge we solved 20 minutes before the buzzer',
      ar: 'ASCWG 2025: التحدي الذي حللناه قبل النهاية بـ 20 دقيقة',
    },
    summary: {
      en: 'A blind SQL injection behind a login form during national qualifiers, the filter bypass, and the pattern that generalizes beyond CTF.',
      ar: 'ثغرة حقن SQL عمياء خلف نموذج تسجيل دخول في التصفيات الوطنية، وتجاوز الفلتر والدرس الهندسي العام.',
    },
    target: 'ASCWG 2025 — national qualifiers',
    cwe: ['CWE-89'],
    owasp: ['A03:2021'],
    status: 'in-progress',
    tools: ['Burp Suite', 'sqlmap'],
  },
  {
    id: 'from-cyber-101-to-top-3-egypt',
    code: 'DRAFT · FIELD LOG',
    title: {
      en: 'From Cyber Security 101 to #3 in Egypt: what actually mattered',
      ar: 'من Cyber Security 101 إلى المركز #3 في مصر: ما الذي صنع الفارق فعلاً',
    },
    summary: {
      en: 'Honest breakdown of the habits that compounded to #3 Egypt / #138 Global on TryHackMe — and the dead ends that wasted time.',
      ar: 'تفكيك صريح للعادات التي أوصلتني للمركز الثالث في مصر و138 عالمياً على TryHackMe — وما لم يكن يستحق الوقت.',
    },
    target: 'TryHackMe — #3 Egypt',
    cwe: [],
    owasp: [],
    status: 'in-progress',
    tools: ['TryHackMe', 'Burp Suite'],
  },
];

/**
 * Interactive Skill Ecosystem — derived strictly from verified journey YAMLs,
 * arsenal YAMLs, projects, and published writeups.
 */
export const skillDomains: SkillDomain[] = [
  {
    id: 'appsec',
    code: 'DOM-01',
    lens: 'break',
    title: {
      en: 'Application Security & Web Exploitation',
      ar: 'أمن التطبيقات واختبار اختراق الويب',
    },
    summary: {
      en: 'Auditing authentication, authorization (IDOR/Access Control), injection (SQLi/XSS/Command Injection), SSRF, CSP, and writing the code-level patch in the same stack.',
      ar: 'تدقيق المصادقة والصلاحيات وثغرات الحقن وSSRF وسياسات CSP، مع كتابة الإصلاح الفعلي بنفس لغة التطبيق.',
    },
    tools: [
      'Burp Suite',
      'Postman',
      'SQLMap',
      'Gobuster',
      'Hydra',
      'OWASP Top 10',
      'CSP & Headers',
    ],
    evidence: [
      {
        label: { en: 'CAP Certification (With Merit)', ar: 'شهادة CAP بتقدير امتياز' },
        href: '/journey/11-cap-with-merit-2025',
      },
      {
        label: { en: 'Case #01: Pagefind CWE-200 Fix', ar: 'القضية #01: إصلاح تسريب Pagefind' },
        href: '/writeups/search-index-leaked-hidden-pages',
      },
      {
        label: { en: 'Site Live Security Posture', ar: 'وضع الأمان المباشر للموقع' },
        href: '/security',
      },
    ],
  },
  {
    id: 'dfir',
    code: 'DOM-02',
    lens: 'break',
    title: {
      en: 'Digital Forensics, DFIR & Threat Intel',
      ar: 'التحقيق الجنائي الرقمي والاستجابة للحوادث',
    },
    summary: {
      en: 'Forensic imaging, disk & Windows/Linux artifact analysis, packet/network forensics, MITRE ATT&CK mapping, Splunk SIEM detections, and CTI lifecycle.',
      ar: 'النسخ الجنائي وتحليل آثار Windows وLinux وتحليل الشبكات وربطها بـ MITRE ATT&CK وبناء قواعد اكتشاف على Splunk.',
    },
    tools: [
      'FTK Imager',
      'Splunk SIEM',
      'Wireshark',
      'Scapy',
      'MITRE ATT&CK',
      'Timeline Reconstruction',
      'IOC / CTI',
    ],
    evidence: [
      {
        label: { en: 'INE eCDFP Certification', ar: 'شهادة INE eCDFP' },
        href: '/journey/12-ecdfp-ine-2025',
      },
      {
        label: { en: 'ITI × CyberTalents DFIR Bootcamp', ar: 'معسكر DFIR من ITI وCyberTalents' },
        href: '/journey/08-iti-dfir-bootcamp-2024',
      },
      {
        label: {
          en: 'arcX Threat Intelligence Analyst (FTIA)',
          ar: 'شهادة arcX FTIA في استخبارات التهديدات',
        },
        href: '/journey/05-arcx-ftia-2024',
      },
    ],
  },
  {
    id: 'fullstack',
    code: 'DOM-03',
    lens: 'build',
    title: {
      en: 'Full-Stack Web Engineering',
      ar: 'هندسة تطبيقات الويب الكاملة',
    },
    summary: {
      en: 'Designing and shipping real web applications — backend APIs, relational schemas, reactive UIs, bilingual RTL architecture, and automated CI quality gates.',
      ar: 'تصميم وبناء تطبيقات ويب حقيقية — واجهات برمجية وقواعد بيانات وواجهات تفاعلية ودعم ثنائي اللغة RTL وبوابات جودة آلية.',
    },
    tools: ['Laravel', 'MySQL', 'Svelte', 'Astro', 'TypeScript', 'HTML/CSS/JS', 'PHP', 'Vitest'],
    evidence: [
      {
        label: { en: 'Projects & Systems Showcase', ar: 'استعراض المشاريع والأنظمة' },
        href: '/projects',
      },
      {
        label: { en: '0xmaro.github.io Architecture', ar: 'بنية موقع 0xmaro.github.io' },
        href: '/security',
      },
      {
        label: { en: 'GDG PHP Challenge Authoring', ar: 'تأليف تحديات PHP في GDG' },
        href: '/journey/10-gdg-campus-trainer-2025',
      },
    ],
  },
  {
    id: 'hardware',
    code: 'DOM-04',
    lens: 'build',
    title: {
      en: 'Embedded Systems, IoT & Digital Logic',
      ar: 'الأنظمة المدمجة وإنترنت الأشياء والمنطق الرقمي',
    },
    summary: {
      en: 'From pure combinational logic gates (zero code) to C/C++ firmware on Arduino and ESP32 Wi-Fi web servers interfacing sensors and actuators.',
      ar: 'من بوابات المنطق الرقمي الصرف بدون كود إلى برمجة C/C++ على Arduino وخوادم ويب على ESP32 متصلة بالحساسات والمواتير.',
    },
    tools: [
      'ESP32',
      'Arduino',
      'Embedded C / C++',
      'IC 7400/7404',
      '555 Timers',
      'Sensors & Radar',
    ],
    evidence: [
      {
        label: { en: 'Qader A1 ESP32 Radar Robot', ar: 'روبوت قادر A1 بمتحكم ESP32' },
        href: '/journey/04-qader-a1-2024',
      },
      {
        label: { en: 'Zero-Code Digital Logic Tank', ar: 'الدبابة الذاتية بالمنطق الرقمي' },
        href: '/journey/09-digital-logic-tank-2024',
      },
      {
        label: { en: 'Arduino Foundations (2022)', ar: 'أساسيات Arduino (2022)' },
        href: '/journey/01-arduino-foundations-2022',
      },
    ],
  },
  {
    id: 'ctf-network',
    code: 'DOM-05',
    lens: 'break',
    title: {
      en: 'CTF Operations & Network Defense',
      ar: 'مسابقات CTF وأمن الشبكات',
    },
    summary: {
      en: 'Time-boxed team triage across Web, Forensics, Crypto, Mobile, and OSINT with Team liel0x1, paired with enterprise firewall foundations (Fortinet NSE4 / Palo Alto PCCET).',
      ar: 'العمل الجماعي تحت الضغط في تحديات الويب والتحليل الجنائي والتشفير مع فريق liel0x1، إلى جانب أساسيات جدران الحماية المؤسسية.',
    },
    tools: ['Linux', 'Nmap', 'Wireshark', 'John the Ripper', 'Metasploit', 'Fortigate / Palo Alto'],
    evidence: [
      {
        label: { en: 'ASCWG 2025 (#19 / 400+ Teams)', ar: 'ASCWG 2025 (المركز 19 / 400+ فريق)' },
        href: '/journey/14-ascwg-2025',
      },
      {
        label: {
          en: 'CAT Reloaded CTF (6th / 200+ Teams)',
          ar: 'CAT Reloaded CTF (المركز 6 / 200+ فريق)',
        },
        href: '/journey/15-cat-reloaded-ctf-2025',
      },
      {
        label: {
          en: 'ICMTC 2025 (5/5 Qualifiers · Top 25)',
          ar: 'ICMTC 2025 (5/5 تصفيات · أفضل 25)',
        },
        href: '/journey/13-icmtc-2025',
      },
      {
        label: {
          en: 'ITI 120h Cybersecurity Internship',
          ar: 'تدريب ITI للأمن السيبراني (120 ساعة)',
        },
        href: '/journey/06-iti-cybersecurity-120h-2024',
      },
    ],
  },
];

/**
 * Community, Teaching, Judging & Verified Video/Photo Highlights
 */
export const communityHighlights: CommunityHighlight[] = [
  {
    id: 'gdg-recognition',
    tag: { en: 'VIDEO · TEACHING', ar: 'فيديو · تدريب وتكريم' },
    title: {
      en: 'GDG on Campus Benha & CIC — Cybersecurity Instructor & CTF Author',
      ar: 'مدرب أمن سيبراني ومؤلف تحديات CTF في GDG بنها وCIC',
    },
    org: { en: 'GDG on Campus · 2025', ar: 'GDG on Campus · 2025' },
    date: '2025',
    body: {
      en: 'Returned as a volunteer trainer across two campuses — delivering a 5-day hands-on bootcamp, authoring vulnerable PHP challenges, co-organizing a WARZONE CTF, and leading a 27-week cybersecurity track at CIC.',
      ar: 'عدتُ كمدرب متطوع في جامعتين — قدّمتُ معسكراً عملياً من 5 أيام وألّفتُ تحديات PHP وشاركتُ في تنظيم CTF وقدّمتُ مساراً من 27 أسبوعاً في CIC.',
    },
    mediaType: 'video',
    src: '/journey/gdg-campus-2025/recognition.mp4',
    poster: '/journey/gdg-campus-2025/teaching-members.webp',
    alt: {
      en: 'Recognition video from GDG on Campus Benha cybersecurity bootcamp',
      ar: 'فيديو التكريم خلال معسكر الأمن السيبراني في GDG جامعة بنها',
    },
    href: '/journey/10-gdg-campus-trainer-2025',
  },
  {
    id: 'gdsc-first-place',
    tag: { en: 'VIDEO · 1ST PLACE', ar: 'فيديو · المركز الأول' },
    title: {
      en: 'GDSC Benha × Cyber Cohesion — 1st Place on Bootcamp Leaderboard',
      ar: 'المركز الأول في معسكر GDSC بنها وCyber Cohesion',
    },
    org: { en: 'GDSC Benha · Aug 2023', ar: 'GDSC بنها · أغسطس 2023' },
    date: '2023',
    body: {
      en: 'Where cybersecurity moved from curiosity to daily craft: 7 intensive days of Linux, Scapy, Wireshark, XSS, SQLi, and Crypto — finishing #1 and returning two years later to teach.',
      ar: 'البداية التي حوّلت الأمن السيبراني لممارسة يومية: 7 أيام مكثّفة في Linux والشبكات وثغرات الويب والتشفير انتهت بالمركز الأول.',
    },
    mediaType: 'video',
    src: '/journey/gdsc-benha-2023/leaderboard-1st.mp4',
    poster: '/journey/gdsc-benha-2023/hands-on-session.webp',
    alt: {
      en: 'Leaderboard recording showing 1st place at GDSC Benha Cybersecurity Bootcamp 2023',
      ar: 'تسجيل لوحة النقاط يظهر المركز الأول في معسكر GDSC بنها 2023',
    },
    href: '/journey/02-gdsc-benha-bootcamp-2023',
  },
  {
    id: 'codeavour-judge',
    tag: { en: 'JUDGING · AI & ROBOTICS', ar: 'تحكيم · روبوتات وذكاء اصطناعي' },
    title: {
      en: 'Technical Judge — Codeavour 5.0 Egyptian League for Robotics & AI',
      ar: 'محكّم تقني — الدوري المصري للروبوتات والذكاء الاصطناعي (Codeavour 5.0)',
    },
    org: { en: 'Codeavour 5.0 × Mechaverse League · Mar 2024', ar: 'Codeavour 5.0 · مارس 2024' },
    date: '2024',
    body: {
      en: 'Evaluated dozens of student robotics and AI prototypes in a single day — sharpening the distinction between real working engineering and slideware.',
      ar: 'تقييم عشرات نماذج الروبوتات والذكاء الاصطناعي في يوم واحد — ما صقل نظرتي للفرق بين الهندسة الحقيقية والعروض النظرية.',
    },
    mediaType: 'image',
    src: '/journey/codeavour-judge-2024/judging-1.webp',
    alt: {
      en: 'Judging student robotics and AI prototypes at Codeavour 5.0 Egypt',
      ar: 'أثناء تحكيم مشاريع الروبوتات والذكاء الاصطناعي في مسابقة Codeavour 5.0',
    },
    href: '/journey/03-codeavour-judge-2024',
  },
  {
    id: 'ecdfp-cert',
    tag: { en: 'CREDENTIAL · DFIR', ar: 'شهادة · تحقيق جنائي' },
    title: {
      en: 'INE Certified Digital Forensics Professional (eCDFP)',
      ar: 'شهادة التحقيق الجنائي الرقمي الاحترافية eCDFP من INE',
    },
    org: { en: 'INE Security · ID 141476433 · Apr 2025', ar: 'INE Security · أبريل 2025' },
    date: '2025',
    body: {
      en: 'Hands-on exam covering forensic acquisition, file systems, Windows & network forensics, and timeline reconstruction — teaching me what telemetry an application must log from day one.',
      ar: 'اختبار عملي في جمع الأدلة وتحليل أنظمة الملفات وWindows والشبكات وبناء الخط الزمني للحوادث.',
    },
    mediaType: 'image',
    src: '/journey/ecdfp-2025/certificate.webp',
    alt: {
      en: 'INE Certified Digital Forensics Professional eCDFP certificate',
      ar: 'شهادة INE eCDFP في التحقيق الجنائي الرقمي',
    },
    href: '/journey/12-ecdfp-ine-2025',
  },
];

/**
 * Interactive 4-Chapter About Narrative
 */
export const storyChapters: StoryChapter[] = [
  {
    num: '01',
    phase: { en: '2022–2024 · Signal Level', ar: '2022–2024 · مستوى الإشارة' },
    title: {
      en: 'Starting where code meets voltage',
      ar: 'البداية حيث يلتقي الكود بالكهرباء',
    },
    lens: 'build',
    body: {
      en: 'My engineering path started with microcontrollers, sensors, and bare logic gates — from Arduino fundamentals to leading the ESP32 Wi-Fi radar software stack for Qader A1 and wiring an autonomous tank out of pure NAND/NOT ICs with zero code.',
      ar: 'بدأت رحلتي الهندسية مع المتحكمات الدقيقة والحساسات والبوابات المنطقية — من أساسيات Arduino إلى قيادة برمجيات روبوت قادر A1 على ESP32 وتصميم دبابة ذاتية بالمنطق الرقمي الصرف بدون أي كود.',
    },
    takeaway: {
      en: 'Hardware removes hand-waving. When a pin state or truth table is wrong, the physical machine stops.',
      ar: 'الهاردوير لا يقبل التخمين؛ أي خطأ في الإشارة أو جدول الحقيقة يوقف الآلة فوراً.',
    },
    image: '/journey/qader-a1-2024/coding-session.webp',
    imageAlt: {
      en: 'Coding firmware for Qader A1 robot',
      ar: 'العمل على برمجة روبوت قادر A1',
    },
    href: '/journey/04-qader-a1-2024',
  },
  {
    num: '02',
    phase: { en: 'Full-Stack · Production Reality', ar: 'Full-Stack · واقع الأنظمة الإنتاجية' },
    title: {
      en: 'Building systems that carry real users',
      ar: 'بناء أنظمة تحمل مستخدمين حقيقيين',
    },
    lens: 'build',
    body: {
      en: 'As a Computer Science & AI student and Full-Stack Developer, I build real systems with authentication, permissions, invoicing, and strict deployment gates — including GymOS (Laravel/MySQL/Svelte), Riyadat, DPRIMS (ESP32), and this zero-third-party Astro platform.',
      ar: 'كطالب علوم حاسب وذكاء اصطناعي ومطوّر Full-Stack، أبني أنظمة حقيقية فيها مصادقة وصلاحيات وفواتير وبوابات نشر صارمة — مثل GymOS وRiyadat وDPRIMS وهذه المنصة.',
    },
    takeaway: {
      en: 'Because I ship the code myself, security is never an abstract checklist — it lives inside the architecture.',
      ar: 'لأنني أكتب الكود بنفسي، الأمان ليس قائمة نظرية بل جزء أصيل من البنية المعمارية.',
    },
    image: '/journey/logic-tank-2024/team-demo.webp',
    imageAlt: {
      en: 'Engineering team demonstration at Benha University',
      ar: 'عرض المشروع الهندسي مع الفريق في جامعة بنها',
    },
    href: '/projects',
  },
  {
    num: '03',
    phase: { en: '2024–2025 · Adversarial Lens', ar: '2024–2025 · العدسة الهجومية' },
    title: {
      en: 'Breaking assumptions under pressure',
      ar: 'اختبار الافتراضات تحت الضغط',
    },
    lens: 'break',
    body: {
      en: 'Reaching #3 in Egypt on TryHackMe, earning CAP With Merit, and competing with Team liel0x1 across ICMTC (Top 25 Onsite), ASCWG (#19 / 400+), and CAT Reloaded (6th / 200+) trained me to spot broken access control, blind injections, and subtle policy drift.',
      ar: 'الوصول للمركز #3 في مصر على TryHackMe والحصول على CAP بامتياز والمنافسة مع فريق liel0x1 في ICMTC وASCWG وCAT Reloaded درّبني على التقاط ثغرات الصلاحيات والحقن وانحراف السياسات.',
    },
    takeaway: {
      en: 'Every writeup here follows a strict contract: dead ends stay in, and every break ends with real code that fixes it.',
      ar: 'كل تحليل هنا يلتزم بعقد صارم: الطرق المسدودة تبقى مكتوبة، وكل اختراق ينتهي بكود إصلاح حقيقي.',
    },
    image: '/journey/icmtc-2025/team-scoreboard.webp',
    imageAlt: {
      en: 'Team liel0x1 5/5 qualifiers scoreboard at ICMTC 2025',
      ar: 'لوحة نتائج فريق liel0x1 في تصفيات ICMTC 2025',
    },
    href: '/journey/14-ascwg-2025',
  },
  {
    num: '04',
    phase: { en: '2025 · Forensics & Community', ar: '2025 · التحقيق الجنائي والمجتمع' },
    title: {
      en: 'Reading timelines & passing it forward',
      ar: 'قراءة الخط الزمني ومشاركة المعرفة',
    },
    lens: 'break',
    body: {
      en: 'Training in DFIR with ITI × CyberTalents and earning INE eCDFP taught me to read a compromised host as a coherent timeline of artifacts. Returning to GDG Benha and GDG CIC to author vulnerable labs and teach students closed the loop.',
      ar: 'التدريب في التحقيق الجنائي مع ITI × CyberTalents وشهادة INE eCDFP علّماني قراءة الحوادث كخط زمني متماسك، والعودة للتدريس وتأليف تحديات CTF في GDG بنها وCIC أغلقت الدائرة.',
    },
    takeaway: {
      en: 'Writing a vulnerable challenge — and proving why the patch holds — is the sharpest test of engineering depth.',
      ar: 'بناء تحدٍ مصاب ثم إثبات لماذا يصمد الإصلاح هو أدق اختبار لعمق الفهم الهندسي.',
    },
    image: '/journey/gdg-campus-2025/security-core-team.webp',
    imageAlt: {
      en: 'GDG Benha Cybersecurity core team',
      ar: 'فريق الأمن السيبراني الأساسي في GDG بنها',
    },
    href: '/journey/10-gdg-campus-trainer-2025',
  },
];
