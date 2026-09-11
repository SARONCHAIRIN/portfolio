export const profile = {
  name: 'CHHAIRIN SARON',
  firstName: 'CHHAIRIN',
  title: 'Flutter Developer',
  secondaryTitle: 'Cross-Platform App Developer',
  location: 'Phnom Penh, Cambodia',
  github: 'https://github.com/SARONCHAIRIN',
  githubHandle: 'SARONCHAIRIN',
  linkedin: 'https://www.linkedin.com/',
  facebook: 'https://www.facebook.com/share/19VYefDR3u/',
  email: 'saronchairin@gmail.com',
  resumeUrl: '/resume/CHHAIRIN-SARON-CV.pdf',
};

export type NavItem = { labelKey: 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact'; href: string };

export const navItems: NavItem[] = [
  { labelKey: 'home', href: '#home' },
  { labelKey: 'about', href: '#about' },
  { labelKey: 'skills', href: '#skills' },
  { labelKey: 'projects', href: '#projects' },
  { labelKey: 'experience', href: '#experience' },
  { labelKey: 'education', href: '#education' },
  { labelKey: 'contact', href: '#contact' },
];

export type SkillCategory = {
  key: 'flutter' | 'backend' | 'platform' | 'tools';
  icon: 'flutter' | 'server' | 'platform' | 'tools';
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: 'flutter',
    icon: 'flutter',
    skills: ['Flutter', 'Dart', 'Provider', 'Riverpod', 'Responsive UI', 'Adaptive UI'],
  },
  {
    key: 'backend',
    icon: 'server',
    skills: ['REST API', 'JSON', 'JWT', 'Spring Boot', 'Firebase'],
  },
  {
    key: 'platform',
    icon: 'platform',
    skills: ['Android', 'iOS', 'Web', 'Windows', 'macOS', 'Linux'],
  },
  {
    key: 'tools',
    icon: 'tools',
    skills: ['Git', 'GitHub'],
  },
];

export const featuredProject = {
  name: 'E-Shop',

  technologies: [
    'Flutter',
    'Dart',
    'REST API',
    'JWT',
    'Provider',
    'Riverpod',
    'Spring Boot',
    'Git',
  ],

  platforms: [
    'Android',
    'iOS',
    'Web',
    'Windows',
    'macOS',
    'Linux',
  ],

  highlightDetail:
    'The application adapts its interface across different screen sizes and platforms — from compact phone layouts to expansive desktop navigation — while keeping a single Flutter codebase.',

  github: 'https://github.com/SARONCHAIRIN/project_e_shop',

  live: 'https://eshop-nine-gilt.vercel.app/',
};

export type OtherProject = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  href: string;
  github?: string;
  backendRepo?: string;
  swaggerUrl?: string;
  tagLabel?: string;
};


export const otherProjects: OtherProject[] = [
  {
    name: 'Household Food System (API)',
    description: 'A robust backend REST API built with Node.js and Express, fully documented with Swagger UI.',
    tech: ['Node.js', 'Express', 'Swagger API', 'Render'],
    href: 'https://household-food-system.onrender.com/swagger-ui/',
    github: 'https://github.com/SARONCHAIRIN/household-food-system',
    image: '/images/projects/food/household-food-api.png',
    tagLabel: 'Household Food System(API)',
  },
  {
    name: 'Household Food System (Web)',
    description: 'A responsive frontend platform for managing and tracking household food inventories.',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    href: 'https://household-food-system-web.vercel.app/',
    github: 'https://github.com/SARONCHAIRIN/household-food-system-web',
    image: '/images/projects/food/household-food-web.png',
    tagLabel: 'Household Food System',
  },

  {
    name: 'E SHOP',
    description: 'A cross-platform e-commerce application built with Flutter, featuring a responsive UI and state management using Provider and Riverpod.',
    image: '/images/projects/food/eshop.png',
    github: 'https://github.com/SARONCHAIRIN/project_e_shop',
    tech: ['Flutter', 'Dart', 'Cross-Platform'],
    href: 'https://eshop-nine-gilt.vercel.app',
    tagLabel: 'E-Shop',

  },
];

export type EducationItem = {
  institutionKey: 'institution';
  degreeKey: 'degree';
  periodKey: 'period';
  graduationKey: 'graduation';
};

export const education: EducationItem[] = [
  {
    institutionKey: 'institution',
    degreeKey: 'degree',
    periodKey: 'period',
    graduationKey: 'graduation',
  },
];

export type LanguageItem = { nameKey: 'khmer' | 'english'; levelKey: 'khmerLevel' | 'englishLevel' };

export const languages: LanguageItem[] = [
  { nameKey: 'khmer', levelKey: 'khmerLevel' },
  { nameKey: 'english', levelKey: 'englishLevel' },
];
