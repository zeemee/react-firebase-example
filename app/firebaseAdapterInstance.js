import firebase from 'firebase';
import FirebaseAdapter from './firebase_interface/adapter';

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCA8tE5JwxzbfbtgvdOYQaHPRT8-aNgtQU",
  authDomain: "react-firebase-tutorial-c7fa8.firebaseapp.com",
  databaseURL: "https://react-firebase-tutorial-c7fa8.firebaseio.com",
  storageBucket: "react-firebase-tutorial-c7fa8.appspot.com",
  messagingSenderId: "489205897452"
});


export default new FirebaseAdapter(firebaseApp);
