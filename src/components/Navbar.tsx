import { useEffect, useState } from 'react';
import { Menu, X, Download, Sun, Moon, Globe } from 'lucide-react';
import { navItems, profile } from '@/data/portfolio';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const { theme, toggleTheme, lang, setLang, t } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        borderBottom: scrolled || open ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled || open ? 'color-mix(in srgb, var(--bg) 80%, transparent)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(16px)' : 'none',
      }}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-18">
        <a href="#home" className="group flex items-center gap-2.5" onClick={close}>
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg font-mono text-sm font-bold transition-transform group-hover:scale-105"
            style={{
              backgroundColor: 'var(--accent-bg)',
              color: 'var(--accent-text)',
              boxShadow: 'inset 0 0 0 1px var(--accent-border)',
            }}
          >
            CS
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block" style={{ color: 'var(--text-primary)' }}>
            CHHAIRIN<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {t.nav[item.labelKey]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language toggle - desktop */}
          <div className="hidden items-center rounded-lg border p-0.5 text-xs font-semibold sm:flex" style={{ borderColor: 'var(--border-strong)' }}>
            <button
              type="button"
              onClick={() => setLang('en')}
              className="rounded-md px-2.5 py-1.5 transition-colors"
              style={{
                backgroundColor: lang === 'en' ? 'var(--accent-bg)' : 'transparent',
                color: lang === 'en' ? 'var(--accent-text)' : 'var(--text-secondary)',
              }}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('km')}
              className="rounded-md px-2.5 py-1.5 font-khmer transition-colors"
              style={{
                backgroundColor: lang === 'km' ? 'var(--accent-bg)' : 'transparent',
                color: lang === 'km' ? 'var(--accent-text)' : 'var(--text-secondary)',
              }}
              aria-label="Switch to Khmer"
            >
              ខ្មែរ
            </button>
          </div>

          {/* Theme toggle - desktop */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
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
            {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>

          <a
            href={profile.resumeUrl}
            className="hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all sm:inline-flex"
            style={{ backgroundColor: 'var(--accent)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              e.currentTarget.style.boxShadow = 'var(--accent-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <Download className="h-4 w-4" />
            {t.nav.resume}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors lg:hidden"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-secondary)' }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden"
        style={{
          maxHeight: open ? '32rem' : '0',
          opacity: open ? '1' : '0',
          borderTop: open ? '1px solid var(--border)' : '1px solid transparent',
          backgroundColor: 'color-mix(in srgb, var(--bg) 95%, transparent)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={close}
                className="block rounded-lg px-3 py-3 text-sm font-medium transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-bg)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {t.nav[item.labelKey]}
              </a>
            </li>
          ))}

          {/* Mobile: language + theme toggles */}
          <li className="mt-3 flex items-center gap-3 px-1">
            <div className="flex items-center rounded-lg border p-0.5 text-xs font-semibold" style={{ borderColor: 'var(--border-strong)' }}>
              <button
                type="button"
                onClick={() => setLang('en')}
                className="rounded-md px-3 py-1.5 transition-colors"
                style={{
                  backgroundColor: lang === 'en' ? 'var(--accent-bg)' : 'transparent',
                  color: lang === 'en' ? 'var(--accent-text)' : 'var(--text-secondary)',
                }}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('km')}
                className="rounded-md px-3 py-1.5 font-khmer transition-colors"
                style={{
                  backgroundColor: lang === 'km' ? 'var(--accent-bg)' : 'transparent',
                  color: lang === 'km' ? 'var(--accent-text)' : 'var(--text-secondary)',
                }}
              >
                ខ្មែរ
              </button>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-secondary)' }}
            >
              {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
            </button>
          </li>

          <li className="mt-2">
            <a href={profile.resumeUrl} onClick={close} className="btn-primary w-full">
              <Download className="h-4 w-4" />
              {t.nav.downloadResume}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
