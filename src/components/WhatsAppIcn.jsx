import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcn = () => {
  const phoneNumber = "919920475455"; // Country code + 10-digit number (no + or spaces)
  const message = "Hello, I want to know more!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppIcn;
