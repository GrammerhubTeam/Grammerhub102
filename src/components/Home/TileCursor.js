import React from 'react';

import './TileCursor.css';
import TilePic from './TilePic';
import TileLabel from './TileLabel';

const TileCursor = () => {
   return (
      <div class="tile tile-cursor">
         <TilePic />
         <TileLabel />
      </div>
   );
}

export default TileCursor;