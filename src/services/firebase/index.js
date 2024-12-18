// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2yOvH1hu-54P3KQQr4O79P8uMy4nn1xQ",
  authDomain: "fotolandia-88efd.firebaseapp.com",
  projectId: "fotolandia-88efd",
  storageBucket: "fotolandia-88efd.firebasestorage.app",
  messagingSenderId: "94547782556",
  appId: "1:94547782556:web:46d54b910fc41061cc3659"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)