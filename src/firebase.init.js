// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQu6i34U0jLPPEIDFyJZI-h8SqJtsrQFk",
  authDomain: "etools-f14f3.firebaseapp.com",
  projectId: "etools-f14f3",
  storageBucket: "etools-f14f3.appspot.com",
  messagingSenderId: "1025814929326",
  appId: "1:1025814929326:web:8fb42024ee00a1115db23f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;