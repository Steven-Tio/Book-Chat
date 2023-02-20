import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDztRXnFxFVSVLcyKv61khQSro-k0FrHMg",
  authDomain: "chat-2faeb.firebaseapp.com",
  projectId: "chat-2faeb",
  storageBucket: "chat-2faeb.appspot.com",
  messagingSenderId: "872440978091",
  appId: "1:872440978091:web:34fca77a378f97f2abf5ee",
  measurementId: "G-75MZRPZE3Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();