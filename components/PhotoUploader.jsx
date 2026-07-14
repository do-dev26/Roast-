'use client';

import { useState, useRef } from 'react';
import { auth } from '../lib/firebaseClient';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export default function PhotoUploader({ onUploaded, currentPhotoUrl }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const user = auth.currentUser;
      const token = user ? await user.getIdToken() : null;

      const formData = new FormData();
      formData.append('photo', file);

      const res = await fetch(`${API_BASE}/api/photos/upload`, {
        method: 'POST',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      onUploaded?.(data);
    } catch (err) {
      setError('Could not upload photo. Try again.');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-2xl border-2 border-dashed border-paper/30 p-6 text-center">
      {currentPhotoUrl ? (
        <img
          src={currentPhotoUrl}
          alt="Uploaded"
          className="mx-auto max-h-64 rounded-xl mb-4 object-cover"
        />
      ) : (
        <p className="font-body text-paper/70 mb-4">Upload a photo to feed the engines.</p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
        id="photo-upload-input"
      />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="font-display tracking-wide text-xl bg-marigold text-ink px-6 py-2 rounded-full disabled:opacity-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-marigold/50"
      >
        {uploading ? 'Uploading…' : currentPhotoUrl ? 'Replace Photo' : 'Upload Photo'}
      </button>

      {error && <p className="text-chilli text-sm mt-2 font-body">{error}</p>}
    </div>
  );
}
