import { Wind, Server, Smartphone, Wrench } from 'lucide-react';
import { skillCategories, type SkillCategory } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { useApp } from '@/context/AppContext';

const iconMap = {
  flutter: Wind,
  server: Server,
  platform: Smartphone,
  tools: Wrench,
} as const;

function CategoryCard({ category }: { category: SkillCategory }) {
  const { t } = useApp();
  const Icon = iconMap[category.icon];
  return (
    <div
      className="card-surface group p-6 transition-all duration-300 hover:-translate-y-0.5"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-border)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: 'var(--accent-bg)',
            color: 'var(--accent-text)',
            boxShadow: 'inset 0 0 0 1px var(--accent-border)',
          }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3
          className="text-base font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          {t.skills.categories[category.key]}
        </h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((s) => (
          <span
            key={s}
            className="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
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
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="section-pad" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((c, i) => (
            <Reveal key={c.key} delay={i * 80}>
              <CategoryCard category={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
