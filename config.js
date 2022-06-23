import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAu938dSKtk3ZSrpDX4RUNKP4I5DFiR7TQ",
    authDomain: "e---ride-2f3d9.firebaseapp.com",
    projectId: "e---ride-2f3d9",
    storageBucket: "e---ride-2f3d9.appspot.com",
    messagingSenderId: "428849108379",
    appId: "1:428849108379:web:b0e76ec75e43fdfb33bd3e"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
