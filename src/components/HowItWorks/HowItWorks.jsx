import React from "react";
import { FaRegLightbulb, FaRegBuilding, FaRegHandshake, FaRegSmile } from "react-icons/fa";
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    icon: <FaRegLightbulb />,
    title: "Vision & Planning",
    description: "We define a strategic vision for Iconic Unity and plan every project carefully."
  },
  {
    id: 2,
    icon: <FaRegBuilding />,
    title: "Project Execution",
    description: "Our expert teams execute projects efficiently across all our sectors."
  },
  {
    id: 3,
    icon: <FaRegHandshake />,
    title: "Collaboration & Support",
    description: "We provide ongoing collaboration and support for sustainable growth."
  },
  {
    id: 4,
    icon: <FaRegSmile />,
    title: "Client Satisfaction",
    description: "Ensuring every client and partner experiences value and excellence."
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How Iconic Unity Works</h2>
        <p className="subtitle">
          A professional workflow designed to deliver excellence across all sectors
        </p>

        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.id}>
              <div className="icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

