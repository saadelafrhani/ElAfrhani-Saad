import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAETSqOdogTOK0YHQz8BXDtn7o1z2NYY68",
    authDomain: "myportfolio-saadelafrhani.firebaseapp.com",
    projectId: "myportfolio-saadelafrhani",
    storageBucket: "myportfolio-saadelafrhani.firebasestorage.app",
    messagingSenderId: "886796741752",
    appId: "1:886796741752:web:d3370891c8342b630d118d",
    measurementId: "G-CB0F7833DT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore instance