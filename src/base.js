

import Rebase from 're-base';
import firebase from 'firebase';

var app = firebase.initializeApp({
    apiKey: "AIzaSyCXWWU6u6NaBDb2k7zT1t1fqMBcJRnfUfc",
    authDomain: "demo4-f1f6c.firebaseapp.com",
    databaseURL: "https://demo4-f1f6c.firebaseio.com",
    projectId: "demo4-f1f6c",
    storageBucket: "",
    messagingSenderId: "131031382196"
})

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;
