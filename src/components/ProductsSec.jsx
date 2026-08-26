/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
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
import { ProductData } from "../data/productData";
import useIsMobile from "../hooks/useIsMobile";

const ProductsSec = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const isMobile = useIsMobile();

  return (
    <div className="achivement-wrap">
      <Container className="position-relative">
        <div className="d-flex align-items-center justify-content-between mb-4 mb-sm-5">
          <h2 className="intro-title heading-text mb-0">Product</h2>
          <Link
            to="/product"
            className="common-button about-button order-3 order-md-2"
          >
            View More <img src={buttoArr} alt="button arrow" />
          </Link>
        </div>

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
          slidesPerView={4}
          pagination={isMobile ? { clickable: true } : false}
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
                <Link to="/product" className="text-decoration-none shadow-sm">
                  <div className="image-wrap product-sec-card">
                    <img src={item.image} alt="" className="rounded-3" loading="lazy" />
                    <div className="ppc-content">
                      <h4 className="text-dark fw-semibold">{item.title}</h4>
                      <p className="mb-0 text-muted fw-semibold">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Row>
        </Swiper>
      </Container>
    </div>
  );
};

export default ProductsSec;
