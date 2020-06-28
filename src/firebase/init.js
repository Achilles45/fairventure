import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYOBrDFbDJUrGJXb8H_Yf-gssYLRpPmA4",
  authDomain: "fair-ventures.firebaseapp.com",
  databaseURL: "https://fair-ventures.firebaseio.com",
  projectId: "fair-ventures",
  storageBucket: "fair-ventures.appspot.com",
  messagingSenderId: "300855726108",
  appId: "1:300855726108:web:5dc574aad807df3af94fd9",
  measurementId: "G-XMJ8ZM2M1F"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();