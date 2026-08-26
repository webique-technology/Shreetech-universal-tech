import React, { useState, useEffect } from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import aboutImg from "../assets/images/page-header.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiPlay } from "react-icons/fi";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import { ProductData } from "../data/productData";

const videoCategories = [
  {
    eventKey: "beverages",
    title: "Beverages",
    videos: [
      { id: "zTVf-7M4BAw", title: "Beverage Processing Line" },
      { id: "ctjR3nynA2U", title: "Beverage Bottling & Processing" },
    ],
  },
  {
    eventKey: "fruitProcessing",
    title: "Fruit Processing",
    videos: [
      { id: "jtFKVnJLoJU", title: "Fruit Pulp & Juice Processing" },
      { id: "a2KNzcDQwf0", title: "Fruits Processing Line" },
      { id: "wbEf-gyqHTU", title: "Fruit Washing & Preparation" },
      { id: "7Zk5qzsUYc8", title: "Fruit Processing Plant Machinery" },
    ],
  },
  {
    eventKey: "packaging",
    title: "Packaging",
    videos: [
      { id: "-YEDtcgUGTU", title: "Automated Packaging System" },
      { id: "-bTw05duRIk", title: "Pouch Packaging Machine" },
      { id: "UEjM20LhP6Y", title: "Industrial Packaging Solutions" },
      { id: "yMTRFv8cs2c", title: "Secondary Packaging Conveyor" },
      { id: "DYBP2Dt1-C0", title: "High-Speed Packaging Line" },
      { id: "fANjju6OMqs", title: "End-of-Line Packaging Machine" },
      { id: "dnoqSdOokPE", title: "Food Packaging Automation" },
    ],
  },
  {
    eventKey: "rteProducts",
    title: "RTE Products",
    videos: [
      { id: "n05e5wb80t0", title: "Ready To Eat Retort Line" },
      { id: "iuPKMg2wOnI", title: "RTE Cooking & Preparation" },
      { id: "Y-PuYWpYJMs", title: "RTE Sterilization Processing" },
    ],
  },
  {
    eventKey: "snack",
    title: "Snacks",
    videos: [
      { id: "cBo2sd-zLDY", title: "Indian Snack Foods Processing" },
      { id: "DdMGD9MkelY", title: "Snack Extrusion & Frying" },
      { id: "iUBuXwSKn70", title: "Continuous Snack Frying Machine" },
      { id: "duNP_80G3uA", title: "Snack Flavoring & Coating Drum" },
      { id: "uiXmN9gGErg", title: "Automatic Snack Making Machinery" },
      { id: "znvuxCG8Row", title: "Namkeen & Snack Processing Line" },
      { id: "BhBmPGYUU4A", title: "Snack Packaging & Handling Line" },
    ],
  },
];

// Helper to convert YouTube URLs or IDs into embed URLs
const getEmbedUrl = (urlOrId) => {
  if (!urlOrId) return "";

  const ytMatch = urlOrId.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
  );

  const videoId = ytMatch ? ytMatch[1] : urlOrId;
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
};

const Gallery = () => {
  const headingText = "Video Gallery";
  const subtitleText = "We deliver excellence in every project.";

  const [activeTab, setActiveTab] = useState("beverages");
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Disable background scrolling when modal (video or photo lightbox) is open
  // Lock background scroll when video or photo modal is active
  useEffect(() => {
    const isModalOpen = selectedVideo !== null || currentImageIndex !== null;

    if (isModalOpen) {
      // Lock both html and body
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Disables touch drag scroll on mobile
    } else {
      // Restore default scrolling
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    // Cleanup when component unmounts
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [selectedVideo, currentImageIndex]);
  
  // Photo Lightbox Controls
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % ProductData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + ProductData.length) % ProductData.length,
    );
  };

  // Framer Motion Animation Variants
  const hoverParent = { rest: { scale: 1 }, hover: { scale: 1.03 } };
  const fadeIn = { rest: { opacity: 0, y: 15 }, hover: { opacity: 1, y: 0 } };

  return (
    <>
      <InnerPageHeader
        heading={headingText}
        subtitle={subtitleText}
        image={aboutImg}
      />

      <section className="gallery-section py-5">
        <Container>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => {
              setActiveTab(k);
              setCurrentImageIndex(null);
              setSelectedVideo(null);
            }}
            id="gallery-tabs"
            className="custom-gallery-tabs mb-4 justify-content-center"
          >
            {/* VIDEO CATEGORY TABS */}
            {videoCategories.map((category) => (
              <Tab
                key={category.eventKey}
                eventKey={category.eventKey}
                title={category.title}
              >
                <div className="video-gallery-wrapper py-4">
                  <Row className="g-4">
                    {category.videos.map((video) => {
                      const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
                      const thumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

                      return (
                        <Col key={video.id} xs={12} sm={6} lg={4}>
                          <motion.div
                            className="video-item-card"
                            variants={hoverParent}
                            initial="rest"
                            whileHover="hover"
                            onClick={() =>
                              setSelectedVideo({
                                ...video,
                                videoUrl,
                              })
                            }
                          >
                            <div className="video-thumb-wrap">
                              <img
                                src={thumbnail}
                                alt={video.title}
                                className="video-thumb-img"
                              />
                              <div className="play-button-overlay">
                                <FiPlay />
                              </div>
                            </div>
                            <div className="video-caption">
                              <h4>{video.title}</h4>
                            </div>
                          </motion.div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Tab>
            ))}
          </Tabs>

          {/* PHOTO LIGHTBOX MODAL */}
          <AnimatePresence>
            {currentImageIndex !== null && (
              <motion.div
                className="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setCurrentImageIndex(null)}
              >
                <motion.img
                  src={ProductData[currentImageIndex]?.image}
                  alt={ProductData[currentImageIndex]?.title}
                  className="lightbox-img"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()}
                />
                <div
                  className="lightbox-caption"
                  onClick={(e) => e.stopPropagation()}
                >
                  {ProductData[currentImageIndex]?.title}
                </div>
                <button
                  className="nav-btn left"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <FiArrowLeft size={38} />
                </button>
                <button
                  className="nav-btn right"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <FiArrowRight size={38} />
                </button>
                <button
                  className="close-btn"
                  onClick={() => setCurrentImageIndex(null)}
                >
                  ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* VIDEO PLAYER MODAL */}
          <AnimatePresence>
            {selectedVideo !== null && (
              <motion.div
                className="lightbox video-lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedVideo(null)}
              >
                <div
                  className="video-modal-dialog"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="video-player-container">
                    <iframe
                      src={getEmbedUrl(selectedVideo.videoUrl)}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-modal-title text-center text-white mt-3">
                    <h5>{selectedVideo.title}</h5>
                  </div>
                </div>
                <button
                  className="close-btn"
                  onClick={() => setSelectedVideo(null)}
                >
                  ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
