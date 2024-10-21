import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const apiKey = process.env.API_KEY;
const storageBucket = process.env.STORAGE_BUCKET;
const msId = process.env.MS_ID;
const appId = process.env.APP_ID;
const measurementId = process.env.MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: {apiKey},
  authDomain: "akashmohan.me",
  projectId: "akashmohanportfolio",
  storageBucket: {storageBucket},
  messagingSenderId: {msID},
  appId: {appId},
  measurementId: {measurementId}
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
