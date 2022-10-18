// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1HTlVqgcxx4K7jbruIVUiCPuhnlG8F94",
  authDomain: "fir-react-app-82d0b.firebaseapp.com",
  projectId: "fir-react-app-82d0b",
  storageBucket: "fir-react-app-82d0b.appspot.com",
  messagingSenderId: "938626544389",
  appId: "1:938626544389:web:9e506312e6614a5b83bd6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
