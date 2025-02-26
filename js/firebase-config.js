// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy6ZT4H2v_FCFuf9Mico84Au9Y759I6_c",
  authDomain: "santosenovaesadv-app.firebaseapp.com",
  projectId: "santosenovaesadv-app",
  storageBucket: "santosenovaesadv-app.firebasestorage.app",
  messagingSenderId: "597923446360",
  appId: "1:597923446360:web:ee2ff9364cef21b6d3d42d",
  measurementId: "G-RE7JMM3112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
