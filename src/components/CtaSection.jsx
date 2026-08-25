import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import buttoArr from "../assets/images/button-circle.svg";

export const CTA_Section = () => {
  return (
    <section className="cta-section py-5">
      <Container>
        <div className="cta-wrapper">
          <div className="cta-content">
            <Row className="align-items-end justify-content-between g-4">
              <Col lg={8} md={12}>
                <span className="cta-badge">
                  Ready to Upgrade Your Processing Line?
                </span>
                <h2 className="cta-title text-white mt-2 mb-3">
                  Let’s Engineer Your Next Food & Dairy Project
                </h2>
                <p className="cta-description mb-0">
                  Whether you need individual sanitary processing machines or a
                  complete turnkey dairy plant, our engineering specialists are
                  here to design, build, and support your production facility.
                </p>
              </Col>
              <Col lg={4} md={12} className="d-flex justify-content-end">
                  <Link to="/contact" className="common-button">
                    Consult Our Engineers <img src={buttoArr} alt="button arrow" />
                  </Link>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};
