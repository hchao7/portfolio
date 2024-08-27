//Two important packages that all React apps use
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Importing App from App.js
import App from './App';
import reportWebVitals from './reportWebVitals';

//Method defined in ReactDOM that gets called when index.html is loaded
//<App /> is the main/root component of the React component tree
//React creates a component tree of React components and the app component is the root
//React will build the component tree -> cast to DOM tree

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();