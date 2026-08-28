import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'ul';
};

export default function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
