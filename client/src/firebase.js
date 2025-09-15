// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-d5afc.firebaseapp.com",
  projectId: "real-estate-d5afc",
  storageBucket: "real-estate-d5afc.firebasestorage.app",
  messagingSenderId: "100253650557",
  appId: "1:100253650557:web:1da794b44bcdde20022b14",
  measurementId: "G-8NKMWJW8CE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);