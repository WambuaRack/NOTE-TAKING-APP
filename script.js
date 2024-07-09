import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, AppleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
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

// Handle email/password sign in
document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error("Error signing in:", error);
        });
});

// Handle Google sign in
document.getElementById('google-signin').addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Signed in
            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error("Error signing in with Google:", error);
        });
});

// Handle GitHub sign in
document.getElementById('github-signin').addEventListener('click', () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Signed in
            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error("Error signing in with GitHub:", error);
        });
});