import React from "react";
import "./navbar.css";
import imgH from "../assets/SVG/home.svg";

import { motion } from "framer-motion";

const Navbar = () => {
  const fadeInDown = {
    initial: {
      y: -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="navbar"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="logo">
          <div className="logo_icon">
            <img src={imgH} alt="homeImg" />
          </div>
          <div className="logo_title">
            <h2>HomePrinter</h2>
          </div>
        </div>
        <div className="navbar_menu">
          <div className="navbar_menu_items">
            <p>
              <a className="item" href="#home">
                HOME
              </a>
            </p>
          </div>
          <div className="navbar_menu_items">
            <p>
              <a className="item" href="#projects">
                ABOUT US
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
