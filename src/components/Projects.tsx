


import { Github, ExternalLink, ArrowUpRight, Star, Smartphone, Layers, Monitor, Tablet } from 'lucide-react';
import { featuredProject, otherProjects } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';
import Reveal from '@/components/Reveal';
import { useApp } from '@/context/AppContext';

function TechChip({ name }: { name: string }) {
  return (
    <span
      className="rounded-md px-2.5 py-1 font-mono text-xs transition-colors"
      style={{
        backgroundColor: 'var(--accent-bg)',
        color: 'var(--accent-text)',
        boxShadow: 'inset 0 0 0 1px var(--accent-border)',
      }}
    >
      {name}
    </span>
  );
}

function PlatformBadge({ name }: { name: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
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
      <Smartphone className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
      {name}
    </span>
  );
}

function FeatureItem({ label }: { label: string }) {
  return (
    <li
      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
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
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
      {label}
    </li>
  );
}

export default function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </Reveal>

        {/* ============ CASE STUDY ============ */}
        <Reveal delay={80} className="mt-12">
          <article
            className="overflow-hidden rounded-2xl shadow-card"
            style={{
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            {/* --- Header band --- */}
            <div
              className="relative overflow-hidden px-5 py-9 sm:px-10 sm:py-14"
              style={{
                borderBottom: '1px solid var(--border)',
                background: 'linear-gradient(to bottom right, var(--bg-elevated), var(--bg-subtle))',
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  opacity: 0.05,
                  backgroundImage:
                    'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                  backgroundSize: '36px 36px',
                  color: 'var(--text-primary)',
                }}
              />
              <div
                className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-3xl"
                style={{ backgroundColor: 'var(--accent-bg)' }}
              />

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: 'var(--accent-bg)',
                      color: 'var(--accent-text)',
                      boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                    }}
                  >
                    <Star className="h-3 w-3" />
                    {t.projects.featured}
                  </span>
                  <h3
                    className="mt-4 text-3xl font-extrabold tracking-tightest sm:text-4xl lg:text-5xl"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {featuredProject.name}
                  </h3>
                  <p
                    className="mt-2 text-sm font-medium sm:text-base"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    {t.projects.tagline}
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                  style={{
                    border: '1px solid var(--border-strong)',
                    backgroundColor: 'var(--bg-elevated)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Layers className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
                  {t.projects.role}
                </span>
              </div>
            </div>

            {/* --- Large hero screenshot --- */}
            <div className="px-5 pt-8 sm:px-10">
              <div className="mb-2 flex items-center justify-between">
                <p
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t.projects.appPreview}
                </p>
                <span
                  className="hidden font-mono text-[11px] sm:block"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t.projects.replaceHint}
                </span>
              </div>
              <div
                className="overflow-hidden rounded-xl"
                style={{
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--bg-elevated)',
                }}
              >
                <video
                  src="/videos/video_project.mp4"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* --- Platforms + Technologies --- */}
            <div className="grid gap-8 px-5 py-10 sm:px-10 lg:grid-cols-2">
              <div>
                <p
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t.projects.platforms}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredProject.platforms.map((p) => (
                    <PlatformBadge key={p} name={p} />
                  ))}
                </div>
                <p
                  className="mt-4 text-xs leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t.projects.platformsNote}
                </p>
              </div>

              <div>
                <p
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t.projects.technologies}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <TechChip key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </div>

            {/* --- Features grid --- */}
            <div className="px-5 py-10 sm:px-10" style={{ borderTop: '1px solid var(--border)' }}>
              <p
                className="font-mono text-xs uppercase tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                {t.projects.features}
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {t.projects.featuresList.map((f) => (
                  <FeatureItem key={f} label={f} />
                ))}
              </ul>
            </div>

  {/* --- Adaptive UI Showcase --- */}
<div
  className="px-5 py-12 sm:px-10 lg:py-14"
  style={{
    borderTop: '1px solid var(--border)',
    backgroundColor: 'var(--bg-subtle)',
  }}
