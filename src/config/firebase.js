import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaO1r34ttD1kFrDiyYdDByF5Q0wODrtIg",
  authDomain: "prueba-react-firebase-1ceb7.firebaseapp.com",
  projectId: "prueba-react-firebase-1ceb7",
  storageBucket: "prueba-react-firebase-1ceb7.appspot.com",
  messagingSenderId: "710221406584",
  appId: "1:710221406584:web:9aeb0941a551cd8973a88d",
  measurementId: "G-49EMFKQMFY",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export default auth;
