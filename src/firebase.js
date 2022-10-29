import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBoaqehrJ2HbEddJVoDsSbMX6yM7EPXH5A",
    authDomain: "netflix-clone-42fdf.firebaseapp.com",
    projectId: "netflix-clone-42fdf",
    storageBucket: "netflix-clone-42fdf.appspot.com",
    messagingSenderId: "110430862190",
    appId: "1:110430862190:web:771f65ded378cbab215f7f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;