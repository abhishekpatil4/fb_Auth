// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe63qTxqb3XkRI5zkghUbARYVtJ8FI74w",
  authDomain: "fb-auth-e06b5.firebaseapp.com",
  projectId: "fb-auth-e06b5",
  storageBucket: "fb-auth-e06b5.appspot.com",
  messagingSenderId: "71093994251",
  appId: "1:71093994251:web:53ba811002d9f35c32980e",
  measurementId: "G-19ESFEJXZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);