
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjQHnl1O-VYvf1tV93LAF8OzmJk_OGt4E",
    authDomain: "linkedin-clone-32eca.firebaseapp.com",
    projectId: "linkedin-clone-32eca",
    storageBucket: "linkedin-clone-32eca.appspot.com",
    messagingSenderId: "54735831584",
    appId: "1:54735831584:web:864924f7077a586649f245"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};