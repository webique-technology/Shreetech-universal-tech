import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import buttoArr from "../assets/images/button-circle.svg";
import sliderImg1 from "../assets/images/slider-img-1.jpg";
import sliderImg2 from "../assets/images/network-map.webp";
import sliderImg3 from "../assets/images/slider-img-3.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      image: sliderImg1,
      smalltitle: "SHREETECH Universal Technologies LLP",
      // title: "<span>Building</span> Bright Dreams Into Reality",
      title: "<span>Single Machine</span> </br> Turn Key Solution",
      // subtitle: "Delivering landmark real estate projects that redefine modern living.",
      button: "Explore More",
    },
    {
      id: 2,
      image: sliderImg2,
      smalltitle: "SHREETECH Universal Technologies LLP",
      // title: "<span>Shaping</span> a Sustainable Future of Living",
      title: " <span>Project Enabler Not Just An </span> Equipment Provider",
      // subtitle: "Innovative solutions that create value for investors and communities alike.",
      button: "Explore More",
    },
    {
      id: 3,
      image: sliderImg3,
      smalltitle: "SHREETECH Universal Technologies LLP",
      title: "<span>ENGINEERING THE FUTURE OF</span> FOOD & DAIRY.",
      subtitle: "Crafting sustainable developments with quality, trust, and vision.",
      button: "Explore More",
    },
  ];

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        speed={900}
        slidesPerView={1}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="slide-overlay">
                <Container className="gap-1">
                  {/* Small title */}
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: false }}
                    className="sm-title mb-2 mb-md-3"
                  >
                    {s.smalltitle}
                  </motion.p>

                  {/* Big heading with HTML */}
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false }}
                    dangerouslySetInnerHTML={{ __html: s.title }}
                    className="mb-2 mb-md-4"
                  ></motion.h1>

                  {/* Subtitle */}
                  {/* <motion.p
                    className="subtit"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
                    viewport={{ once: false }}
                  >
                    {s.subtitle}
                  </motion.p> */}

                  {/* Button */}
                  <motion.button
                    className="common-button"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: false }}
                    onClick={() => navigate("/companies")}
                  >
                    {s.button}
                    <img src={buttoArr} />
                  </motion.button>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
