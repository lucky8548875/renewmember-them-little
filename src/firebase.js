import firebase from 'firebase/app'
require('firebase/auth');
// require('firebase/firestore');

var config = {
  apiKey: "AIzaSyCSKBvIfTGohWUxq-EKIvYIzGSE5oIIXzU",
  authDomain: "remember-them-little.firebaseapp.com",
  databaseURL: "https://remember-them-little.firebaseio.com",
  storageBucket: "remember-them-little.appspot.com",
  projectId: "remember-them-little",
};

firebase.initializeApp(config);

// var firestore = firebase.firestore()
// const settings = {/* your settings... */ timestampsInSnapshots: true};
// firestore.settings(settings)

export default firebase