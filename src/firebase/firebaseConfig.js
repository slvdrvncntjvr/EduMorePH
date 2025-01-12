// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  authDomain: "edumoreph.firebaseapp.com",
  projectId: "edumoreph",
  storageBucket: "edumoreph.firebasestorage.app",
  messagingSenderId: "498492223647",
  appId: "1:498492223647:web:920f3ba095c6e0b732b2aa",
  measurementId: "G-HNYX7SVPEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);