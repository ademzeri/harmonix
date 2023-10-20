// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlQG8uF4KLQisIzh_Yk0HiUTy8dbJO0Ik",
  authDomain: "learning-46746.firebaseapp.com",
  projectId: "learning-46746",
  storageBucket: "learning-46746.appspot.com",
  messagingSenderId: "163463646368",
  appId: "1:163463646368:web:a60d68a2230c1d0152cdc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()