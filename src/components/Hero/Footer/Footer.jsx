import React from "react";
import "./Footer.css";
import Github from "./../img/github.png";
import Instagram from "./../img/instagram.png";
import Linkedin from "./../img/linkedin.png";
import Logo from './../img/logo.png';

const Footer = () => {
  return (
    <div className="Footer_container">
      <hr />
      <div className="footer">
      <div className="socials">
      
      <a href="https://github.com/UchegbuNonso/">
      <img src={Github} alt="" />
      </a>
        <a href="https://instagram.com">
        <img src={Instagram} alt="" />
        </a>
        <a href="https://linkedin.com">
        <img src={Linkedin} alt="" />
        </a>
        
         </div>
      <div className="logo-f">
          <img src={Logo} alt="" />
      </div>
    </div>
    <div className="blur footer-blur1"></div>
    <div className="blur footer-blur2"></div>

    </div>
  );
};

export default Footer;
