import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAETSqOdogTOK0YHQz8BXDtn7o1z2NYY68",
    authDomain: "myportfolio-saadelafrhani.firebaseapp.com",
    projectId: "myportfolio-saadelafrhani",
    storageBucket: "myportfolio-saadelafrhani.appspot.com",
    messagingSenderId: "886796741752",
    appId: "1:886796741752:web:d3370891c8342b630d118d",
    measurementId: "G-CB0F7833DT",
};

// Initialize Firebase app (ensure it's initialized only once)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
