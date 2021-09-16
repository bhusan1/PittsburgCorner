/**
 * Firebase Login
 * Reactify comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCo28nzbsZZNLYqproJ82W71i0qRKVve88",
    authDomain: "pittsburgcorner.firebaseapp.com",
    databaseURL: "https://pittsburgcorner-default-rtdb.firebaseio.com",
    projectId: "pittsburgcorner",
    storageBucket: "pittsburgcorner.appspot.com",
    messagingSenderId: "981983466029",
    appId: "1:981983466029:web:c4cc71334ff667689c1ea4",
    measurementId: "G-916444LEX1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
