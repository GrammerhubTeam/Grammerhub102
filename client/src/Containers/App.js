import React from 'react';

import Template from '../components/Template/Template'
import Home from '../components/Home/Home'
import Mac from '../components/Mac/Mac'
import IPad from '../components/IPad/IPad'
import IPhone from '../components/IPhone/IPhone'
import Watch from '../components/Watch/Watch'
import TV from '../components/TV/TV'
import Music from '../components/Music/Music'
import Support from '../components/Support/Support'
import Test from '../components/Test/Test'

import './App.css';

const VIEWS = {
  HOME: 'HOME',
  MAC: 'MAC',
  IPAD: 'IPAD',
  IPHONE: 'IPHONE',
  WATCH: 'WATCH',
  TV: 'TV',
  MUSIC: 'MUSIC', 
  SUPPORT: 'SUPPORT',
  TEST: 'TEST',
}

const App = () => {
  const [selectedView, setSelectedView] = React.useState(VIEWS.TEST)

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
        return <Test />
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
