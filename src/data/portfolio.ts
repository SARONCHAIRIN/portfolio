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

export type NavItem = {
  labelKey: 'home' | 'about' | 'skills' | 'projects' | 'devops' | 'experience' | 'education' | 'contact';
  href: string;
};

export const navItems: NavItem[] = [
  { labelKey: 'home', href: '#home' },
  { labelKey: 'about', href: '#about' },
  { labelKey: 'skills', href: '#skills' },
  { labelKey: 'projects', href: '#projects' },
  { labelKey: 'devops', href: '#devops' },
  { labelKey: 'experience', href: '#experience' },
  { labelKey: 'education', href: '#education' },
  { labelKey: 'contact', href: '#contact' },
];

export type PipelineStage = {
  id: string;
  stepNumber: string;
  icon: 'git' | 'package' | 'shield' | 'check' | 'cpu' | 'rocket';
  key: 'checkout' | 'install' | 'lint' | 'typecheck' | 'build' | 'deploy';
  command: string;
};

export const pipelineStages: PipelineStage[] = [
  { id: 'checkout', stepNumber: '01', icon: 'git', key: 'checkout', command: 'checkout scm' },
  { id: 'install', stepNumber: '02', icon: 'package', key: 'install', command: 'npm ci' },
  { id: 'lint', stepNumber: '03', icon: 'shield', key: 'lint', command: 'npm run lint' },
  { id: 'typecheck', stepNumber: '04', icon: 'check', key: 'typecheck', command: 'npm run typecheck' },
  { id: 'build', stepNumber: '05', icon: 'cpu', key: 'build', command: 'npm run build' },
  { id: 'deploy', stepNumber: '06', icon: 'rocket', key: 'deploy', command: 'npx vercel deploy --prod' },
];

export const devopsTechnologies = [
  'Jenkins',
  'Jenkinsfile',
  'CI/CD',
  'GitHub',
  'GitHub Webhooks',
  'Node.js',
  'npm',
  'ESLint',
  'TypeScript',
  'Vite',
  'Vercel',
];

export const devopsSkills = [
  'CI/CD',
  'Jenkins Pipeline',
  'Pipeline as Code',
  'GitHub Webhooks',
  'Automated Validation',
  'Automated Build',
  'Deployment Automation',
  'Vercel Deployment',
  'Git Workflow',
];

export const pipelineCapabilities = [
  'Source Code Checkout',
  'Deterministic Dependency Installation (npm ci)',
  'Code Quality Linting (ESLint)',
  'TypeScript Static Type Check',
  'Optimized Vite Production Build',
  'Automated Vercel Deployment',
];

export type SkillCategory = {
  key: 'flutter' | 'backend' | 'platform' | 'tools' | 'devops';
  icon: 'flutter' | 'server' | 'platform' | 'tools' | 'devops';
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
    key: 'devops',
    icon: 'devops',
    skills: [
      'Git',
      'GitHub',
      'Jenkins',
      'Jenkins Pipeline',
      'Jenkinsfile',
      'CI/CD',
      'GitHub Webhooks',
      'Node.js',
      'npm',
      'ESLint',
      'TypeScript',
      'Vite',
      'Vercel',
      'Render',
    ],
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
