// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDQLd08-gkbgL70Yvo66FkD1xOY1BNdFWg",
  authDomain: "tiktok-clone-6fe7c.firebaseapp.com",
  databaseURL: "https://tiktok-clone-6fe7c-default-rtdb.firebaseio.com",
  projectId: "tiktok-clone-6fe7c",
  storageBucket: "tiktok-clone-6fe7c.appspot.com",
  messagingSenderId: "438433350005",
  appId: "1:438433350005:web:1a2f5bfba356821210d33c",
  measurementId: "G-CSTG9T0VQM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
