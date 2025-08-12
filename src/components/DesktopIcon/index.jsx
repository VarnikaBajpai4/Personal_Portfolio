import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const DesktopIcon = ({ label, icon, route, onOpen, initial = { x: 24, y: 72 } }) => {
  const nav = useNavigate();
  const handle = () => {
    if (onOpen) onOpen();
    else if (route) nav(route);
  };

  return (
    <motion.div
      className="absolute flex flex-col items-center w-[160px] select-none cursor-pointer"
      style={{ left: initial.x, top: initial.y }}
      drag
      dragMomentum={false}
      whileTap={{ scale: 0.98 }}
      onDoubleClick={handle}
      onClick={handle}
    >
      <img
        className="block w-[84px] h-[84px] mb-2 filter grayscale"
        src={icon}
        alt=""
        draggable={false}
      />
      <span className="inline-block bg-white/85 border border-black rounded-md px-2 py-0.5 font-chicago text-[22px] leading-none">
        {label}
      </span>
    </motion.div>
  );
};
