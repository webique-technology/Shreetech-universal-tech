/* eslint-disable no-unused-vars */
import React from "react";
import flower from "../assets/images/flower.svg";
import { Container } from "react-bootstrap";
import { marqueeData } from "../data/clientData";

const MarqueeMoving = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="mb-3">
          <h2 className="intro-title heading-text">Our Valued Partners & Clients</h2>
        </div>
        <div className="marquee-wrapper">
          {/* FIRST MARQUEE - LEFT → RIGHT */}
          <div className="marquee-container">
            <div className="marquee-track my-1 left">
              {[...marqueeData.top, ...marqueeData.top].map((item, i) => (
                <div key={i} className={`marquee-item shadow-sm ${item.className || ""}`}>
                  <img src={item.image} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* SECOND MARQUEE - RIGHT → LEFT */}
        </div>
      </Container>
    </section>
  );
};

export default MarqueeMoving;
