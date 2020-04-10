import React, { Component } from 'react';
import TilePic from './TilePic';
import TileLabel from './TileLabel';

class Tile extends Component {

   render() {
      return (
         <React.Fragment>
            <Tile>
               <TilePic />
               <TileLabel />
            </Tile>
         </React.Fragment>
      );
   }
}

export default Tile;