>
  {/* Header */}
  <div className="max-w-2xl">
    <div className="flex items-center gap-2">
      <div
        className="flex h-7 w-7 items-center justify-center rounded-lg"
        style={{
          backgroundColor: 'var(--accent-bg)',
          color: 'var(--accent)',
          border: '1px solid var(--accent-border)',
        }}
      >
        <Smartphone className="h-3.5 w-3.5" />
      </div>

      <p
        className="font-mono text-xs font-semibold uppercase tracking-[0.15em]"
        style={{ color: 'var(--text-muted)' }}
      >
        Adaptive UI — Same App, Different Screens
      </p>
    </div>

    <p
      className="mt-4 text-sm leading-7 sm:text-[15px]"
      style={{ color: 'var(--text-secondary)' }}
    >
      {featuredProject.highlightDetail}
    </p>
  </div>

  {/* Showcase */}
  <div className="mt-10 grid items-center gap-8 lg:grid-cols-[220px_150px_minmax(0,1fr)]">

    {/* ================= MOBILE ================= */}
    <div className="flex flex-col items-center">
      <div className="group relative w-[185px]">

        {/* Phone image */}
        <div
          className="relative overflow-hidden rounded-[24px] p-1.5 shadow-card transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="overflow-hidden rounded-[19px]">
            <img
              src="/images/projects/e-shop/mobile.png"
              alt="E-Shop Mobile UI"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>

          {/* Hover overlay */}
          <div
            className="absolute inset-1.5 flex items-center justify-center rounded-[19px] opacity-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              backgroundColor: 'rgba(0,0,0,0.38)',
            }}
          >
            <a
              href={featuredProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
              }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View Project
            </a>
          </div>
        </div>

        {/* Label */}
        <div className="mt-4 text-center">
          <p
            className="text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            Mobile
          </p>

          <p
            className="mt-1 font-mono text-[10px] uppercase tracking-wider"
            style={{ color: 'var(--text-muted)' }}
          >
            E-Shop Mobile UI
          </p>
        </div>
      </div>
    </div>

    {/* ================= CENTER ================= */}
    <div className="flex flex-col items-center justify-center">
      
      <div
        className="rounded-full px-4 py-2 text-xs font-semibold"
        style={{
          backgroundColor: 'var(--accent-bg)',
          color: 'var(--accent-text)',
          border: '1px solid var(--accent-border)',
        }}
      >
        1 codebase
      </div>

      <div
        className="my-3 flex items-center gap-2"
        style={{ color: 'var(--accent)' }}
      >
        <div
          className="h-px w-8"
          style={{ backgroundColor: 'var(--accent-border)' }}
        />

        <ArrowUpRight className="h-5 w-5" />

        <div
          className="h-px w-8"
          style={{ backgroundColor: 'var(--accent-border)' }}
        />
      </div>

      <span
        className="font-mono text-[10px] font-medium uppercase tracking-[0.16em]"
        style={{ color: 'var(--text-muted)' }}
      >
        responsive layout
      </span>
    </div>

    {/* ================= DESKTOP ================= */}
    <div className="w-full">
      <div className="group">

        {/* Browser frame */}
        <div
          className="overflow-hidden rounded-2xl shadow-card transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Browser header */}
          <div
            className="flex h-9 items-center gap-2 px-3"
            style={{
              borderBottom: '1px solid var(--border)',
              backgroundColor: 'var(--bg-elevated)',
            }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: 'var(--border-strong)' }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: 'var(--border-strong)' }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: 'var(--border-strong)' }}
            />

            <div
              className="ml-2 flex h-5 flex-1 items-center rounded-md px-3 font-mono text-[9px]"
              style={{
                backgroundColor: 'var(--bg-subtle)',
                color: 'var(--text-muted)',
              }}
            >
              eshop-nine-gilt.vercel.app
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative overflow-hidden">
            <img
              src="/images/projects/e-shop/desktop.png"
              alt="E-Shop Desktop UI"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.025]"
              loading="lazy"
            />

            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
              style={{
                backgroundColor: 'rgba(0,0,0,0.42)',
              }}
            >
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                }}
              >
                <ExternalLink className="h-4 w-4" />
                View Live Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Desktop
            </p>

            <p
              className="mt-1 font-mono text-[10px] uppercase tracking-wider"
              style={{ color: 'var(--text-muted)' }}
            >
              E-Shop Desktop UI
            </p>
          </div>

          <a
            href={featuredProject.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--accent-bg)',
              color: 'var(--accent-text)',
              border: '1px solid var(--accent-border)',
            }}
          >
            View
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

            {/* --- Smaller screenshots: Mobile / Tablet / Web / Desktop --- */}
            <div className="px-5 py-10 sm:px-10" style={{ borderTop: '1px solid var(--border)' }}>
              <p
                className="font-mono text-xs uppercase tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                {t.projects.formFactors}
              </p>
              
              {/* Updated grid layout mapping over 'images' arrays */}
              


              {/* --- Form factors: 2 Columns layout --- */}
