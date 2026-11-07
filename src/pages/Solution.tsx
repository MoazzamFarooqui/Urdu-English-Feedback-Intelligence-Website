import { useState } from 'react';
import {
  Languages, Database, BarChart3, GitCompare, Microscope, FlaskConical,
  LayoutDashboard, Upload, FileSearch, Lightbulb, Users,
  CircleDollarSign, AlertTriangle, TrendingUp, Smile, Frown, Minus,
} from 'lucide-react';
import { useSeo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { WindowDots } from '@/components/WindowDots';

const toc = [
  { id: 'problem', label: 'The problem' },
  { id: 'solution', label: 'The solution' },
  { id: 'why-nlp', label: 'Why data science & NLP' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'compare', label: 'How Sentimo compares' },
  { id: 'research', label: 'Research & evidence' },
  { id: 'evaluation', label: 'Data & evaluation' },
  { id: 'preview', label: 'Product preview' },
  { id: 'business', label: 'Business model & roadmap' },
];

const comparison = [
  {
    approach: 'Manual reading',
    users: 'Owners with small volume',
    capability: 'Read each review by hand',
    limitation: 'Slow, inconsistent, does not scale',
    difference: 'Sentimo reads and summarizes all feedback in minutes',
  },
  {
    approach: 'Generic English-first sentiment tools',
    users: 'English-speaking markets',
    capability: 'Sentiment scoring for English text',
    limitation: 'Poor on Urdu and Roman Urdu; misses code-mixing',
    difference: 'Sentimo is built for Urdu, Roman Urdu and English together',
  },
  {
    approach: 'Spreadsheet tallying',
    users: 'Owners comfortable with spreadsheets',
    capability: 'Count keywords manually',
    limitation: 'No sentiment, no topics, no normalization',
    difference: 'Sentimo detects sentiment and topics automatically across languages',
  },
];

const interviews = [
  { role: 'Restaurant owner', summary: 'Reviews arrive in Roman Urdu and English. There is no time to read them all, so most go unread.' },
  { role: 'Online seller', summary: 'Feedback is scattered across WhatsApp and order reviews. Patterns are hard to spot manually.' },
  { role: 'Clinic manager', summary: 'Patient comments mention wait times and staff in mixed language. No clear way to summarize them.' },
];

const milestones = [
  { task: 'Multilingual sentiment model', owner: 'Falak', deps: 'Labeled dataset', output: 'Trained sentiment classifier' },
  { task: 'Topic detection model', owner: 'Falak', deps: 'Labeled topics', output: 'Topic detector for 5 categories' },
  { task: 'API & storage layer', owner: 'Musfirah', deps: 'Architecture design', output: 'FastAPI endpoints + PostgreSQL schema' },
  { task: 'Dashboard front-end', owner: 'Musfirah', deps: 'API ready', output: 'Owner-facing dashboard' },
  { task: 'User interviews & synthesis', owner: 'Moazzam', deps: 'Recruited participants', output: 'Interview insights report' },
  { task: 'Early access launch', owner: 'Moazzam', deps: 'MVP complete', output: 'First users onboarded' },
];

export function Solution() {
  useSeo({
    title: 'The Solution: Sentimo',
    description: 'How Sentimo solves multilingual feedback for small businesses in Pakistan: the problem, the solution, research, evaluation approach and product preview.',
    path: '/solution',
  });

  const [activeId, setActiveId] = useState('problem');

  return (
    <>
      <PageHeader
        breadcrumb="Solution"
        title={<>From mixed-language feedback to <span className="gradient-text">clear action</span></>}
        intro="A full look at the problem, the solution, the research behind it and the product taking shape."
      />

      <section className="bg-void-950">
        <div className="shell grid gap-10 py-12 lg:grid-cols-[220px_1fr] lg:py-16">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">On this page</p>
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    onClick={() => setActiveId(t.id)}
                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                      activeId === t.id ? 'bg-obsidian-800 text-text-strong' : 'text-text-muted hover:bg-obsidian-800/50 hover:text-text-strong'
                    }`}
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-16 lg:space-y-24">
              {/* Problem */}
              <Anchor id="problem">
                <SectionHeading eyebrow="The problem" title="Owners hear from customers in three languages, and read almost none of it" goldDetail />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <Reveal>
                    <div className="glass-card h-full p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-300">Who, where and when</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">
                        Restaurants, online sellers, clinics and salons across Pakistan. Feedback arrives daily through Google reviews, WhatsApp messages and direct comments.
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.06}>
                    <div className="glass-card h-full p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-300">Why it matters</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">
                        Unread feedback means repeated problems. Owners cannot fix what they never see clearly, and customers stop sharing when nothing changes.
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <div className="glass-card h-full p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-300">How it is handled today</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">
                        Most owners read reviews by hand or not at all. Some tally keywords in spreadsheets. English-first tools miss Urdu and Roman Urdu entirely.
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <div className="glass-card h-full p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-300">Remaining limitations</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">
                        Manual reading does not scale. Spreadsheets miss sentiment. Existing tools assume English. The mixed-language middle is left uncovered.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </Anchor>

              {/* Solution */}
              <Anchor id="solution">
                <SectionHeading eyebrow="The solution" title="A workflow that reads, understands and acts on feedback" goldDetail />
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Upload, title: 'Upload or connect feedback', body: 'Owners bring in reviews via CSV upload, Google reviews export, forms or manual entry.' },
                    { icon: FileSearch, title: 'Sentimo reads and labels', body: 'The platform detects language, scores sentiment and tags topics, across Urdu, Roman Urdu and English.' },
                    { icon: Lightbulb, title: 'Summaries and themes surface', body: 'Owners see what customers like, what they complain about, and which topics come up most.' },
                    { icon: TrendingUp, title: 'Suggested actions appear', body: 'Each weekly summary includes suggested next steps tied to the most frequent issues.' },
                  ].map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.06}>
                      <div className="glass-card glass-card-hover flex items-start gap-4 p-5">
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/30">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-text-strong">{s.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{s.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Anchor>

              {/* Why NLP */}
              <Anchor id="why-nlp">
                <SectionHeading eyebrow="Why data science & NLP" title="Three reasons this needs language models, not spreadsheets" goldDetail />
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {[
                    { icon: Languages, title: 'Code-mixed language', body: 'Feedback blends Urdu, Roman Urdu and English in one sentence. Rule-based tools cannot handle the mix.' },
                    { icon: Database, title: 'Volume', body: 'Owners receive feedback faster than any human can read. Automation is the only way to keep up.' },
                    { icon: BarChart3, title: 'Consistency', body: 'A model applies the same sentiment and topic logic every time, where humans drift and disagree.' },
                  ].map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.08}>
                      <div className="glass-card glass-card-hover h-full p-6">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                          <c.icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-base font-bold text-text-strong">{c.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Anchor>

              {/* Benefits */}
              <Anchor id="benefits">
                <SectionHeading eyebrow="Benefits" title="Design goals we are building toward" goldDetail />
                <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2">
                  {[
                    'Save owners hours every week by summarizing feedback automatically',
                    'Surface recurring issues so the same problems do not repeat',
                    'Make sentiment and topics visible across all three languages',
                    'Turn insight into suggested actions, not just numbers',
                    'Keep the dashboard simple enough for any owner to use',
                    "Respect privacy: feedback stays the owner's data, never shared",
                  ].map((b, i) => (
                    <Reveal key={b} delay={i * 0.05} className="h-full">
                      <div className="flex h-full items-start gap-3 rounded-xl border border-line-600 bg-obsidian-800/50 p-4">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" />
                        <p className="text-sm leading-relaxed text-text-body">{b}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Anchor>

              {/* Comparison */}
              <Anchor id="compare">
                <SectionHeading eyebrow="How Sentimo compares" title="Where existing approaches fall short" goldDetail />
                <Reveal delay={0.08}>
                  <div className="mt-8 overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-line-600 text-left">
                          {['Approach', 'Target users', 'Main capability', 'Limitation', "Sentimo's difference"].map((h) => (
                            <th key={h} className="px-4 py-3 font-semibold text-text-strong">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparison.map((r) => (
                          <tr key={r.approach} className="border-b border-line-600/60 align-top">
                            <td className="px-4 py-3 font-medium text-text-strong">{r.approach}</td>
                            <td className="px-4 py-3 text-text-body">{r.users}</td>
                            <td className="px-4 py-3 text-text-body">{r.capability}</td>
                            <td className="px-4 py-3 text-text-muted">{r.limitation}</td>
                            <td className="px-4 py-3 text-brand-300">{r.difference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Reveal>
              </Anchor>

              {/* Research */}
              <Anchor id="research">
                <SectionHeading eyebrow="Research & evidence" title="What we heard from small-business owners" goldDetail />
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {interviews.map((iv, i) => (
                    <Reveal key={iv.role} delay={i * 0.08}>
                      <div className="glass-card glass-card-hover h-full p-6">
                        <Microscope className="h-5 w-5 text-brand-300" />
                        <h3 className="mt-3 text-sm font-bold text-text-strong">{iv.role}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-muted">{iv.summary}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={0.2}>
                  <p className="mt-5 rounded-lg border border-line-600 bg-obsidian-800/40 p-4 text-xs leading-relaxed text-text-muted">
                    Data-source notes: Interview summaries are anonymized placeholders. No private or identifying information is published. Replace these with real, consented summaries before launch.
                  </p>
                </Reveal>
              </Anchor>

              {/* Evaluation */}
              <Anchor id="evaluation">
                <SectionHeading eyebrow="Data & evaluation approach" title="How we measure whether Sentimo works" goldDetail />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {[
                    { icon: Database, title: 'Data sources', body: 'Google reviews exports, CSV uploads, forms and manual entry. Public review samples used for labeling.' },
                    { icon: FlaskConical, title: 'Dataset structure', body: 'Each entry: text, language label, sentiment label, topic label. Split into train, validation and test sets.' },
                    { icon: GitCompare, title: 'Quality checks', body: 'Inter-annotator agreement on labels, duplicate removal, language consistency checks.' },
                    { icon: Users, title: 'Privacy & consent', body: 'Feedback is owner-owned. Public review data is labeled with consent. No personal data is published.' },
                    { icon: BarChart3, title: 'Baseline & metrics', body: 'Baseline: majority-class and keyword matching. Metrics: accuracy, precision, recall and F1-score.' },
                    { icon: Users, title: 'User evaluation', body: 'Owners review summaries for usefulness and clarity. Success criteria: summaries rated clear and actionable.' },
                  ].map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.05}>
                      <div className="glass-card h-full p-6">
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                            <c.icon className="h-4 w-4" />
                          </div>
                          <h3 className="text-sm font-bold text-text-strong">{c.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-text-body">{c.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Anchor>

              {/* Product preview */}
              <Anchor id="preview">
                <SectionHeading eyebrow="Product preview" title="Three screens owners will use" goldDetail />
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <ScreenPreview index={0} />
                  <ScreenPreview index={1} />
                  <ScreenPreview index={2} />
                </div>
              </Anchor>

              {/* Business model */}
              <Anchor id="business">
                <SectionHeading eyebrow="Business model & roadmap" title="How Sentimo reaches and serves owners" goldDetail />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <Reveal>
                    <div className="glass-card h-full p-6">
                      <h3 className="flex items-center gap-2 text-sm font-bold text-text-strong"><CircleDollarSign className="h-4 w-4 text-brand-300" /> Value to customer</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">Hours saved each week, clearer view of recurring issues, and actions tied to what customers actually say.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <div className="glass-card h-full p-6">
                      <h3 className="flex items-center gap-2 text-sm font-bold text-text-strong"><Users className="h-4 w-4 text-brand-300" /> User vs paying customer</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">Early access users help shape features. Paying customers subscribe once pricing is announced at launch.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <div className="glass-card h-full p-6">
                      <h3 className="flex items-center gap-2 text-sm font-bold text-text-strong"><CircleDollarSign className="h-4 w-4 text-brand-300" /> Revenue model</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">Tiered subscription plans: Starter, Growth and Business. Pricing announced at launch.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <div className="glass-card h-full p-6">
                      <h3 className="flex items-center gap-2 text-sm font-bold text-text-strong"><AlertTriangle className="h-4 w-4 text-text-muted" /> Cost drivers</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">Cloud hosting, model inference and storage. Free-tier infrastructure covers the MVP; costs scale with usage.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="glass-card h-full p-6">
                      <h3 className="flex items-center gap-2 text-sm font-bold text-text-strong"><Users className="h-4 w-4 text-brand-300" /> First-user outreach</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">Direct outreach to restaurants, online sellers, clinics and salons. Early access waitlist on this site.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.25}>
                    <div className="glass-card h-full p-6">
                      <h3 className="flex items-center gap-2 text-sm font-bold text-text-strong"><AlertTriangle className="h-4 w-4 text-text-muted" /> Key risks & mitigation</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">Model accuracy on code-mixed text, mitigated by a labeled validation set and iterative evaluation. Adoption, mitigated by early access feedback.</p>
                    </div>
                  </Reveal>
                </div>

                {/* Milestone timeline */}
                <Reveal delay={0.1}>
                  <h3 className="mt-12 text-lg font-bold text-text-strong">Milestone timeline</h3>
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-line-600 text-left">
                          {['Task', 'Owner', 'Dependencies', 'Expected output'].map((h) => (
                            <th key={h} className="px-4 py-3 font-semibold text-text-strong">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {milestones.map((m) => (
                          <tr key={m.task} className="border-b border-line-600/60 align-top">
                            <td className="px-4 py-3 font-medium text-text-strong">{m.task}</td>
                            <td className="px-4 py-3 text-text-body">{m.owner}</td>
                            <td className="px-4 py-3 text-text-muted">{m.deps}</td>
                            <td className="px-4 py-3 text-brand-300">{m.output}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Reveal>
              </Anchor>
            </div>
          </div>
        </section>
    </>
  );
}

function Anchor({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}

interface ScreenData {
  icon: typeof Upload;
  title: string;
  caption: string;
  simpleLines?: string[];
  reviews?: { text: string; sent: string; topics: string[]; urdu?: boolean }[];
  bars?: number[];
}

const screens: ScreenData[] = [
  {
    icon: Upload,
    title: 'Upload feedback',
    caption: 'Drag in a CSV or paste reviews. Sentimo accepts Urdu, Roman Urdu and English.',
    simpleLines: ['Drop CSV file here', 'Or paste feedback text', '3 languages detected'],
  },
  {
    icon: FileSearch,
    title: 'Analysis results',
    caption: 'Each review is labeled with sentiment and topic tags.',
    reviews: [
      { text: 'Khana acha tha, service slow', sent: 'mixed', topics: ['Food', 'Staff'] },
      { text: 'بہت اچھا تجربہ', sent: 'positive', topics: ['Service'], urdu: true },
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Insights dashboard',
    caption: 'Trends, top topics and a weekly summary in one view.',
    bars: [62, 23, 15],
  },
];

const sentMeta = {
  positive: { label: 'Positive', icon: Smile, color: 'text-positive', bg: 'bg-positive/10' },
  negative: { label: 'Negative', icon: Frown, color: 'text-negative', bg: 'bg-negative/10' },
  mixed: { label: 'Mixed', icon: Minus, color: 'text-neutral', bg: 'bg-neutral/10' },
} as const;

function ScreenPreview({ index }: { index: number }) {
  const s = screens[index];
  const Icon = s.icon;
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div className="glass-card flex h-full flex-col overflow-hidden p-3">
        <div className="flex items-center gap-2 px-1 pb-2">
          <WindowDots size="sm" />
        </div>
        <div className="flex flex-1 flex-col rounded-lg border border-line-600 bg-obsidian-800/60 p-4">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-brand-300" />
            <h4 className="text-sm font-semibold text-text-strong">{s.title}</h4>
          </div>

          {s.simpleLines && (
            <div className="mt-4 space-y-2">
              {s.simpleLines.map((l, i) => (
                <div key={i} className="rounded-md border border-dashed border-line-600 bg-obsidian-700/40 px-3 py-2 text-xs text-text-muted">
                  {l}
                </div>
              ))}
            </div>
          )}

          {s.reviews && (
            <div className="mt-4 space-y-2.5">
              {s.reviews.map((r, i) => {
                const m = sentMeta[r.sent as keyof typeof sentMeta];
                const SIcon = m.icon;
                return (
                  <div key={i} className="rounded-md border border-line-600 bg-obsidian-700/40 p-2.5">
                    <p lang={r.urdu ? 'ur' : 'en'} dir={r.urdu ? 'rtl' : 'ltr'} className={`text-xs text-text-body ${r.urdu ? 'urdu' : ''}`}>{r.text}</p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] ${m.bg} ${m.color}`}><SIcon className="h-2.5 w-2.5" />{m.label}</span>
                      {r.topics.map((t) => (
                        <span key={t} className="rounded-full bg-brand-500/10 px-1.5 py-0.5 text-[10px] text-brand-300">{t}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {s.bars && (
            <div className="mt-4 space-y-2.5">
              {['Positive', 'Mixed', 'Negative'].map((label, i) => (
                <div key={label}>
                  <div className="flex justify-between text-[10px] text-text-muted"><span>{label}</span><span>{s.bars![i]}%</span></div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-obsidian-700">
                    <div className={`h-full rounded-full ${['bg-positive', 'bg-neutral', 'bg-negative'][i]}`} style={{ width: `${s.bars![i]}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="mt-3 text-xs leading-relaxed text-text-muted">{s.caption}</p>
        </div>
        <p className="mt-2 text-center"><span className="tag-sample">Sample data</span></p>
      </div>
    </Reveal>
  );
}
