import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdEpz-iUv5f1rGMjG7CkBQDfC0MXQO630",
  authDomain: "e-clone-ada38.firebaseapp.com",
  projectId: "e-clone-ada38",
  storageBucket: "e-clone-ada38.firebasestorage.app",
  messagingSenderId: "694916015894",
  appId: "1:694916015894:web:226b9be3a75da2c14b1237"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };