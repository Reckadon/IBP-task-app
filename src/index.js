import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2k1A2Li4VTHMmv5DtkzYGE800bj8ihU0",
  authDomain: "ibp-induction-app.firebaseapp.com",
  projectId: "ibp-induction-app",
  storageBucket: "ibp-induction-app.appspot.com",
  messagingSenderId: "402925066128",
  appId: "1:402925066128:web:7db6c8de9be11ca2ce4515",
  databaseURL:
    "https://ibp-induction-app-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>
);
