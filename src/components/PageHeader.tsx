import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface PageHeaderProps {
  breadcrumb: string;
  title: ReactNode;
  intro: string;
}

export function PageHeader({ breadcrumb, title, intro }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-line-600 bg-void-950 pt-28 pb-14 md:pt-32 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="shell relative z-10">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-xs text-text-muted">
            <Link to="/" className="transition hover:text-text-strong">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-text-body">{breadcrumb}</span>
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-text-strong md:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-text-body">{intro}</p>
        </Reveal>
      </div>
    </header>
  );
}
