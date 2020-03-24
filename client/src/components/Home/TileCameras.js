import React from 'react';

import './TileCameras.css';
import TilePic from './TilePic';
import TileLabel from './TileLabel';

const TileCameras = () => {
   return (
      <div class="tile tile-cameras">
         <TilePic />
         <TileLabel />
      </div>
   );
}

export default TileCameras;