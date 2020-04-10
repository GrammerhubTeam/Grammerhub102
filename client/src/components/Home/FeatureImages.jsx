
import React, { Component } from 'react';
import FeatureTiles from './FeatureTiles';

import './css/Tile.css';
import './css/TileChip.css';
import './css/TileCameras.css';
import './css/TileCursor.css';
import './css/TileDisplay.css';
import './css/TilePencil.css';
import './css/TileLidar.css';

class FeaturesImages extends Component {
   state = {
      row_span: 1,
      row_span: 2,
      row_span: 3,
      row_span: 5
   };

   render() {
      return (
         <div className={renderTileTypes()}>
            <FeatureTiles />
         </div>
      );
   };

   renderTileTypes() {
      let classes = "tile tile-";
      const { row_span } = this.state;

      if (row_span == 1)
         classes += "chip";
      if (row_span == 2) {
         (classes += "cursor") || (classes += "display") ||
            (classes += "cameras");
      }
      if (row_span == 3)
         classes += "pencil";
      if (row_span == 5)
         classes += "lidar";

      return classes;
   }
}

export default FeaturesImages;