import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxz9Vn55l-bCs9WeHB865Nh4nwLPDJIBQ",
  authDomain: "appofneoversity-f33a6.firebaseapp.com",
  databaseURL: "<https://appofneoversity-f33a6.firebaseio.com>",
  projectId: "appofneoversity-f33a6",
  storageBucket: "gs://appofneoversity-f33a6.firebasestorage.app",
  appId: "1:70576395221:ios:7727a870c0b1cb9dc2235c",
  messagingSenderId: "70576395221",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
