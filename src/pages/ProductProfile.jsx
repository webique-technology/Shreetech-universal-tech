import React from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/about-inner.jpg";
import { Col, Container, Row } from "react-bootstrap";
import buttoArr from "../assets/images/button-circle.svg";
import { Link } from "react-router-dom";
import { ProductData } from "../data/productData";

const isMobile = window.innerWidth <= 768;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const ProductProfile = () => {
  const headingText = "Product Profile";
  const subtitleText =
    "A unified network of businesses delivering excellence across multiple sectors.";

  return (
    <section>
      <InnerPageHeader
        heading={headingText}
        subtitle={subtitleText}
        image={aboutImg}
      />

      <div className="companies-inner-wrap">
        {/* SECTION 1 */}
        <motion.div
          className="company-section py-5 pb-0"
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Container>
            <Row className="g-4 pb-5 product-profile-row">
              {ProductData.map((item, index) => (
                <Col sm={6} key={item.id || index}>
                  <div className="d-flex flex-column flex-md-row gap-3 h-100 shadow-sm p-3 rounded-4 border">
                    <div className="position-relative company-img">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid rounded-3 border w-100"
                        variants={isMobile ? {} : fadeUp}
                        initial={isMobile ? "visible" : "hidden"}
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>

                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <motion.h2
                          className="fs-4 fw-bold"
                          variants={isMobile ? {} : fadeUp}
                          initial={isMobile ? "visible" : "hidden"}
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {item.title}
                        </motion.h2>

                        {/* <motion.p
                          className="main-paragraph-about"
                          variants={isMobile ? {} : fadeUp}
                          initial={isMobile ? "visible" : "hidden"}
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {item.description}
                        </motion.p> */}

                        <motion.div
                          variants={isMobile ? {} : fadeUp}
                          initial={isMobile ? "visible" : "hidden"}
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <ul className="inner-list m-0">
                            {item.items.map((listItem, listIndex) => (
                              <li key={listIndex}>{listItem}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductProfile;
