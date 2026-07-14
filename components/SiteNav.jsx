import Link from 'next/link';

export default function SiteNav() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 md:px-12">
      <Link href="/" className="font-display text-2xl tracking-wide">
        🎟️ RoastMe AI
      </Link>
      <div className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-paper/70">
        <Link href="/about" className="hover:text-paper">About</Link>
        <Link href="/contact" className="hover:text-paper">Contact</Link>
        <Link href="/login" className="hover:text-paper">Login</Link>
      </div>
      <Link
        href="/register"
        className="font-mono text-xs uppercase tracking-widest bg-marigold text-ink rounded-full px-4 py-2"
      >
        Get Started
      </Link>
    </nav>
  );
}
