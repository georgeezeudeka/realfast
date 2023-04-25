// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUj4PwL2RFOAk7eE-FmG9jsirOnll3J64",
  authDomain: "realfast-946af.firebaseapp.com",
  projectId: "realfast-946af",
  storageBucket: "realfast-946af.appspot.com",
  messagingSenderId: "46982651774",
  appId: "1:46982651774:web:c98b747e0f9056c7969d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{ auth }