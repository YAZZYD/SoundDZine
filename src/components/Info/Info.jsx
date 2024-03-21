import React from "react";
import "./Info.css";
import { studentIcon, videoIcon, infoElement } from "../../assets/import";
function Info() {
  return (
    <section id="info" className="dark-green">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} />
            <div className="amount">23,000+</div>
            <div className="type">Student</div>
          </div>
          <div className="info-content">
            <img src={videoIcon} />
            <div className="amount">26Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
        <img src={infoElement} className="bg-element" />
      </div>
    </section>
  );
}

export default Info;
