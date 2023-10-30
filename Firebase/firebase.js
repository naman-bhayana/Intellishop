// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjnqWFoiiYSXEbpTz_2VQuvt-mv02guak",
    authDomain: "vault-services-9a0f5.firebaseapp.com",
    projectId: "vault-services-9a0f5",
    storageBucket: "vault-services-9a0f5.appspot.com",
    messagingSenderId: "82689921254",
    appId: "1:82689921254:web:dcb6f94b17f64508cf2b27",
    measurementId: "G-T99Z2WDE16"
};

// Initialize Firebase
let app;
let analytics;
if (firebase.apps.length === 0) {
    app = initializeApp(firebaseConfig);
    analytics = firebase.getAnalytics(app);
} else {
    app = firebase.app()
}

const auth = firebase.auth();


export { auth }