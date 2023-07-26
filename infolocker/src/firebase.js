// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4mVHeD-xOWP171IlV9qXiUZoAyC0taVg",
    authDomain: "infolocker-c5233.firebaseapp.com",
    projectId: "infolocker-c5233",
    storageBucket: "infolocker-c5233.appspot.com",
    messagingSenderId: "947998745531",
    appId: "1:947998745531:web:70e6e7263d08f932de5a9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);