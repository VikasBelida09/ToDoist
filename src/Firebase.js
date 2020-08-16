import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBTHNUyay1zTDPDv5vAF1X54iB9RSnl-CI",
  authDomain: "todoist-ab470.firebaseapp.com",
  databaseURL: "https://todoist-ab470.firebaseio.com",
  projectId: "todoist-ab470",
  storageBucket: "todoist-ab470.appspot.com",
  messagingSenderId: "716796776595",
  appId: "1:716796776595:web:1f3113735b3d1261cb3d66",
  measurementId: "G-HYRG1K5697",
});
export { firebaseConfig as firebase };
