// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "mssg-wall.firebaseapp.com",
  projectId: "mssg-wall",
  storageBucket: "mssg-wall.appspot.com",
  messagingSenderId: process.env.FIREBASE_MSSG_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default getFirestore();
