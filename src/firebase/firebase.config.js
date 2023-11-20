// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzVu9EXmfHZJLwqfMeD1zb9flSR1odLyQ",
    authDomain: "wedding-snapshots.firebaseapp.com",
    projectId: "wedding-snapshots",
    storageBucket: "wedding-snapshots.appspot.com",
    messagingSenderId: "974372743700",
    appId: "1:974372743700:web:eda88cecf6b7e41116d501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;