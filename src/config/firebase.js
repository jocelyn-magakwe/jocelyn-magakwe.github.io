// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1l5O0MxJlxJZI5GqOmjprgvBVJo0Q2AE",
  authDomain: "jocelynatwellportfolio.firebaseapp.com",
  projectId: "jocelynatwellportfolio",
  storageBucket: "jocelynatwellportfolio.appspot.com",
  messagingSenderId: "437396122015",
  appId: "1:437396122015:web:458904f6743c282c1f75aa",
  measurementId: "G-QMX0674HPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};