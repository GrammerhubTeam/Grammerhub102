import React from 'react';
import logo from './logo.svg';
import './TV.css';

const list = [
  "shark",
  "nado",
  "boom!"
]

const TV = () => {
  return (
    <React.Fragment>
      <div className="bannerlinks">
        <div className="banner-appletvplus"><img src="https://placekitten.com/80/50" alt="Apple TV+" />Apple TV+</div>
        <div className="banner-appletvapp"><img src="https://placekitten.com/80/50" alt="Apple TV app" />Apple TV app</div>
        <div className="banner-appletv4k"><img src="https://placekitten.com/80/50" alt="Apple TV 4K" />Apple TV 4K</div>
        <div className="banner-appletvhd"><img src="https://placekitten.com/80/50" alt="Apple TV HD" />Apple TV HD</div>
        <div className="banner-airplay"><img src="https://placekitten.com/80/50" alt="Airplay" />Airplay</div>
        <div className="banner-accessories"><img src="https://placekitten.com/80/50" alt="Accessories" />Accessories</div>
      </div>
      <section classname="section-appletvplus">
        <div classname="scrollingcovers">
          <p><span>apple</span>tv+</p>
          <p>Only Apple Originals.</p>
          <p>Only on Apple TV+.</p>
          <div classname="button-bar"><button>Watch Now</button><a>Learn more \></a></div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default TV;