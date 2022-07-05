import firebase from 'firebase'

if (!firebase.apps.lemgth) {
  firebase.initializeApp(
    {
  apiKey: "AIzaSyATMckQNtVqS1BF9VqP5O63c_Yf3u7-g6c",
  authDomain: "fir-pj2-cbfaf.firebaseapp.com",
  projectId: "fir-pj2-cbfaf",
  storageBucket: "fir-pj2-cbfaf.appspot.com",
  messagingSenderId: "50896978501",
  appId: "1:50896978501:web:c3db1e3f002c05c2f7592c",
  measurementId: "G-Y5H2N24BG5"

    }
  )
}

export default firebase