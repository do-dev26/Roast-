'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import EngineCard from '../../components/EngineCard';
import PhotoUploader from '../../components/PhotoUploader';
import { ENGINES } from '../../data/engines';

const PHOTO_ID_KEY = 'entertainment_current_photo_id';
const PHOTO_URL_KEY = 'entertainment_current_photo_url';

export default function EntertainmentHubPage() {
  const [photoId, setPhotoId] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    setPhotoId(sessionStorage.getItem(PHOTO_ID_KEY));
    setPhotoUrl(sessionStorage.getItem(PHOTO_URL_KEY));
  }, []);

  function handleUploaded(data) {
    setPhotoId(data.id);
    setPhotoUrl(data.cloudinary_url);
    sessionStorage.setItem(PHOTO_ID_KEY, data.id);
    sessionStorage.setItem(PHOTO_URL_KEY, data.cloudinary_url);
  }

  return (
    <main className="min-h-screen bg-ink px-6 py-10 md:px-12">
      <header className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-marigold mb-1">
            Entertainment Hub
          </p>
          <h1 className="font-display text-5xl md:text-6xl tracking-wide leading-none">
            Ten machines.
            <br />
            One photo.
          </h1>
        </div>
        <Link
          href="/entertainment/dashboard"
          className="font-mono text-xs uppercase tracking-widest border border-paper/30 rounded-full px-4 py-2 hover:bg-paper hover:text-ink transition-colors"
        >
          View Dashboard →
        </Link>
      </header>

      <div className="mb-10 max-w-md">
        <PhotoUploader onUploaded={handleUploaded} currentPhotoUrl={photoUrl} />
      </div>

      {!photoId && (
        <p className="font-body text-paper/60 mb-6 text-sm">
          Upload a photo above to unlock the engines below.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {ENGINES.map((engine) => (
          <EngineCard key={engine.id} engine={engine} />
        ))}
      </div>
    </main>
  );
}
