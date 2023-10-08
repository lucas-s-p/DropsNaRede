import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBas74rtL4A6Ei2i_cEx1MVXBs3Y1uiyUc",
  authDomain: "dropsnarede.firebaseapp.com",
  projectId: "dropsnarede",
  storageBucket: "dropsnarede.appspot.com",
  messagingSenderId: "147425849904",
  appId: "1:147425849904:web:54d8bcca435aac2d0b33f5",
  measurementId: "G-EMQ38PL01F"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
