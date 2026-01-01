import React from "react";
import "./About.css";
import story from "../../assets/global.PNG";
import { FaInfinity, FaLightbulb, FaUsers } from "react-icons/fa";
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


const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          At Iconic Unity Group, we are committed to delivering innovative,
          reliable, and growth-driven solutions across multiple industries,
          helping businesses achieve long-term success.
        </p>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-image">
          <img src={story} alt="Iconic Unity Group" />
        </div>

        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            At Iconic Unity Group, we are dedicated to driving growth and
            innovation across a diverse range of industries. Our journey began
            with a vision to create a unified platform that delivers impactful
            solutions tailored to modern business needs.
          </p>
          <p>
            Our expertise spans digital solutions, furniture, software
            development, travel and tourism, Hajj services, holidays, and
            automotive ventures. Through our companies—Iconic Digital Solutions,
            Iconic Furniture Ltd, Iconic Soft Ltd, Iconic Tours & Travels Ltd,
            Iconic Hajj Group, Iconic Holidays, and Iconic Motors—we provide
            end-to-end services designed to create measurable results.
          </p>
          <p>
            By combining creativity, technology, and strategic thinking, we help
            brands enhance their presence, increase engagement, and unlock their
            full potential in an ever-evolving global market.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="box mission">
          <h3>Our Mission</h3>
          <p>
            To empower businesses by delivering innovative, high-quality, and
            result-oriented solutions that drive sustainable growth and long-term
            success across all industries we serve.
          </p>
        </div>

        <div className="box vision">
          <h3>Our Vision</h3>
          <p>
            To become a globally trusted group of companies recognized for
            excellence, innovation, and leadership in digital, travel,
            automotive, and lifestyle sectors.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values">
          <div className="value-card">
            <FaInfinity className="value-icon spin" />
            <h4>Integrity</h4>
            <p>
              We operate with honesty, transparency, and strong ethical
              standards, building trust with our clients, partners, and
              communities.
            </p>
          </div>

          <div className="value-card">
            <FaLightbulb className="value-icon pulse" />
            <h4>Innovation</h4>
            <p>
              Innovation is at the heart of our work. We continuously embrace
              new ideas, technologies, and strategies to stay ahead in a
              competitive landscape.
            </p>
          </div>

          <div className="value-card">
            <FaUsers className="value-icon float" />
            <h4>Customer First</h4>
            <p>
              Our clients’ success defines our success. We focus on
              understanding their goals and delivering customized solutions
              that create real value.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Our Sister Concern</h2>
        <div className="team-members">
          <img src={greenland} alt="" />
          <img src={soft} alt="" />
          <img src={tours} alt="" />
          <img src={shikhon} alt="" />
          <img src={furniture} alt="" />
          <img src={digital} alt="" />
          <img src={hajj} alt="" />
          <img src={transport} alt="" />
          <img src={motors} alt="" />
          <img src={express} alt="" />
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <div className="achievement">
          <h3>10+</h3>
          <p>Business Ventures</p>
        </div>
        <div className="achievement">
          <h3>500+</h3>
          <p>Successful Projects</p>
        </div>
        <div className="achievement">
          <h3>10000+</h3>
          <p>Satisfied Clients</p>
        </div>
      </section>
    </div>
  );
};

export default About;
