import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  center?: boolean;
  goldDetail?: boolean;
}

export function SectionHeading({ eyebrow, title, body, center = false, goldDetail = false }: SectionHeadingProps) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div className={`flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">{eyebrow}</span>
        </div>
      )}
      <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight text-text-strong md:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-4 text-pretty text-base leading-relaxed text-text-body md:text-lg">{body}</p>}
      {goldDetail && <div className="mt-5 h-px w-16 bg-gradient-to-r from-gold-500 to-transparent" />}
    </Reveal>
  );
}
