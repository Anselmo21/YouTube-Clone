import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AizaSyC-dQbGC9TkBE-kyXg8d0PKJMX3Mj4I14o",
  authDomain: "clone-3d6e6.firebaseapp.com",
  projectId: "clone-3d6e6",
  appId: "1:437029731285:web:ba89afbff7fe3b1b11045b5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth object for a sign up
const auth = getAuth(app);

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback); //
}
