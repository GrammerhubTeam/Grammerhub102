import React from 'react';
import logo from '../../static/logo.svg';
import '../../Containers/App.css';

const App = () => {
  return (
    <React.Fragment>
      <div>
        <p>MUSIC ROUTE</p>
        <img src={logo} alt="logo" />
        <p>I USED TO BE ABLE TO EAT PIZAA ALOT :(</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;