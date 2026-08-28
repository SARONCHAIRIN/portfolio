import { Github, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div className="container-page py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p
              className="text-base font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {profile.name}
            </p>
            <p
              className="mt-0.5 text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.footer.role}
            </p>
          </div>

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
                className="flex h-9 w-9 items-center justify-center rounded-lg border transition-all"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-secondary)',
                }}
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
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border transition-all"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-border)';
                e.currentTarget.style.color = 'var(--accent-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <ArrowUp className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
