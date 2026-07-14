'use client';

import Link from 'next/link';

const ACCENT_CLASSES = {
  marigold: 'bg-marigold text-ink',
  chilli: 'bg-chilli text-paper',
  mint: 'bg-mint text-ink',
  violet: 'bg-violet text-ink',
};

export default function EngineCard({ engine }) {
  return (
    <Link
      href={`/entertainment/${engine.id}`}
      className="group block rounded-2xl bg-paper text-ink overflow-hidden shadow-lg hover:-translate-y-1 transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-marigold"
    >
      <div className="p-5 flex items-start justify-between">
        <div>
          <div className="text-4xl mb-2">{engine.icon}</div>
          <h3 className="font-display text-3xl tracking-wide leading-none">
            {engine.label}
          </h3>
          <p className="text-sm text-ink/60 mt-1 font-body">{engine.tagline}</p>
        </div>
      </div>

      <div className="ticket-perforation mx-4" />

      <div
        className={`px-5 py-3 font-mono text-xs uppercase tracking-widest flex items-center justify-between ${
          ACCENT_CLASSES[engine.accent]
        }`}
      >
        <span>Tap to redeem</span>
        <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </Link>
  );
}
