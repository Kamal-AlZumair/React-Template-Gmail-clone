import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyCB3H76VtFEjcmFQ8j03tY6Is6F0TxDln0",
	authDomain: "clone-69a0f.firebaseapp.com",
	projectId: "clone-69a0f",
	storageBucket: "clone-69a0f.appspot.com",
	messagingSenderId: "769938480031",
	appId: "1:769938480031:web:e4f382d179d7cc4b1b3baa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
