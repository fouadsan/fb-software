import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyDvHYg32_WRoJYnULcwC-fMuiKfUVX0geo",
  authDomain: "react-portfolio-3169d.firebaseapp.com",
  projectId: "react-portfolio-3169d",
  storageBucket: "react-portfolio-3169d.appspot.com",
  messagingSenderId: "350258764946",
  appId: "1:350258764946:web:a99159900df2c920931a4b",
});

const db = getFirestore();

export default db;
