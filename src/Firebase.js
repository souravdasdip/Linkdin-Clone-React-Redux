// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCVw4xKxSLxyBvsj5R8L_SpTGsmAmp40Og",
  authDomain: "linkedin-cloner.firebaseapp.com",
  projectId: "linkedin-cloner",
  storageBucket: "linkedin-cloner.appspot.com",
  messagingSenderId: "328290867922",
  appId: "1:328290867922:web:5d1eb7ced1ea9d00f02b0b",
  measurementId: "G-EGGWXH6FV0"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();

export { db, auth };