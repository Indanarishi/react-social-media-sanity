import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// react router
import { BrowserRouter as Router } from 'react-router-dom'

// styles
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
