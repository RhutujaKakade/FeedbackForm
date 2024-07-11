// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "xxxxxxxxx",
  authDomain: "xxxxxxx",
  projectId: "xxxxxx",
  storageBucket: "xxxxxxx",
  messagingSenderId: "xxxxxxx",
  appId: "xxxxxxxxx",
  measurementId: "xxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
