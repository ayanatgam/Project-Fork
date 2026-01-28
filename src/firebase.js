import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFkrkYtCfkTw_1chGDzmElq88ohONRXM4",
  authDomain: "portfolio-e4291.firebaseapp.com",
  projectId: "portfolio-e4291",
  storageBucket: "portfolio-e4291.appspot.com",
  messagingSenderId: "1022868268723",
  appId: "1:1022868268723:web:b798a1694fb2cdb99b32c6",
  measurementId: "G-81Y9F6BG8Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 