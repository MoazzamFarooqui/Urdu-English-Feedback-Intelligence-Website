import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { LogoMark } from './Logo';
import { company } from '@/data/company';

export function Footer() {
  return (
    <footer className="relative border-t border-line-600 bg-obsidian-900">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <LogoMark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              {company.name} builds {company.product}, an Urdu-English feedback intelligence platform for small businesses in {company.location}.
            </p>
            <p className="mt-3 text-sm text-text-muted">{company.tagline}</p>
          </div>

          <FooterCol title="Company" links={[
            { label: 'About', path: '/company' },
            { label: 'Vision', path: '/vision' },
            { label: 'Team', path: '/team' },
          ]} />
          <FooterCol title="Product" links={[
            { label: 'Products', path: '/products' },
            { label: 'Solution', path: '/solution' },
            { label: 'Get early access', path: '/contact' },
          ]} />
          <FooterCol title="Contact" links={[
            { label: company.email, path: '/contact' },
            { label: company.location, path: '/contact' },
          ]} />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line-600 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-text-muted">© 2026 {company.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="text-xs text-text-muted transition hover:text-text-strong">Privacy</Link>
            <Link to="/terms" className="text-xs text-text-muted transition hover:text-text-strong">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; path: string }[] }) {
  return (
    <div className="md:col-span-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-text-strong">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.path} className="group inline-flex items-center gap-1 text-sm text-text-muted transition hover:text-text-strong">
              {l.label}
              <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
