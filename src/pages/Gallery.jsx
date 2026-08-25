import React, { useState } from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import aboutImg from "../assets/images/about-inner.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { Container } from "react-bootstrap";
import { ProductData } from "../data/productData";

const Gallery = () => {
  const headingText = "Gallery";
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

      <Container>
        <div className="masonry-gallery">
          {ProductData.map((img, index) => (
            <motion.div
              key={img.id}
              className="masonry-item"
              variants={hoverParent}
              initial="rest"
              whileHover="hover"
            >
              <img
                src={img.image}
                alt={img.title}
                className="gallery-img"
                onClick={() => setCurrent(index)}
              />

              <motion.div className="caption d-flex justify-content-between align-items-center" variants={fadeIn}>
                <div className="gal-txt">
                  <h4 className="m-0">{img.title}</h4>
                  {/* <p>{img.description}</p> */}
                </div>

                {/* MAGNIFIER CLICK OPENS LIGHTBOX */}
                <div className="magnifier p-2" onClick={() => setCurrent(index)}>
                  <HiMiniMagnifyingGlassPlus />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {current !== null && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={ProductData[current].image}
                alt={ProductData[current].title}
                className="lightbox-img"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />

              <div className="lightbox-caption">{ProductData[current].title}</div>

              {/* NAVIGATION ARROWS */}
              <button className="nav-btn left" onClick={prevImage}>
                <FiArrowLeft size={38} />
              </button>

              <button className="nav-btn right" onClick={nextImage}>
                <FiArrowRight size={38} />
              </button>

              {/* CLOSE BUTTON */}
              <button className="close-btn" onClick={() => setCurrent(null)}>
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Gallery;
