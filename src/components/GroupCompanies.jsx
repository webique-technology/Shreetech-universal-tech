import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/images/process-consultancy.jpg";
import image2 from "../assets/images/design-consultancy.jpg";
import image3 from "../assets/images/equipment-supply.jpg";
import image4 from "../assets/images/int-service-supply.jpg";
import image5 from "../assets/images/quality-compliance.jpg";
import arrowButton from "../assets/images/arrow-2.svg";
import tabImage from "../assets/images/arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Animation Variants...
// (keep all your animation variants as they are)

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const zoomFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const isMobileTwo = window.innerWidth <= 768;
const accordionData = [
  {
    id: 1,
    logo: "",
    title: "Process Consultancy",
    content: "",
    image: image1,
    path: "",
  },
  {
    id: 2,
    logo: "",
    title: "Design Consultancy",
    content: "",
    image: image2,
    path: "",
  },
  {
    id: 3,
    logo: "",
    title: "Equipment Supply",
    content: "",
    image: image3,
    path: "",
  },
  {
    id: 4,
    logo: "",
    title: "Integrate Service & Supply",
    content: "",
    image: image4,
    path: "",
  },
  {
    id: 5,
    logo: "",
    title: "Quality Compliance",
    content: "",
    image: image5,
    path: "",
  },
];

const GroupCompanies = () => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Handle click on accordion
  const handleAccordionClick = (id) => {
    setActive(id);

    // On mobile → navigate instead of just activating
    // if (isMobile) {
    //   navigate("/about");
    // }
  };

  const handleNavClick = () => navigate("/about");

  return (
    <motion.div
      className="group-companies"
      variants={isMobileTwo ? {} : fadeUp}
      initial={isMobileTwo ? "visible" : "hidden"}
      whileInView={isMobileTwo ? "visible" : "visible"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Container>
        <Row className="justify-content-between flex-row-reverse row-gap-4 flex-md-row ">
          {/* LEFT COLUMN */}
          <Col xs={12} md={6} lg={6}>
            <motion.h2
              className="heading-text"
              variants={isMobileTwo ? {} : fadeUp}
              initial={isMobileTwo ? "visible" : "hidden"}
              whileInView={isMobileTwo ? "visible" : "visible"}
              viewport={{ once: false }}
            >
              Our Services
            </motion.h2>

            <motion.p
              variants={isMobileTwo ? {} : fadeUp}
              className="gp-text"
              initial={isMobileTwo ? "visible" : "hidden"}
              whileInView={isMobileTwo ? "visible" : "visible"}
              viewport={{ once: false }}
            >
              Project Enabler Not Just An Equipment Provider.
            </motion.p>

            <motion.div
              className="accordion-left"
              variants={isMobileTwo ? {} : fadeUp}
              initial={isMobileTwo ? "visible" : "hidden"}
              whileInView={isMobileTwo ? "visible" : "visible"}
              viewport={{ once: false }}
            >
              {accordionData.map((item) => (
                <motion.div
                  key={item.id}
                  className={`accordion-item ${active === item.id ? "active" : ""}`}
                  onClick={() => handleAccordionClick(item.id)}
                  variants={fadeUp}
                >
                  <button className="accordion-header">
                    <span>{item.title}</span>
                    {/* <Link
                      to={item.path}
                      target="_blank"
                      className="d-none d-md-block"
                    >
                    </Link> */}
                      <img src={arrowButton} alt="arrow" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col
            xs={12}
            md={6}
            lg={5}
            className="d-flex align-items-end justify-content-center"
          >
            <motion.div
              className="images-wrap"
              //  variants={isMobileTwo ? {} : fadeUp}
              // initial={isMobileTwo ? "visible" : "hidden"}
              // whileInView={isMobileTwo ? "visible" : "visible"} viewport={{ once: false }}
            >
              {/* SHOW IMAGE ONLY ON DESKTOP/TABLET */}

              <motion.img
                key={active}
                src={accordionData.find((i) => i.id === active)?.image}
                alt="Accordion"
                className="accordion-image"
                variants={zoomFade}
                initial="hidden"
                animate="visible"
              />

              {/* <motion.div
                variants={isMobileTwo ? {} : fadeUp}
                initial={isMobileTwo ? "visible" : "hidden"}
                whileInView={isMobileTwo ? "visible" : "visible"}
                viewport={{ once: false }}
                className="company-logo"
              >
                <img
                  src={accordionData.find((i) => i.id === active)?.logo}
                  alt={accordionData.find((i) => i.id === active)?.title}
                />
              </motion.div> */}

              <motion.div
                className="image-text d-flex justify-content-between"
                variants={isMobileTwo ? {} : fadeUp}
                initial={isMobileTwo ? "visible" : "hidden"}
                whileInView={isMobileTwo ? "visible" : "visible"}
                viewport={{ once: false }}
              >
                <div className="t-wrap">
                  <h3>{accordionData.find((i) => i.id === active)?.title}</h3>
                  <p className="d-none d-md-block">
                    {accordionData.find((i) => i.id === active)?.content}
                  </p>
                </div>

                {/* a-wrap always navigates */}
                {/* <a
                  href={accordionData.find((i) => i.id === active)?.path}
                  className="a-wrap"
                  target="_blank"
                >
                  <motion.img
                    src={tabImage}
                    variants={isMobileTwo ? {} : fadeUp}
                    initial={isMobileTwo ? "visible" : "hidden"}
                    whileInView={isMobileTwo ? "visible" : "visible"}
                    // onClick={handleNavClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </a> */}
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default GroupCompanies;
