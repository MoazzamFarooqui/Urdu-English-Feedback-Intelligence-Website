import {
  Languages, Smile, Tag, LayoutDashboard, Sparkles, MessageCircle, Mic, Reply, Smartphone,
  UtensilsCrossed, ShoppingBag, Stethoscope, Scissors, ArrowRight, Shield, Activity,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSeo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { coreFeatures, roadmapFeatures, targetCustomers, plans } from '@/data/content';

const featureIcons = { Languages, Smile, Tag, LayoutDashboard, Sparkles, MessageCircle, Mic, Reply, Smartphone };
const customerIcons = { UtensilsCrossed, ShoppingBag, Stethoscope, Scissors };

export function Products() {
  useSeo({
    title: 'Products & Services — Sentimo',
    description: "Sentimo's core features, roadmap, target customers, plans and platform architecture for Urdu-English feedback intelligence.",
    path: '/products',
  });

  return (
    <>
      <PageHeader
        breadcrumb="Products"
        title={<>Sentimo: feedback intelligence <span className="gradient-text">for every language your customers use</span></>}
        intro="Core features available in the MVP, what's on the roadmap, who it's for, and the platform behind it."
      />

      {/* Core features */}
      <section className="bg-void-950 section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Core features" title="What Sentimo does today" goldDetail />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((f, i) => {
              const Icon = featureIcons[f.icon as keyof typeof featureIcons];
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="glass-card glass-card-hover h-full p-6">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="tag-mvp">MVP</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-text-strong">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-t border-line-600 bg-obsidian-900 section-pad">
        <div className="shell">
          <SectionHeading eyebrow="On the roadmap" title="What's coming next" goldDetail />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roadmapFeatures.map((f, i) => {
              const Icon = featureIcons[f.icon as keyof typeof featureIcons];
              return (
                <Reveal key={f.title} delay={i * 0.07}>
                  <div className="glass-card glass-card-hover h-full p-6 opacity-90">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-obsidian-700 text-text-muted ring-1 ring-line-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="tag-roadmap">Roadmap</span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-text-strong">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target customers */}
      <section className="border-t border-line-600 bg-void-950 section-pad">
        <div className="shell">
          <SectionHeading center eyebrow="Who it's for" title="Pain points, and how Sentimo helps" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {targetCustomers.map((c, i) => {
              const Icon = customerIcons[c.icon as keyof typeof customerIcons];
              return (
                <Reveal key={c.title} delay={i * 0.07}>
                  <div className="glass-card glass-card-hover h-full p-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-text-strong">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.pain}</p>
                    <div className="mt-3 border-t border-line-600 pt-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">How Sentimo helps</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-body">{c.help}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="border-t border-line-600 bg-obsidian-900 section-pad">
        <div className="shell">
          <SectionHeading center eyebrow="Plans" title="Simple plans that grow with you" body="Pricing will be announced at launch. Early access members are the first to know." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className={`glass-card h-full p-6 ${p.highlight ? 'ring-1 ring-brand-400/40' : 'glass-card-hover'}`}>
                  {p.highlight && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-lg bg-white px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-text-strong">{p.name}</h3>
                  <span className="mt-1 inline-block text-xs text-text-muted">{p.badge}</span>
                  <p className="mt-4 text-sm font-semibold text-brand-300">Pricing announced at launch</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-text-body">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`btn mt-6 w-full ${p.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                    {p.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-line-600 bg-void-950 section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Platform & architecture" title="How Sentimo is built" goldDetail />
          <Reveal delay={0.08}>
            <ArchitectureDiagram />
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="glass-card p-6">
                <h3 className="text-base font-bold text-text-strong">Data flow</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  Feedback enters through uploads or exports, is cleaned and normalized — including Roman Urdu normalization — then passed to the NLP models. Results are stored and served to the dashboard through a REST API. Owners see sentiment, topics and a weekly summary without ever touching the raw pipeline.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-base font-bold text-text-strong">Scaling approach</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  The MVP runs on free-tier cloud infrastructure with PostgreSQL for storage and FastAPI for the API. As volume grows, processing can move to background workers and model inference can be batched. The architecture keeps the data path stateless so it can scale horizontally.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ArchitectureDiagram() {
  const nodes = [
    { label: 'CSV upload', sub: 'Data source' },
    { label: 'Google reviews export', sub: 'Data source' },
    { label: 'Forms / WhatsApp export', sub: 'Data source' },
    { label: 'Manual entry', sub: 'Data source' },
  ];
  const stages = [
    { label: 'Ingestion', sub: 'Collect & normalize' },
    { label: 'Storage', sub: 'PostgreSQL' },
    { label: 'Processing', sub: 'Cleaning + Roman Urdu normalization' },
    { label: 'NLP models', sub: 'Sentiment + topic detection' },
    { label: 'API', sub: 'FastAPI' },
    { label: 'Web dashboard', sub: 'Owner view' },
  ];

  return (
    <div className="glass-card mt-10 overflow-x-auto p-6 sm:p-8">
      <div className="min-w-[720px]">
        {/* Data sources */}
        <div className="grid grid-cols-4 gap-3">
          {nodes.map((n, i) => (
            <Reveal key={n.label} delay={i * 0.05}>
              <div className="rounded-lg border border-line-600 bg-obsidian-700 p-3 text-center">
                <p className="text-xs font-semibold text-text-strong">{n.label}</p>
                <p className="mt-0.5 text-[10px] text-text-muted">{n.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Arrows down */}
        <Connector />

        {/* Pipeline stages */}
        <div className="grid grid-cols-6 gap-3">
          {stages.map((s, i) => (
            <Reveal key={s.label} delay={0.2 + i * 0.07}>
              <div className={`rounded-lg border p-3 text-center ${i === 2 || i === 3 ? 'border-brand-400/40 bg-obsidian-700' : 'border-line-500 bg-obsidian-700'}`}>
                <p className={`text-xs font-semibold ${i === 2 || i === 3 ? 'text-brand-300' : 'text-text-strong'}`}>{s.label}</p>
                <p className="mt-0.5 text-[10px] text-text-muted">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Cross-cutting layers */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-line-600 bg-obsidian-800/60 p-3">
            <Shield className="h-4 w-4 text-positive" />
            <div>
              <p className="text-xs font-semibold text-text-strong">Security layer</p>
              <p className="text-[10px] text-text-muted">Access control, encrypted storage</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-line-600 bg-obsidian-800/60 p-3">
            <Activity className="h-4 w-4 text-brand-300" />
            <div>
              <p className="text-xs font-semibold text-text-strong">Monitoring layer</p>
              <p className="text-[10px] text-text-muted">Health, latency, error tracking</p>
            </div>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line-600 pt-5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Stack:</span>
          {['Python', 'FastAPI', 'PostgreSQL', 'Hugging Face transformers', 'React', 'Free-tier cloud'].map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-3" aria-hidden="true">
      <svg width="100%" height="32" viewBox="0 0 720 32" fill="none" className="max-w-[720px]">
        <path d="M90 0 L90 12 L360 12 L360 28" stroke="#323237" strokeWidth="1.5" fill="none" />
        <path d="M270 0 L270 12 L360 12 L360 28" stroke="#323237" strokeWidth="1.5" fill="none" />
        <path d="M450 0 L450 12 L360 12 L360 28" stroke="#323237" strokeWidth="1.5" fill="none" />
        <path d="M630 0 L630 12 L360 12 L360 28" stroke="#323237" strokeWidth="1.5" fill="none" />
        <path d="M360 28 L360 30" stroke="#E9C98A" strokeWidth="2" fill="none" />
        <path d="M356 26 L360 30 L364 26" stroke="#E9C98A" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}
