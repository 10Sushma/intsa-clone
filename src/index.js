import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Postview from './Components/Postview';
import Data from './Components/Data'
import Layout from "./Components/Layout/Layout";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Form from './Components/Form';
ReactDOM.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
          <Route path='postview' element={<Postview />} />
          <Route path='form' element={<Form />} />
          <Route path='Homepage' element={<Data/>}/>
        
      </Routes> 
    </BrowserRouter>  
  ,
  
  // <React.StrictMode>
  //   <Postview />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
