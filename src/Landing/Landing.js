import React from "react";
import Navbar from "../Navbar/Navbar";
import Printer from "../PrinterImg/Printer";
import "./landing.css";

import imgL from "../assets/SVG/printer1.svg";
import imgT from "../assets/SVG/printer2.svg";
import imgB from "../assets/SVG/printer3.svg";
import imgR from "../assets/SVG/printer4.svg";
import { motion } from "framer-motion";

const Landing = () => {
  const fadeInUp = {
    initial: {
      x: 100, //start position
      opacity: 0,
    },

    animate: {
      x: 0, //end position
      opacity: 1,

      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="landingpage section_padding" id="home">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="printer"
        >
          <Printer classname="left" imgurl={imgL} />
          <Printer classname="top" imgurl={imgT} />
          <Printer classname="bottom" imgurl={imgB} />
          <Printer classname="right" imgurl={imgR} />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="maintext_name"
        >
          <div className="uptext">
            <h5>
              Best Home <span>Printer</span>
            </h5>
          </div>
          <div className="middletext">
            <h2>Printer Section</h2>
          </div>
          <div className="lowtext">
            <h6>Your favourite printer store online</h6>
          </div>
          <div className="line"></div>
        </motion.div>
      </div>
    </>
  );
};

export default Landing;
