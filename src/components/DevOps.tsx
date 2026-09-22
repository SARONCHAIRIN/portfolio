import {
  GitBranch,
  Terminal,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Rocket,
  Server,
  Zap,
  PackageCheck,
  Workflow,
  Layers,
  ArrowRight,
  ArrowDown,
  Code2,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { useApp } from '@/context/AppContext';
import {
  pipelineStages,
  devopsTechnologies,
  devopsSkills,
  pipelineCapabilities,
} from '@/data/portfolio';

const stageIconMap = {
  git: GitBranch,
  package: PackageCheck,
  shield: ShieldCheck,
  check: CheckCircle2,
  cpu: Cpu,
  rocket: Rocket,
} as const;



export default function DevOps() {
  const { t } = useApp();


  const workflowSteps = [
    {
      num: '01',
      title: t.devops.flow.github,
      desc: t.devops.flow.githubDesc,
      icon: GitBranch,
      tech: 'Git / GitHub',
    },
    {
      num: '02',
      title: t.devops.flow.webhook,
      desc: t.devops.flow.webhookDesc,
      icon: Zap,
      tech: 'Webhook Event',
    },
    {
      num: '03',
      title: t.devops.flow.jenkins,
      desc: t.devops.flow.jenkinsDesc,
      icon: Server,
      tech: 'Jenkins Pipeline',
    },
    {
      num: '04',
      title: t.devops.flow.validate,
      desc: t.devops.flow.validateDesc,
      icon: ShieldCheck,
      tech: 'ESLint & Typecheck',
    },
    {
      num: '05',
      title: t.devops.flow.build,
      desc: t.devops.flow.buildDesc,
      icon: Cpu,
      tech: 'Vite Production',
    },
    {
      num: '06',
      title: t.devops.flow.deploy,
      desc: t.devops.flow.deployDesc,
      icon: Rocket,
      tech: 'Vercel CLI',
    },
  ];

  return (
    <section id="devops" className="section-pad relative overflow-hidden" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      {/* Subtle background ambient glows */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--accent-bg)', opacity: 0.7 }}
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--accent-bg)', opacity: 0.5 }}
      />

      <div className="container-page relative">
        {/* ============ SECTION HEADER ============ */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow={t.devops.eyebrow}
              title={t.devops.title}
              description={t.devops.subtitle}
            />

            <div className="flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: 'var(--accent-bg)',
                  color: 'var(--accent-text)',
                  boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                }}
              >
                <Workflow className="h-3.5 w-3.5" />
                CI/CD Pipeline
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                <Server className="h-3.5 w-3.5 text-amber-500" />
                Jenkins Automated
              </span>
            </div>
          </div>
        </Reveal>

        {/* Section Intro Narrative */}
        <Reveal delay={60} className="mt-6">
          <div
            className="rounded-2xl p-5 sm:p-6"
            style={{
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t.devops.description}
            </p>
          </div>
        </Reveal>

        {/* ============ CI/CD WORKFLOW TIMELINE ============ */}
        <div className="mt-14">
          <Reveal delay={100}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {t.devops.workflowTitle}
                </h3>
                <p className="mt-1 text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                  {t.devops.workflowSubtitle}
                </p>
              </div>
              <span
                className="hidden font-mono text-xs font-medium sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-md"
                style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
              >
                Push ➔ Webhook ➔ Jenkins ➔ Build ➔ Vercel
              </span>
            </div>
          </Reveal>

          {/* Desktop & Tablet: Horizontal Flowchart */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-3">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <Reveal key={step.num} delay={120 + idx * 40} className="relative">
                  <div
                    className="card-surface group h-full flex flex-col justify-between p-4 transition-all duration-300 hover:-translate-y-1"
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-border)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent-text)' }}>
                          {step.num}
                        </span>
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: 'var(--accent-bg)',
                            color: 'var(--accent-text)',
                            boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                          }}
                        >
                          <StepIcon className="h-4 w-4" />
                        </div>
                      </div>
                      <h4 className="text-sm font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {step.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                      <span className="font-mono text-[11px] block truncate" style={{ color: 'var(--accent-text)' }}>
                        {step.tech}
                      </span>
                    </div>
                  </div>

                  {/* Connecting Arrow for all except last item */}
                  {idx < workflowSteps.length - 1 && (
                    <div
                      className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden xl:flex h-5 w-5 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: 'var(--bg-elevated)',
                        color: 'var(--accent-text)',
                        border: '1px solid var(--accent-border)',
                      }}
                    >
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Mobile & Medium screens: Vertical Timeline */}
          <div className="lg:hidden space-y-3">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <Reveal key={step.num} delay={100 + idx * 30}>
                  <div
                    className="card-surface relative flex items-start gap-4 p-4 transition-all duration-300"
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-border)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: 'var(--accent-bg)',
                        color: 'var(--accent-text)',
                        boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                      }}
                    >
                      <StepIcon className="h-5 w-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                          {step.title}
                        </h4>
                        <span className="font-mono text-xs font-bold shrink-0" style={{ color: 'var(--accent-text)' }}>
                          {step.num}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {step.desc}
                      </p>
                      <div className="mt-2">
                        <span
                          className="inline-block rounded px-2 py-0.5 font-mono text-[11px]"
                          style={{
                            backgroundColor: 'var(--bg-elevated)',
                            color: 'var(--accent-text)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {step.tech}
                        </span>
                      </div>
                    </div>

                    {/* Down arrow connector for mobile */}
                    {idx < workflowSteps.length - 1 && (
                      <div className="absolute -bottom-2.5 left-8 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--bg)] border border-[var(--border-strong)] text-[var(--accent)]">
                        <ArrowDown className="h-2.5 w-2.5" />
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ============ SIX PRIMARY PIPELINE STAGES ============ */}
        <div className="mt-16">
          <Reveal delay={120}>
            <div className="mb-6">
              <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {t.devops.stagesTitle}
              </h3>
              <p className="mt-1 text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                {t.devops.stagesDesc}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pipelineStages.map((stage, i) => {
              const StageIcon = stageIconMap[stage.icon];
              const stageData = t.devops.stages[stage.key];

              return (
                <Reveal key={stage.id} delay={140 + i * 40}>
                  <div
                    className="card-surface group flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 h-full"
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-border)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: 'var(--accent-bg)',
                            color: 'var(--accent-text)',
                            boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                          }}
                        >
                          <StageIcon className="h-5 w-5" />
                        </div>
                        <span
                          className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md"
                          style={{
                            backgroundColor: 'var(--bg-elevated)',
                            color: 'var(--accent-text)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          Stage {stage.stepNumber}
                        </span>
                      </div>

                      <h4 className="mt-4 text-base font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {stageData.title}
                      </h4>

                      <p className="mt-2 text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {stageData.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                      <div className="flex items-center gap-2">
                        <Terminal className="h-3.5 w-3.5 shrink-0" style={{ color: 'var(--text-muted)' }} />
                        <code
                          className="truncate font-mono text-xs px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: 'var(--bg-elevated)',
                            color: 'var(--accent-text)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {stage.command}
                        </code>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ============ SHOWCASE CARD + PIPELINE AS CODE ============ */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Left Column (5 cols): Project Showcase & Pipeline Capabilities */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Project Showcase Card */}
            <Reveal delay={180}>
              <div
                className="card-surface p-6 sm:p-7 relative overflow-hidden"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-border)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                    style={{
                      backgroundColor: 'var(--accent-bg)',
                      color: 'var(--accent-text)',
                      boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                    }}
                  >
                    <Layers className="h-3 w-3" />
                    {t.devops.projectCard.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {t.devops.projectCard.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {t.devops.projectCard.description}
                </p>

                {/* Technology Badges */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-muted)' }}>
                    Verified Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {devopsTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2.5 py-1 font-mono text-xs transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Automation Highlights */}
                <div className="mt-6 pt-5 border-t" style={{ borderColor: 'var(--border)' }}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                    {t.devops.projectCard.highlightsTitle}
                  </h4>
                  <ul className="space-y-2">
                    {t.devops.projectCard.highlights.map((h: string) => (
                      <li key={h} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Pipeline Capabilities Checklist */}
            <Reveal delay={200}>
              <div
                className="card-surface p-5 sm:p-6"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-border)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {t.devops.capabilities.title}
                  </h4>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--accent-text)' }}>
                    Repository Codified
                  </span>
                </div>
                <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                  {t.devops.capabilities.subtitle}
                </p>

                <ul className="space-y-2.5">
                  {pipelineCapabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2.5 text-xs" style={{ color: 'var(--text-primary)' }}>
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        ✓
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right Column (7 cols): Pipeline as Code & Jenkinsfile Preview */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal delay={220} className="h-full">
              <div
                className="card-surface flex flex-col justify-between overflow-hidden h-full"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-border)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                {/* Header info */}
                <div className="p-6 sm:p-7 pb-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                      <h3 className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {t.devops.pipelineAsCode.title}
                      </h3>
                    </div>
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: 'var(--accent-bg)',
                        color: 'var(--accent-text)',
                        border: '1px solid var(--accent-border)',
                      }}
                    >
                      {t.devops.pipelineAsCode.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t.devops.pipelineAsCode.description}
                  </p>
                </div>

                {/* Code Window */}
                <div className="px-5 pb-5 sm:px-7 sm:pb-7 flex-1 flex flex-col">
                  <div
                    className="rounded-xl overflow-hidden border flex-1 flex flex-col"
                    style={{
                      borderColor: 'var(--border-strong)',
                      backgroundColor: 'var(--bg)',
                    }}
                  >
                    {/* Window Titlebar */}
                    <div
                      className="flex items-center justify-between px-4 py-2.5 border-b"
                      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-elevated)' }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-mono text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                          Jenkinsfile (Declarative Pipeline)
                        </span>
                      </div>


                    </div>

                    {/* Code Display */}
                    <div className="p-4 overflow-x-auto font-mono text-[12px] leading-relaxed select-text flex-1">
                      <pre style={{ color: 'var(--text-secondary)' }}>

                        <code>
                          <span style={{ color: 'var(--accent)' }}>pipeline</span> {'{\n'}
                          {'    '}<span style={{ color: 'var(--accent-text)' }}>agent</span> any{'\n\n'}
                          {'    '}<span style={{ color: 'var(--accent)' }}>stages</span> {'{\n'}
                          {'        '}<span style={{ color: 'var(--accent-text)' }}>stage</span>(<span className="text-emerald-400">&apos;Checkout&apos;</span>) {'{ steps { checkout scm } }\n'}
                          {'        '}<span style={{ color: 'var(--accent-text)' }}>stage</span>(<span className="text-emerald-400">&apos;Install Dependencies&apos;</span>) {'{\n'}
                          {'            steps { sh '}
                          <span className="text-emerald-400">&apos;npm ci&apos;</span>
                          {' }\n'}
                          {'        }\n'}
                          {'        '}<span style={{ color: 'var(--accent-text)' }}>stage</span>(<span className="text-emerald-400">&apos;Lint&apos;</span>) {'{\n'}
                          {'            steps { sh '}
                          <span className="text-emerald-400">&apos;npm run lint&apos;</span>
                          {' }\n'}
                          {'        }\n'}
                          {'        '}<span style={{ color: 'var(--accent-text)' }}>stage</span>(<span className="text-emerald-400">&apos;Type Check&apos;</span>) {'{\n'}
                          {'            steps { sh '}
                          <span className="text-emerald-400">&apos;npm run typecheck&apos;</span>
                          {' }\n'}
                          {'        }\n'}
                          {'        '}<span style={{ color: 'var(--accent-text)' }}>stage</span>(<span className="text-emerald-400">&apos;Build&apos;</span>) {'{\n'}
                          {'            steps { sh '}
                          <span className="text-emerald-400">&apos;npm run build&apos;</span>
                          {' }\n'}
                          {'        }\n'}
                          {'        '}<span style={{ color: 'var(--accent-text)' }}>stage</span>(<span className="text-emerald-400">&apos;Deploy to Vercel&apos;</span>) {'{\n'}
                          {'            steps {\n'}
                          {'                withCredentials([string(credentialsId: '}
                          <span className="text-emerald-400">&apos;portfolio-vercel-token&apos;</span>
                          {', variable: '}
                          <span className="text-emerald-400">&apos;VERCEL_TOKEN&apos;</span>
                          {')]) {\n'}
                          {'                    sh '}
                          <span className="text-emerald-400">&apos;npx vercel deploy --prod --yes --token=&quot;$VERCEL_TOKEN&quot;&apos;</span>
                          {'\n'}
                          {'                }\n'}
                          {'            }\n'}
                          {'        }\n'}
                          {'    }\n'}
                          {'}'}
                        </code>
                      </pre>
                    </div>

                    {/* Status note footer */}
                    <div
                      className="px-4 py-2 border-t flex items-center justify-between text-[11px]"
                      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-elevated)', color: 'var(--text-muted)' }}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Version Controlled (Jenkinsfile)
                      </span>
                      <a
                        href="https://github.com/SARONCHAIRIN/portfolio_chhairin/blob/main/Jenkinsfile"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-[var(--accent-text)] hover:underline"
                      >

                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ============ DEVOPS SKILLS & TOOLING ============ */}
        <Reveal delay={240} className="mt-14">
          <div
            className="card-surface p-6 sm:p-7"
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-border)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
              <div>
                <h4 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {t.devops.skillsTitle}
                </h4>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  Practical automation concepts and tools integrated into development workflow
                </p>
              </div>
              <span className="font-mono text-xs shrink-0" style={{ color: 'var(--accent-text)' }}>
                10 Core Competencies
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {devopsSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors"
                  style={{
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg-elevated)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-border)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
