import { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-void-950">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-18">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
