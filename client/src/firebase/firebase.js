// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm3J8f2zZqumfc6Nc_NO-jJYLwvh1We4M",
  authDomain: "uofrcybersecurity.firebaseapp.com",
  projectId: "uofrcybersecurity",
  storageBucket: "uofrcybersecurity.appspot.com",
  messagingSenderId: "649494140812",
  appId: "1:649494140812:web:148d7413ebfe44d43c28a9",
  measurementId: "G-67RLVFXG6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export {auth, provider, db};