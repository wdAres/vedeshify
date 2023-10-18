import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './UI/ScrollToTop/ScrollToTop.jsx'
import { initializeApp } from "firebase/app";
import reduxStore from './store/reduxStore.jsx'
import { Provider } from 'react-redux'

const firebaseConfig = {
  apiKey: "AIzaSyAK9K1_yXmd4aG_twPFINK0N2xr54Qh2J0",
  authDomain: "videshify-29b91.firebaseapp.com",
  projectId: "videshify-29b91",
  storageBucket: "videshify-29b91.appspot.com",
  messagingSenderId: "1045380943861",
  appId: "1:1045380943861:web:277cbcc69d09f426759abc",
  measurementId: "G-2ZXVBR9F3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={reduxStore}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>
)