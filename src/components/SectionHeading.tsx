type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, id, align = 'left' }: Props) {
  return (
    <div
      id={id}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className="mt-3 text-3xl font-bold tracking-tightest sm:text-4xl"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
