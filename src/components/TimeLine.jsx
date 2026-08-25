import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const timelineData = [
  { year: "2015", title: "The Beginning", text: "Borade Groups was founded with a vision to build<br/> ethical, transparent, and quality-driven operations." },
  { year: "2016", title: "Establishing Operations", text: "Set up core teams and organised<br/> internal operational structures." },
  { year: "2017", title: "Expanding Capabilities", text: "Strengthened processes and expanded<br/> project capabilities." },
  { year: "2018", title: "Diversifying Into New Sectors", text: "Diversified into construction,<br/> infrastructure, and allied services." },
  { year: "2019", title: "Corporate Governance Growth", text: "Leadership expanded into corporate<br/> governance across group companies." },
  { year: "2020", title: "Digital Transformation", text: "Adopted digital tools to streamline<br/> project operations and coordination." },
  { year: "2021", title: "Strengthening the Group Structure", text: "Strengthened financial and operational<br/> frameworks for growth." },
  { year: "2022", title: "Expansion Across Companies", text: "Took on key management roles across<br/> multiple active companies." },
  { year: "2023", title: "Strategic Growth & New Ventures", text: "Entered new sectors including<br/> real estate, consulting, and support services." },
  { year: "2024", title: "Modernising the Brand", text: "Enhanced workflow efficiency and<br/> prepared for multi-sector expansion." },
  { year: "2025", title: "Expansion Into Stock Market & Digital Services", text: "Launched stock market and digital<br/> service initiatives under the group." },
];

// Framer variants
const leftSlide = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 }
};

const rightSlide = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 }
};

const TimeLine = () => {
  const itemRefs = useRef([]);
  const lineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✔ Detect mobile screen
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Line animation
  useEffect(() => {
    const handleStepScroll = () => {
      const items = itemRefs.current;
      const line = lineRef.current;

      if (!line) return;

      let activeSteps = 0;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.6;

        if (rect.top < triggerPoint) {
          activeSteps += 1;
        }
      });

      const total = items.length;
      const stepPercent = 100 / total;
      const newHeight = activeSteps * stepPercent;

      line.style.height = `${newHeight}%`;
    };

    window.addEventListener("scroll", handleStepScroll);
    handleStepScroll();
    return () => window.removeEventListener("scroll", handleStepScroll);
  }, []);

  return (
    <div className="timeline-wrap">
      <Container>
        <h2 className="inner-text vm-heading">Road Map</h2>

        <div className="timeline-container">
          <div className="timeline-line">
            <div className="inner-line" ref={lineRef}></div>
          </div>

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            // MOBILE → No animation
            const Wrapper = isMobile ? "div" : motion.div;

            return (
              <Wrapper
                key={index}
                className={`timeline-item ${isLeft ? "left" : "right"}`}
                ref={el => (itemRefs.current[index] = el)}

                {...(!isMobile && {
                  variants: isLeft ? leftSlide : rightSlide,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: false, amount: 0.2 },
                  transition: { duration: 0.6 }
                })}
              >
                <div className="timeline-content">
                  <h3>{item.year}</h3>
                  <div className={`timeline-text ${isLeft ? "gredOne" : "gredTwo"}`}>
                    <h4>{item.title}</h4>
                    <p
                      className="col-para"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default TimeLine;
