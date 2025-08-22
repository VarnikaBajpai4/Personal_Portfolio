import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const DesktopIcon = ({ label, icon, route, onOpen, initial = { x: 24, y: 72 } }) => {
  const nav = useNavigate();
  const draggingRef = React.useRef(false);

  const handleOpen = () => {
    if (draggingRef.current) return; 

    // GA4 event tracking
    if (window.gtag) {
      window.gtag('event', 'desktop_icon_open', {
        icon_label: label,
        page_location: window.location.href
      });
    }

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
      onDragStart={() => { draggingRef.current = true; }}
      onDragEnd={() => {
        setTimeout(() => { draggingRef.current = false; }, 0);
      }}
      onDoubleClick={handleOpen}
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
