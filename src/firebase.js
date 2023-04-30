import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA95HAekiKMzsrDI7aAU8rphajM0VBgA_E",
  authDomain: "chat-51c67.firebaseapp.com",
  projectId: "chat-51c67",
  storageBucket: "chat-51c67.appspot.com",
  messagingSenderId: "423955803864",
  appId: "1:423955803864:web:cfeccc68dd28c8332b31ad",
  measurementId: "G-39TCGNX3RE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
