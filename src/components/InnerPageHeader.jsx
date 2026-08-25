import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { RiArrowRightSLine } from "react-icons/ri";

const InnerPageHeader = ({ heading, subtitle, image }) => {
  return (
    <div
      className="inner-page-header"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay">
        <Container>
          <motion.div
            className="header-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {heading}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <ul className="bread-crump">
                  <li><Link to='/'>Home</Link></li> <span><RiArrowRightSLine /></span>
                  <li><span className="active-lnk">{heading}</span></li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default InnerPageHeader;
