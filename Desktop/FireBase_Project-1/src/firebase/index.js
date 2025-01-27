// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuedOTC4o-DVpeb4x1TFEdiQVzCp53ad4",
  authDomain: "hs-chat-f9eac.firebaseapp.com",
  projectId: "hs-chat-f9eac",
  storageBucket: "hs-chat-f9eac.firebasestorage.app",
  messagingSenderId: "451791117738",
  appId: "1:451791117738:web:151e66cdffb9c42c421fd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const provider=new GoogleAuthProvider()