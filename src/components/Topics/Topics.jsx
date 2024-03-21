import React from "react";
import "./Topics.css";
import {
  topic1,
  topic2,
  topic3,
  topic4,
  topic5,
  topic6,
  topicElement,
} from "../../assets/import";

function Topics() {
  const [currentImage, setCurrentImage] = React.useState(topic1);

  const topics = [
    "What are frequencies?",
    "Using the DAW",
    "Vocals Processing",
    "Mixing",
    "Mixing Console",
    "Mastering",
  ];

  const handleMouseEnter = (topic) => {
    switch (topic) {
      case "What are frequencies?":
        setCurrentImage(topic1);
        break;
      case "Using the DAW":
        setCurrentImage(topic2);
        break;
      case "Vocals Processing":
        setCurrentImage(topic3);
        break;
      case "Mixing":
        setCurrentImage(topic4);
        break;
      case "Mixing Console":
        setCurrentImage(topic5);
        break;
      case "Mastering":
        setCurrentImage(topic6);
        break;
      default:
        setCurrentImage(topic1);
    }
  };

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            {topics.map((topic, index) => (
              <li key={index} onMouseEnter={() => handleMouseEnter(topic)}>
                {topic}
              </li>
            ))}
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="" />
          </div>
        </div>
        <img src={topicElement} alt="photo" className="bg-element" />
      </div>
    </section>
  );
}

export default Topics;
