import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Download, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { useSeo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { team, responsibilityMatrix, company, contact } from '@/data/company';

type Member = (typeof team)[number];

export function Team() {
  useSeo({
    title: 'Team — Sentimo Tech Solutions',
    description: 'Meet the team behind Sentimo: product, NLP and platform leaders building Urdu-English feedback intelligence in Pakistan.',
    path: '/team',
  });

  const [active, setActive] = useState<Member | null>(null);

  return (
    <>
      <PageHeader
        breadcrumb="Team"
        title={<>Three people, <span className="gradient-text">one platform</span></>}
        intro="Product, data science and platform — each role covered by someone focused on it."
      />

      {/* Profile cards */}
      <section className="bg-void-950 section-pad">
        <div className="shell grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.08}>
              <button
                onClick={() => setActive(m)}
                className="glass-card glass-card-hover group h-full w-full p-6 text-left"
              >
                <Avatar initials={m.initials} />
                <h3 className="mt-5 text-lg font-bold text-text-strong">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-300">{m.designation}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{m.bio}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-text-strong transition group-hover:text-brand-300">
                  View profile
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Responsibility matrix */}
      <section className="border-t border-line-600 bg-obsidian-900 section-pad">
        <div className="shell">
          <SectionHeading eyebrow="How we work together" title="Who leads what" goldDetail />
          <Reveal delay={0.08}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-line-600 text-left">
                    <th className="py-3 pr-4 font-semibold text-text-strong">Area</th>
                    <th className="px-4 py-3 font-semibold text-text-strong">Moazzam</th>
                    <th className="px-4 py-3 font-semibold text-text-strong">Falak</th>
                    <th className="px-4 py-3 font-semibold text-text-strong">Musfirah</th>
                  </tr>
                </thead>
                <tbody>
                  {responsibilityMatrix.map((r) => (
                    <tr key={r.area} className="border-b border-line-600/60">
                      <td className="py-3 pr-4 text-text-body">{r.area}</td>
                      {[r.moazzam, r.falak, r.musfirah].map((role, idx) => (
                        <td key={idx} className="px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              role === 'Lead'
                                ? 'bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/30'
                                : 'bg-obsidian-700 text-text-muted ring-1 ring-line-600'
                            }`}
                          >
                            {role}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Business cards */}
      <section className="border-t border-line-600 bg-void-950 section-pad">
        <div className="shell">
          <SectionHeading center eyebrow="Business cards" title="Save our details" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.08}>
                <BusinessCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DetailDrawer member={active} onClose={() => setActive(null)} />
    </>
  );
}

function Avatar({ initials, size = 'lg' }: { initials: string; size?: 'lg' | 'sm' }) {
  const dims = size === 'lg' ? 'h-16 w-16 text-xl' : 'h-12 w-12 text-base';
  return (
    <div className={`relative inline-flex ${dims} items-center justify-center rounded-full bg-obsidian-700 p-[2px] ring-1 ring-line-500`}>
      <span className="flex h-full w-full items-center justify-center rounded-full bg-obsidian-800 font-bold text-text-strong">
        {initials}
      </span>
    </div>
  );
}

function BusinessCard({ member }: { member: Member }) {
  const frontRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const download = async () => {
    if (!frontRef.current) return;
    try {
      const dataUrl = await toPng(frontRef.current, { quality: 0.95, backgroundColor: '#000000' });
      const link = document.createElement('a');
      link.download = `${member.name.replace(/\s+/g, '_')}_card.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="group h-52 w-full max-w-[360px] cursor-pointer [perspective:1200px]"
        onClick={() => setFlipped((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setFlipped((v) => !v); }}
        aria-label={`${member.name} business card — click to flip`}
      >
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Front */}
          <div
            ref={frontRef}
            className="absolute inset-0 [backface-visibility:hidden]"
          >
            <div className="relative flex h-full w-full flex-col justify-between rounded-xl border border-line-600 bg-void-950 p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">{company.name}</p>
                <p className="mt-1 text-[10px] text-text-muted">{company.product}</p>
              </div>
              <div>
                <p className="text-lg font-bold text-text-strong">{member.name}</p>
                <p className="mt-0.5 text-xs text-text-body">{member.designation}</p>
              </div>
              <div className="flex items-center justify-between text-[10px] text-text-muted">
                <span>{company.website}</span>
                <span className="h-1 w-1 rounded-full bg-gold-300" />
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="relative flex h-full w-full flex-col justify-center gap-2 rounded-xl border border-line-600 bg-obsidian-800 p-5">
              <p className="flex items-center gap-2 text-xs text-text-body"><Mail className="h-3.5 w-3.5 text-brand-300" /> {member.email}</p>
              <p className="flex items-center gap-2 text-xs text-text-body"><Phone className="h-3.5 w-3.5 text-brand-300" /> {contact.phone}</p>
              <p className="flex items-center gap-2 text-xs text-text-body"><Globe className="h-3.5 w-3.5 text-brand-300" /> {company.website}</p>
              <p className="mt-2 text-[10px] text-text-muted">Click to flip back</p>
            </div>
          </div>
        </motion.div>
      </div>
      <button onClick={download} className="btn btn-secondary text-xs">
        <Download className="h-3.5 w-3.5" />
        Download card
      </button>
    </div>
  );
}

function DetailDrawer({ member, onClose }: { member: Member | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card max-h-[90vh] w-full max-w-lg overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${member.name} profile`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar initials={member.initials} size="sm" />
                <div>
                  <h3 className="text-lg font-bold text-text-strong">{member.name}</h3>
                  <p className="text-sm text-brand-300">{member.designation}</p>
                </div>
              </div>
              <button onClick={onClose} aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-text-muted hover:bg-obsidian-700 hover:text-text-strong">
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text-body">{member.bio}</p>

            <Block title="Skills">
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </Block>

            <Block title="Responsibilities">
              <ul className="space-y-2 text-sm text-text-body">
                {member.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />{r}</li>
                ))}
              </ul>
            </Block>

            <Block title="Key deliverables">
              <ul className="space-y-2 text-sm text-text-body">
                {member.deliverables.map((d) => (
                  <li key={d} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />{d}</li>
                ))}
              </ul>
            </Block>

            <Block title="Contribution to the platform">
              <p className="text-sm leading-relaxed text-text-body">{member.contribution}</p>
            </Block>

            <Block title="Documentation & presentations">
              <p className="text-sm leading-relaxed text-text-body">
                {member.id === 'moazzam' && 'Owns website content, product documentation and presentation materials.'}
                {member.id === 'falak' && 'Owns data documentation, model evaluation reports and methodology notes.'}
                {member.id === 'musfirah' && 'Owns architecture documentation, API references and deployment guides.'}
              </p>
            </Block>

            <Block title="Professional vision">
              <p className="text-sm leading-relaxed text-text-body">{member.vision}</p>
            </Block>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 border-t border-line-600 pt-5">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-300">{title}</h4>
      {children}
    </div>
  );
}
