// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
  
  apiKey: "AIzaSyCHHsxUY2l6X1FVzH8CyaNkyPIEo-Fs8aQ",
  authDomain: "car-inventory-613c5.firebaseapp.com",
  projectId: "car-inventory-613c5",
  storageBucket: "car-inventory-613c5.appspot.com",
  messagingSenderId: "201428958770",
  appId: "1:201428958770:web:a2232ce3f2132b5b2bc62b"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth