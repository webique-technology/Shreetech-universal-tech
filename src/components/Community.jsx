import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { EffectFade, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import placeholder from "../assets/images/placeholder.jpg";
import userTwo from "../assets/images/user-two.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import useDisableMotion from "./useDisableMotion";
import useIsMobile from "../hooks/useIsMobile";

// 🔥 Use hook INSIDE component
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

const Community = () => {
  const disableMotion = useDisableMotion(); // ⭐ GLOBAL DISABLE HERE
  const Wrapper = disableMotion ? "div" : motion.div;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const isMobile = useIsMobile();

  const testimonials = [
    {
      name: "Rajesh Sharma<br/><span>Plant Head, Dairy Processing Unit</span>",
      nameClass: "testimonial-name",
      userImg: placeholder,
      text: "SHREETECH Universal delivered an exceptional turnkey pasteurization and CIP line. Their engineering precision, food-grade sanitary standards, and on-time commissioning significantly improved our plant efficiency.",
      textClass: "testimonial-text-small",
    },
    {
      name: "Vikram Malhotra<br/><span>Director of Operations, FMCG & Foods</span>",
      nameClass: "testimonial-name",
      userImg: placeholder,
      text: "Working with SHREETECH has been seamless. They acted as true project enablers rather than just equipment suppliers, guiding us through layout optimization, custom fabrication, and complete line automation.",
      textClass: "testimonial-text-small",
    },
    {
      name: "Pooja Deshmukh<br/><span>Quality Assurance Manager, Beverage Plant</span>",
      nameClass: "testimonial-name",
      userImg: placeholder,
      text: "The SS316 storage silos and automated liquid packaging machinery provided by SHREETECH easily met all our strict quality and hygiene compliance audits. Highly dependable equipment.",
      textClass: "testimonial-text-small",
    },
    {
      name: "Arun Nair<br/><span>Technical Director, Dairy Products Ltd.</span>",
      nameClass: "testimonial-name",
      userImg: placeholder,
      text: "Their after-sales service and technical support are truly top-notch. From installation to preventive maintenance, the engineering team has been prompt, knowledgeable, and reliable.",
      textClass: "testimonial-text-small",
    },
  ];

  return (
    <Wrapper
      className="community-wrap"
      {...(!disableMotion && {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
      })}
    >
      <Container className="position-relative">
        <h2 className="intro-title heading-text">What Community Says</h2>

        {/* Arrows only on desktop */}
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          watchSlidesProgress={true}
          speed={500}
          spaceBetween={25}
          slidesPerView={2}
          pagination={isMobile ? { clickable: true } : false}
          // onInit={(swiper) => {
          //   if (!isMobile) {
          //     swiper.params.navigation.prevEl = prevRef.current;
          //     swiper.params.navigation.nextEl = nextRef.current;
          //     swiper.navigation.init();
          //     swiper.navigation.update();
          //   }
          // }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
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
                  viewport: { once: true, amount: 0.2 },
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
                  <img src={item.userImg} alt="user" loading="lazy" />
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
