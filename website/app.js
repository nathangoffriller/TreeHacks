// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
//import Map from "@arcgis/core/Map";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyAshSFMcuw-1uZUPtwgUoIzOYro1LDsRD8",
      authDomain: "treehacks-scisearch.firebaseapp.com",
      projectId: "treehacks-scisearch",
      storageBucket: "treehacks-scisearch.appspot.com",
      messagingSenderId: "520773707435",
      appId: "1:520773707435:web:2fd6a2decc6299712cf9ee",
      measurementId: "G-VJGGRSZPSZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

'use strict'

function validateForm() {
    var x = document.forms["locationForm"]["currentLocation"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    } else {
        alert("SUCCESS! Location: " + x );
    }
}

function userData() {
    var loc = document.forms["LOCATIONform"]["locccc"].value;
    if (loc == "") {
      console.log("Name must be filled out");
      return false;
    } else {
      console.log("SUCCESS! Location: " + loc);
      
    }
}

function toMap() {

}

//window.location.pathname = '/relative-link'