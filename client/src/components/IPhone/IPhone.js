import React from 'react';
import logo from '../../static/logo.svg';
import '../../Containers/App.css';

const visualBorder = {border:'1px solid red'}

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <div style={visualBorder}>
            <p>IPHONE ROUTE</p>
            <img src={logo} alt="logo" />
            <p>I USED TO BE ABLE TO EAT PIZAA ALOT :(</p>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;