 // Initialize Firebase
 import firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyAMsIwVnFWw3Cp9-HyiuYeBXPoLQvCJ5vQ",
    authDomain: "todo-list-96999.firebaseapp.com",
    databaseURL: "https://todo-list-96999.firebaseio.com",
    projectId: "todo-list-96999",
    storageBucket: "",
    messagingSenderId: "477792319373"
  };
  firebase.initializeApp(config);
  const provider = new firebase.auth.FacebookAuthProvider();
  const fbLogin = firebase.auth()

  
//   export {user, provider}
  export {fbLogin, provider}
 
