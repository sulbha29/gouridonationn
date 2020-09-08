import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDG17MMdVKQYLMBqNrp6fCtSb3iG_-BUb0",
  authDomain: "book-santa-c3095.firebaseapp.com",
  databaseURL: "https://book-santa-c3095.firebaseio.com",
  projectId: "book-santa-c3095",
  storageBucket: "book-santa-c3095.appspot.com",
  messagingSenderId: "28843497855",
  appId: "1:28843497855:web:9502821adabe64c4bc224a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 
 export default firebase.firestore();