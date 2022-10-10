import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnF1nrTW0QWrAjUo1_FlWdF_sYwfQqvqI",
  authDomain: "restaurantapp-cedd8.firebaseapp.com",
  databaseURL: "https://restaurantapp-cedd8-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-cedd8",
  storageBucket: "restaurantapp-cedd8.appspot.com",
  messagingSenderId: "588290971218",
  appId: "1:588290971218:web:665bbe077876c36606718b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
