import React, { useState } from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import aboutImg from "../assets/images/page-header.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { ProductData } from "../data/productData";
import { marqueeData } from "../data/clientData";

const Clients = () => {
  const headingText = "Our Clients";
  const subtitleText = "We deliver excellence in every project.";

  const [current, setCurrent] = useState(null); // current index

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % ProductData.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + ProductData.length) % ProductData.length);
  };

  // Framer Motion Animation Variants
  const hoverParent = { rest: { scale: 1 }, hover: { scale: 1.03 } };
  const fadeIn = { rest: { opacity: 0, y: 15 }, hover: { opacity: 1, y: 0 } };
  const iconAnim = {
    rest: { opacity: 0, scale: 0.7 },
    hover: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <InnerPageHeader
        heading={headingText}
        subtitle={subtitleText}
        image={aboutImg}
      />

      <section className="py-5">
        <Container>
          <Row className="g-4">
            {marqueeData.top.map((img, index) => (
              <Col
                key={index}
                sm={6}
                md={4}
                lg={3}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="p-2 border rounded-3 w-100 d-flex align-items-center justify-content-center">
                    <img src={img.image} alt={img.text} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Clients;
