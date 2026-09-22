import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Download,
  Sun,
  Moon,
  Languages,
  ArrowDownToLine,
} from 'lucide-react';

import { navItems, profile } from '@/data/portfolio';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const { theme, toggleTheme, lang, setLang, t } = useApp();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  /* ---------------------------------
   * Navbar scroll state
   * --------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ---------------------------------
   * Detect active section
   * --------------------------------- */
  useEffect(() => {
    const sectionIds = [
      'home',
      ...navItems.map((item) => item.href.replace('#', '')),
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ---------------------------------
   * Lock body scroll on mobile menu
   * --------------------------------- */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* ---------------------------------
   * Close menu on Escape
   * --------------------------------- */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const close = () => setOpen(false);

  const handleNavigation = (href: string) => {
    setActiveSection(href);
    close();
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-5 lg:px-8"
      >
        <nav
          className={`
            mx-auto flex max-w-7xl items-center justify-between
            rounded-2xl px-3 transition-all duration-300
            sm:px-4
            ${scrolled || open
              ? 'h-16 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
              : 'h-16 sm:h-[68px]'
            }
          `}
          style={{
            border:
              scrolled || open
                ? '1px solid var(--border)'
                : '1px solid transparent',

            backgroundColor:
              scrolled || open
                ? 'color-mix(in srgb, var(--bg) 82%, transparent)'
                : 'color-mix(in srgb, var(--bg) 20%, transparent)',

            backdropFilter:
              scrolled || open
                ? 'blur(22px) saturate(180%)'
                : 'blur(8px)',

            WebkitBackdropFilter:
              scrolled || open
                ? 'blur(22px) saturate(180%)'
                : 'blur(8px)',
          }}
        >
          {/* =========================
              Brand
          ========================== */}
          <a
            href="#home"
            onClick={() => handleNavigation('#home')}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Go to home"
          >
            <div
              className="
                relative flex h-10 w-10 items-center
                justify-center overflow-hidden rounded-xl
                font-mono text-sm font-black
                transition-all duration-300
                group-hover:-translate-y-0.5
                group-hover:scale-[1.03]
              "
              style={{
                color: 'var(--accent-text)',
                background:
                  'linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #ffffff))',
                boxShadow:
                  '0 8px 24px color-mix(in srgb, var(--accent) 18%, transparent)',
              }}
            >
              CS

              <span
                className="
                  absolute inset-x-1 bottom-1
                  h-[1px] rounded-full opacity-50
                "
                style={{
                  backgroundColor: 'currentColor',
                }}
              />
            </div>

            <div className="hidden flex-col sm:flex">
              <span
                className="
                  text-[14px] font-bold
                  leading-none tracking-[0.04em]
                "
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                CHHAIRIN
                <span
                  className="ml-0.5"
                  style={{
                    color: 'var(--accent)',
                  }}
                >
                  .
                </span>
              </span>

              <span
                className="
                  mt-1 text-[10px] font-medium
                  uppercase tracking-[0.18em]
                "
                style={{
                  color: 'var(--text-muted)',
                }}
              >
                Developer Portfolio
              </span>
            </div>
          </a>

          {/* =========================
              Desktop Navigation
          ========================== */}
          <div
            className="
              absolute left-1/2 hidden
              -translate-x-1/2
              items-center rounded-xl
              p-1 lg:flex
            "
            style={{
              backgroundColor:
                'color-mix(in srgb, var(--surface) 65%, transparent)',
              border: '1px solid var(--border)',
            }}
          >
            {navItems.map((item) => {
              const isActive =
                activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    handleNavigation(item.href)
                  }
                  className="
                    relative rounded-lg px-3.5 py-2
                    text-[13px] font-medium
                    transition-all duration-200
                  "
                  style={{
                    color: isActive
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)',

                    backgroundColor: isActive
                      ? 'var(--accent-bg)'
                      : 'transparent',
                  }}
                >
                  {t.nav[item.labelKey]}

                  {isActive && (
                    <span
                      className="
                        absolute bottom-[3px]
                        left-1/2 h-[2px] w-4
                        -translate-x-1/2
                        rounded-full
                      "
                      style={{
                        backgroundColor: 'var(--accent)',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* =========================
              Right Actions
          ========================== */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Language switcher */}
            <div
              className="
                hidden h-10 items-center
                rounded-xl p-1 sm:flex
              "
              style={{
                border: '1px solid var(--border-strong)',
                backgroundColor:
                  'color-mix(in srgb, var(--surface) 55%, transparent)',
              }}
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className="
                  flex h-8 items-center
                  rounded-lg px-2.5
                  text-xs font-bold
                  transition-all duration-200
                "
                style={{
                  backgroundColor:
                    lang === 'en'
                      ? 'var(--accent-bg)'
                      : 'transparent',

                  color:
                    lang === 'en'
                      ? 'var(--accent-text)'
                      : 'var(--text-muted)',

                  boxShadow:
                    lang === 'en'
                      ? 'inset 0 0 0 1px var(--accent-border)'
                      : 'none',
                }}
                aria-label="Switch to English"
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => setLang('km')}
                className="
                  flex h-8 items-center
                  rounded-lg px-2.5
                  font-khmer text-xs font-semibold
                  transition-all duration-200
                "
                style={{
                  backgroundColor:
                    lang === 'km'
                      ? 'var(--accent-bg)'
                      : 'transparent',

                  color:
                    lang === 'km'
                      ? 'var(--accent-text)'
                      : 'var(--text-muted)',

                  boxShadow:
                    lang === 'km'
                      ? 'inset 0 0 0 1px var(--accent-border)'
                      : 'none',
                }}
                aria-label="Switch to Khmer"
              >
                ខ្មែរ
              </button>
            </div>

            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              title={
                theme === 'dark'
                  ? 'Light mode'
                  : 'Dark mode'
              }
              className="
                group relative flex h-10 w-10
                items-center justify-center
                overflow-hidden rounded-xl
                transition-all duration-200
                hover:-translate-y-0.5
              "
              style={{
                border: '1px solid var(--border-strong)',
                color: 'var(--text-secondary)',
                backgroundColor:
                  'color-mix(in srgb, var(--surface) 55%, transparent)',
              }}
            >
              <span
                className="
                  absolute inset-0 opacity-0
                  transition-opacity duration-200
                  group-hover:opacity-100
                "
                style={{
                  backgroundColor: 'var(--accent-bg)',
                }}
              />

              {theme === 'dark' ? (
                <Sun className="relative z-10 h-[18px] w-[18px]" />
              ) : (
                <Moon className="relative z-10 h-[18px] w-[18px]" />
              )}
            </button>

            {/* Resume CTA */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="
                group hidden h-10 items-center
                gap-2 rounded-xl px-4
                text-[13px] font-semibold
                text-white transition-all
                duration-200
                hover:-translate-y-0.5
                md:inline-flex
              "
              style={{
                backgroundColor: 'var(--accent)',
                boxShadow:
                  '0 8px 24px color-mix(in srgb, var(--accent) 20%, transparent)',
              }}
            >
              <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />

              {t.nav.resume}
            </a>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() =>
                setOpen((current) => !current)
              }
              aria-label={
                open ? 'Close menu' : 'Open menu'
              }
              aria-expanded={open}
              className="
                relative inline-flex h-10 w-10
                items-center justify-center
                rounded-xl transition-all
                duration-200 lg:hidden
              "
              style={{
                border: '1px solid var(--border-strong)',
                color: open
                  ? 'var(--accent-text)'
                  : 'var(--text-secondary)',

                backgroundColor: open
                  ? 'var(--accent-bg)'
                  : 'color-mix(in srgb, var(--surface) 55%, transparent)',
              }}
            >
              <span
                className={`
                  absolute transition-all duration-200
                  ${open
                    ? 'scale-75 opacity-0'
                    : 'scale-100 opacity-100'
                  }
                `}
              >
                <Menu className="h-5 w-5" />
              </span>

              <span
                className={`
                  absolute transition-all duration-200
                  ${open
                    ? 'scale-100 opacity-100'
                    : 'scale-75 opacity-0'
                  }
                `}
              >
                <X className="h-5 w-5" />
              </span>
            </button>
          </div>
        </nav>

        {/* =========================
            Mobile Dropdown
        ========================== */}
        <div
          className={`
            mx-auto max-w-7xl
            overflow-hidden
            transition-all duration-300
            ease-out lg:hidden
            ${open
              ? 'mt-2 max-h-[620px] translate-y-0 opacity-100'
              : 'pointer-events-none mt-0 max-h-0 -translate-y-2 opacity-0'
            }
          `}
        >
          <div
            className="
              rounded-2xl p-3
              shadow-[0_18px_50px_rgba(0,0,0,0.12)]
            "
            style={{
              border: '1px solid var(--border)',
              backgroundColor:
                'color-mix(in srgb, var(--bg) 92%, transparent)',

              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter:
                'blur(24px) saturate(180%)',
            }}
          >
            {/* Navigation */}
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() =>
                      handleNavigation(item.href)
                    }
                    className="
                      group flex min-h-11
                      items-center justify-between
                      rounded-xl px-3.5 py-2.5
                      text-sm font-medium
                      transition-all duration-200
                    "
                    style={{
                      color: isActive
                        ? 'var(--text-primary)'
                        : 'var(--text-secondary)',

                      backgroundColor: isActive
                        ? 'var(--accent-bg)'
                        : 'transparent',
                    }}
                  >
                    <span>
                      {t.nav[item.labelKey]}
                    </span>

                    {isActive && (
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          backgroundColor:
                            'var(--accent)',
                          boxShadow:
                            '0 0 10px var(--accent)',
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div
              className="my-3 h-px w-full"
              style={{
                backgroundColor: 'var(--border)',
              }}
            />

            {/* Mobile settings */}
            <div className="grid grid-cols-2 gap-2">
              {/* Language */}
              <div
                className="
                  flex h-11 items-center
                  justify-between rounded-xl
                  px-2
                "
                style={{
                  border:
                    '1px solid var(--border-strong)',
                  backgroundColor:
                    'var(--surface)',
                }}
              >
                <Languages
                  className="ml-1 h-4 w-4"
                  style={{
                    color: 'var(--text-muted)',
                  }}
                />

                <div className="flex items-center gap-0.5">
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className="
                      rounded-lg px-2 py-1.5
                      text-xs font-bold
                      transition-colors
                    "
                    style={{
                      backgroundColor:
                        lang === 'en'
                          ? 'var(--accent-bg)'
                          : 'transparent',

                      color:
                        lang === 'en'
                          ? 'var(--accent-text)'
                          : 'var(--text-muted)',
                    }}
                  >
                    EN
                  </button>

                  <button
                    type="button"
                    onClick={() => setLang('km')}
                    className="
                      rounded-lg px-2 py-1.5
                      font-khmer text-xs
                      font-semibold
                    "
                    style={{
                      backgroundColor:
                        lang === 'km'
                          ? 'var(--accent-bg)'
                          : 'transparent',

                      color:
                        lang === 'km'
                          ? 'var(--accent-text)'
                          : 'var(--text-muted)',
                    }}
                  >
                    ខ្មែរ
                  </button>
                </div>
              </div>

              {/* Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                className="
                  flex h-11 items-center
                  justify-center gap-2
                  rounded-xl px-3
                  text-sm font-medium
                  transition-all
                "
                style={{
                  border:
                    '1px solid var(--border-strong)',
                  backgroundColor:
                    'var(--surface)',
                  color: 'var(--text-secondary)',
                }}
              >
                {theme === 'dark' ? (
                  <Sun className="h-[17px] w-[17px]" />
                ) : (
                  <Moon className="h-[17px] w-[17px]" />
                )}

                <span>
                  {theme === 'dark'
                    ? 'Light'
                    : 'Dark'}
                </span>
              </button>
            </div>

            {/* Resume */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="
                group mt-3 flex h-11 w-full
                items-center justify-center gap-2
                rounded-xl text-sm font-semibold
                text-white transition-all
                duration-200
              "
              style={{
                backgroundColor: 'var(--accent)',
                boxShadow:
                  '0 8px 20px color-mix(in srgb, var(--accent) 18%, transparent)',
              }}
            >
              <ArrowDownToLine className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />

              {t.nav.downloadResume}
            </a>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={close}
        className={`
          fixed inset-0 z-40
          bg-black/20 backdrop-blur-[2px]
          transition-opacity duration-300
          lg:hidden
          ${open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
          }
        `}
      />
    </>
  );
}