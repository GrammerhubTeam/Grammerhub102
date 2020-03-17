import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  "shark",
  "nado",
  "boom!"
]

const App = () => {
  return (
    <div>
        <p>MAC ROUTE</p>
        <img src={logo} alt="logo" />
        <p>I USED TO BE ABLE TO EAT PIZAA ALOT :(</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;
