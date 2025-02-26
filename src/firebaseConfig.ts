// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTDWRDMpU4UWaJGiiQJkeA6Hw2V9JHccw",
  authDomain: "scrapdhan-123.firebaseapp.com",
  projectId: "scrapdhan-123",
  storageBucket: "scrapdhan-123.firebasestorage.app",
  messagingSenderId: "695053744169",
  appId: "1:695053744169:web:8de557ef06476acf68c438",
  measurementId: "G-93V1GYGTVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { analytics, auth, db, storage };