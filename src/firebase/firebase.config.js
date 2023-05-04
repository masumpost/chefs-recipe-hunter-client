// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfePFdh7XXK0CATFdFeVp3JXDx78udpDw",
  authDomain: "chefs-recipe-c80a5.firebaseapp.com",
  projectId: "chefs-recipe-c80a5",
  storageBucket: "chefs-recipe-c80a5.appspot.com",
  messagingSenderId: "396521661462",
  appId: "1:396521661462:web:b14cbb0d28d9ef22b84137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;