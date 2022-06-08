import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mid-project-e78ef.firebaseapp.com",
  projectId: "mid-project-e78ef",
  storageBucket: "mid-project-e78ef.appspot.com",
  messagingSenderId: "767620165632",
  appId: "1:767620165632:web:494a1e648f0f01bc1668e5",
};
firebase.initializeApp(firebaseConfig);
// const app = initializeApp();
export const auth = firebase.auth();
// export default app;

// "AIzaSyBNyADzB9NG9jjNqYjbBjzPFa50gEt9vOA"
