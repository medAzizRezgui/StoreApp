import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { addDoc, collection, getFirestore } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAg-xmn9QlHc9bEyVTWpI7pco4gaoqWFJc",
  authDomain: "nextjs-b34e3.firebaseapp.com",
  projectId: "nextjs-b34e3",
  storageBucket: "nextjs-b34e3.appspot.com",
  messagingSenderId: "571669834827",
  appId: "1:571669834827:web:4cb0c8cf6e0f923d06b1ce",
  measurementId: "G-5B267DVMQ5",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Login Function
export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
// Register Function
export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Send Reset Password Email
export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
// Logout Function
export const logout = () => {
  signOut(auth);
};
// Initialize Firebase

// const analytics = getAnalytics(app);
