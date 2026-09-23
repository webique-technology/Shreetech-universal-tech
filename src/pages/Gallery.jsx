import React, { useState, useEffect } from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import aboutImg from "../assets/images/page-header.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import { ProductData } from "../data/productData";

// --- LOCAL VIDEO IMPORTS ---
// import sampleLocalVideo from "../assets/videos/fruits-vegetable-processing/lemon-processing.mp4";
// import automaticParathaVideo from "../assets/videos/rte-processing/Automatic Paratha Making Line.mp4";
// import cerealBarVideo from "../assets/videos/rte-processing/Breakfast Cereal Bar Line.mp4";
// import cornCutterVideo from "../assets/videos/rte-processing/Corn kernel cutter.mp4";
// import encrustingVideo from "../assets/videos/rte-processing/Encrusting Machine.mp4";
// import fullyAutoMomoVideo from "../assets/videos/rte-processing/Fully Automatic Momo Making Machine.mp4";
// import semiAutoMomoVideo from "../assets/videos/rte-processing/Semi-Automatic Momo Making Machine.mp4";
// import vegetableCutterVideo from "../assets/videos/rte-processing/Vegetable cutter.mp4";
// import freezeDryingVideo from "../assets/videos/freeze-dryer/freeze-drynig-system.mp4";
// import dehydrationVideo from "../assets/videos/dehydration/dehydration-system.mp4";
// import traySealerVideo from "../assets/videos/packaging/tray-sealer.mp4";
// import basket3RetortVideo from "../assets/videos/retort/3-basket-retort-video.mp4";
// import basket4RetortVideo from "../assets/videos/retort/4-basket-retort-video.mp4";
// import retortPouchVideo from "../assets/videos/retort/double-head-retortable-pouch-sealer.mp4";

// --- LOCAL IMAGES FOR TABS ---
import freezeDryerImg1 from "../assets/images/freeze-dryer-group.webp";
import dehydrationImg1 from "../assets/images/dehydration-group.webp";

