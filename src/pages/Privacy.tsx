import { useSeo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { company } from '@/data/company';

export function Privacy() {
  useSeo({
    title: 'Privacy Policy — Sentimo Tech Solutions',
    description: 'How Sentimo Tech Solutions handles your data and feedback.',
    path: '/privacy',
  });

  return (
    <>
      <PageHeader breadcrumb="Privacy" title="Privacy Policy" intro="How we handle your information, in plain language." />
      <section className="bg-void-950 section-pad">
        <div className="shell max-w-3xl space-y-6 text-pretty leading-relaxed text-text-body">
          <Reveal>
            <p>This policy describes how {company.name} handles information you share with us through this website and the {company.product} platform.</p>
          </Reveal>
          <Block title="What we collect">
            <p>Contact form submissions (name, email, business type and message), and feedback data you upload to {company.product} for analysis.</p>
          </Block>
          <Block title="How we use it">
            <p>We use contact submissions to respond to enquiries and manage early access. Feedback data is used only to produce your insights and summaries.</p>
          </Block>
          <Block title="What we do not do">
            <p>We do not sell your data, share it with third parties for marketing, or use your feedback to train public models without consent.</p>
          </Block>
          <Block title="Storage">
            <p>Data is stored securely on cloud infrastructure with access controls. Only authorized team members can access it.</p>
          </Block>
          <Block title="Your rights">
            <p>You can request access to, correction of, or deletion of your data at any time by contacting {company.email}.</p>
          </Block>
          <Block title="Updates">
            <p>We will update this page if our practices change. Last updated: 2026.</p>
          </Block>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  useSeo({
    title: 'Terms — Sentimo Tech Solutions',
    description: 'Terms of use for the Sentimo website and platform.',
    path: '/terms',
  });

  return (
    <>
      <PageHeader breadcrumb="Terms" title="Terms of Use" intro="The terms for using this website and the Sentimo platform." />
      <section className="bg-void-950 section-pad">
        <div className="shell max-w-3xl space-y-6 text-pretty leading-relaxed text-text-body">
          <Reveal>
            <p>By using this website or {company.product}, you agree to the terms below.</p>
          </Reveal>
          <Block title="The service">
            <p>{company.product} is an Urdu-English feedback intelligence platform. Features described as MVP are available now; features tagged Roadmap are planned and may change.</p>
          </Block>
          <Block title="Acceptable use">
            <p>You agree to upload only feedback you have the right to use and to use the platform for legitimate business purposes.</p>
          </Block>
          <Block title="No warranty">
            <p>The platform is provided "as is" without warranty of any kind. We do not guarantee specific accuracy figures or outcomes.</p>
          </Block>
          <Block title="Intellectual property">
            <p>All content on this site is owned by {company.name}. You may not reproduce it without permission.</p>
          </Block>
          <Block title="Contact">
            <p>Questions about these terms? Email {company.email}.</p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="glass-card p-6">
        <h2 className="text-base font-bold text-text-strong">{title}</h2>
        <div className="mt-3 text-sm">{children}</div>
      </div>
    </Reveal>
  );
}
