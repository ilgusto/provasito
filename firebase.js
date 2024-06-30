// Importa e configura Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyCb7ODxz3zi3ELrxd3tK45kRB9rs5Xzweo",
    authDomain: "ilgusto-95054.firebaseapp.com",
    projectId: "ilgusto-95054ilgusto-95054",
    storageBucket: "ilgusto-95054.appspot.com",
    messagingSenderId: "1020680407051",
    appId: "1:1020680407051:web:818031e95f4d9b02c05f0e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addReservation(reservation) {
    try {
        const docRef = await addDoc(collection(db, "reservations"), reservation);
        console.log("Prenotazione aggiunta con ID: ", docRef.id);
    } catch (e) {
        console.error("Errore aggiungendo la prenotazione: ", e);
    }
}

// Esempio di utilizzo
const reservation = {
    name: "Mario Rossi",
    date: "2024-07-01",
    time: "20:00",
    guests: 2
};
addReservation(reservation);
