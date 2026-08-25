import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { EffectFade, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import placeholder from '../assets/images/placeholder.jpg';
import userTwo from '../assets/images/user-two.svg';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import useDisableMotion from "./useDisableMotion";

// 🔥 Use hook INSIDE component
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Community = () => {

  const disableMotion = useDisableMotion();  // ⭐ GLOBAL DISABLE HERE
  const Wrapper = disableMotion ? "div" : motion.div;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const testimonials = [
    {
      name: "Mohammed Suhail<br/><span>Founder and CEO</span>",
      nameClass: "testimonial-name",
      userImg: placeholder,
      text: "Found a warehouse with office facility and truck loading dock through Big Dream Associates industrial property division",
      textClass: "testimonial-text-small"
    },
    {
      name: "Abhishek Soni<br/><span>Financial Expert</span>",
      nameClass: "testimonial-name",
      userImg: placeholder,
      text: "The agent from Big Dream Associates spent extra time explaining property papers and legal requirements for first-time buyers like me",
      textClass: "testimonial-text-small"
    },
    {
      name: "Shekhar<br/><span>Founder and CEO</span>",
      nameClass: "testimonial-name",
      userImg: placeholder,
      text: "Company Agents helped me find Flats / Apartments with balcony garden and terrace in Pathardi Phata",
      textClass: "testimonial-text-small"
    },
    {
      name: "Anshika<br/><span>Financial Expert</span>",
      nameClass: "testimonial-name",
      userImg: placeholder,
      text: "The agent spent extra time explaining property papers and legal requirements for first-time buyers like me",
      textClass: "testimonial-text-small"
    }
  ];

  return (

    <Wrapper
      className="community-wrap"
      {...(!disableMotion && {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 }
      })}
    >

      <Container className="position-relative">

        <h2 className="intro-title heading-text">What Community Says</h2>

        {/* Arrows only on desktop */}
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
          slidesPerView={2}
          navigation={
            !isMobile
              ? { prevEl: prevRef.current, nextEl: nextRef.current }
              : false
          }
          pagination={
            isMobile
              ? { clickable: true }
              : false
          }
          onInit={(swiper) => {
            if (!isMobile) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 }
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="p-3">
              <Wrapper
                className="testimonial-card h-100 m-0"
                {...(!disableMotion && {
                  variants: cardAnim,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: true, amount: 0.2 }
                })}
              >
                <div className="text-images-wrap">
                  <p
                    className={item.textClass}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
                <div className="test-img">
                  <div className="hor-line"></div>
                  <img src={item.userImg} alt="user" />
                </div>
                <h4
                  className={item.nameClass}
                  dangerouslySetInnerHTML={{ __html: item.name }}
                />
              </Wrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default Community;
