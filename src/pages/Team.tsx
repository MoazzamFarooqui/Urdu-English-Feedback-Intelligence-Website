import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Download, ArrowRight } from 'lucide-react';
import { useSeo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { LogoIcon } from '@/components/Logo';
import { team, responsibilityMatrix, company, contact } from '@/data/company';

type Member = (typeof team)[number];

export function Team() {
  useSeo({
    title: 'Team: Sentimo Tech Solutions',
    description: 'Meet the team behind Sentimo: product, NLP and platform leaders building Urdu-English feedback intelligence in Pakistan.',
    path: '/team',
  });

  const [active, setActive] = useState<Member | null>(null);

  return (
    <>
      <PageHeader
        breadcrumb="Team"
        title={<>Three people, <span className="gradient-text">one platform</span></>}
        intro="Product, data science and platform, each role covered by someone focused on it."
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

const CARD_GOLD = '#c2a35a';

function BusinessCard({ member }: { member: Member }) {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const download = async () => {
    if (!frontRef.current || !backRef.current) return;
    try {
      const options = { quality: 0.95, backgroundColor: '#000000', pixelRatio: 2 };
      // Capture the back without its 3D flip transform so the export is not mirrored.
      const [frontUrl, backUrl] = await Promise.all([
        toPng(frontRef.current, options),
        toPng(backRef.current, { ...options, style: { transform: 'none' } }),
      ]);

      const loadImage = (src: string) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });

      const [frontImg, backImg] = await Promise.all([loadImage(frontUrl), loadImage(backUrl)]);
      const gap = 24;
      const padding = 24;
      const canvas = document.createElement('canvas');
      canvas.width = frontImg.width + backImg.width + gap + padding * 2;
      canvas.height = Math.max(frontImg.height, backImg.height) + padding * 2;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(frontImg, padding, padding);
      ctx.drawImage(backImg, padding + frontImg.width + gap, padding);

      const link = document.createElement('a');
      link.download = `${member.name.replace(/\s+/g, '_')}_card.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="group aspect-[1.75] w-full max-w-[380px] cursor-pointer [container-type:inline-size] [perspective:1200px]"
        onClick={() => setFlipped((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setFlipped((v) => !v); }}
        aria-label={`${member.name} business card, click to flip`}
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
            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-line-600 bg-black px-[5.3cqw] py-[4.3cqw]">
              <div>
                <div className="flex items-center gap-[1.8cqw]">
                  <LogoIcon className="h-[7.6cqw] w-[7.6cqw] shrink-0 text-white" />
                  <span className="whitespace-nowrap text-[3.5cqw] font-bold uppercase leading-none tracking-[0.14em] text-white">
                    {company.name}
                  </span>
                </div>
                <div className="mt-[3.8cqw] h-px w-[11cqw]" style={{ backgroundColor: CARD_GOLD }} />
                <p
                  className="mt-[2cqw] text-[2.35cqw] font-semibold uppercase leading-none tracking-[0.3em]"
                  style={{ color: CARD_GOLD }}
                >
                  Engineered for understanding
                </p>
              </div>

              <div>
                <p className="text-[6.6cqw] font-bold leading-tight text-white">{member.name}</p>
                <p className="mt-[1cqw] text-[3.5cqw] leading-snug text-[#a3a3a3]">{member.designation}</p>
              </div>

              <div className="flex items-end justify-between gap-[1.6cqw]">
                <p className="whitespace-nowrap text-[2.35cqw] leading-none text-[#8a8a8a]">
                  {company.email} <span className="mx-[0.8cqw] text-[#5c5c5c]">|</span> {contact.phone}{' '}
                  <span className="mx-[0.8cqw] text-[#5c5c5c]">|</span> {company.website}
                </p>
                <span className="h-[1.6cqw] w-[1.6cqw] shrink-0 rounded-full" style={{ backgroundColor: CARD_GOLD }} />
              </div>
            </div>
          </div>

          {/* Back */}
          <div
            ref={backRef}
            className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-line-600 bg-black">
              <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#333333]" />
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{ borderColor: `rgba(194, 163, 90, 0.75)` }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <LogoIcon className="h-12 w-12 text-white" />
                <p className="mt-5 pl-[0.45em] text-[11px] font-semibold uppercase leading-none tracking-[0.45em] text-white">
                  Sentimo
                </p>
                <p
                  className="mt-2 pl-[0.32em] text-[7px] font-semibold uppercase leading-none tracking-[0.32em]"
                  style={{ color: CARD_GOLD }}
                >
                  We read the room
                </p>
              </div>
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
