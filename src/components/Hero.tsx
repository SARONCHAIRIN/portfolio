import { ArrowUpRight, Download, Github, Linkedin, Facebook, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useApp } from '@/context/AppContext';

const PROFILE_IMAGE_URL =
  '/images/profile/chhairin_profile.jpg';

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[480px] w-[680px] max-w-[120vw] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: 'var(--accent-bg)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)',
          }}
        />
      </div>

      <div className="container-page">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* === LEFT: Text + buttons === */}
          <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium animate-fade-up"
              style={{
                border: '1px solid var(--border-strong)',
                backgroundColor: 'var(--bg-elevated)',
                color: 'var(--text-secondary)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t.hero.available}
            </div>

            <p
              className="mt-6 font-mono text-sm animate-fade-up sm:mt-7"
              style={{ animationDelay: '60ms', color: 'var(--accent-text)' }}
            >
              {t.hero.greeting}
            </p>

            <h1
              className="mt-3 text-[2.75rem] font-extrabold leading-[1.04] tracking-tightest animate-fade-up sm:text-6xl lg:text-7xl"
              style={{ animationDelay: '120ms', color: 'var(--text-primary)' }}
            >
              {t.hero.title}
            </h1>

            <p
              className="mt-5 max-w-xl text-lg font-medium animate-fade-up"
              style={{ animationDelay: '180ms', color: 'var(--text-primary)' }}
            >
              {t.hero.tagline}
            </p>

            <p
              className="mt-4 max-w-xl text-base leading-relaxed animate-fade-up"
              style={{ animationDelay: '240ms', color: 'var(--text-secondary)' }}
            >
              {t.hero.description}
            </p>

            <div
              className="mt-8 flex w-full flex-col gap-3 animate-fade-up sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
              style={{ animationDelay: '300ms' }}
            >
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                {t.hero.viewProjects}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
  href={profile.resumeUrl}
  download="CHHAIRIN-SARON-CV.pdf"
  className="btn-ghost w-full sm:w-auto"
>
  <Download className="h-4 w-4" />
  {t.hero.downloadResume}
</a>
            </div>

            <div
              className="mt-9 flex flex-wrap items-center justify-center gap-5 animate-fade-up lg:justify-start"
              style={{ animationDelay: '360ms' }}
            >
              <div className="flex items-center gap-3">
                {[
                  { href: profile.github, label: 'GitHub', Icon: Github },
                  { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
                  { href: profile.facebook, label: 'Facebook', Icon: Facebook },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border transition-all"
                    style={{ borderColor: 'var(--border-strong)', color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-border)';
                      e.currentTarget.style.color = 'var(--accent-text)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-strong)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
              <div
                className="hidden h-6 w-px sm:block"
                style={{ backgroundColor: 'var(--border-strong)' }}
              />
              <div
                className="flex items-center gap-1.5 text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <MapPin className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                {profile.location}
              </div>
            </div>
          </div>

          {/* === RIGHT: Profile photo === */}
          <div
            className="flex shrink-0 animate-fade-up items-center justify-center"
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative">
              {/* Decorative glow behind image */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2rem] blur-2xl"
                style={{ backgroundColor: 'var(--accent-bg)' }}
              />

              {/* Decorative code-bracket watermark */}
              <span
                className="pointer-events-none absolute -left-4 top-4 select-none font-mono text-2xl font-bold opacity-20"
                style={{ color: 'var(--accent)' }}
              >
                {'</>'}
              </span>
              <span
                className="pointer-events-none absolute -right-3 bottom-6 select-none font-mono text-xl font-bold opacity-15"
                style={{ color: 'var(--accent)' }}
              >
                {'{ }'}
              </span>

              {/* Image container */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  width: 'clamp(260px, 70vw, 420px)',
                  aspectRatio: '3 / 4',
                  border: '2px solid var(--accent-border)',
                  boxShadow:
                    '0 0 0 1px var(--border), 0 20px 50px -12px rgba(0,0,0,0.3), 0 0 30px -5px var(--accent-bg)',
                  backgroundColor: 'var(--bg-elevated)',
                }}
              >
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="CHHAIRIN SARON - Flutter Developer"
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                {/* Subtle bottom gradient for depth */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
                  style={{
                    background:
                      'linear-gradient(to top, var(--bg-card), transparent)',
                    opacity: 0.4,
                  }}
                />
              </div>

              {/* Small floating tech badges */}
              <div
                className="absolute -right-3 top-8 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold shadow-lg sm:-right-5"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent-text)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                Flutter
              </div>
              <div
                className="absolute -left-3 bottom-10 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold shadow-lg sm:-left-5"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-secondary)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                Dart
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none mt-16 h-px w-full sm:mt-20"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--border-strong), transparent)',
        }}
      />
    </section>
  );
}
