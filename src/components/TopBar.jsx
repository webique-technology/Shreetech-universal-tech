import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import logo from '../assets/images/shreetech-logo.webp';
import buttoArr from '../assets/images/button-circle.svg';
import menuData from '../data/menuData.json';
import Navbar from './Navbar';
import { Link, NavLink } from 'react-router-dom';
const TopBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`top-header ${isSticky ? "sticky" : ""}`}>
      <div className='container-xl'>
        <div className='nav-wrap'>
          <NavLink to="/"><div className='logo'><img src={logo} alt='logo' className='img-fluid logo-img' /></div></NavLink>
          <div className='navbar-sec'>
            <Navbar menu={menuData} />
          </div>
          <Link to={"/contact"} className='common-button nav-button d-none d-lg-flex'>
            Contact Us <img src={buttoArr} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar