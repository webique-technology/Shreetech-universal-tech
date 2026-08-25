import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import listArr from "../assets/images/list-arrow.svg";
import fHome from "../assets/images/footer-home.svg";
import fEmail from "../assets/images/footer-email.svg";
import fPhone from "../assets/images/footer-phone.svg";
import fUnderline from "../assets/images/footer-underline.svg";
import { Link } from "react-router-dom";
import FuterLgo from "../assets/images/shreetech-logo.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ConactData } from "../data/contactData";

const footerData = {
  about: {
    description:
      "The proper Footer on proper time can preserve you protection. We assist you make sure everybody forward",
    socialIcons: [
      { icon: FaFacebookF, url: "https://facebook.com" },
      { icon: FaTwitter, url: "https://twitter.com" },
      { icon: FaInstagram, url: "https://www.instagram.com" },
      { icon: FaLinkedin, url: "https://in.linkedin.com" },
    ],
  },
  quickLinks: {
    title: "Quick Link",
    links: [
      { name: "Home", path: "/" },
      { name: "About us", path: "/about" },
      { name: "Product", path: "/product-profile" },
      { name: "Gallery", path: "/gallery" },
      { name: "Clients", path: "/clients" },
      { name: "Contact", path: "/contact" },
    ],
  },
};

const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const phoneNumbers = [
    {
      label: "Reg. Office",
      value: ConactData.number.registerd_office,
      prefix: "+91 0",
      dialPrefix: "+91",
    },
    {
      label: "Admin Office",
      value: ConactData.number.admin_office,
      prefix: "+91 0",
      dialPrefix: "+91",
    },
    {
      label: "",
      value: ConactData.number.cell1,
      prefix: "+91 ",
      dialPrefix: "+91",
    },
    {
      label: "",
      value: ConactData.number.cell2,
      prefix: "+91 ",
      dialPrefix: "+91",
    },
  ].filter((item) => item.value);

  const emailList = [ConactData.emails.gmail, ConactData.emails.gmail2].filter(
    Boolean,
  );

  return (
    <>
      <div className="footer-section">
        <Container>
          <Row className="d-flex row-gap-4 flex-md-row">
            {/* ABOUT */}
            <Col xs={12} sm={12} md={4} lg={3}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="description"
              >
                <div className="futer-lgo">
                  <img src={FuterLgo} alt="bb-logo" className="img-fluid" />
                </div>
                <p>{footerData.about.description}</p>
                <div className="footer-icon-wrap">
                  {footerData.about.socialIcons.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon className="footer-social-icons" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* QUICK LINKS */}
            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
              className="d-flex align-items-start justify-content-start justify-content-md-center gap-3"
            >
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <h3>{footerData.quickLinks.title}</h3>
                <img src={fUnderline} className="under-ln" alt="underline" />
                <ul className="footer-links">
                  {footerData.quickLinks.links.map((item, index) => (
                    <li key={index}>
                      <img src={listArr} className="list-arrow" alt="arrow" />
                      <Link to={item.path} className="footer-link-text">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* REGISTERED OFFICE BLOCK */}
            <Col xs={12} sm={12} md={6} lg={3}>
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <h3>Registered Office</h3>
                <img src={fUnderline} className="under-ln" alt="underline" />
                <div className="footer-contact-wrap d-flex flex-column gap-3">
                  {/* Address */}
                  <div className="contact-item d-flex align-items-start gap-2">
                    <img src={fHome} className="mt-1" alt="Home" />
                    <p className="mb-0">
                      {ConactData.registerd_office_link ? (
                        <a
                          href={ConactData.registerd_office_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {ConactData.registerd_office}
                        </a>
                      ) : (
                        ConactData.registerd_office
                      )}
                    </p>
                  </div>

                  {/* Reg Office Numbers */}
                  <div className="contact-item d-flex align-items-start gap-2">
                    <img src={fPhone} className="mt-1" alt="Phone" />
                    <div className="d-flex flex-column gap-1">
                      {ConactData.number.registerd_office && (
                        <p className="mb-0">
                          <strong style={{ marginRight: "6px" }}>Tel:</strong>
                          <a
                            href={`tel:+91${ConactData.number.registerd_office}`}
                          >
                            +91 0{ConactData.number.registerd_office}
                          </a>
                        </p>
                      )}
                      {ConactData.number.cell1 && (
                        <p className="mb-0">
                          <strong style={{ marginRight: "6px" }}>Mob:</strong>
                          <a href={`tel:+91${ConactData.number.cell1}`}>
                            +91 {ConactData.number.cell1}
                          </a>
                        </p>
                      )}
                      {ConactData.number.cell2 && (
                        <p className="mb-0">
                          <strong style={{ marginRight: "6px" }}>Mob:</strong>
                          <a href={`tel:+91${ConactData.number.cell2}`}>
                            +91 {ConactData.number.cell2}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Reg Office Email */}
                  {ConactData.emails.gmail && (
                    <div className="contact-item d-flex align-items-start gap-2">
                      <img src={fEmail} className="mt-1" alt="Email" />
                      <p className="mb-0">
                        <a href={`mailto:${ConactData.emails.gmail}`}>
                          {ConactData.emails.gmail}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </Col>

            {/* ADMIN OFFICE BLOCK */}
            <Col xs={12} sm={12} md={6} lg={3}>
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <h3>Admin Office</h3>
                <img src={fUnderline} className="under-ln" alt="underline" />
                <div className="footer-contact-wrap d-flex flex-column gap-3">
                  {/* Address */}
                  <div className="contact-item d-flex align-items-start gap-2">
                    <img src={fHome} className="mt-1" alt="Admin Home" />
                    <p className="mb-0">
                      {ConactData.admin_office_link ? (
                        <a
                          href={ConactData.admin_office_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {ConactData.admin_office}
                        </a>
                      ) : (
                        ConactData.admin_office
                      )}
                    </p>
                  </div>

                  {/* Admin Office Numbers */}
                  <div className="contact-item d-flex align-items-start gap-2">
                    <img src={fPhone} className="mt-1" alt="Phone" />
                    <div className="d-flex flex-column gap-1">
                      {ConactData.number.admin_office && (
                        <p className="mb-0">
                          <strong style={{ marginRight: "6px" }}>Tel:</strong>
                          <a href={`tel:+91${ConactData.number.admin_office}`}>
                            +91 0{ConactData.number.admin_office}
                          </a>
                        </p>
                      )}
                      {ConactData.number.cell1 && (
                        <p className="mb-0">
                          <strong style={{ marginRight: "6px" }}>Mob:</strong>
                          <a href={`tel:+91${ConactData.number.cell1}`}>
                            +91 {ConactData.number.cell1}
                          </a>
                        </p>
                      )}
                      {ConactData.number.cell2 && (
                        <p className="mb-0">
                          <strong style={{ marginRight: "6px" }}>Mob:</strong>
                          <a href={`tel:+91${ConactData.number.cell2}`}>
                            +91 {ConactData.number.cell2}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Admin Office Email */}
                  {ConactData.emails.gmail2 && (
                    <div className="contact-item d-flex align-items-start gap-2">
                      <img src={fEmail} className="mt-1" alt="Email" />
                      <p className="mb-0">
                        <a href={`mailto:${ConactData.emails.gmail2}`}>
                          {ConactData.emails.gmail2}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>

        <div className="company-line">
          <div className="footline">
            <Container>
              <Row className="align-items-center justify-content-between gap-md-0 mt-0 mt-md-4">
                {/* Copyright */}
                <Col
                  xs={12}
                  md={6}
                  className="d-flex align-items-center justify-content-md-start justify-content-center"
                >
                  <p className="text-center text-md-start mb-0">
                    &copy; Copyright {new Date().getFullYear()}{" "}
                    <span>SHREETECH</span> Rights Reserved.
                  </p>
                </Col>

                {/* Developer Credit */}
                <Col
                  xs={12}
                  md={6}
                  className="d-flex align-items-center justify-content-center justify-content-md-end"
                >
                  <div className="f-right">
                    <p className="mb-0">
                      Designed & Developed by{" "}
                      <Link
                        to="https://webique.in/"
                        className="text-decoration-none fw-bold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Webique Technology
                      </Link>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
