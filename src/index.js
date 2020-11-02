import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProfilPic from './component/profile/ProfilPhoto';
import FullName from './component/profile/FullName';
import Adress from './component/profile/Adress';
import './component/profile/style.css';
ReactDOM.render(
  <React.StrictMode>
  
    <ProfilPic />
    <FullName />
    <Adress />
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
