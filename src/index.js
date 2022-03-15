import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function CharacterCount({text}){

  const len=text.length? text.length:'No';
  return(
   
    <div>
     { `The ${text}has only `} {" "}
     <div>{text.length ? <strong> {text.length} </strong>:'No string'}</div>
    </div>
  )
}



const element=(
  <React.Fragment>

    <CharacterCount text="My practice is going on here " />
    <CharacterCount text='' />

  </React.Fragment>
)


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

element,

  document.getElementById('root')
);


