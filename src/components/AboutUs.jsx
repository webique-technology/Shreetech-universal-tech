import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import abt1 from "../assets/images/who-we-are.webp";
import abt3 from "../assets/images/aboutus-3.svg";
import CountUp from "react-countup";
import buttoArr from "../assets/images/button-circle.svg";
import { FiUsers } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

import groupCompany from "../assets/images/about-us.jpg";

// Single-run on-mount/reload animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutUs = ({ showStoryButton = true, showCards = true }) => {
  const isMobile = useIsMobile();

  const aboutData = {
    smallText: "Who we are",
    titleAbout: "Your Trusted Partner for Advanced Food & Dairy Engineering",
    paragraph:
      "SHREETECH UNIVERSAL TECHNOLOGIES is a reliable partner to a wide range of sectors in Food & Dairy industry by offering quality & technologically advanced end to end solutions. We have our business associates based in India, Germany, Italy, UK, Taiwan, Thailand & China. We have a strong technical team to provide sales as well as after sales service support.",
    firstCard: {
      small: "Happy Clients",
      smallImg: HiOutlineBuildingOffice2,
      number: 121,
      title: "Happy Clients",
    },
    secondCard: {
      small: "Experience",
      smallImg: FiUsers,
      number: 9,
      title: "Experience",
    },
    images: [
      { id: 1, src: abt1, name: "about-1" },
      { id: 2, src: groupCompany, name: "about-2" },
      { id: 3, src: abt3, name: "about-3" },
    ],
    imageMap: {
      coluOne: "about-1",
      coluTwo: "about-2",
      coluThree: "about-3",
    },
  };

  const getImage = (name) =>
    aboutData.images.find((img) => img.name === name)?.src;

  const FirstIcon = aboutData.firstCard.smallImg;
  const SecondIcon = aboutData.secondCard.smallImg;

  // Dynamic tags: native HTML tags on mobile (no motion wrapper overhead), motion tags on desktop
  const SectionWrapper = isMobile ? "div" : motion.div;
  const MotionImg = isMobile ? "img" : motion.img;
  const MotionH5 = isMobile ? "h5" : motion.h5;
  const MotionH2 = isMobile ? "h2" : motion.h2;
  const MotionP = isMobile ? "p" : motion.p;
  const MotionDiv = isMobile ? "div" : motion.div;

  return (
    <>
      <div className="about-section">
        {/* MAIN WRAPPER WITH ON-LOAD ANIMATION */}
        <SectionWrapper
          className="company-section"
          {...(!isMobile && {
            variants: fadeUp,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.2 },
          })}
        >
          <Container>
            <Row>
              {/* LEFT IMAGE + BUTTON */}
              {showStoryButton && (
                <Col md={3} className="no-mobile mb-4 d-none d-lg-block">
                  <MotionImg
                    src={getImage(aboutData.imageMap.coluOne)}
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                    {...(!isMobile && {
                      variants: slideLeft,
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: true, amount: 0.2 },
                    })}
                  />
                </Col>
              )}

              <Col md={12} xs={12} lg={9} xl={9}>
                {/* SMALL TEXT */}
                <MotionH5
                  {...(!isMobile && {
                    variants: fadeUp,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true, amount: 0.2 },
                  })}
                >
                  {aboutData.smallText}
                </MotionH5>

                {/* TITLE */}
                <MotionH2
                  className="intro-title heading-text mb-2"
                  {...(!isMobile && {
                    variants: fadeUp,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true, amount: 0.2 },
                  })}
                >
                  {aboutData.titleAbout}
                </MotionH2>

                <Row>
                  {/* SECOND IMAGE / TEXT */}
                  <Col lg={6}>
                    <MotionP
                      className="main-paragraph-about mb-2"
                      {...(!isMobile && {
                        variants: fadeUp,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: true, amount: 0.2 },
                      })}
                    >
                      {aboutData.paragraph}
                    </MotionP>
                  </Col>

                  {/* TEXT + CARDS */}
                  <Col
                    md={12}
                    lg={6}
                    className="d-flex flex-column gap-4 align-items-center justify-content-between mt-2"
                  >
                    {showCards && (
                      <Row className="w-100 d-flex align-items-center justify-content-center">
                        {/* FIRST CARD */}
                        <Col xs={6} sm={5} md={6} className="h-100">
                          <MotionDiv
                            className="bottom-sec-1"
                            {...(!isMobile && {
                              variants: fadeUp,
                              initial: "hidden",
                              whileInView: "visible",
                              viewport: { once: true, amount: 0.2 },
                            })}
                          >
                            <p className="small-txt">
                              {aboutData.firstCard.small}
                            </p>

                            <div className="icon-box d-none d-sm-block">
                              <FirstIcon color="#ffffff" />
                            </div>

                            <h2 className="col-title">
                              <CountUp
                                duration={3}
                                end={aboutData.firstCard.number}
                                enableScrollSpy
                                scrollSpyOnce
                              />
                              +
                            </h2>

                            <p
                              className="col-para"
                              dangerouslySetInnerHTML={{
                                __html: aboutData.firstCard.title,
                              }}
                            />
                          </MotionDiv>
                        </Col>

                        {/* SECOND CARD */}
                        <Col xs={6} sm={5} md={6} className="h-100">
                          <MotionDiv
                            className="bottom-sec-1 bs-2"
                            {...(!isMobile && {
                              variants: fadeUp,
                              initial: "hidden",
                              whileInView: "visible",
                              viewport: { once: true, amount: 0.2 },
                            })}
                          >
                            <p className="small-txt">
                              {aboutData.secondCard.small}
                            </p>

                            <div className="icon-box d-none d-sm-block">
                              <SecondIcon color="#ffffff" />
                            </div>

                            <h2 className="col-title">
                              <CountUp
                                duration={3}
                                end={aboutData.secondCard.number}
                                enableScrollSpy
                                scrollSpyOnce
                              />
                              +
                            </h2>

                            <p
                              className="col-para"
                              dangerouslySetInnerHTML={{
                                __html: aboutData.secondCard.title,
                              }}
                            />
                          </MotionDiv>
                        </Col>
                      </Row>
                    )}
                    <MotionDiv
                      className="d-flex w-100 align-items-end justify-content-center justify-content-lg-end"
                      {...(!isMobile && {
                        variants: fadeUp,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: true, amount: 0.2 },
                      })}
                    >
                      <Link
                        to="/about"
                        className="common-button about-button mt-0"
                        target="_blank"
                      >
                        Our Story <img src={buttoArr} alt="button arrow" />
                      </Link>
                    </MotionDiv>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </SectionWrapper>
      </div>
    </>
  );
};

export default AboutUs;
