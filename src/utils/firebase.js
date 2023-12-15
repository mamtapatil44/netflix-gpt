// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWbeJa0UtaHlEs-qkY0XOd3S05hhM8Rnw",
  authDomain: "netflix4493.firebaseapp.com",
  projectId: "netflix4493",
  storageBucket: "netflix4493.appspot.com",
  messagingSenderId: "683212410552",
  appId: "1:683212410552:web:2c39b709883fb0a9f4ee4d",
  measurementId: "G-K52W5YGBML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();