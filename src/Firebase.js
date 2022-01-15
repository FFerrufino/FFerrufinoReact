import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4eCDZ7vx5QxynjZotom2rF9I2VbU1li4",
  authDomain: "e-commerce-ferrufino.firebaseapp.com",
  projectId: "e-commerce-ferrufino",
  storageBucket: "e-commerce-ferrufino.appspot.com",
  messagingSenderId: "1071354235865",
  appId: "1:1071354235865:web:344d886b2b6da1f931e7c8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
