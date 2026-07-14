'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithEmail, signInWithGoogle } from '../../lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmail(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'Could not sign in. Check your details and try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'Google sign-in failed.');
    }
  }

  return (
    <main className="min-h-screen bg-ink flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-marigold mb-2">
            Welcome back
          </p>
          <h1 className="font-display text-4xl tracking-wide">Sign in</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-paper rounded-2xl p-6 space-y-4">
          <div>
            <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-ink/15 px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-marigold"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-ink/15 px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-marigold"
            />
          </div>

          {error && <p className="text-chilli text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full font-display text-xl tracking-wide bg-ink text-paper rounded-lg py-2 disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>

          <div className="relative py-2 text-center">
            <span className="bg-paper px-3 text-xs text-ink/40 font-mono uppercase relative z-10">
              or
            </span>
            <div className="absolute inset-x-0 top-1/2 h-px bg-ink/10" />
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full border border-ink/15 rounded-lg py-2 font-body text-ink hover:bg-ink/5 transition-colors"
          >
            Continue with Google
          </button>
        </form>

        <p className="text-center text-paper/60 text-sm mt-6 font-body">
          New here?{' '}
          <Link href="/register" className="text-marigold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
