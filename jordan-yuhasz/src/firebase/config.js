// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPK8MJsdusOdZc-DZ9Rr5SZUVYOwg8ZUM",
    authDomain: "jordanyuhasz-e7dd3.firebaseapp.com",
    projectId: "jordanyuhasz-e7dd3",
    storageBucket: "jordanyuhasz-e7dd3.firebasestorage.app",
    messagingSenderId: "509852481119",
    appId: "1:509852481119:web:72dc55ab9b4333900ccdea",
    measurementId: "G-EGTYY8NRED"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);