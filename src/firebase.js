import firebase from "firebase";
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAGOlk_wapggnDXsxXf1aM1QXr02TRBAZ0",
  authDomain: "stable-vault-201013.firebaseapp.com",
  projectId: "stable-vault-201013"
});
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export const db = firebase.firestore();
