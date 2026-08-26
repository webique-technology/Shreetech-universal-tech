import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import buttonArr from "../assets/images/button-circle.svg";
import { ProductData } from "../data/productData";

const ProductsSec = () => {
  return (
    <div className="achivement-wrap">
      <Container className="position-relative">
        <div className="d-flex align-items-center justify-content-between mb-4 mb-sm-5">
          <h2 className="intro-title heading-text mb-0">Product</h2>
          <Link
            to="/product"
            className="common-button about-button order-3 order-md-2"
          >
            View More <img src={buttonArr} alt="button arrow" />
          </Link>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          speed={500}
          spaceBetween={25}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1.25, spaceBetween: 15 },
            576: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
          }}
        >
          {ProductData.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to="/product" className="text-decoration-none shadow-sm">
                <div className="image-wrap product-sec-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-3"
                    loading="lazy"
                  />
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
        </Swiper>
      </Container>
    </div>
  );
};

export default ProductsSec;
