import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';
import { useSeo } from '@/components/Seo';
import { LogoMark } from '@/components/Logo';

export function NotFound() {
  useSeo({
    title: 'Page not found — Sentimo',
    description: 'The page you were looking for does not exist.',
    path: '/404',
  });

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-void-950">
      <div className="shell relative z-10 text-center">
        <LogoMark showWordmark={false} className="mx-auto h-12 w-12" />
        <p className="mt-6 gradient-text text-7xl font-extrabold">404</p>
        <h1 className="mt-4 text-2xl font-bold text-text-strong">This page took a wrong turn</h1>
        <p className="mx-auto mt-3 max-w-md text-pretty text-text-body">
          The page you were looking for does not exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">
            <HomeIcon className="h-4 w-4" />
            Back home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-secondary">
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </div>
      </div>
    </section>
  );
}
