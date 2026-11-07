import { Building2, MapPin, Target, Boxes, Compass, Sparkles } from 'lucide-react';
import { useSeo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { company } from '@/data/company';

const atAGlance = [
  { icon: MapPin, label: 'Headquarters', value: company.location },
  { icon: Target, label: 'Focus', value: company.focus },
  { icon: Boxes, label: 'Market', value: company.market },
  { icon: Building2, label: 'Product', value: company.product },
];

const timeline = [
  { phase: 'Research', status: 'Complete', body: 'Studied how small businesses in Pakistan handle multilingual feedback today.', quarter: 'Completed' },
  { phase: 'Product design', status: 'Complete', body: 'Defined the core flows: collect, understand, summarize and act on feedback.', quarter: 'Completed' },
  { phase: 'MVP build', status: 'In progress', body: 'Building sentiment and topic detection for Urdu, Roman Urdu and English.', quarter: 'In progress' },
  { phase: 'Early access', status: 'Planned', body: 'Open early access to a first group of small businesses.', quarter: 'Roadmap' },
  { phase: 'Launch', status: 'Planned', body: 'Public launch with WhatsApp and social integrations on the roadmap.', quarter: 'Roadmap' },
];

export function Company() {
  useSeo({
    title: 'About: Sentimo Tech Solutions',
    description: 'Sentimo Tech Solutions is a Pakistani software company building Sentimo, an Urdu-English feedback intelligence platform for small businesses.',
    path: '/company',
  });

  return (
    <>
      <PageHeader
        breadcrumb="Company"
        title={<>A Pakistani software company built around <span className="gradient-text">language and clarity</span></>}
        intro="We build Sentimo, an Urdu-English feedback intelligence platform, for the small businesses that power Pakistan's economy."
      />

      {/* Profile */}
      <section className="bg-void-950 section-pad">
        <div className="shell grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <h2 className="text-2xl font-bold text-text-strong">Company profile</h2>
              <p className="mt-4 text-pretty leading-relaxed text-text-body">
                {company.name} builds {company.product}, a feedback intelligence platform designed for the way customers in Pakistan actually communicate. Reviews and messages arrive in Urdu script, Roman Urdu and English, often mixed in a single sentence. {company.product} reads all three and turns them into clear summaries and actions for owners.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-text-body">
                We focus on small and medium businesses: restaurants, online sellers, clinics and salons. These owners hear from customers every day, but rarely have the time or the tools to understand what all that feedback is telling them.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-xl border border-line-600 bg-obsidian-800/50 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-text-strong">
                  <Compass className="h-5 w-5 text-brand-300" />
                  What we believe
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-body">
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" /> Language is not a feature. It is the foundation. Tools that ignore Urdu and Roman Urdu ignore most of the feedback in this market.</li>
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" /> Owners are not analysts. Insight should arrive in everyday language, not dashboards built for data teams.</li>
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" /> Feedback is only useful if it leads to action. A summary that does not point to a next step is not finished.</li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* At a glance */}
          <Reveal delay={0.1}>
            <div className="glass-card sticky top-24 h-fit p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold-300" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-strong">At a glance</h3>
              </div>
              <dl className="mt-5 space-y-4">
                {atAGlance.map((a) => (
                  <div key={a.label} className="flex items-start gap-3 border-b border-line-600 pb-4 last:border-0 last:pb-0">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                      <a.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-text-muted">{a.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-text-strong">{a.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why we exist */}
      <section className="border-t border-line-600 bg-obsidian-900 section-pad">
        <div className="shell max-w-3xl">
          <SectionHeading eyebrow="Why we exist" title="The same complaints kept coming back, and no one could see the pattern" goldDetail />
          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-text-body">
              <p>
                Small-business owners in Pakistan hear from customers constantly. A restaurant gets a Google review in Roman Urdu, a WhatsApp message in English, and a comment in Urdu script, sometimes all three in one afternoon.
              </p>
              <p>
                Reading each one by hand takes time most owners do not have. So feedback piles up, unread. The same problems repeat, because no one ever saw them clearly in the first place.
              </p>
              <p>
                We built {company.product} to close that gap: read feedback in all three languages, summarize what matters, and point to the action that fixes it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-line-600 bg-void-950 section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Where we are" title="From research to early access" goldDetail />
          <div className="mt-12 space-y-0">
            {timeline.map((t, i) => (
              <Reveal key={t.phase} delay={i * 0.06}>
                <div className="grid gap-4 border-l border-line-600 pb-8 pl-6 sm:grid-cols-4 sm:gap-6 sm:pl-8">
                  <div className="relative sm:col-span-1">
                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-void-950 bg-brand-400 sm:-left-[37px]" />
                    <h3 className="text-base font-bold text-text-strong">{t.phase}</h3>
                    <span className={`mt-1 inline-block text-xs font-medium ${t.status === 'Complete' ? 'text-positive' : t.status === 'In progress' ? 'text-brand-300' : 'text-text-muted'}`}>
                      {t.quarter}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-body sm:col-span-3">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
