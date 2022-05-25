// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Toolsegy app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

/* 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC5xCaGMkQd-Cj8ckSUIkQXbIriaE2Qak",
  authDomain: "toolsegy-9e5ff.firebaseapp.com",
  projectId: "toolsegy-9e5ff",
  storageBucket: "toolsegy-9e5ff.appspot.com",
  messagingSenderId: "239149793366",
  appId: "1:239149793366:web:dd44f4bc1c283b775a3bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/