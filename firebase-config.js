// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQI-7foxKjfLDdPFTEi4oU9Vb5_5VaX1U",
  authDomain: "roomchat-portfolio-b5c67.firebaseapp.com",
  projectId: "roomchat-portfolio-b5c67",
  storageBucket: "roomchat-portfolio-b5c67.appspot.com",
  messagingSenderId: "1073063781654",
  appId: "1:1073063781654:web:8f304c98f8f859304bdc37",
  measurementId: "G-X04DBXQJJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);