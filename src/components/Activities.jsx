import React, { useState } from "react";

export default function Activities(props) {
  const [data, setData] = useState({});

  // Dummy data for activities based on the type
  const dummyData = {
    surfing: {
      name: "Surfing",
      image: "/assets/images/surfing.jpg", // Placeholder image
      description:
        "Experience the thrill of surfing in the beautiful waves of Hawaii! Whether you're a seasoned surfer or a beginner, Hawaii's legendary waves offer something for everyone. Ride the world-renowned big waves at famous surf spots like Pipeline and Waimea Bay, or take a relaxing surf lesson with experienced instructors who will guide you every step of the way. You can also rent surfboards and hit the water whenever you like, making it a perfect activity for your Hawaiian adventure.",
    },
    festival: {
      name: "Hula",
      image: "/assets/images/festival.png", // Placeholder image
      description:
        "Discover the captivating art of Hula, a traditional Hawaiian dance that tells stories through graceful movement and music. Hula is much more than just a dance; it’s a deep cultural experience that connects you to the history, legends, and people of Hawaii. You can join Hula dance classes to learn the basic steps or witness stunning performances by local dancers who have mastered this art form. Participate in cultural workshops that explore the rich traditions behind Hula and its significance in Hawaiian heritage.",
    },
    volcano: {
      name: "Volcano",
      image: "/assets/images/pic6.png", // Placeholder image
      description:
        "Explore the awe-inspiring volcanoes of Hawaii, one of the most unique natural wonders in the world. Guided tours will take you through the dramatic volcanic landscapes, where you can witness the power of active volcanoes and even see flowing lava up close. For adventurers, hiking the scenic trails in Volcanoes National Park offers breathtaking views of the rugged terrain, ancient lava fields, and lush forests."
    }
  }
  

  // Simulating data fetching based on props.type
  const fetch_data = () => {
    const activityType = props.activity;
    console.log(activityType)
    const selectedData = dummyData[activityType] || {};
    setData(selectedData);
  };

  // Fetch data on component mount
  useState(() => {
    console.log("fetching")
    fetch_data();
  }, [props.activity]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px" }}>
      <h2
        style={{
          fontFamily: "kalam",
          margin: "26px 0 40px 0",
          fontWeight: "bold",
          textAlign: "center",
          color: "#17a2b8",
        }}
      >
        {data.name} in Hawaii!
      </h2>

      {/* Main container for image and description */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ flexBasis: "40%", margin: "20px" }}>
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
            src={data.image}
            alt={data.name}
          />
        </div>

        <div
          style={{
            flexBasis: "50%",
            margin: "20px",
            padding: "15px",
            backgroundColor: "#f7f7f7",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "1.1em",
              lineHeight: "1.6em",
              color: "#333",
            }}
          >
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
