import firebase from 'firebase/compat';
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {initializeAuth} from 'firebase/auth';
// import {getReactNativePersistence} from 'firebase/auth/react-native';
// // import { getFirestore } from "firebase/firestore";
// // import { getStorage } from "firebase/storage";
// // import { getAnalytics } from "firebase/analytics";
// import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyDcpocpGsbc8r4rcplxbY1I20pSxhwmD2I",
//   authDomain: "xfin-123.firebaseapp.com",
//   projectId: "xfin-123",
//   storageBucket: "xfin-123.appspot.com",
//   messagingSenderId: "333120353484",
//   appId: "1:333120353484:web:62c97ab68ffc3910f0fe69",
//   measurementId: "G-QD7DGEJWSG"
// };


// let app;
// if (!firebase.apps.length){
//     app = initializeApp(firebaseConfig);
// } else {
//     app = firebase.app();
// }


// //export const auth = initializeApp(app, { persistence: getReactNativePersistence(AsyncStorage) });

// export const auth = getAuth();

import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDcpocpGsbc8r4rcplxbY1I20pSxhwmD2I",
  authDomain: "xfin-123.firebaseapp.com",
  projectId: "xfin-123",
  storageBucket: "xfin-123.appspot.com",
  messagingSenderId: "333120353484",
  appId: "1:333120353484:web:62c97ab68ffc3910f0fe69",
  measurementId: "G-QD7DGEJWSG"
});

export const dataBase = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp);


export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});