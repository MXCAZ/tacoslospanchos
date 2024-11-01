import React, { useState } from "react";
import "./Menu.css";
import { motion } from "framer-motion";

const Menu = () => {
  const menuImg = [
    {
      id: 0,
      image: new URL("./imgMenu/1.png", import.meta.url),
    },
    {
      id: 1,
      image: new URL("./imgMenu/2.png", import.meta.url),
    },
    {
      id: 2,
      image: new URL("./imgMenu/3.png", import.meta.url),
    },
  ];

  return (
    <div className="menuContainer">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="menu">
        {menuImg.map((img, index) => {
          return (
            <div className="galleryWrap" key={index}>
              <img src={img.image} alt="menuImage" className="single" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Menu;
