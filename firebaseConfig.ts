// firebaseConfig.ts
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyB_XkXLPT1frmzcN7bvxBAjkLWapYklmNw",
  authDomain: "front-end-football-webpage.firebaseapp.com",
  projectId: "front-end-football-webpage",
  storageBucket: "front-end-football-webpage.appspot.com",
  messagingSenderId: "721956664531",
  appId: "1:721956664531:web:22f72e3fa8cbab38615026",
  measurementId: "G-L881099X7K"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

// Conditionally initialize Firebase Analytics
let analytics: ReturnType<typeof getAnalytics> | undefined;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { auth, analytics };
