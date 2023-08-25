// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfhMIarriAldMpEuGzsa4bHbfdKq8MugQ",
  authDomain: "heroes-bruno-cornejo.firebaseapp.com",
  projectId: "heroes-bruno-cornejo",
  storageBucket: "heroes-bruno-cornejo.appspot.com",
  messagingSenderId: "734849713129",
  appId: "1:734849713129:web:e9d73bfeb7e879907d0178",
  measurementId: "G-R05VQPPYBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)