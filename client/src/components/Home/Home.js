import React from 'react';
import logo from '../../static/logo.svg';
import '../../Containers/App.css';

const list = [
  "shark",
  "nado",
  "boom!"
]

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <div>
            <p>HOME ROUTE</p>
            <img src={logo} alt="logo" />
            <p>I USED TO BE ABLE TO EAT PIZAA ALOT :(</p>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
      </div>
      <div>
        <p>hi</p>
      </div>
    </React.Fragment>
  );
}

export default App;