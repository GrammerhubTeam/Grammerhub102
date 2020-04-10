
import React, { Component } from 'react';
import TileLabel from './TileLabel';

class FeatureTiles extends Component {
   state = {
      titles: [
         {
            cameras: "Pro cameras",
            bionic: "A12Z Bionic Chip",
            cursor: "All-new cursor",
            display: "Most advanced display",
            lidar: "LiDAR Scanner",
            pencil: "Apple Pencil"
         }
      ]
   }

   render() {
      return (
         <div>
            <TileLabel className="tile-label">
               {/* {titles.map(title, index => {
                  key = { index }
                  title = { title }
               })}; */}
            </TileLabel>
         </div>
      )
   }
}

export default FeatureTiles;

