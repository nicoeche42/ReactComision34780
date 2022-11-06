import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAnKFhcuBqRqJOiqU2_XTafpjLSNvSyLwc",
  authDomain: "sol-accursio-pasteleria.firebaseapp.com",
  projectId: "sol-accursio-pasteleria",
  storageBucket: "sol-accursio-pasteleria.appspot.com",
  messagingSenderId: "495959720170",
  appId: "1:495959720170:web:ad3b22d87c257f3aa85793"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)