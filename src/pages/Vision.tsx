import { Eye, Compass, Languages, HandHeart, ShieldCheck, Sparkles } from 'lucide-react';
import { useSeo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { objectives, coreValues } from '@/data/content';

const valueIcons = { Languages, HandHeart, ShieldCheck, Sparkles };

export function Vision() {
  useSeo({
    title: 'Vision, Mission & Objectives: Sentimo',
    description: "Sentimo's vision, mission, measurable objectives and core values for building Urdu-English feedback intelligence for Pakistani small businesses.",
    path: '/vision',
  });

  return (
    <>
      <PageHeader
        breadcrumb="Vision"
        title={<>A vision built on <span className="gradient-text">language and clarity</span></>}
        intro="What we are working toward, why it matters, and how we measure progress along the way."
      />

      {/* Vision & Mission cards */}
      <section className="bg-void-950 section-pad">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card glass-card-hover h-full p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/30">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Vision</h2>
              <p className="mt-3 text-pretty text-2xl font-bold leading-snug text-text-strong">
                A Pakistan where every small-business owner can understand every customer voice, in any language it arrives in.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass-card glass-card-hover h-full p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">Mission</h2>
              <p className="mt-3 text-pretty text-2xl font-bold leading-snug text-text-strong">
                Build feedback intelligence that reads Urdu, Roman Urdu and English, and turns it into clear actions for owners.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Objectives */}
      <section className="border-t border-line-600 bg-obsidian-900 section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Measurable objectives"
            title="How we measure progress"
            body="Each objective has a metric, a target and a timeframe. These are goals we are working toward, not results we claim today."
            goldDetail
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((o, i) => (
              <Reveal key={o.metric} delay={i * 0.06}>
                <div className="glass-card glass-card-hover h-full p-6">
                  <span className="tag-target">Target</span>
                  <h3 className="mt-3 text-base font-bold text-text-strong">{o.metric}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-body">{o.target}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-line-600 pt-3 text-xs text-text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                    {o.timeframe}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="border-t border-line-600 bg-void-950 section-pad">
        <div className="shell">
          <SectionHeading center eyebrow="Core values" title="What guides every decision we make" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => {
              const Icon = valueIcons[v.icon as keyof typeof valueIcons];
              return (
                <Reveal key={v.title} delay={i * 0.07}>
                  <div className="glass-card glass-card-hover h-full p-6 text-center">
                    <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-text-strong">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
