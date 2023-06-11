import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT2xAneWg8-8_y_fsy2suiaWhbs948sro",
  authDomain: "fast-go2023.firebaseapp.com",
  projectId: "fast-go2023",
  storageBucket: "fast-go2023.appspot.com",
  messagingSenderId: "797806113782",
  appId: "1:797806113782:web:d379e9b90e4227b7174dd7",
  measurementId: "G-4RG0PL7W18",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};

export default app;
