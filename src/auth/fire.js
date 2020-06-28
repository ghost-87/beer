import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyADmuCgZoLPL5Ud0VWRaZBACJ7A0UON9Hg",
    authDomain: "beer-5ef0a.firebaseapp.com",
    databaseURL: "https://beer-5ef0a.firebaseio.com",
    projectId: "beer-5ef0a",
    storageBucket: "beer-5ef0a.appspot.com",
    messagingSenderId: "764022780428",
    appId: "1:764022780428:web:fd065c1178a6f1749f3429",
    measurementId: "G-XJ0Y944HTP"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  