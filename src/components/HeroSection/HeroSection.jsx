import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import banner_1 from "../../assets/banner/banner-1.jpg";
import banner_2 from "../../assets/banner/banner-2.jpg";
import banner_3 from "../../assets/banner/banner-3.jpg";

const HeroSection = () => {
  const slides = [
    { id: 1, image: banner_1 },
    { id: 2, image: banner_2 },
    { id: 3, image: banner_3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <section className="hero-section">
      <div
        className="slides-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            className="slide"
            key={slide.id}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          ></div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="prev"
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
        }
      >
        &#10094;
      </button>
      <button
        className="next"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
      >
        &#10095;
      </button>
    </section>
  );
};

export default HeroSection;
