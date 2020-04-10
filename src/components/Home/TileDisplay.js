import React from 'react';

import './TileDisplay.css';
import TilePic from './TilePic';
import TileLabel from './TileLabel';

const TileDisplay = () => {
   return (
      <div class="tile tile-display">
         <TilePic />
         <TileLabel />
      </div>
   );
}

export default TileDisplay;