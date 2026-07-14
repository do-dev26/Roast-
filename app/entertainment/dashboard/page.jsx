'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getDashboard } from '../../../lib/api';
import { getEngine } from '../../../data/engines';

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDashboard()
      .then(setData)
      .catch(() => setError('Could not load your dashboard.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-ink px-6 py-10 md:px-12">
      <Link
        href="/entertainment"
        className="font-mono text-xs uppercase tracking-widest text-paper/60 hover:text-paper mb-8 inline-block"
      >
        ← Back to Hub
      </Link>

      <h1 className="font-display text-5xl tracking-wide mb-8">Entertainment Dashboard</h1>

      {loading && <p className="font-body text-paper/60">Loading…</p>}
      {error && <p className="font-body text-chilli">{error}</p>}

      {data && (
        <div className="space-y-8 max-w-3xl">
          {/* Overall Entertainment Score */}
          <div className="bg-marigold text-ink rounded-2xl p-8 stamp-rotate inline-block">
            <p className="font-mono text-xs uppercase tracking-widest mb-1">
              Overall Entertainment Score
            </p>
            <p className="font-display text-7xl leading-none">
              {data.overall_entertainment_score ?? '—'}
              <span className="text-2xl">/10</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <div className="bg-paper/10 rounded-xl p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-paper/50">
                Total Generations
              </p>
              <p className="font-display text-4xl">{data.total_generations}</p>
            </div>
          </div>

          {/* Feature usage */}
          <div>
            <h2 className="font-display text-2xl tracking-wide mb-3">Most Used Engines</h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(data.feature_usage || {}).map(([featureId, count]) => {
                const engine = getEngine(featureId);
                return (
                  <span
                    key={featureId}
                    className="bg-paper/10 rounded-full px-4 py-2 font-mono text-sm"
                  >
                    {engine?.icon} {engine?.label || featureId} × {count}
                  </span>
                );
              })}
              {Object.keys(data.feature_usage || {}).length === 0 && (
                <p className="font-body text-paper/50 text-sm">
                  Nothing generated yet — go redeem an engine.
                </p>
              )}
            </div>
          </div>

          {/* Recent results */}
          <div>
            <h2 className="font-display text-2xl tracking-wide mb-3">Recent</h2>
            <div className="space-y-3">
              {(data.recent || []).map((item) => {
                const engine = getEngine(item.feature);
                return (
                  <Link
                    key={item.id || item.created_at}
                    href={`/entertainment/${item.feature}`}
                    className="block bg-paper text-ink rounded-xl px-5 py-3 hover:-translate-y-0.5 transition-transform"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-body font-medium">
                        {engine?.icon} {engine?.label || item.feature}
                      </span>
                      <span className="font-mono text-xs text-ink/50">
                        {new Date(item.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                );
              })}
              {(data.recent || []).length === 0 && (
                <p className="font-body text-paper/50 text-sm">No history yet.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
