import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { SearchProvider } from './components/Context/index';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <SearchProvider >
        <App />
      </SearchProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);