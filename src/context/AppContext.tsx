import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Language, type TranslationDict } from '@/i18n/translations';

type Theme = 'dark' | 'light';

type AppContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (l: Language) => void;
  toggleLang: () => void;
  t: TranslationDict;
};

const AppContext = createContext<AppContextValue | null>(null);

const THEME_KEY = 'portfolio-theme';
const LANG_KEY = 'portfolio-lang';

export function AppProvider({ children }: { children: ReactNode }) {
 const [theme, setTheme] = useState<Theme>('light');
  const [lang, setLangState] = useState<Language>('en');

  // Initialize from localStorage / system
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    } 

    const storedLang = localStorage.getItem(LANG_KEY) as Language | null;
    if (storedLang === 'en' || storedLang === 'km') {
      setLangState(storedLang);
    }
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    root.style.colorScheme = theme;
  }, [theme]);

  // Apply lang attribute
  useEffect(() => {
    document.documentElement.lang = lang === 'km' ? 'km' : 'en';
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  };

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem(LANG_KEY, l);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'km' : 'en');
  };

  const value: AppContextValue = {
    theme,
    toggleTheme,
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
