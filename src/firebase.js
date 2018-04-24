import firebase from "firebase";
console.log(process.env);
const { apiKey, authDomain, projectId } =
  process.env.NODE_ENV === "production"
    ? process.env
    : require("./firebaseConfig");
require("firebase/firestore");
console.log(projectId);
firebase.initializeApp({
  apiKey,
  authDomain,
  projectId
});
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export const db = firebase.firestore();
