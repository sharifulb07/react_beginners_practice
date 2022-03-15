import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const message=<div>Hello World</div>

const Message=props=> <div className='container'>{props.msg}</div>

const element=(
  <>
    <Message msg="Go ahead man and do fast yeap dooo" />
    {Message({msg:"Hey hello world"})}
    {Message({msg:"Hey hello world"})}
    {Message({msg:"Hey hello world"})}
    {Message({msg:"Hey hello world"})}
    {Message({msg:"Hey hello world"})}
  </>
)



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

element,

  document.getElementById('root')
);


