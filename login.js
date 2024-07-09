import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your Firebase configuration
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

// Handle login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            console.log("User signed in:", userCredential.user);
            window.location.href = 'home.html'; // Redirect to home.html upon successful login
        })
        .catch((error) => {
            console.error("Error signing in:", error.message);
            alert(error.message); // Display error message to user
        });
});

// Handle Google sign-in button click
const googleSignInButton = document.getElementById('google-signin');
googleSignInButton.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Signed in with Google
            console.log("User signed in with Google:", result.user);
            window.location.href = 'home.html'; // Redirect to home.html upon successful login
        })
        .catch((error) => {
            console.error("Error signing in with Google:", error.message);
            alert(error.message); // Display error message to user
        });
});