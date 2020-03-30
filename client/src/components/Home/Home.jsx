import React, { Component } from 'react';

import '../../Containers/App.css';

import FeaturesGrid from './FeaturesGrid';

class Home extends Component {
  render() {
    return (
      <main class="main">
        <React.Fragment>
          <FeaturesGrid />
        </React.Fragment>
      </main>
    );
  }
}

export default Home;