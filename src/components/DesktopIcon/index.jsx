import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const DesktopIcon = ({ label, icon, route, initial = { x: 24, y: 72 } }) => {
  const nav = useNavigate();
  return (
    <motion.div
      // Keep the pair glued together
      className="absolute flex flex-col items-center w-[160px] select-none cursor-pointer"
      style={{ left: initial.x, top: initial.y }}
      drag
      dragMomentum={false}
      whileTap={{ scale: 0.98 }}
      onDoubleClick={() => route && nav(route)}
      onClick={() => route && nav(route)}
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
