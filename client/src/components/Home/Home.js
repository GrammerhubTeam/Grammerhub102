import React, { Component } from 'react';

import '../../Containers/App.css';
import './Home.css';

import TileCameras from './TileCameras';
import TileChip from './TileChip';
import TileCursor from './TileCursor';
import TileDisplay from './TileDisplay';
import TileLidar from './TileLidar';
import TilePencil from './TilePencil';

class Home extends Component {
  render() {
    return (
      <main class="main">
        <div class="module-content">
          <div class="features-grid">
            <TileCameras />
            <TileChip />
            <TileCursor />
            <TileDisplay />
            <TileLidar />
            <TilePencil />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;