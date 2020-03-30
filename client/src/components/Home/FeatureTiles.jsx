
import React, { Component } from 'react';

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
            {titles.map(title, index => {
               <TileLabel className="tile-label"
                  key={index}>
                  title={title}
               </TileLabel>
            })};
         </div>
      )
   }
}

export default FeatureTiles;

