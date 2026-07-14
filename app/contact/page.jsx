'use client';

import { useState } from 'react';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // TODO: wire this to a real backend endpoint (e.g. POST /api/contact)
      // that emails support or saves to a `contact_messages` table.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
    } catch {
      setError('Could not send your message. Try again in a bit.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-ink text-paper min-h-screen">
      <SiteNav />

      <section className="px-6 md:px-12 py-16 max-w-lg mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-marigold mb-2">
          Get in touch
        </p>
        <h1 className="font-display text-5xl tracking-wide mb-3">Contact Us</h1>
        <p className="font-body text-paper/60 mb-8">
          Questions, feedback, or a bug the AI roasted a little too hard? Send it over.
        </p>

        {submitted ? (
          <div className="bg-paper rounded-2xl p-6 text-ink">
            <p className="font-display text-2xl tracking-wide mb-1">Message sent.</p>
            <p className="font-body text-ink/70">We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-paper rounded-2xl p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-ink/15 px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-marigold"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-ink/15 px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-marigold"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-ink/15 px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-marigold"
              />
            </div>

            {error && <p className="text-chilli text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full font-display text-xl tracking-wide bg-ink text-paper rounded-lg py-2 disabled:opacity-50"
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
