import React from "react";
import "./SisterConcern.css";
import greenland from "../../assets/logo/greenland .jpg";
import soft from "../../assets/logo/soft.jpg";
import hajj from "../../assets/logo/hajj.jpg";
import tours from "../../assets/logo/travel.jpg";
import transport from "../../assets/logo/transport.jpg";
import shikhon from "../../assets/logo/shikhon.jpg";
import digital from "../../assets/logo/digital.jpg";
import furniture from "../../assets/logo/furniture.jpg";
import motors from "../../assets/logo/motors.jpg";
import express from "../../assets/logo/express.jpg";

const servicesData = [
  { id: 1, title: "Iconic Greenland", icon: greenland },
  { id: 2, title: "Iconic Soft Ltd.", icon: soft },
  { id: 3, title: "Iconic Hajj Group", icon: hajj },
  { id: 4, title: "Iconic Tours and Travels Ltd", icon: tours },
  { id: 5, title: "Iconic Transport", icon: transport },
  { id: 6, title: "Iconic Shikhon", icon: shikhon },
  { id: 7, title: "Iconic Digital Solutions", icon: digital },
  { id: 8, title: "Iconic Furniture", icon: furniture },
  { id: 9, title: "Iconic Motors", icon: motors },
  { id: 10, title: "Iconic Express", icon: express },
];

const SisterConcern = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Sister Concern</h2>
        <p className="services-subtitle">
          One platform, multiple professional services to meet your needs
        </p>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <button className="service-btn">Visit</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SisterConcern;
