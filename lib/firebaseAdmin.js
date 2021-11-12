import { initializeApp } from "firebase-admin/app";
import { credential } from "firebase-admin";

export default function firebaseAdminInit() {
  try {
    const firebaseConfig = {
      credential: credential.cert(
        JSON.parse(
          decodeURIComponent(process.env.GOOGLE_APPLICATION_CREDENTIALS)
        )
      ),
    };
    const firebaseAdmin = initializeApp(firebaseConfig);

    return firebaseAdmin;
  } catch (error) {
    if (!/already exists/.test(error.message)) {
      console.error("Firebase initialization error", error.stack);
    }
  }
}
