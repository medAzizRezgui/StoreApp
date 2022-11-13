// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg-xmn9QlHc9bEyVTWpI7pco4gaoqWFJc",
  authDomain: "nextjs-b34e3.firebaseapp.com",
  projectId: "nextjs-b34e3",
  storageBucket: "nextjs-b34e3.appspot.com",
  messagingSenderId: "571669834827",
  appId: "1:571669834827:web:4cb0c8cf6e0f923d06b1ce",
  measurementId: "G-5B267DVMQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
