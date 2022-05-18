import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDFfhGOMpWQD_1gNcwgll9HstXmrvcquEI",
  authDomain: "instagram-580f3.firebaseapp.com",
  projectId: "instagram-580f3",
  storageBucket: "instagram-580f3.appspot.com",
  messagingSenderId: "705798331062",
  appId: "1:705798331062:web:34ece2b625212516682417"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };