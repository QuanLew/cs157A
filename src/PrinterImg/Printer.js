import React from "react";
import "./printer.css";

import { motion } from "framer-motion";

const Printer = ({ classname, imgurl }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        drag="x"
        onDrag={(event, info) => console.log(info.point.x, info.point.y)}
        onDragStart={(event, info) => console.log(info.point.x, info.point.y)}
        onDragEnd={(event, info) => console.log(info.point.x, info.point.y)}
        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
        className="printer_img"
      >
        <img className={classname} src={imgurl} alt="printerImg" />
      </motion.div>
    </>
  );
};

export default Printer;
