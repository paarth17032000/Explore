import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyD0rcthXxmPg4pvl2JS0UiNJDFwJGiVW0k",
    authDomain: "poll-booth.firebaseapp.com",
    projectId: "poll-booth",
    storageBucket: "poll-booth.appspot.com",
    messagingSenderId: "835984083353",
    appId: "1:835984083353:web:10f2827d8f12f5520f6b08",
    measurementId: "G-3N9MR8076Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore.settings
// firebase.firestore.settings({ timestampsInSnapshots: true })
// firebase.analytics();

export default firebase