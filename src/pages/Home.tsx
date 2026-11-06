import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Languages, Clock, Repeat, UtensilsCrossed, ShoppingBag, Stethoscope, Scissors,
  UserRound, Zap, Target, ArrowRight, Sparkles,
} from 'lucide-react';
import { useSeo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { DashboardMockup } from '@/components/DashboardMockup';
import { problems, howItWorks, industries, whySentimo } from '@/data/content';
import { company } from '@/data/company';

const iconMap = { Languages, Clock, Repeat, UtensilsCrossed, ShoppingBag, Stethoscope, Scissors, UserRound, Zap, Target };

export function Home() {
  useSeo({
    title: 'Sentimo — Urdu-English Feedback Intelligence',
    description: 'Sentimo turns mixed Urdu, Roman Urdu and English feedback into clear insight for small businesses in Pakistan. Understand every customer, in every language they speak.',
    path: '/',
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-void-950">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="shell relative z-10 grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <Reveal>
              <span className="chip">
                <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                Urdu-English Feedback Intelligence
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-text-strong sm:text-5xl lg:text-6xl">
                Stop reading reviews <span className="gradient-text">one by one.</span> Start understanding them.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-text-body">
                {company.product} reads feedback in Urdu, Roman Urdu and English — then turns it into clear summaries and actions for small-business owners.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn btn-primary">
                  Get early access
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  Explore the product
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 text-sm text-text-muted">
                <span className="urdu" dir="rtl" lang="ur">ہر گاہک کو سمجھیں، ہر زبان میں۔</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-500/[0.06] blur-2xl" />
            <div className="relative">
              <DashboardMockup />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem strip */}
      <section className="border-t border-line-600 bg-obsidian-900 section-pad">
        <div className="shell">
          <SectionHeading
            center
            eyebrow="The problem"
            title="Feedback comes in many languages. You only have one pair of hands."
            body="Small businesses in Pakistan get reviews in a mix of Urdu, Roman Urdu and English. Owners don't have the time or the right tools to make sense of it all."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problems.map((p, i) => {
              const Icon = iconMap[p.icon as keyof typeof iconMap];
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="glass-card glass-card-hover h-full p-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-text-strong">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line-600 bg-void-950 section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="How Sentimo works"
            title="From scattered reviews to a clear next step"
            body="Four steps stand between raw feedback and the action you take this week."
            goldDetail
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="glass-card glass-card-hover h-full p-6">
                  <span className="gradient-text-brand text-3xl font-extrabold">{s.step}</span>
                  <h3 className="mt-3 text-lg font-bold text-text-strong">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-line-600 bg-obsidian-900 section-pad">
        <div className="shell">
          <SectionHeading
            center
            eyebrow="Who it's for"
            title="Built for the businesses that hear from customers every day"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon as keyof typeof iconMap];
              return (
                <Reveal key={ind.title} delay={i * 0.07}>
                  <div className="glass-card glass-card-hover h-full p-6 text-center">
                    <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-text-strong">{ind.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{ind.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Sentimo */}
      <section className="border-t border-line-600 bg-void-950 section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Why Sentimo"
            title="Made for the way feedback actually arrives in Pakistan"
            body="Generic tools were built for English-first markets. Sentimo is built for the mix of languages your customers really use."
            goldDetail
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whySentimo.map((w, i) => {
              const Icon = iconMap[w.icon as keyof typeof iconMap];
              return (
                <Reveal key={w.title} delay={i * 0.07}>
                  <div className="glass-card glass-card-hover h-full p-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-text-strong">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{w.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden border-t border-line-600 bg-obsidian-900 section-pad">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="shell relative z-10 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-text-strong md:text-4xl">
              Understand every customer, <span className="gradient-text">in every language they speak.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-text-body">
              Join the early access waitlist and help shape Sentimo for your business.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-primary">
                Get early access
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/solution" className="btn btn-secondary">
                See the solution
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
