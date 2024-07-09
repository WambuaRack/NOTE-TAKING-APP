import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

// DOM Elements
const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const notesList = document.getElementById('notes-list');

// Display Notes from Firestore
async function displayNotes() {
    const querySnapshot = await getDocs(collection(db, "notes"));
    notesList.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');
        noteItem.innerHTML = `
            <p>${doc.data().text}</p>
            <button onclick="deleteNote('${doc.id}')">Delete</button>
        `;
        notesList.appendChild(noteItem);
    });
}

// Add Note to Firestore
addNoteBtn.addEventListener('click', async() => {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        await addDoc(collection(db, "notes"), {
            text: noteText,
            timestamp: new Date()
        });
        noteInput.value = '';
        displayNotes();
    }
});

// Delete Note from Firestore
window.deleteNote = async function(id) {
    await deleteDoc(doc(db, "notes", id));
    displayNotes();
};

// Authentication (Optional)
onAuthStateChanged(auth, (user) => {
    if (user) {
        displayNotes();
    } else {
        signInAnonymously(auth).catch((error) => {
            console.error("Error signing in anonymously:", error);
        });
    }
});