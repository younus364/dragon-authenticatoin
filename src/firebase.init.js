// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHDzWehHSEpN6yC01YPBaZpsJNYpm5FQ0",
  authDomain: "dragon-authentication-15842.firebaseapp.com",
  projectId: "dragon-authentication-15842",
  storageBucket: "dragon-authentication-15842.firebasestorage.app",
  messagingSenderId: "220434108198",
  appId: "1:220434108198:web:2dfa35dac8536e14633be7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;