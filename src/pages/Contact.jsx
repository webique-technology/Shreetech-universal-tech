import React, { useState, useEffect } from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import aboutImg from "../assets/images/page-header.jpg";
import buttoArr from "../assets/images/button-circle.svg";
import contactH from "../assets/images/footer-home.svg";
import contactP from "../assets/images/footer-phone.svg";
import contactE from "../assets/images/footer-email.svg";
import { Col, Container, Row } from "react-bootstrap";
import { ConactData } from "../data/contactData";

const Contact = () => {
  const headingText = "Contact Us";
  const subtitleText = "We deliver excellence in every project.";

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState({ status: "", message: "" });

  // Auto-hide result message after 5 seconds
  useEffect(() => {
    if (result.status === "success" || result.status === "error") {
      const timer = setTimeout(() => {
        setResult({ status: "", message: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [result.status]);

  // Validation Logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setResult({ status: "loading", message: "Sending your message..." });

    try {
      const payload = new FormData();
      payload.append("access_key", "dac38f5c-4cbc-489e-b258-fc765c8b71eb");
      payload.append("subject", `New Inquiry from ${formData.name}`);
      payload.append("from_name", formData.name);
      payload.append("name", formData.name);
      payload.append("company", formData.company || "N/A");
      payload.append("email", formData.email);
      payload.append("replyto", formData.email);
      payload.append("phone", formData.phone);
      payload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          status: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResult({
          status: "error",
          message: data.message || "Submission failed. Please try again.",
        });
      }
    } catch (err) {
      setResult({
        status: "error",
        message: "An unexpected network error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: contactH,
      title: "Registered Office",
      type: "address",
      content: ConactData.registerd_office,
      link: ConactData.registerd_office_link,
    },
    {
      icon: contactH,
      title: "Admin Office",
      type: "address",
      content: ConactData.admin_office,
      link: ConactData.admin_office_link,
    },
    {
      icon: contactP,
      title: "Contact Numbers",
      type: "phone",
      numbers: [
        {
          label: "Reg. Office",
          value: ConactData.number.registerd_office,
          prefix: "+91 0",
          dialPrefix: "+91",
        },
        {
          label: "Admin Office",
          value: ConactData.number.admin_office,
          prefix: "+91 0",
          dialPrefix: "+91",
        },
        {
          label: "Mobile 1",
          value: ConactData.number.cell1,
          prefix: "+91",
          dialPrefix: "+91",
        },
        {
          label: "Mobile 2",
          value: ConactData.number.cell2,
          prefix: "+91",
          dialPrefix: "+91",
        },
      ].filter((phone) => phone.value),
    },
    {
      icon: contactE,
      title: "Email Addresses",
      type: "email",
      emails: [ConactData.emails.gmail, ConactData.emails.gmail2].filter(
        Boolean,
      ),
    },
  ];

  return (
    <section>
      <InnerPageHeader
        heading={headingText}
        subtitle={subtitleText}
        image={aboutImg}
      />

      <div className="contact-form-wrap">
        <Container>
          <Row className="justify-content-between g-4">
            <Col md={6} lg={6}>
              <h2 className="fs-1 fw-bold mb-3 mb-md-4">
                We would love to hear from you
              </h2>

              {/* <p className="mb-2 mb-md-4 mt-0 intro">
                {ConactData.registerd_office}
              </p> */}

              <div className="contact-form-container">
                <form onSubmit={onSubmit} noValidate className="row gap-0">
                  <div className="form-group mb-3 col-sm-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "is-invalid" : ""}
                    />
                    {errors.name && (
                      <span className="text-danger d-block small mt-1">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group mb-3 col-sm-6">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3 col-sm-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "is-invalid" : ""}
                    />
                    {errors.email && (
                      <span className="text-danger d-block small mt-1">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group mb-3 col-sm-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "is-invalid" : ""}
                    />
                    {errors.phone && (
                      <span className="text-danger d-block small mt-1">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group mb-3">
                    <textarea
                      name="message"
                      placeholder="How can we help? *"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "is-invalid" : ""}
                    ></textarea>
                    {errors.message && (
                      <span className="text-danger d-block small mt-1">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <div className="px-3">
                    <button
                      type="submit"
                      className="common-button w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}{" "}
                      <img src={buttoArr} alt="arrow" />
                    </button>
                  </div>

                  {result.message && (
                    <p
                      className={`form-status mt-3 ${
                        result.status === "success"
                          ? "text-success"
                          : result.status === "error"
                            ? "text-danger"
                            : "text-muted"
                      }`}
                    >
                      {result.message}
                    </p>
                  )}
                </form>
              </div>
            </Col>

            <Col md={6} lg={5}>
              <div className="contact-grid d-flex flex-column h-100 gap-3 gap-md-4">
                {/* <h2 style={{ marginBottom: "30px" }} className="company-title">
                  Contact Information
                </h2> */}

                {contactCards.map((card, index) => (
                  <div key={index} className="contact-card">
                    <img src={card.icon} alt={card.title} className="icon" />
                    <div className="contp-text">
                      <h4 className="fw-semibold text-uppercase fs-6">{card.title}</h4>

                      {card.type === "address" && (
                        <p>
                          {card.link ? (
                            <a
                              href={card.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {card.content}
                            </a>
                          ) : (
                            card.content
                          )}
                        </p>
                      )}

                      {card.type === "phone" &&
                        card.numbers.map((phone, idx) => (
                          <p
                            key={idx}
                            style={{
                              marginBottom:
                                idx === card.numbers.length - 1 ? "0px" : "6px",
                            }}
                          >
                            <strong style={{ marginRight: "10px" }}>
                              {phone.label}:
                            </strong>
                            <a
                              href={`tel:${phone.dialPrefix || ""}${phone.value}`}
                            >
                              {phone.prefix} {phone.value}
                            </a>
                          </p>
                        ))}

                      {card.type === "email" &&
                        card.emails.map((email, idx) => (
                          <p
                            key={idx}
                            style={{
                              marginBottom:
                                idx === card.emails.length - 1 ? "0px" : "6px",
                            }}
                          >
                            <a href={`mailto:${email}`}>{email}</a>
                          </p>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4510.635282808986!2d72.8388267!3d19.1297028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b628081ba7ef%3A0x97c600908243bf09!2sDLH%20Darpan!5e1!3m2!1sen!2sin!4v1787650775754!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0, display: "block" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
