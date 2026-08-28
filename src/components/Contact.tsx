import { useState } from 'react';
import { Send, Github, Linkedin, Facebook, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { useApp } from '@/context/AppContext';

export default function Contact() {
  const { t } = useApp();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: '0.75rem',
    border: '1px solid var(--border-strong)',
    backgroundColor: 'var(--bg-input)',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: 'var(--text-primary)',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <section id="contact" className="section-pad" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Info side */}
          <Reveal delay={80}>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="card-surface group flex items-center gap-4 p-5 transition-all"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-border)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'var(--accent-bg)',
                    color: 'var(--accent-text)',
                    boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                  }}
                >
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-mono text-xs uppercase tracking-wider"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {t.contact.email}
                  </p>
                  <p
                    className="truncate text-sm font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {profile.email}
                  </p>
                </div>
              </a>

              <div className="card-surface flex items-center gap-4 p-5">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'var(--accent-bg)',
                    color: 'var(--accent-text)',
                    boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                  }}
                >
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p
                    className="font-mono text-xs uppercase tracking-wider"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {t.contact.location}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="card-surface p-5">
                <p
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t.contact.social}
                </p>
                <div className="mt-3 flex gap-3">
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
                      className="flex h-11 w-11 items-center justify-center rounded-xl border transition-all"
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
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={160}>
            <form onSubmit={onSubmit} className="card-surface p-5 sm:p-6 lg:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {t.contact.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    style={fieldStyle}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  style={{ ...fieldStyle, resize: 'none' }}
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  {t.contact.send}
                </button>
                {sent && (
                  <span
                    className="flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: '#10b981' }}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {t.contact.sent}
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
