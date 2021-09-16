import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAoyM0Vd-SWRGGpuyR4tiJKK6cdEfegHTI",
    authDomain: "react-e-commerc.firebaseapp.com",
    projectId: "react-e-commerc",
    storageBucket: "react-e-commerc.appspot.com",
    messagingSenderId: "370647625700",
    appId: "1:370647625700:web:5279b9ad1a779a19b561f1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



