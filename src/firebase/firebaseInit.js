import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC4DveuamWxxEjLmHz57Z-hHVTan6RuQII",
    authDomain: "myblogs-e36a9.firebaseapp.com",
    projectId: "myblogs-e36a9",
    storageBucket: "myblogs-e36a9.appspot.com",
    messagingSenderId: "698418175186",
    appId: "1:698418175186:web:2ecce31a2c3a9d4105e10b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();