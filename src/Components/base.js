import firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1lZD5qefNzEPMTKgzlFQ5D2xDwib3HW8",
  authDomain: "fir-react-auth-af86d.firebaseapp.com",
  projectId: "fir-react-auth-af86d",
  storageBucket: "fir-react-auth-af86d.appspot.com",
  messagingSenderId: "500112821605",
  appId: "1:500112821605:web:9e92eeed583ce2b8f1a58c",
  measurementId: "G-L69PLG3PNZ",
};

firebase.initializeApp(config);
export default firebase;
