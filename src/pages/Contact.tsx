import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, ChevronDown } from 'lucide-react';
import { useSeo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { contact } from '@/data/company';
import { faqs } from '@/data/content';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const businessTypes = [
  'Restaurant',
  'Online seller',
  'Clinic',
  'Salon',
  'Other',
];

export function Contact() {
  useSeo({
    title: 'Contact: Sentimo Tech Solutions',
    description: 'Get in touch with the Sentimo team to join early access or ask about Urdu-English feedback intelligence for your business.',
    path: '/contact',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.name?.trim()) e.name = 'Please enter your name.';
    if (!data.email?.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Please enter a valid email.';
    if (!data.businessType) e.businessType = 'Please select a business type.';
    if (!data.message?.trim()) e.message = 'Please enter a message.';
    return e;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus('loading');

    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          setStatus('success');
          form.reset();
          return;
        }
      } catch {
        // fall through to mailto
      }
    }

    // Mailto fallback
    const subject = encodeURIComponent(`Early access enquiry from ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nBusiness type: ${data.businessType}\n\n${data.message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    form.reset();
  };

  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        title={<>Let's talk about <span className="gradient-text">your feedback</span></>}
        intro="Join the early access waitlist or ask us anything. We read every message."
      />

      <section className="bg-void-950 section-pad">
        <div className="shell grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="glass-card p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-positive" />
                  <h3 className="mt-4 text-lg font-bold text-text-strong">Thank you</h3>
                  <p className="mt-2 max-w-sm text-sm text-text-body">
                    Your message is on its way. If your email client opened, the message is ready to send. We will be in touch soon.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn btn-secondary mt-6">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <Field label="Name" error={errors.name}>
                    <input name="name" type="text" placeholder="Your name" className={inputClass(errors.name)} />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input name="email" type="email" placeholder="you@example.com" className={inputClass(errors.email)} />
                  </Field>
                  <Field label="Business type" error={errors.businessType}>
                    <div className="relative">
                      <select name="businessType" defaultValue="" className={`${inputClass(errors.businessType)} appearance-none pr-10`}>
                        <option value="" disabled>Select a type</option>
                        {businessTypes.map((b) => (
                          <option key={b} value={b} className="bg-obsidian-700 text-text-strong">{b}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    </div>
                  </Field>
                  <Field label="Message" error={errors.message}>
                    <textarea name="message" rows={4} placeholder="Tell us about your business and what you'd like from Sentimo." className={`${inputClass(errors.message)} resize-none`} />
                  </Field>
                  <button type="submit" disabled={status === 'loading'} className="btn btn-primary w-full">
                    {status === 'loading' ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                    ) : (
                      <>Send message <Send className="h-4 w-4" /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-text-muted">
                    {!FORMSPREE_ENDPOINT && 'Your email client will open with the message ready to send. '}
                    We will never share your details.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Details + FAQ */}
          <div className="space-y-6">
            <Reveal delay={0.08}>
              <div className="glass-card p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-300">Details</h3>
                <ul className="mt-5 space-y-4">
                  <DetailRow icon={Mail} label="Email" value={contact.email} />
                  <DetailRow icon={MapPin} label="Location" value={contact.location} />
                  <DetailRow icon={Phone} label="Phone" value={contact.phone} />
                </ul>
                <div className="mt-6 border-t border-line-600 pt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">Reach a team member</h4>
                  <ul className="mt-3 space-y-2.5">
                    {contact.members.map((m) => (
                      <li key={m.name} className="flex items-center justify-between text-sm">
                        <span className="text-text-body">{m.name}</span>
                        <a href={`mailto:${m.email}`} className="text-brand-300 transition hover:text-brand-400">{m.email}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 border-t border-line-600 pt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">Social</h4>
                  <div className="mt-3 flex gap-3">
                    {contact.social.map((s) => (
                      <a key={s.label} href={s.href} className="chip transition hover:border-brand-400 hover:text-brand-300">{s.label}</a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal delay={0.12}>
              <div className="glass-card p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-300">FAQ</h3>
                <div className="mt-4 divide-y divide-line-600">
                  {faqs.map((f, i) => (
                    <div key={f.q}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex w-full items-center justify-between py-3.5 text-left"
                        aria-expanded={openFaq === i}
                      >
                        <span className="text-sm font-semibold text-text-strong">{f.q}</span>
                        <ChevronDown className={`h-4 w-4 shrink-0 text-text-muted transition ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <p className="pb-4 text-sm leading-relaxed text-text-body">{f.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-xl border bg-obsidian-700 px-4 py-3 text-sm text-text-strong placeholder:text-text-muted transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40 ${
    error ? 'border-negative/60' : 'border-line-600'
  }`;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-muted">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-negative">{error}</span>}
    </label>
  );
}

function DetailRow({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-obsidian-700 text-brand-300 ring-1 ring-line-600">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-text-muted">{label}</p>
        <p className="text-sm font-semibold text-text-strong">{value}</p>
      </div>
    </li>
  );
}
