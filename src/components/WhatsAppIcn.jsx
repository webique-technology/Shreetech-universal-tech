import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcn = () => {
  const phoneNumber = "9920475455"; // <-- add your number here (without +)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppIcn;
