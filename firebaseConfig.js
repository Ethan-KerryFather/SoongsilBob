// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp9fonb-RRpyDfTIX6CT2mpxayA7aR0YI",
  authDomain: "soongsilbob.firebaseapp.com",
  projectId: "soongsilbob",
  storageBucket: "soongsilbob.appspot.com",
  messagingSenderId: "356428368282",
  appId: "1:356428368282:web:2b91e2a261a36fcbb99223",
  measurementId: "G-N3TBPW4JYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
