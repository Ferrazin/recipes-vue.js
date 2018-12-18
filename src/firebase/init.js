import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBfXiCmuxMRqXPWf9No5sXtG5OxHG9f858",
    authDomain: "recipe-cards-17516.firebaseapp.com",
    databaseURL: "https://recipe-cards-17516.firebaseio.com",
    projectId: "recipe-cards-17516",
    storageBucket: "recipe-cards-17516.appspot.com",
    messagingSenderId: "923226116201"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

// export firestore database

export default firebaseApp.firestore()