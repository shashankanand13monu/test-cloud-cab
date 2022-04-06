// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBb5ShOMeznlHZLBiCdG8wRbH7fWE7DP7U",
  authDomain: "cab-app-nextjs.firebaseapp.com",
  projectId: "cab-app-nextjs",
  storageBucket: "cab-app-nextjs.appspot.com",
  messagingSenderId: "1078378466448",
  appId: "1:1078378466448:web:4f026950a10431d2f31c15",
  measurementId: "G-1Z7KKQDPLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}  //other files will have access to 3 of them