import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export default function firebaseInit() {
  try {
    const firebaseConfig = {
      apiKey: "AIzaSyCAVEZX9bQWWWLClthBN7ADUQR5dXtQAlw",
      authDomain: "lernen-inc.firebaseapp.com",
      projectId: "lernen-inc",
      storageBucket: "lernen-inc.appspot.com",
      messagingSenderId: "215174144613",
      appId: "1:215174144613:web:d9309e51b33b69f0d71c8c",
      measurementId: "G-V2H6TXE917",
    };

    // Initialize Firebase
    const firebase = initializeApp(firebaseConfig);

    const db = getFirestore();
    //const analytics = getAnalytics(firebase);

    return { firebase, db };
  } catch (error) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(error.message)) {
      console.error("Firebase initialization error", error.stack);
    }
  }
}
