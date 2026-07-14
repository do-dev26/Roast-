import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from './firebaseClient';

export async function signUpWithEmail(email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  // Fire-and-forget verification email — Firebase logs the user in immediately
  // on signup, so we don't block on this like the old Supabase "check your email" flow.
  sendEmailVerification(cred.user).catch(() => {});
  return cred.user;
}

export async function signInWithEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  return cred.user;
}

export async function signOut() {
  await firebaseSignOut(auth);
}

export async function getCurrentUser() {
  // onAuthStateChanged is async on first load (Firebase restores the session
  // from storage), so this waits for that first resolution rather than reading
  // auth.currentUser synchronously, which could incorrectly return null.
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

// Re-exported so pages can subscribe to ongoing auth changes (e.g. sign-out in another tab)
export function subscribeToAuthChanges(callback) {
  return onAuthStateChanged(auth, callback);
}
