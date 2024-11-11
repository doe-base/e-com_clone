import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { firebase, db } from './lips/firebase.prod'; // add firebase to project
import { FirebaseContext } from './context/firebase' // use FirebaseContext to pass firebase from here

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase, db }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);

