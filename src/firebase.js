import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDOmGPNEMFcmC5DQwRY1Wlx6bnr2wwM7P0",
    authDomain: "unichat-81c71.firebaseapp.com",
    projectId: "unichat-81c71",
    storageBucket: "unichat-81c71.appspot.com",
    messagingSenderId: "575492925251",
    appId: "1:575492925251:web:de4a981dc91a12cdb731f6"
  }).auth();