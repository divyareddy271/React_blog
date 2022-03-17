import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyDb0j2EcZ34yCNPB_jO6qO_J3jmX2cIzq0",
    authDomain: "react-hooks-blog-cb826.firebaseapp.com",
    projectId: "react-hooks-blog-cb826",
    storageBucket: "react-hooks-blog-cb826.appspot.com",
    messagingSenderId: "778892479755",
    appId: "1:778892479755:web:94f29f07327489af0ee60e"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebase=firebase.firestore();
