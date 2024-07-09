import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCNKYOgvkAIJLxm80yfoLmrKLMxgBVqef8",
    authDomain: "notes-taking-app-29880.firebaseapp.com",
    projectId: "notes-taking-app-29880",
    storageBucket: "notes-taking-app-29880.appspot.com",
    messagingSenderId: "418241865266",
    appId: "1:418241865266:web:9b6512061579716688be2b",
    measurementId: "G-01BWRWV1FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            console.log("User signed up:", userCredential.user);
            window.location.href = 'login.html'; // Redirect to login page
        })
        .catch((error) => {
            console.error("Error signing up:", error);
        });
});

// Handle Google sign in (optional)
document.getElementById('google-signin').addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Signed in with Google
            console.log("User signed in with Google:", result.user);
            window.location.href = 'login.html'; // Redirect to login page
        })
        .catch((error) => {
            console.error("Error signing in with Google:", error);
        });
});