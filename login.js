import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
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