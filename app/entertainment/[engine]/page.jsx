'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getEngine } from '../../../data/engines';
import { runEngine } from '../../../lib/api';
import ResultCard, { resultToShareText } from '../../../components/ResultCard';
import ShareButton from '../../../components/ShareButton';
import GenerateAgainButton from '../../../components/GenerateAgainButton';

const PHOTO_ID_KEY = 'entertainment_current_photo_id';

export default function EnginePage() {
  const params = useParams();
  const router = useRouter();
  const engine = getEngine(params.engine);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photoId, setPhotoId] = useState(null);

  useEffect(() => {
    const storedPhotoId = sessionStorage.getItem(PHOTO_ID_KEY);
    if (!storedPhotoId) {
      router.replace('/entertainment');
      return;
    }
    setPhotoId(storedPhotoId);
  }, [router]);

  useEffect(() => {
    if (photoId && engine) {
      generate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoId]);

  async function generate() {
    setLoading(true);
    setError(null);
    try {
      const data = await runEngine(engine.id, photoId);
      setResult(data.result);
    } catch (err) {
      if (err.message === 'upgrade_required') {
        setError('This engine needs the Basic plan. Upgrade to unlock it.');
      } else {
        setError('Something went wrong generating this. Try again.');
      }
    } finally {
      setLoading(false);
    }
  }

  if (!engine) {
    return (
      <main className="min-h-screen bg-ink flex items-center justify-center">
        <p className="font-body text-paper/70">Unknown engine.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink px-6 py-10 md:px-12">
      <Link
        href="/entertainment"
        className="font-mono text-xs uppercase tracking-widest text-paper/60 hover:text-paper mb-8 inline-block"
      >
        ← Back to Hub
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">{engine.icon}</span>
        <div>
          <h1 className="font-display text-5xl tracking-wide leading-none">{engine.label}</h1>
          <p className="font-body text-paper/60 mt-1">{engine.tagline}</p>
        </div>
      </div>

      {loading && (
        <div className="bg-paper/10 rounded-2xl p-10 text-center font-mono text-paper/60 animate-pulse">
          Running the {engine.label} engine…
        </div>
      )}

      {error && (
        <div className="bg-chilli/10 border border-chilli/40 rounded-2xl p-6 text-chilli font-body mb-6">
          {error}
        </div>
      )}

      {!loading && result && (
        <div className="max-w-2xl space-y-5">
          <ResultCard engine={engine} result={result} />
          <div className="flex items-center gap-3">
            <ShareButton
              text={resultToShareText(result, engine.fields)}
              title={`My ${engine.label} result`}
            />
            <GenerateAgainButton onClick={generate} loading={loading} />
          </div>
        </div>
      )}
    </main>
  );
}
