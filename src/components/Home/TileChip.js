import React from 'react';

import './TileChip.css';
import TilePic from './TilePic';
import TileLabel from './TileLabel';

const TileChip = () => {
   return (
      <div class="tile tile-chip">
         <TilePic />
         <TileLabel />
      </div>
   );
}

export default TileChip;