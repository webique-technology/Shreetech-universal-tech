/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { EffectFade, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import buttoArr from "../assets/images/button-circle.svg";

import { motion } from "framer-motion";
import { ProductData } from "../data/productData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AwardsAchivements = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Choose wrapper element (motion or div)
  const Wrapper = isMobile ? "div" : motion.div;
  const CardWrapper = isMobile ? "div" : motion.div;

  return (
    <Wrapper
      className="achivement-wrap"
      {...(!isMobile && {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
      })}
    >
      <Container className="position-relative">
        <div className="d-flex align-items-center justify-content-between mb-4 mb-sm-5">
          <h2 className="intro-title heading-text mb-0">Product Profile</h2>
          <Link
            to="/product-profile"
            className="common-button about-button order-3 order-md-2"
          >
            View More <img src={buttoArr} alt="button arrow" />
          </Link>
        </div>

        {!isMobile && (
          <>
            <button ref={prevRef} className="custom-arrow left">
              <FaChevronLeft />
            </button>

            <button ref={nextRef} className="custom-arrow right">
              <FaChevronRight />
            </button>
          </>
        )}

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          slidesPerView={4}
          navigation={
            !isMobile
              ? { prevEl: prevRef.current, nextEl: nextRef.current }
              : false
          }
          pagination={isMobile ? { clickable: true } : false}
          onInit={(swiper) => {
            if (!isMobile) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            0: { slidesPerView: 1.25 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          <Row className="flex-md-row gap-2 gap-md-0">
            {ProductData.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to="/product-profile"
                  className="text-decoration-none shadow-sm"
                >
                  <CardWrapper
                    className="image-wrap product-sec-card"
                    {...(!isMobile && {
                      variants: cardAnim,
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: true, amount: 0.2 },
                    })}
                  >
                    <img src={item.image} alt="" className="rounded-3" />
                    <div className="ppc-content">
                      <h4 className="text-dark fw-semibold">{item.title}</h4>
                      <p className="mb-0 text-muted fw-semibold">
                        {item.description}
                      </p>
                    </div>
                  </CardWrapper>
                </Link>
              </SwiperSlide>
            ))}
          </Row>
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default AwardsAchivements;
