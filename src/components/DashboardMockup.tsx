import { motion } from 'framer-motion';
import { Smile, Frown, Minus, TrendingUp, TrendingDown } from 'lucide-react';
import { WindowDots } from './WindowDots';
import { sampleReviews } from '@/data/content';

const sentimentStyle = {
  positive: { label: 'Positive', icon: Smile, color: 'text-positive', bg: 'bg-positive/10', ring: 'ring-positive/30' },
  negative: { label: 'Negative', icon: Frown, color: 'text-negative', bg: 'bg-negative/10', ring: 'ring-negative/30' },
  mixed: { label: 'Mixed', icon: Minus, color: 'text-neutral', bg: 'bg-neutral/10', ring: 'ring-neutral/30' },
} as const;

export function DashboardMockup() {
  return (
    <div className="glass-card overflow-hidden p-3 sm:p-4">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-2 pb-3">
        <WindowDots />
        <div className="ml-1 flex-1 truncate rounded-md bg-obsidian-700 px-3 py-1 text-xs text-text-muted">
          app.sentimo.example/dashboard
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        {/* Left: review list */}
        <div className="lg:col-span-2 space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-semibold text-text-strong">Recent feedback</h3>
            <span className="tag-sample">Sample data</span>
          </div>
          {sampleReviews.map((r, i) => {
            const s = sentimentStyle[r.sentiment as keyof typeof sentimentStyle];
            const SentIcon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                className="rounded-xl border border-line-600 bg-obsidian-800/60 p-3"
              >
                <p
                  lang={r.urdu ? 'ur' : 'en'}
                  dir={r.urdu ? 'rtl' : 'ltr'}
                  className={`text-sm text-text-body ${r.urdu ? 'urdu' : ''}`}
                >
                  {r.text}
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ${s.bg} ${s.color} ${s.ring}`}>
                    <SentIcon className="h-3 w-3" />
                    {s.label}
                  </span>
                  {r.topics.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: summary panel */}
        <div className="space-y-3">
          <div className="rounded-xl border border-line-600 bg-obsidian-800/60 p-4">
            <h3 className="text-sm font-semibold text-text-strong">Sentiment this week</h3>
            <div className="mt-3 space-y-2.5">
              {[
                { label: 'Positive', val: 62, color: 'bg-positive', icon: TrendingUp },
                { label: 'Mixed', val: 23, color: 'bg-neutral', icon: Minus },
                { label: 'Negative', val: 15, color: 'bg-negative', icon: TrendingDown },
              ].map((b) => (
                <div key={b.label}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-muted">{b.label}</span>
                    <span className="text-text-body">{b.val}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-obsidian-700">
                    <motion.div
                      className={`h-full rounded-full ${b.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-line-600 bg-obsidian-800/60 p-4">
            <h3 className="text-sm font-semibold text-text-strong">Top topics</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {['Food', 'Delivery', 'Staff', 'Price', 'Service'].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="chip"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gold-500/20 bg-gradient-to-br from-obsidian-800/60 to-obsidian-900/60 p-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
              <h3 className="text-sm font-semibold text-text-strong">Weekly summary</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-text-muted">
              Customers love the food. Delivery times are the main complaint. Suggested action: review delivery partner SLAs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
