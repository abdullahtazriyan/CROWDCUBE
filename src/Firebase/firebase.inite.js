// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWmoDgfOm_egpvurhJ1JqWnhVUlBVpwPo",
    authDomain: "crowdcube-auth.firebaseapp.com",
    projectId: "crowdcube-auth",
    storageBucket: "crowdcube-auth.firebasestorage.app",
    messagingSenderId: "630728304664",
    appId: "1:630728304664:web:13a9ee9edfcbaa9a813b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)