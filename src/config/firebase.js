import firebase from "firebase";

export const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/gender",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

firebase.initializeApp({
  apiKey: "AIzaSyBnxUWUBdzdZeeVmxVZRWOS707h8RYsL1E",
  authDomain: "hostel-allocation-assign-f5f5a.firebaseapp.com",
  projectId: "hostel-allocation-assign-f5f5a",
  storageBucket: "hostel-allocation-assign-f5f5a.appspot.com",
  messagingSenderId: "464189690755",
  appId: "1:464189690755:web:bf21ee1fc3c2fc95b55cb6",
  measurementId: "G-6G6KEHTN57"
});

export const AUTH = firebase.auth();
