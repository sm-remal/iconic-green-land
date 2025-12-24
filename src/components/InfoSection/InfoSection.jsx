import React from "react";
import "./InfoSection.css";
import ourValue from "../../assets/info-img/our-values.png";
import experience from "../../assets/info-img/Exprence.png";
import client from "../../assets/info-img/Client.png";

const InfoSection = () => {
  const data = [
    {
      title: "Our Values",
      desc: "Innovation, Quality, Customer Focus, Integrity",
      icon: ourValue,
    },
    {
      title: "Years of Experience",
      desc: "9+ Years of Digital Expertise",
      icon: experience,
    },
    {
      title: "Our Clients",
      desc: "Startups, SMEs, and Enterprises Globally",
      icon: client,
    },
  ];

  return (
    <section className="info-section">
      <div className="info-container">
        {data.map((item, index) => (
          <div className="info-card" key={index}>
            <div className="icon-box">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="info-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
