import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './index.css';

//@ts-ignore
export const Context = createContext<IAuthType>();

const app = initializeApp({
  apiKey: "AIzaSyAHSiSgvp1bhQppM-Vo5VJK1AHC9I2N-uk",
  authDomain: "chat-app-297dc.firebaseapp.com",
  projectId: "chat-app-297dc",
  storageBucket: "chat-app-297dc.appspot.com",
  messagingSenderId: "761572418065",
  appId: "1:761572418065:web:2ad6a34533ae037c1047b0",
  measurementId: "G-X3C74PMWMB"
});

const auth: Auth = getAuth(app);
const db = getFirestore(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
      <Context.Provider value={{ auth, db }}>
        <App />
      </Context.Provider>
    </Router>
);


type IAuthType = {
  auth: Auth
  db: Firestore
}
