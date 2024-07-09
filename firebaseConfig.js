// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBwRCwLTAwIiTwWtgGAf77PzKGO3jzUQc",
  authDomain: "feedback-form-f51d2.firebaseapp.com",
  projectId: "feedback-form-f51d2",
  storageBucket: "feedback-form-f51d2.appspot.com",
  messagingSenderId: "806847095059",
  appId: "1:806847095059:web:e876ddea1b9f240792bae6",
  measurementId: "G-4J17ETCT8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
