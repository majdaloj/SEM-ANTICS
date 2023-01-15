const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./pro-fess-0424327dd851.json')


// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBTplOkCTltHRQSS_JljFnJqLHii8QnrrU",
  authDomain: "pro-fess.firebaseapp.com",
  projectId: "pro-fess",
  storageBucket: "pro-fess.appspot.com",
  messagingSenderId: "411786254500",
  appId: "1:411786254500:web:f071ae3da8b4a4833b6e31",
  measurementId: "G-3L6R5WEMBH"
};

initializeApp({
  credential: cert(serviceAccount)
});
db = getFirestore()

module.exports = db;
