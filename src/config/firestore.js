// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5Q6M6mS7Tm1RJ9P1cFnAiYUPsY-G-pGM",
  authDomain: "campusloop-4abd3.firebaseapp.com",
  projectId: "campusloop-4abd3",
  storageBucket: "campusloop-4abd3.firebasestorage.app",
  messagingSenderId: "472042143132",
  appId: "1:472042143132:web:d55aab49860fd3d18e5c59",
  measurementId: "G-WMD18T3CG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

export { db, storage };
