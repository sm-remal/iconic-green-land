import React from "react";
import "./SisterConcern.css";

import greenland from "../assets/logo/greenland .jpg";
import soft from "../assets/logo/soft.jpg";
import hajj from "../assets/logo/hajj.jpg";
import tours from "../assets/logo/travel.jpg";
import transport from "../assets/logo/transport.jpg";
import shikhon from "../assets/logo/shikhon.jpg";
import digital from "../assets/logo/digital.jpg";
import furniture from "../assets/logo/furniture.jpg";
import motors from "../assets/logo/motors.jpg";
import express from "../assets/logo/express.jpg";

const SisterConcern = () => {
  const logos = [
    greenland,
    soft,
    hajj,
    tours,
    transport,
    shikhon,
    digital,
    furniture,
    motors,
    express
  ];

  return (
    <section className="sister-section">
      <h2 className="sister-title">Our Companies</h2>

      <div className="marquee">
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="sister-card" key={index}>
              <img src={logo} alt="Sister Concern Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SisterConcern;
