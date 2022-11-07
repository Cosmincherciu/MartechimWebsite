// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


export const firebaseConfig = {
  apiKey: "AIzaSyB58aphzW8oXvoohcGoQnrH0w0jaWs76iU",
  authDomain: "martechimshop.firebaseapp.com",
  projectId: "martechimshop",
  storageBucket: "martechimshop.appspot.com",
  messagingSenderId: "563970458414",
  appId: "1:563970458414:web:13cc3d8daf3fc57dfb70bf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app