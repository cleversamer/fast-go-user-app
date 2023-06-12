import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxOdvhDDw_Uj-HeMyhDs34drnvF5uPQEU",
  authDomain: "fast-go-2023.firebaseapp.com",
  projectId: "fast-go-2023",
  storageBucket: "fast-go-2023.appspot.com",
  messagingSenderId: "38206081103",
  appId: "1:38206081103:web:3a74841b497ec689f7423a",
  measurementId: "G-32C3GLPQLF",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};

export default app;
