import React from 'react';

import './TilePencil.css';
import TilePic from './TilePic';
import TileLabel from './TileLabel';

const TilePencil = () => {
   return (
      <div class="tile tile-pencil">
         <TilePic />
         <TileLabel />
      </div>
   );
}

export default TilePencil;