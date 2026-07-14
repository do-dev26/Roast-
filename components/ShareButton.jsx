'use client';

import { useState } from 'react';

export default function ShareButton({ text, title = 'Check out my AI result' }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, text });
        return;
      } catch {
        // user cancelled — fall through silently
        return;
      }
    }
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleShare}
      className="font-mono text-xs uppercase tracking-widest border border-ink/20 rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-marigold/50"
    >
      {copied ? 'Copied!' : 'Share'}
    </button>
  );
}
