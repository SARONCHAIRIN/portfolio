import { ImagePlus } from 'lucide-react';

type Props = {
  label: string;
  aspect?: 'video' | 'mobile' | 'tablet' | 'wide';
  className?: string;
};

const aspectClass: Record<NonNullable<Props['aspect']>, string> = {
  video: 'aspect-video',
  mobile: 'aspect-[9/19]',
  tablet: 'aspect-[4/3]',
  wide: 'aspect-[16/10]',
};

export default function ScreenshotPlaceholder({ label, aspect = 'video', className = '' }: Props) {
  return (
    <div
      className={`group/shot relative flex ${aspectClass[aspect]} w-full items-center justify-center overflow-hidden rounded-xl ${className}`}
      style={{
        border: '1px solid var(--border)',
        backgroundColor: 'var(--bg-elevated)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.05,
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          color: 'var(--text-primary)',
        }}
      />
      <div
        className="pointer-events-none absolute -right-8 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-300 group-hover/shot:opacity-150"
        style={{ backgroundColor: 'var(--accent-bg)' }}
      />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300 group-hover/shot:text-[var(--accent-text)]"
          style={{
            border: '1px solid var(--border-strong)',
            backgroundColor: 'var(--bg-elevated)',
            color: 'var(--text-muted)',
          }}
        >
          <ImagePlus className="h-4.5 w-4.5" />
        </div>
        <span
          className="font-mono text-[11px] uppercase tracking-wider"
          style={{ color: 'var(--text-muted)' }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
