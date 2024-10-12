import React, { useState } from "react";
import Item from "./Item";

export default function Highlights(props) {
  const [data, setData] = useState([
    {
      title: "Top Surfing Spots in Hawaii",
      image: "/assets/images/surfing.jpg",
      description: "Discover the best places to catch waves in Hawaii, from Oahu to Maui.",
    },
    {
      title: "Hawaiian Cultural Festivals",
      image: "/assets/images/festival.png",
      description: "Immerse yourself in the vibrant culture.",
    },
    {
      title: "Volcanoes National Park",
      image: "/assets/images/pic6.png",
      description: "Experience breathtaking lava flows at the famous Volcanoes National Park.",
    },
  ]);

  return (
    <div>
      <h5 className="wow2">{props.heading}</h5>
      <div className="container">
        <div className="row">
          {data.map((ele, i) => {
            return (
              <div key={ele.title} className="col-md-4">
                <Item
                  image={ele.image}
                  title={ele.title}
                  description={ele.description}
                  url={
                    i === 0
                      ? "https://www.surfertoday.com/surfing/the-best-hawaiian-surf-spots"
                      : i === 1
                      ? "https://traveltriangle.com/blog/hawaiian-festivals/"
                      : "https://bigislandguide.com/volcanoes-national-park-lava-viewing"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
