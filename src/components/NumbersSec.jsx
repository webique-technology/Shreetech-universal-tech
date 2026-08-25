import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useInView } from "framer-motion";

import num1 from "../assets/images/number-1.svg";
import num2 from "../assets/images/number-2.svg";
import num3 from "../assets/images/number-3.svg";
import num4 from "../assets/images/number-4.svg";

const numberData = [
    {
        img: num1,
        num: "01",
        title: "About His Vision",
        text: "Building transparent and responsible businesses that create long-term value"
    },
    {
        img: num2,
        num: "02",
        title: "Leadership Style",
        text: "He leads with clarity, discipline, and a strong focus on ethical governance"
    },
    {
        img: num3,
        num: "03",
        title: "Social Contribution",
        text: "He supports community development through ethical business practices."
    },
    {
        img: num4,
        num: "04",
        title: "Trust-Building",
        text: "Each n Every decision is rooted in trust, transparency, and accountability"
    }
];

const NumbersSec = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });
    const isMobile = window.innerWidth <= 768;

    // Animation only for desktop
    const cardVariant = !isMobile
        ? {
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
            }
        }
        : {};

    return (
        <div className="number-section" ref={ref}>
            <Container>
                <motion.div
                    className="number-wrap-flex py-2 py-sm-0"
                    {...(!isMobile && {
                        initial: "hidden",
                        animate: isInView ? "visible" : "hidden",
                        transition: { staggerChildren: 0.25 }
                    })}
                >
                    <Row className="row-gap-5 row-gap-sm-5">
                        {numberData.map((item, i) => {
                            const Wrapper = isMobile ? "div" : motion.div;

                            return (
                                <Col xs={12} sm={6} md={3} lg={3}>
                                    <Wrapper
                                        key={i}
                                        className="number-blog"
                                        {...(!isMobile && { variants: cardVariant })}
                                    >
                                        <img src={item.img} alt="num-icon" />
                                        <h2>{item.num}</h2>
                                        <h3>{item.title}</h3>
                                        <p className="m-0">{item.text}</p>
                                    </Wrapper>
                                </Col>
                            );
                        })}
                    </Row>
                </motion.div>
            </Container>
        </div>
    );
};

export default NumbersSec;
