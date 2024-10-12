import React, { useState } from "react";

export default function Categories(props) {
  const [data, setData] = useState([
    {
      name: "Outdoor Adventures",
      activities: [
        { title: "Hiking in the Rocky Mountains" },
        { title: "Kayaking on Crystal Lake" },
        { title: "Ziplining through Forest Trails" },
      ],
    },
    {
      name: "Cultural Experiences",
      activities: [
        { title: "Exploring Ancient Temples" },
        { title: "Traditional Dance Performance" },
        { title: "Cooking Class with Local Chefs" },
      ],
    },
    {
      name: "Relaxation and Wellness",
      activities: [
        { title: "Meditation in Serene Gardens" },
        { title: "Spa Day with Aromatherapy" },
        { title: "Yoga Retreat by the Beach" },
      ],
    },
  ]);

  const [current, setCurrent] = useState(null);

  function handleClick(i) {
    setCurrent(i);
  }

  return (
    <div className="set2" style={{paddingBottom:"100px"}}>
      <div>
        <h5 className="wow">{props.heading}</h5>
        <div id="accordion">
          <div className="card block">
            {data.map((ele, i) => {
              return (
                <div key={i}>
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <div className="btn2">
                        {ele.name}
                        <button
                          onClick={() => handleClick(i)}
                          className="btn btn-link btn3"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          style={{
                            float: "right",
                            borderRadius: "50px",
                            marginTop: "-6px",
                          }}
                        >
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </div>
                    </h5>
                  </div>
                  {current === i && (
                    <div
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        {data[i].activities.map((element, i) => {
                          return (
                            <ul className="unordered" key={i}>
                              <li className="list">{element.title}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h5 className="wow">Travel Guide</h5>
        <div className="yay">
          <div>
            <h5>Mohit Agarwal</h5>
            <p>Guide since 2018</p>
            <button className="btn4">Contact</button>
          </div>
          <img src="/assets/images/mine.png" alt="guide" />
        </div>
      </div>
    </div>
  );
}
