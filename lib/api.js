import { auth, waitForAuthReady } from './firebaseClient';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

async function authHeader() {
  await waitForAuthReady();
  const user = auth.currentUser;
  if (!user) return {};
  const token = await user.getIdToken();
  return { Authorization: `Bearer ${token}` };
}

export async function runEngine(feature, photoId) {
  const headers = await authHeader();
  const res = await fetch(`${API_BASE}/api/entertainment/${feature}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify({ photoId }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'engine_failed');
  }
  return res.json();
}

export async function getHistory() {
  const headers = await authHeader();
  const res = await fetch(`${API_BASE}/api/entertainment/history/all`, { headers });
  if (!res.ok) throw new Error('history_fetch_failed');
  return res.json();
}

export async function getDashboard() {
  const headers = await authHeader();
  const res = await fetch(`${API_BASE}/api/entertainment/dashboard`, { headers });
  if (!res.ok) throw new Error('dashboard_fetch_failed');
  return res.json();
}
