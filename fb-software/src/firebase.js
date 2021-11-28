// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvHYg32_WRoJYnULcwC-fMuiKfUVX0geo",
  authDomain: "react-portfolio-3169d.firebaseapp.com",
  projectId: "react-portfolio-3169d",
  storageBucket: "react-portfolio-3169d.appspot.com",
  messagingSenderId: "350258764946",
  appId: "1:350258764946:web:a99159900df2c920931a4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
