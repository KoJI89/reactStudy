import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reduce from './Reduce';
import UseStateStudy from './UseStateStudy.js';
import UseRef from './UseRef';
import UseContext from './UseContext/UseContext.js'
import UseMemo from './UseMemo.js';
import UseMemo2 from './UseMemo2.js';
import UseCallback from './UseCallback.js';
import UseCallback2 from './UseCallback2.js';

// rfce
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Reduce/> */}
    {/* <UseStateStudy/> */}
    {/* <UseRef/> */}
    {/* <UseContext/> */}
    {/* <UseMemo/> */}
    {/* <UseMemo2/> */}
    {/* <UseCallback/> */}
    <UseCallback2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
