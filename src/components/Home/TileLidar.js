import React from 'react';

import './TileLidar.css';
import TilePic from './TilePic';
import TileLabel from './TileLabel';

const TileLidar = () => {
   return (
      <div class="tile tile-lidar">
         <TilePic />
         <TileLabel />
      </div>
   );
}

export default TileLidar;