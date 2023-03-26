import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config= {
    apiKey: "AIzaSyCxcjoRrPzd8jWedNojIhtDRpkqEF8zqe8",
    authDomain: "crwn-db-74320.firebaseapp.com",
    projectId: "crwn-db-74320",
    storageBucket: "crwn-db-74320.appspot.com",
    messagingSenderId: "331551008546",
    appId: "1:331551008546:web:d619dfa533fe30fb98e77b",
    measurementId: "G-N36R0CS7HB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({ prompt: 'select_account' });
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;
