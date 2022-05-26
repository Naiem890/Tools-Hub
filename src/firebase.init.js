// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey: "AIzaSyCXF-dnTkegerKWIE1uRL3WcFve-k6tTDI",
  authDomain: "tools-hub-e018a.firebaseapp.com",
  projectId: "tools-hub-e018a",
  storageBucket: "tools-hub-e018a.appspot.com",
  messagingSenderId: "779779962927",
  appId: "1:779779962927:web:9cd3dfe4907f913ca32eda", */
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
