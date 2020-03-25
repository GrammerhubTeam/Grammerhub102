import React from 'react';
import './TV.css';

const list = [
  "Apple TV+",
  "Apple TV app",
  "Apple TV 4K",
  "Apple TV HD",
  "AirPlay",
  "Accessories"
]

const TV = () => {
  return (
    <React.Fragment>
      <div className="bannerlinks">
        {list.map(item => <div className="item-button"><img src="https://placekitten.com/80/50" alt="`{item}`" />{item}</div>)}
      </div>
      <section classname="section-appletvplus">
        <hr />
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