import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4aN6sNxuY91OpCzRhIslvCXYWSKJ5PNM",
  authDomain: "planning-with-ai-67a76.firebaseapp.com",
  projectId: "planning-with-ai-67a76",
  storageBucket: "planning-with-ai-67a76.firebasestorage.app",
  messagingSenderId: "250873437317",
  appId: "1:250873437317:web:276c5df31d26b399495dec"
};

// Guard against re-initializing on Next.js hot reload
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Firebase restores the logged-in session asynchronously on page load — reading
// auth.currentUser immediately after a fresh page load/refresh can incorrectly
// return null before that restoration finishes, causing "missing_token" errors
// on the very first API call of a page. This waits for the FIRST auth state
// resolution once, then caches that promise so every caller afterwards reads
// auth.currentUser reliably instead of racing the restore.
let authReadyPromise = null;
export function waitForAuthReady() {
  if (!authReadyPromise) {
    authReadyPromise = new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });
  }
  return authReadyPromise;
}
