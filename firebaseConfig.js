// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaUudwkSWT-1d541WAUSGwX1fwnpSoAvU",
  authDomain: "soongsilbob-a5800.firebaseapp.com",
  projectId: "soongsilbob-a5800",
  storageBucket: "soongsilbob-a5800.appspot.com",
  messagingSenderId: "513272092717",
  appId: "1:513272092717:web:3359430222f9fd0ee6c0a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
