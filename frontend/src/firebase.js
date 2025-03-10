// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-auth-6886f.firebaseapp.com",
  projectId: "mern-auth-6886f",
  storageBucket: "mern-auth-6886f.firebasestorage.app",
  messagingSenderId: "29401582343",
  appId: "1:29401582343:web:9841161058a38d2b8f93a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);