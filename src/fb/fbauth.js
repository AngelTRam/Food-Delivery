// Import the functions you need from the SDKs you need
import {initializeAp, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import  Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhxa6ZmM8RrQv000qK7cWEAhSlYkcHD1o",
  authDomain: "express-food-6748e.firebaseapp.com",
  projectId: "express-food-6748e",
  storageBucket: "express-food-6748e.appspot.com",
  messagingSenderId: "989195507367",
  appId: "1:989195507367:web:26742321edbf930fe52d82",
  measurementId: "G-PRCQSG2L1L"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();