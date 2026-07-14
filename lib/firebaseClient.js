import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
