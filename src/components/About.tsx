import { GraduationCap, Code2, Smartphone } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { useApp } from '@/context/AppContext';

const focus = [
  { label: 'Flutter', icon: Code2 },
  { label: 'Dart', icon: Code2 },
  { label: 'REST API', icon: Code2 },
  { label: 'State Management', icon: Code2 },
  { label: 'Responsive UI', icon: Smartphone },
  { label: 'Cross-platform', icon: Smartphone },
  { label: 'E-commerce apps', icon: Smartphone },
];

export default function About() {
  const { t } = useApp();
  const paragraphs = [t.about.p1, t.about.p2, t.about.p3];

  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 md:gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal delay={80}>
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {p}
                </p>
              ))}

              <div className="flex flex-wrap gap-2 pt-2">
                {focus.map((f) => (
                  <span
                    key={f.label}
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
                    <f.icon className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
                    {f.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <aside className="card-surface h-fit p-6">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'var(--accent-bg)',
                    color: 'var(--accent-text)',
                    boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                  }}
                >
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t.about.student}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {t.about.university}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { k: t.about.primary, v: t.about.primaryValue },
                  { k: t.about.state, v: t.about.stateValue },
                  { k: t.about.backend, v: t.about.backendValue },
                  { k: t.about.platforms, v: t.about.platformsValue },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between pb-3 last:border-0 last:pb-0"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <span
                      className="font-mono text-xs uppercase tracking-wider"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {row.k}
                    </span>
                    <span
                      className="text-right text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
