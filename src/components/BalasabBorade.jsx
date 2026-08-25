import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import chairman from "../assets/images/chairman.png";
import waves from "../assets/images/chairman-bottom.svg";
import { motion, useInView } from "framer-motion";
const isMobileTwo = window.innerWidth <= 768;
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const introData = [
  {
    id: 1,
    title: "Shreetech Universal Technologies LLp",
    subtitle: "A decade of trusted leadership built on clarity, discipline, and impactful governance.",
    content:
      "<p>SHREETECH UNIVERSAL TECHNOLOGIES is a reliable partner to a wide range of sectors in Food & Dairy industry by offering quality & technologically advanced end to end solutions.</p>",
    verticletext: "chairman",
    image: chairman,
  },
];

const BalasabBorade = () => {
  return (
    <div className="intro-wrap">
      <div className="intro-inner">
        <Container>
          <Row>

            {/* LEFT TEXT SIDE WITH ANIMATION */}
            <Col
              as={motion.div}
              variants={isMobileTwo ? {} : slideLeft}
              initial={isMobileTwo ? "visible" : "hidden"}
              whileInView={isMobileTwo ? "visible" : "visible"} 
              viewport={{ once: true, amount: 0.3 }}
              xs={{ span: 12, order: 2 }}
              md={{ span: 7, order: 1 }}
              lg={{ span: 7, order: 1 }}
            >
              {introData.map((item, index) => (
                <div key={index}>
                  <h2 className="intro-title heading-text">{item.title}</h2>
                  <h3 className="intro-sub">{item.subtitle}</h3>
                  <p
                    className="intro-cont"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              ))}
            </Col>

            {/* RIGHT IMAGE SIDE WITH ANIMATION */}
            <Col
              as={motion.div}
              variants={isMobileTwo ? {} : slideRight}
              initial={isMobileTwo ? "visible" : "hidden"}
              whileInView={isMobileTwo ? "visible" : "visible"} 
              viewport={{ once: true, amount: 0.3 }}
              xs={{ span: 12, order: 1 }}
              md={{ span: 5, order: 2 }}
              lg={{ span: 5, order: 2 }}
            >
              {introData.map((item, index) => (
                <div className="photo-vertical d-flex gap-2" key={index}>
                  <div className="chairman-photo order-2 order-md-0">
                    <img src={item.image} alt="" />
                  </div>
                  <h2 className=''>{item.verticletext}</h2>
                </div>
              ))}
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BalasabBorade;