<div className="px-5 py-10 sm:px-10" style={{ borderTop: '1px solid var(--border)' }}>
  <p
    className="font-mono text-xs uppercase tracking-wider"
    style={{ color: 'var(--text-muted)' }}
  >
    {t.projects.formFactors}
  </p>
  
  {/* Changed from lg:grid-cols-4 to sm:grid-cols-2 for a strict 2-column structure */}
  <div className="mt-5 grid gap-6 sm:grid-cols-2">
    {[
      {
        label: 'Mobile',
        Icon: Smartphone,
        images: [
          '/images/projects/e-shop/bakong_qr.png',
        ],
      },
      {
        label: 'Tablet',
        Icon: Tablet,
        images: [
          '/images/projects/e-shop/tablet.png',
          '/images/projects/e-shop/tablet1.png',
        ],
      },
      {
        label: 'Desktop',
        Icon: Monitor,
        images: [
          '/images/projects/e-shop/web.png',
          '/images/projects/e-shop/web1.png',
        ],
      },
      {
        label: 'Desktop',
        Icon: Monitor,
        images: [
          '/images/projects/e-shop/desktop.png',
          '/images/projects/e-shop/desktop1.png',
        ],
      },
    ].map(({ label, Icon, images }) => (
      <div key={label} className="group/frm transition-transform duration-300 hover:-translate-y-1">
        <div
          className="mb-2 flex items-center gap-1.5 text-xs font-medium"
          style={{ color: 'var(--text-secondary)' }}
        >
          <Icon className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
          {label}
        </div>

        {/* Multiple images stacked inside each column */}
        <div className="flex flex-col gap-4">
          {images.map((image, index) => (
            <div
              key={image}
              className="overflow-hidden rounded-xl"
              style={{
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg-elevated)',
              }}
            >
              <img
                src={image}
                alt={`E-Shop ${label} UI ${index + 1}`}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover/frm:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
            </div>

            {/* --- Actions --- */}
            <div
              className="flex flex-wrap items-center gap-3 px-5 py-7 sm:px-10"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <Github className="h-4 w-4" />
                {t.projects.viewGithub}
              </a>
              <a
  href={featuredProject.live}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-ghost w-full sm:w-auto"
>
  <ExternalLink className="h-4 w-4" />
  {t.projects.viewProject}
</a>
              <span
                className="ml-auto hidden font-mono text-[11px] sm:block lg:ml-auto"
                style={{ color: 'var(--text-muted)' }}
              >
                {featuredProject.github.replace('https://', '')}
              </span>
            </div>
          </article>
        </Reveal>

        {/* Other projects */}
        <div className="mt-14">
          <Reveal>
            <h3
              className="text-lg font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.projects.moreWork}
            </h3>
          </Reveal>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-0.5"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-border)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: 'var(--accent-bg)',
                        color: 'var(--accent-text)',
                        boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                      }}
                    >
                      <Github className="h-5 w-5" />
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: 'var(--text-muted)' }}
                    />
                  </div>
                  <h4
                    className="mt-4 text-base font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {p.name}
                  </h4>
                  <p
                    className="mt-2 flex-1 text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {t.projects.moreWorkDesc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2 py-0.5 font-mono text-[11px]"
                        style={{
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}