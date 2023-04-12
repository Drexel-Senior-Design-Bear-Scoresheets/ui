import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Base from 'terra-base';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Base locale='en'>
      <App />
    </Base>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();