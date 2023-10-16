importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCTUYKgsWUNGarex_wxUVN812RF9He7oPM",
  authDomain: "jayma-88682.firebaseapp.com",
  projectId: "jayma-88682",
  storageBucket: "jayma-88682.appspot.com",
  messagingSenderId: "484779040551",
  appId: "1:484779040551:web:9884936eaf95e105341302",
  measurementId: "G-70QE2557YW",
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});