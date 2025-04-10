// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDxXspEqc5nDQOJ6sHvJIlExWI9245nsBQ",
  authDomain: "campusloop-42891.firebaseapp.com",
  projectId: "campusloop-42891",
  storageBucket: "campusloop-42891.firebasestorage.app",
  messagingSenderId: "520501738089",
  appId: "1:520501738089:web:40f5bf830249475c2600f8",
  measurementId: "G-ZWGVG0KXTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optionally initialize analytics and storage
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, analytics, storage };
