import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";

import logo from "../assets/images/shreetech-logo.webp";

import contactP from "../assets/images/footer-phone.svg";
import contactE from "../assets/images/footer-email.svg";

export default function Navbar({ menu = [] }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const sidebarRef = useRef(null);

  // Smooth slide-out unmount logic
  useEffect(() => {
    if (mobileMenu) {
      setMenuVisible(true); // mount immediately
      document.documentElement.classList.add("no-scroll");
    } else {
      const timer = setTimeout(() => setMenuVisible(false), 350);
      document.documentElement.classList.remove("no-scroll");
      return () => clearTimeout(timer);
    }
  }, [mobileMenu]);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setMobileMenu(false);
        setOpenDropdown(null);
      }
    }

    if (mobileMenu) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenu]);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="navbar-custom">
      <div className="navbar-container">
        {/* Mobile Toggle */}
        {!mobileMenu ? (
          <FiMenu
            className="mobile-toggle"
            onClick={() => setMobileMenu(true)}
          />
        ) : (
          <FiX className="mobile-toggle" onClick={() => setMobileMenu(false)} />
        )}

        {/* Desktop Menu */}
        <nav className="nav-links">
          <ul>
            {menu.map((item) => (
              <li key={item.label} className={item.dropdown ? "dropdown" : ""}>
                <div className="nav-item-wrapper">
                  <NavLink
                    to={item.path || "#"}
                    className={({ isActive }) =>
                      isActive ? "nav-item active" : "nav-item"
                    }
                  >
                    {item.icon} {item.label}
                  </NavLink>

                  {item.dropdown && (
                    <FiChevronDown
                      className="arrow"
                      onClick={() => toggleDropdown(item.label)}
                    />
                  )}
                </div>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <ul className="dropdown-menu">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <NavLink
                          to={sub.path}
                          className={({ isActive }) =>
                            isActive ? "dropdown-link active" : "dropdown-link"
                          }
                        >
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Sidebar */}
        {menuVisible && (
          <div
            className={`mobile-sidebar ${mobileMenu ? "open" : "close"}`}
            ref={sidebarRef}
          >
            {/* Logo + Close */}
            <div className="logo-sidebar">
              <NavLink to="/" onClick={() => setMobileMenu(false)}>
                <div className="logo-nav">
                  <img src={logo} alt="logo" />
                </div>
              </NavLink>

              <FiX
                className="mobile-close"
                onClick={() => setMobileMenu(false)}
              />
            </div>

            {/* Mobile Menu Items */}
            <ul>
              {menu.map((item) => (
                <li key={item.label}>
                  <div className="mobile-item">
                    <NavLink
                      to={item.path || "#"}
                      className={({ isActive }) =>
                        isActive ? "mobile-link active" : "mobile-link"
                      }
                      onClick={() => setMobileMenu(false)}
                    >
                      {item.icon} {item.label}
                    </NavLink>

                    {item.dropdown && (
                      <FiChevronDown
                        className={`mobile-arrow ${
                          openDropdown === item.label ? "rotate" : ""
                        }`}
                        onClick={() => toggleDropdown(item.label)}
                      />
                    )}
                  </div>

                  {item.dropdown && (
                    <ul
                      className={`mobile-dropdown ${
                        openDropdown === item.label ? "show" : ""
                      }`}
                    >
                      {item.dropdown.map((sub) => (
                        <li key={sub.label}>
                          <NavLink
                            to={sub.path}
                            className={({ isActive }) =>
                              isActive
                                ? "dropdown-link active"
                                : "dropdown-link"
                            }
                            onClick={() => {
                              setMobileMenu(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <div className="mobile-item">
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      isActive ? "mobile-link active" : "mobile-link"
                    }
                    onClick={() => setMobileMenu(false)}
                  >
                    Contact
                  </NavLink>
                </div>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="cont-nav-wrap">
              <div className="contact-info-box">
                <img src={contactP} alt="phone" />

                <div className="contact-lines">
                  <div className="line">
                    <a href="tel:+919920475455">+91 9920475455</a>
                  </div>

                  <div className="line">
                    <a href="tel:+918779867895">+91 8779867895</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-box">
                <img src={contactE} alt="email" />
                <div className="line">
                  <span>Email</span>
                  <a href="mailto:shreetechllp@gmail.com">shreetechllp@gmail.com</a>
                  <a href="mailto:shreetechllp@yahoo.com">shreetechllp@yahoo.com</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {menuVisible && (
        <div
          className={`overlay ${mobileMenu ? "show" : ""}`}
          onClick={() => setMobileMenu(false)}
        ></div>
      )}
    </header>
  );
}
