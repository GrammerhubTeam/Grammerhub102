import React from "react";
import "./TV.css";

const list = [
  {
    name: "Apple TV+",
    tag: "apple-tv-plus",
    img: "http://placekitten.com/57/70"
  },
  {
    name: "Apple TV app",
    tag: "apple-tv-app",
    img: "http://placekitten.com/57/70"
  },
  {
    name: "Apple TV 4K",
    tag: "apple-tv-4k",
    img: "http://placekitten.com/57/70"
  },
  {
    name: "Apple TV HD",
    tag: "apple-tv-hd",
    img: "http://placekitten.com/57/70"
  },
  { name: "AirPlay", tag: "airplay", img: "http://placekitten.com/57/70" },
  {
    name: "Accessories",
    tag: "accessories",
    img: "http://placekitten.com/57/70"
  }
];

const TV = () => {
  return (
    <React.Fragment>
      <nav id="chapternav">
        <div className="chapternav-wrapper">
          <ul className="chapternav-items">
            {list.map(item => (
              <li className="chapternav-item" id={item.tag}>
                <img src={item.img} alt={item.name} />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <section className="section-appletvplus">
        <hr />
        <div className="scrollingcovers">
          <p>
            <span>apple</span>tv+
          </p>
          <p>Only Apple Originals.</p>
          <p>Only on Apple TV+.</p>
          <div className="button-bar">
            <button id="watch-now-button">Watch Now</button><button id="learn-more-button">Learn more ></button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TV;
