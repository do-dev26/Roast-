'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getCurrentUser, signOut, subscribeToAuthChanges } from '../../lib/auth';
import { getDashboard } from '../../lib/api';

const GREETINGS = [
  "Ready to see what the AI thinks of you today?",
  "Your photo. Ten opinions. Let's go.",
  "One upload away from your next viral moment.",
];

export default function DashboardHomePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [greeting] = useState(() => GREETINGS[Math.floor(Math.random() * GREETINGS.length)]);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.replace('/login');
        return;
      }
      if (!mounted) return;
      setUser(currentUser);

      try {
        const dashboardStats = await getDashboard();
        if (mounted) setStats(dashboardStats);
      } catch {
        // No history yet is fine — dashboard still renders
      } finally {
        if (mounted) setLoading(false);
      }
    }

    init();

    const unsubscribe = subscribeToAuthChanges((firebaseUser) => {
      if (!firebaseUser) router.replace('/login');
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [router]);

  async function handleSignOut() {
    await signOut();
    router.push('/login');
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-ink flex items-center justify-center">
        <p className="font-mono text-paper/50 text-sm">Loading your dashboard…</p>
      </main>
    );
  }

  const displayName = user?.email?.split('@')[0] || 'there';

  return (
    <main className="min-h-screen bg-ink px-6 py-10 md:px-12">
      <header className="flex items-start justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-marigold mb-1">
            Dashboard
          </p>
          <h1 className="font-display text-5xl tracking-wide leading-none capitalize">
            Hey {displayName} 👋
          </h1>
          <p className="font-body text-paper/60 mt-2">{greeting}</p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/settings"
            className="font-mono text-xs uppercase tracking-widest border border-paper/20 rounded-full px-4 py-2 hover:bg-paper hover:text-ink transition-colors"
          >
            Settings
          </Link>
          <button
            onClick={handleSignOut}
            className="font-mono text-xs uppercase tracking-widest text-paper/50 hover:text-paper"
          >
            Sign out
          </button>
        </div>
      </header>

      {/* Quick stats — professional data, slightly playful labels */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatCard
          label="Overall Score"
          value={stats?.overall_entertainment_score ?? '—'}
          accent="marigold"
        />
        <StatCard label="Generations" value={stats?.total_generations ?? 0} accent="mint" />
        <StatCard
          label="Engines Tried"
          value={Object.keys(stats?.feature_usage || {}).length}
          accent="violet"
        />
        <StatCard label="Plan" value="Free" accent="chilli" />
      </div>

      {/* Primary CTA */}
      <div className="bg-paper rounded-2xl p-8 mb-10 flex items-center justify-between flex-wrap gap-6">
        <div>
          <h2 className="font-display text-3xl text-ink tracking-wide mb-1">
            Got a new photo?
          </h2>
          <p className="font-body text-ink/60">
            Upload it and let all ten engines have their say.
          </p>
        </div>
        <Link
          href="/entertainment"
          className="font-display text-xl tracking-wide bg-ink text-paper px-6 py-3 rounded-full whitespace-nowrap"
        >
          Upload &amp; Analyze →
        </Link>
      </div>

      {/* Recent activity */}
      <div>
        <h2 className="font-display text-2xl tracking-wide mb-3">Recent Activity</h2>
        <div className="space-y-3">
          {(stats?.recent || []).slice(0, 5).map((item) => (
            <div
              key={item.id || item.created_at}
              className="bg-paper/10 rounded-xl px-5 py-3 flex items-center justify-between"
            >
              <span className="font-body capitalize">{item.feature.replace(/_/g, ' ')}</span>
              <span className="font-mono text-xs text-paper/40">
                {new Date(item.created_at).toLocaleDateString()}
              </span>
            </div>
          ))}
          {(!stats?.recent || stats.recent.length === 0) && (
            <div className="bg-paper/5 border border-dashed border-paper/15 rounded-xl px-5 py-8 text-center">
              <p className="font-body text-paper/50">
                Nothing here yet — your comedy career starts with one upload.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function StatCard({ label, value, accent }) {
  const accentClasses = {
    marigold: 'text-marigold',
    mint: 'text-mint',
    violet: 'text-violet',
    chilli: 'text-chilli',
  };
  return (
    <div className="bg-paper/10 rounded-xl p-4">
      <p className="font-mono text-xs uppercase tracking-widest text-paper/50 mb-1">{label}</p>
      <p className={`font-display text-4xl ${accentClasses[accent]}`}>{value}</p>
    </div>
  );
}
