import { Briefcase, GraduationCap, Code2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { useApp } from '@/context/AppContext';

export default function Experience() {
  const { t } = useApp();

  const milestones = [
    {
      period: t.experience.present,
      title: t.experience.m1Title,
      summary: t.experience.m1Summary,
      tags: ['Flutter', 'Dart', 'Provider', 'Riverpod', 'REST API'],
      icon: Briefcase,
    },
    {
      period: t.experience.inProgress,
      title: t.experience.m2Title,
      summary: t.experience.m2Summary,
      tags: ['Flutter', 'Spring Boot', 'JWT', 'Bakong'],
      icon: Code2,
    },
    {
      period: t.experience.ongoing,
      title: t.experience.m3Title,
      summary: t.experience.m3Summary,
      tags: ['IT', 'Computer Science'],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="section-pad" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
            description={t.experience.description}
          />
        </Reveal>

        <ol className="mt-12 space-y-4">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 100} className="list-none">
              <div className="card-surface relative grid gap-4 p-5 sm:grid-cols-[140px_1fr] sm:p-7">
                <div className="flex items-center gap-2.5 sm:block">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg sm:mb-2"
                    style={{
                      backgroundColor: 'var(--accent-bg)',
                      color: 'var(--accent-text)',
                      boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                    }}
                  >
                    <m.icon className="h-4.5 w-4.5" />
                  </span>
                  <span
                    className="font-mono text-xs uppercase tracking-wider sm:block"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    {m.period}
                  </span>
                </div>

                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {m.summary}
                  </p>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md px-2.5 py-1 font-mono text-[11px]"
                        style={{
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <p
          className="mt-8 flex items-center gap-2 text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          <Briefcase className="h-3.5 w-3.5" />
          {t.experience.note}
        </p>
      </div>
    </section>
  );
}