const videoCategories = [
  {
    eventKey: "beverages",
    title: "Beverages",
    videos: [
      // 1. HOSTED SERVER VIDEO
      {
        id: "bev-server-1",
        title: "Automatic Flavoured Milk Can filler & sealer machine",
        type: "remote", // Remote server video
        videoSrc:
          "http://shreetechuniversal.com/shreetechvideo/beverage/bev-1.mp4",
        // Optional custom poster/thumbnail (defaults to aboutImg if omitted)
      },
      // 2. YOUTUBE VIDEOS
      { id: "zTVf-7M4BAw", title: "Beverage Processing Line", type: "youtube" },
      {
        id: "ctjR3nynA2U",
        title: "Beverage Bottling & Processing",
        type: "youtube",
      },
      { id: "tfdjsA8SEQo", title: "CSD Filler & Seamer", type: "youtube" },
    ],
  },
  {
    eventKey: "fruitProcessing",
    title: "Fruit Processing",
    videos: [
      {
        id: "jtFKVnJLoJU",
        title: "Fruit Pulp & Juice Processing",
        type: "youtube",
      },
      { id: "a2KNzcDQwf0", title: "Fruits Processing Line", type: "youtube" },
      {
        id: "wbEf-gyqHTU",
        title: "Fruit Washing & Preparation",
        type: "youtube",
      },
      {
        id: "local-fruit-1",
        title: "Lemon Processing",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/fruits/fruit1.mp4",
      },
      {
        id: "7Zk5qzsUYc8",
        title: "Fruit Processing Plant Machinery",
        type: "youtube",
      },
    ],
  },
  {
    eventKey: "packaging",
    title: "Packaging",
    videos: [
      {
        id: "-YEDtcgUGTU",
        title: "Automated Packaging System",
        type: "youtube",
      },
      { id: "-bTw05duRIk", title: "Pouch Packaging Machine", type: "youtube" },
      {
        id: "UEjM20LhP6Y",
        title: "Industrial Packaging Solutions",
        type: "youtube",
      },
      {
        id: "yMTRFv8cs2c",
        title: "Secondary Packaging Conveyor",
        type: "youtube",
      },
      {
        id: "DYBP2Dt1-C0",
        title: "High-Speed Packaging Line",
        type: "youtube",
      },
      {
        id: "fANjju6OMqs",
        title: "End-of-Line Packaging Machine",
        type: "youtube",
      },
      {
        id: "dnoqSdOokPE",
        title: "Food Packaging Automation",
        type: "youtube",
      },
      {
        id: "local-pack-1",
        title: "Tray Sealer",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/packaging/pack3.mp4",
      },
      {
        id: "local-pack-2",
        title: "Augar Filling Machine",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/packaging/pack1.mp4",
      },
      {
        id: "local-pack-3",
        title: "Multihead Pouch Packing Machine",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/packaging/pack2.mp4",
      },
      {
        id: "local-pack-4",
        title: "VFFS Augar Filling Machine",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/packaging/pack4.mp4",
      },
    ],
  },
  {
    eventKey: "freezeDrying",
    title: "Freeze Drying",
    videos: [
      {
        id: "local-freeze-1",
        title: "Freeze Drying System",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/freezedryer/fd8.mp4",
      },
    ],
    images: [
      {
        id: "fd-img-1",
        title: "Freeze Dryer Chamber Setup",
        imageSrc: freezeDryerImg1,
      },
    ],
  },
  {
    eventKey: "rteProducts",
    title: "RTE Products",
    videos: [
      { id: "n05e5wb80t0", title: "Ready To Eat Retort Line", type: "remote" },
      {
        id: "iuPKMg2wOnI",
        title: "Dumpling Machine / Multipurpose Forming Machine",
        type: "youtube",
      },
      { id: "Y-PuYWpYJMs", title: "Auto Encrusting Machine", type: "youtube" },
      {
        id: "local-rte-1",
        title: "Automatic Paratha Line",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/rte/rte1.mp4",
      },
      {
        id: "local-rte-2",
        title: "Automatic Corn Kernel Remover Machine",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/rte/rte3.mp4",
      },
      {
        id: "local-rte-3",
        title: "Encrusting Machine",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/rte/rte4.mp4",
      },
      {
        id: "local-rte-4",
        title: "Fully Automatic Momos Making Machine",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/rte/rte5.mp4",
      },
      {
        id: "local-rte-5",
        title: "Semi-Automatic Momos Making Machine",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/rte/rte6.mp4",
      },
      {
        id: "local-rte-6",
        title: "Slicing & Dicing Machine",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/rte/rte7.mp4",
      },
      {
        id: "local-rte-7",
        title: "Pasty Sheet Line + Depositer",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/rte/rte8.mp4",
      },
    ],
  },
  {
    eventKey: "dehydration",
    title: "Dehydration",
    videos: [
      {
        id: "local-dehyd-1",
        title: "Dehydration System 1",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/dehydration/deh-1.mp4",
      },
      {
        id: "local-dehyd-2",
        title: "Dehydration System 2",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/dehydration/deh-2.mp4",
      },
    ],
    images: [
      {
        id: "dehyd-img-1",
        title: "Dehydration Group Images",
        imageSrc: dehydrationImg1,
      },
    ],
  },
  {
    eventKey: "retort",
    title: "Retort",
    videos: [
      {
        id: "local-retort-1",
        title: "3 Basket Water Spray Retort",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/retort/retort1.mp4",
      },
      {
        id: "local-retort-2",
        title: "4 Basket Water Spray Retort",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/retort/retort2.mp4",
      },
      {
        id: "local-retort-3",
        title: "Retort Pouch Impulse Sealer",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/retort/retort3.mp4",
      },
    ],
  },
  {
    eventKey: "snack",
    title: "Snacks",
    videos: [
      {
        id: "cBo2sd-zLDY",
        title: "Indian Snack Foods Processing",
        type: "youtube",
      },
      { id: "DdMGD9MkelY", title: "Snack Extrusion & Frying", type: "youtube" },
      {
        id: "iUBuXwSKn70",
        title: "Continuous Snack Frying Machine",
        type: "youtube",
      },
      { id: "duNP_80G3uA", title: "Potato Chips Line", type: "youtube" },
      { id: "uiXmN9gGErg", title: "Breakfast Cereal Line", type: "youtube" },
      { id: "znvuxCG8Row", title: "Extruder Snacks Line", type: "youtube" },
      { id: "BhBmPGYUU4A", title: "Puff Line", type: "youtube" },
      {
        id: "local-snack-1",
        title: "Breakfast Cereal Line",
        type: "remote",
        videoSrc:
          "http://www.shreetechuniversal.com/shreetechvideo/rte/rte2.mp4",
      },
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
  const headingText = "Video & Media Gallery";
  const subtitleText = "We deliver excellence in every project.";

  const [activeTab, setActiveTab] = useState("beverages");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Disable background scrolling when modal is open
  useEffect(() => {
    const isModalOpen = selectedVideo !== null || selectedImage !== null;

    if (isModalOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [selectedVideo, selectedImage]);

  const hoverParent = { rest: { scale: 1 }, hover: { scale: 1.03 } };

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
              setSelectedVideo(null);
              setSelectedImage(null);
            }}
            id="gallery-tabs"
            className="custom-gallery-tabs mb-4 justify-content-center"
          >
            {videoCategories.map((category) => (
              <Tab
                key={category.eventKey}
                eventKey={category.eventKey}
                title={category.title}
              >
                <div className="video-gallery-wrapper py-4">
                  <Row className="g-4">
                    {/* 1. RENDER ALL VIDEOS (LOCAL, HOSTED, OR YOUTUBE) */}
                    {category.videos?.map((video, idx) => {
                      const isDirectFile =
                        video.type === "local" || video.type === "remote";
                      const thumbnail = isDirectFile
                        ? video.thumbnail || aboutImg
                        : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

                      return (
                        <Col
                          key={video.id || `${category.eventKey}-vid-${idx}`}
                          xs={12}
                          sm={6}
                          lg={4}
                        >
                          <motion.div
                            className="video-item-card"
                            variants={hoverParent}
                            initial="rest"
                            whileHover="hover"
                            onClick={() => setSelectedVideo(video)}
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

                    {/* 2. RENDER OPTIONAL IMAGE CARDS (IF PRESENT) */}
                    {Array.isArray(category.images) &&
                      category.images.length > 0 &&
                      category.images.map((item, idx) => (
                        <Col
                          key={item.id || `${category.eventKey}-img-${idx}`}
                          xs={12}
                          sm={6}
                          lg={4}
                        >
                          <motion.div
                            className="video-item-card image-item-card"
                            variants={hoverParent}
                            initial="rest"
                            whileHover="hover"
                            onClick={() => setSelectedImage(item)}
                          >
                            <div className="video-thumb-wrap">
                              <img
                                src={item.imageSrc}
                                alt={item.title}
                                className="video-thumb-img"
                              />
                              <div className="play-button-overlay image-overlay">
                                <HiMiniMagnifyingGlassPlus size={26} />
                              </div>
                            </div>
                            <div className="video-caption">
                              <h4>{item.title}</h4>
                            </div>
                          </motion.div>
                        </Col>
                      ))}
                  </Row>
                </div>
              </Tab>
            ))}
          </Tabs>

          {/* IMAGE LIGHTBOX MODAL */}
          <AnimatePresence>
            {selectedImage !== null && (
              <motion.div
                className="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.img
                  src={selectedImage.imageSrc}
                  alt={selectedImage.title}
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
                  {selectedImage.title}
                </div>
                <button
                  className="close-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* VIDEO PLAYER MODAL (Plays Local .mp4, Remote Server .mp4, or YouTube) */}
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
                    {selectedVideo.type === "local" ||
                    selectedVideo.type === "remote" ? (
                      <video
                        key={selectedVideo.videoSrc}
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        className="w-100 h-100"
                        style={{ objectFit: "contain", maxHeight: "80vh" }}
                        onError={(e) => {
                          console.error("Video load error:", e);
                        }}
                      >
                        <source src={selectedVideo.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <iframe
                        src={getEmbedUrl(
                          selectedVideo.videoUrl || selectedVideo.id,
                        )}
                        title={selectedVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    )}
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

// { id: "zTVf-7M4BAw", title: "Beverage Processing Line", type: "youtube" },
