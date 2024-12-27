// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU87dM22RxSH-scLm3OvC8sgoRPpInmVk",
  authDomain: "canteen-management-c1235.firebaseapp.com",
  projectId: "canteen-management-c1235",
  storageBucket: "canteen-management-c1235.appspot.com",
  messagingSenderId: "411551029779",
  appId: "1:411551029779:web:cb78f50507fc36edc13de6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
