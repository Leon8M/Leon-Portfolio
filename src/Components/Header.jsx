/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import logo from "../../static/images/logo.png"

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "white",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <img src={logo} alt="" className="logo_img"/>
      <a href="#home" className="header_links">
        Home
      </a>
      <a href="#about" className="header_links">
        About
      </a>
      <a href="#portfolio" className="header_links">
        Portfolio
      </a>
      <a href="#footer" className="header_links">
        Contact
      </a>
    </div>
  );
};

export default Header;
