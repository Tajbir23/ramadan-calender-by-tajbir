// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import 'firebase/database';
import {getDatabase} from "firebase/database"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP1I1BQu1c12Z44KjXIxqWwTaGC3XtVLw",
  authDomain: "ramadan-a3314.firebaseapp.com",
  projectId: "ramadan-a3314",
  storageBucket: "ramadan-a3314.appspot.com",
  messagingSenderId: "442807278507",
  appId: "1:442807278507:web:8df72ab34b2660cd6510ee",
  measurementId: "G-3PGB9QZ911"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const realdb = getDatabase();
const auth = getAuth();

export default app;
export { db, storage, realdb, auth, };