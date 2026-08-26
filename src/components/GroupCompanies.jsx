import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import image1 from "../assets/images/process-consultancy.webp";
import image2 from "../assets/images/design-consultancy.webp";
import image3 from "../assets/images/equipment-supply.webp";
import image4 from "../assets/images/int-service-supply.webp";
import image5 from "../assets/images/quality-compliance.webp";
import arrowButton from "../assets/images/arrow-2.svg";

const accordionData = [
  {
    id: 1,
    title: "Process Consultancy",
    content:
      "Comprehensive audits, flow optimization, and hygienic design strategies tailored for dairy and liquid food processing plants.",
    image: image1,
    path: "/services",
  },
  {
    id: 2,
    title: "Design Consultancy",
    content:
      "Complete plant layout design, P&ID creation, 3D modelling, and regulatory-compliant architectural blueprints.",
    image: image2,
    path: "/services",
  },
  {
    id: 3,
    title: "Equipment Supply",
    content:
      "SS304/SS316 pasteurizers, homogenizers, CIP systems, mixing vessels, and automated filling machinery.",
    image: image3,
    path: "/services",
  },
  {
    id: 4,
    title: "Integrate Service & Supply",
    content:
      "End-to-end turnkey project integration, from equipment procurement and electrical automation to on-site testing.",
    image: image4,
    path: "/services",
  },
  {
    id: 5,
    title: "Quality Compliance",
    content:
      "Rigorous quality assurance, sanitary standard certifications (GMP/ISO), and pressure vessel safety validation.",
    image: image5,
    path: "/services",
  },
];

const GroupCompanies = () => {
  const [active, setActive] = useState(1);

  const handleAccordionClick = (id) => {
    setActive(id);
  };

  const activeItem =
    accordionData.find((item) => item.id === active) || accordionData[0];

  return (
    <section className="group-companies py-4 py-lg-5">
      <Container>
        <Row className="justify-content-between flex-row-reverse row-gap-4 flex-md-row align-items-start">
          {/* LEFT CONTENT */}
          <Col xs={12} md={6} lg={6}>
            <div className="services-left-content">
              <h2 className="heading-text mb-3 mb-md-5">Our Services</h2>

              <div className="accordion-left">
                {accordionData.map((item) => (
                  <div
                    key={item.id}
                    className={`accordion-item ${active === item.id ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      aria-expanded={active === item.id}
                      onClick={() => handleAccordionClick(item.id)}
                    >
                      <span>{item.title}</span>
                      <img src={arrowButton} alt="arrow" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* RIGHT IMAGE PREVIEW */}
          <Col
            xs={12}
            md={6}
            lg={5}
            className="d-flex align-items-end justify-content-center"
          >
            <div className="images-wrap position-relative w-100 overflow-hidden rounded-4">
              <div className="image-aspect-container position-relative">
                <img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="accordion-image w-100 h-100 object-fit-cover rounded-4 position-absolute top-0 start-0"
                  decoding="async"
                  loading="lazy"
                />
              </div>

              <div className="image-text d-flex justify-content-between p-3">
                <div className="t-wrap">
                  <h4 className="mb-1 text-white">{activeItem.title}</h4>
                  <p className="d-none fs-6 d-md-block text-white-50 mb-0 small">
                    {activeItem.content}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GroupCompanies;
