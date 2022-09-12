import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom"
import MealMenu from './reducer/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <MealMenu>
    <App />

    </MealMenu>

    </Router>
  </React.StrictMode>
);

reportWebVitals();
