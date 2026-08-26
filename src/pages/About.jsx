import React, { useEffect, useRef } from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import aboutImg from "../assets/images/page-header.jpg";
import mission from "../assets/images/mission.svg";
import vision from "../assets/images/vision.svg";
import AboutUs from "../components/AboutUs";
import { Col, Container, Row } from "react-bootstrap";
import Community from "../components/Community";
// import abt2 from "../assets/images/gp_infra.png";
import { motion } from "framer-motion";
import founderImg from "../assets/images/pramod.jpg";
import coFounderImg from "../assets/images/nisha.jpg";

const isMobile = window.innerWidth <= 768;

const About = () => {
  const headingText = "About Us";
  const subtitleText = "We deliver excellence in every project.";

  const itemRefs = useRef([]);
  const lineRef = useRef(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleStepScroll = () => {
      const items = itemRefs.current;
      const line = lineRef.current;

      if (!line) return;

      let activeSteps = 0;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.6; // when 60% of viewport reached

        if (rect.top < triggerPoint) {
          activeSteps += 1; // item reached → add step
        }
      });

      // total items
      const total = items.length;

      // step percentage
      const stepPercent = 100 / total;

      // final height
      const newHeight = activeSteps * stepPercent;

      line.style.height = `${newHeight}%`;
    };

    window.addEventListener("scroll", handleStepScroll);
    handleStepScroll();

    return () => window.removeEventListener("scroll", handleStepScroll);
  }, []);

  const FounderCard = ({ data, imagePosition = "right" }) => {
    const fadeUp = {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    const isMobile = window.innerWidth < 768;
    const isImageLeft = imagePosition === "left";

    return (
      <motion.div
        variants={isMobile ? {} : fadeUp}
        initial={isMobile ? "visible" : "hidden"}
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="image-text-section py-2 py-sm-4 py-md-5"
      >
        <Container>
          <Row className="align-items-center">
            <Col
              xs={12}
              md={4}
              lg={5}
              className={`mb-4 mb-md-0 ${isImageLeft ? "order-1 order-md-1" : "order-1 order-md-2"}`}
            >
              <div
                className={`d-flex align-items-center ${isImageLeft ? "flex-row-reverse justify-content-end" : ""}`}
              >
                <motion.div
                  variants={isMobile ? {} : fadeUp}
                  initial={isMobile ? "visible" : "hidden"}
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-grow-1"
                >
                  <img
                    src={data.image}
                    alt={data.name || "Founder"}
                    className="img-fluid rounded shadow-sm w-100"
                  />
                </motion.div>
                {data.tag && (
                  <div
                    className={`founder-tag fs-1 d-none d-lg-block text-uppercase fw-semibold vertical-tag ${isImageLeft ? "me-3" : "ms-3"}`}
                    style={{
                      writingMode: "vertical-rl",
                      letterSpacing: "3px",
                      transform: isImageLeft
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    {data.tag}
                  </div>
                )}
              </div>
            </Col>
            <Col
              xs={12}
              md={8}
              lg={7}
              className={`${isImageLeft ? "order-2 order-md-2" : "order-2 order-md-1"}`}
            >
              <motion.div
                variants={isMobile ? {} : fadeUp}
                initial={isMobile ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="d-flex align-items-start mb-3 mb-md-4">
                  <span
                    className="fs-1 text-muted me-3 lh-1"
                    style={{ opacity: 0.4 }}
                  >
                    “
                  </span>
                  <h2 className="intro-title heading-text fw-bold m-0">
                    {data.name}
                  </h2>
                </div>
                {data.subtitle && (
                  <p className="section-text fw-semibold text-warning mb-3">
                    {data.subtitle}
                  </p>
                )}
                {data.descriptions &&
                  data.descriptions.map((desc, index) => (
                    <p key={index} className="section-text text-secondary mb-3">
                      {desc}
                    </p>
                  ))}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    );
  };

  return (
    <div>
      {/* Passing props to child */}
      <InnerPageHeader
        heading={headingText}
        subtitle={subtitleText}
        image={aboutImg}
      />
      <div className="about-inner-page">
        <FounderCard
          imagePosition="left" // Change to "left" if you want the image on the left side
          data={{
            name: "Pramod Patne",
            tag: "Founder",
            image: founderImg, // or your imported image variable
            subtitle: "",
            descriptions: [
              "An astute professional with over 23 year's experience in sales & service of food processing & machine tools machinery. He is an adroit in developing sustainable long term business relationships with industry leaders in top corporates. His academia includes bachelor’s degree in engineering with post-graduation in business management & International trade. He launched his own start-up company “ SHREETECH UNIVERSAL TECHNOLOGIES LLP ” in 2017. This venture is catering to requirements of FMCG & MSME sector. Shreetech has its own factory skilled service engineers. Due to dedication of our employees & goodwill with our customers, Shreetech has demonstarted CAGR 100 % growth over the years.",
            ],
          }}
        />

        <FounderCard
          imagePosition="right" // Change to "left" if you want the image on the left side
          data={{
            name: "Nisha Patne",
            tag: "Co-Founder",
            image: coFounderImg, // or your imported image variable
            subtitle: "",
            descriptions: [
              "A commerce professional with 10 years of rich experience in CA firm. She is credited with ensuring smooth cash flows & nil debts for Shreetech. In addition to her key priorities of handling Finance portfolio, she actively supports new business developments.",
            ],
          }}
        />

        <motion.div
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "visible"}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="vision-mission"
        >
          <Container>
            {/* <h2 className="inner-text vm-heading">Mission Vision</h2> */}

            <Row>
              <Col md={6} lg={6}>
                <motion.div
                  variants={isMobile ? {} : fadeUp}
                  initial={isMobile ? "visible" : "hidden"}
                  whileInView={isMobile ? "visible" : "visible"}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="vm-block"
                >
                  <div className="vm-image">
                    <img src={mission} />
                  </div>
                  <div className="vm-txt">
                    <h4>Mission</h4>
                    <p>
                      To empower the food and dairy industries by delivering
                      technologically advanced, hygienic, and energy-efficient
                      processing solutions with reliable end-to-end engineering
                      and dedicated lifecycle support.
                    </p>
                  </div>
                </motion.div>
              </Col>

              <Col md={6} lg={6}>
                <motion.div
                  variants={isMobile ? {} : fadeUp}
                  initial={isMobile ? "visible" : "hidden"}
                  whileInView={isMobile ? "visible" : "visible"}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="vm-block"
                >
                  <div className="vm-image">
                    <img src={vision} />
                  </div>
                  <div className="vm-txt">
                    <h4>Vision</h4>
                    <p>
                      To become a globally recognized engineering partner and
                      benchmark for turnkey food and dairy processing
                      technologies, driving industrial efficiency and
                      sustainable growth.
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </motion.div>
        <Community />
      </div>
    </div>
  );
};

export default About;
