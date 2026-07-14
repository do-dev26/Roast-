import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export default function AboutPage() {
  return (
    <div className="bg-ink text-paper min-h-screen">
      <SiteNav />

      <section className="px-6 md:px-12 py-16 max-w-2xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-marigold mb-2">
          About us
        </p>
        <h1 className="font-display text-5xl tracking-wide mb-8">
          We built ten AIs whose only job is to have opinions about your photos.
        </h1>

        <div className="space-y-5 font-body text-paper/80 text-lg leading-relaxed">
          <p>
            It started with a simple question: what if your photo could get roasted,
            complimented, turned into a Bollywood poster, and judged like a talent
            show contestant — all before you finished your coffee?
          </p>
          <p>
            So we built ten AI engines, each with a completely different personality.
            One's a savage comedian. One thinks you're the main character of a
            blockbuster. One only speaks in emojis. None of them are being paid
            enough for this.
          </p>
          <p>
            We're a small team obsessed with making AI feel less like a tool and
            more like a friend group that's a little too honest. Every engine is
            built to be shareable — because the best reaction to seeing yourself
            described by an AI is usually to send it to everyone you know.
          </p>
          <p>
            We take your photos and privacy seriously, even when our AI doesn't
            take your fashion choices seriously. Read our{' '}
            <a href="/privacy" className="text-marigold hover:underline">
              Privacy Policy
            </a>{' '}
            for the details.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
