import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-paper/10 px-6 py-10 md:px-12 mt-20">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <p className="font-mono text-xs text-paper/40">
          © {new Date().getFullYear()} RoastMe AI. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-5 font-mono text-xs uppercase tracking-widest text-paper/50">
          <Link href="/about" className="hover:text-paper">About</Link>
          <Link href="/contact" className="hover:text-paper">Contact</Link>
          <Link href="/terms" className="hover:text-paper">Terms</Link>
          <Link href="/privacy" className="hover:text-paper">Privacy</Link>
          <Link href="/refund" className="hover:text-paper">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
