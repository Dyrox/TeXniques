// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr5sYLDMqbKLsZXUrBiE8-1TnCaTebYbo",
  authDomain: "texniques-1be98.firebaseapp.com",
  projectId: "texniques-1be98",
  storageBucket: "texniques-1be98.firebasestorage.app",
  messagingSenderId: "541754954306",
  appId: "1:541754954306:web:2da5133b7c1e6d86c7d3db"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

if (window.location.protocol === "http:" && window.location.port) {
  db.useEmulator("127.0.0.1", 8080);
}
