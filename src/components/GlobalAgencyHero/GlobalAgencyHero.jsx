import React from "react";
import "./GlobalAgencyHero.css";
import businessImg from "../../assets/Business-Consultancy.jpg"

const GlobalAgencyHero = () => {
  return (
    <section className="global-hero">
      <div className="global-hero-container">
        {/* Left - Map */}
        <div className="map-section">
          <img
            src={businessImg} 
            alt="World Map Network"
            className="global-image"
          />
        </div>

        {/* Right - Text Content */}
        <div className="content-section">
          <div className="content">
            <p className="subtitle">Innovative Ideas</p>

            <h1 className="title">
              WE ARE A GLOBAL CREATIVE <br /> ICONIC UNITY GROUP
            </h1>

            <p className="description">
              At Iconic Unity Group, we are committed to driving growth and innovation across a diverse range of industries. Our expertise spans digital solutions, furniture, software, travel and tourism, Hajj services, holidays, and automotive ventures, through our companies: Iconic Digital Solutions, Iconic Furniture Ltd, Iconic Soft Ltd, Iconic Tours & Travels Ltd, Iconic Hajj Group, Iconic Holidays, and Iconic Motors. By delivering tailored strategies in web design, branding, SEO, and digital marketing, we aim to enhance your online presence, increase engagement, and maximize returns. Let us help your business unlock its full potential through creative and impactful services that blend innovation with measurable results.
            </p>

            <div className="button-row">
              <button className="cta-button">
                SEE HOW WE WORK
                <span className="button-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalAgencyHero;