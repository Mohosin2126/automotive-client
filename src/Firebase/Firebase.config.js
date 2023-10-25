// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB01Gbt_7npx0YEzfc-sRr1EBwLfRpYx5w",
  authDomain: "automotive-103b0.firebaseapp.com",
  projectId: "automotive-103b0",
  storageBucket: "automotive-103b0.appspot.com",
  messagingSenderId: "798620563644",
  appId: "1:798620563644:web:0dad2772096559911378b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;