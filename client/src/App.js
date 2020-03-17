import React from 'react';

import Template from './Template'
import Home from './Home'
import Mac from './Mac'
import IPad from './IPad'
import IPhone from './IPhone'
import Watch from './Watch'
import TV from './TV'
import Music from './Music'
import Support from './Support'


// import logo from './logo.svg';
import './App.css';

// const list = [
//   "shark",
//   "nado",
//   "boom!"
// ]

const VIEWS = {
  HOME: 'HOME',
  MAC: 'MAC',
  IPAD: 'IPAD',
  IPHONE: 'IPHONE',
  WATCH: 'WATCH',
  TV: 'TV',
  MUSIC: 'MUSIC', 
  SUPPORT: 'SUPPORT',
}

const App = () => {
  const [selectedView, setSelectedView] = React.useState(VIEWS.HOME)
  const renderView = () => {
    switch (selectedView) {
      case VIEWS.HOME:
        return <Home />
      case VIEWS.MAC:
        return <Mac />
      case VIEWS.IPAD:
        return <IPad />
      case VIEWS.IPHONE:
        return <IPhone />
      case VIEWS.WATCH:
        return <Watch />
      case VIEWS.TV:
        return <TV />
      case VIEWS.MUSIC:
        return <Music />
      case VIEWS.SUPPORT:
        return <Support />
      default:
        return <Home />
    }
  }

  return (
    <React.Fragment>
      <div className="App">
        <Template views={VIEWS} setView={setSelectedView}>
        {renderView()}
        </Template>
      </div>
    </React.Fragment>
  );
}

export default App;
