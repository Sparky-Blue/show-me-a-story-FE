import firebase from "firebase";
const { apiKey, authDomain, projectId } =
  process.env.NODE_ENV === "production"
    ? process.env
    : require("./firebaseConfig");
require("firebase/firestore");
firebase.initializeApp({
  apiKey,
  authDomain,
  projectId
});
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export const db = firebase.firestore();
