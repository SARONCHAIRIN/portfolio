import { GraduationCap, Globe, CalendarClock } from 'lucide-react';
import { education, languages } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { useApp } from '@/context/AppContext';

export default function Education() {
  const { t } = useApp();

  return (
    <section id="education" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={t.education.eyebrow}
            title={t.education.title}
            description={t.education.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={80}>
            <div className="card-surface p-6 sm:p-7">
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
                <h3
                  className="text-base font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t.education.educationTitle}
                </h3>
              </div>

              <div className="mt-6 space-y-5">
                {education.map((e) => (
                  <div
                    key={e.institutionKey}
                    className="rounded-xl p-5"
                    style={{
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--bg-elevated)',
                    }}
                  >
                    <h4
                      className="text-lg font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t.education[e.institutionKey]}
                    </h4>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: 'var(--accent-text)' }}
                    >
                      {t.education[e.degreeKey]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                        style={{
                          border: '1px solid var(--border)',
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <CalendarClock className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
                        {t.education[e.periodKey]}
                      </span>
                      <span
                        className="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium"
                        style={{
                          border: '1px solid var(--accent-border)',
                          backgroundColor: 'var(--accent-bg)',
                          color: 'var(--accent-text)',
                        }}
                      >
                        {t.education[e.graduationKey]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card-surface p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'var(--accent-bg)',
                    color: 'var(--accent-text)',
                    boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                  }}
                >
                  <Globe className="h-5 w-5" />
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t.education.languagesTitle}
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                {languages.map((l) => (
                  <div
                    key={l.nameKey}
                    className="flex items-center justify-between pb-4 last:border-0 last:pb-0"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <span
                      className="text-sm font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t.education[l.nameKey]}
                    </span>
                    <span
                      className="text-right text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {t.education[l.levelKey]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
