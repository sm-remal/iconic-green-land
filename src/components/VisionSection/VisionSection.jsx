import React from "react";
import "./VisionSection.css";

const VisionSection = () => {
  const items = [
    "Our Vision",
    "Business Solutions",
    "How it Works",
    "Trusted Experience",
  ];

  return (
    <section className="vision-section">
      <div className="vision-container">
        {items.map((item, index) => (
          <div className="vision-item" key={index}>
            <span className="check-icon">✓</span>
            <span className="vision-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionSection;
