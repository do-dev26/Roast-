import Link from 'next/link';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { ENGINES } from '../data/engines';

const TESTIMONIALS = [
  {
    quote:
      "Uploaded one photo, got roasted by an AI, laughed harder than I have in weeks, then screenshotted it for the group chat.",
    name: 'Ananya, 22',
    role: 'Serial group-chat poster',
  },
  {
    quote:
      "The Bollywood engine gave my passport photo a whole movie title. I have never felt more like a main character.",
    name: 'Rohan, 26',
    role: "Recently discovered his 'hero rating'",
  },
  {
    quote:
      "I only wanted a quick laugh, ended up spending an hour redeeming every single engine. Worth it.",
    name: 'Priya, 24',
    role: 'Ten-for-ten engine completionist',
  },
];

export default function HomePage() {
  return (
    <div className="bg-ink text-paper min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-10 pb-20 text-center max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-marigold mb-4">
          One photo. Ten AI opinions.
        </p>
        <h1 className="font-display text-6xl md:text-7xl tracking-wide leading-[0.95] mb-6">
          Your photo is about
          <br />
          to get judged.
        </h1>
        <p className="font-body text-paper/70 text-lg mb-8">
          Upload a photo and let ten different AI personalities roast it, rate it,
          caption it, and turn it into whatever's about to go viral next.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/register"
            className="font-display text-2xl tracking-wide bg-marigold text-ink px-8 py-3 rounded-full"
          >
            Upload Your Photo →
          </Link>
          <Link
            href="#services"
            className="font-mono text-xs uppercase tracking-widest border border-paper/20 rounded-full px-6 py-3 hover:bg-paper hover:text-ink transition-colors"
          >
            See what it does
          </Link>
        </div>
      </section>

      {/* Services / Engines overview */}
      <section id="services" className="px-6 md:px-12 pb-20">
        <div className="text-center mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-marigold mb-2">
            What you get
          </p>
          <h2 className="font-display text-4xl tracking-wide">Ten machines, one ticket each</h2>
          <p className="font-body text-paper/60 mt-2 max-w-xl mx-auto">
            Every engine looks at your photo differently — some roast you, some
            hype you up, one just talks entirely in emojis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {ENGINES.map((engine) => (
            <div key={engine.id} className="bg-paper/5 rounded-xl p-5 border border-paper/10">
              <div className="text-3xl mb-2">{engine.icon}</div>
              <h3 className="font-display text-2xl tracking-wide mb-1">{engine.label}</h3>
              <p className="font-body text-paper/60 text-sm">{engine.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 pb-20">
        <div className="text-center mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-marigold mb-2">
            People are talking
          </p>
          <h2 className="font-display text-4xl tracking-wide">Don't take our word for it</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-paper text-ink rounded-2xl p-6 flex flex-col justify-between">
              <p className="font-body italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-display text-xl tracking-wide">{t.name}</p>
                <p className="font-mono text-xs text-ink/50 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 pb-24 text-center">
        <div className="bg-marigold text-ink rounded-3xl p-12 max-w-3xl mx-auto stamp-rotate">
          <h2 className="font-display text-4xl tracking-wide mb-3">
            Your photo is waiting to be roasted.
          </h2>
          <Link
            href="/register"
            className="inline-block mt-4 font-display text-2xl tracking-wide bg-ink text-paper px-8 py-3 rounded-full"
          >
            Get Started Free →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
