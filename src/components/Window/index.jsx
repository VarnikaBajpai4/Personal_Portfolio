import React from "react";
import { motion } from "framer-motion";

export function WindowWrap({ title = "Read Me", initial = { x: 220, y: 120, w: 880, h: 540 }, children }) {
  const [pos, setPos] = React.useState({ x: initial.x, y: initial.y });
  const size = { w: initial.w, h: initial.h };

  return (
    <motion.div
      className="absolute bg-white border border-black rounded-none overflow-hidden font-chicago"
      style={{ left: pos.x, top: pos.y, width: size.w, height: size.h, zIndex: 20 }}
      drag
      dragMomentum={false}
      onDrag={(e, info) => setPos(p => ({ x: p.x + info.delta.x, y: p.y + info.delta.y }))}
    >
      {/* hard offset shadow */}
      <div className="absolute -right-2 -bottom-2 w-full h-full bg-black/30 -z-10" />

      {/* Titlebar: knob + stripes | title | stripes */}
      <div className="relative h-8 bg-[#e3e3e3] border-b border-black grid grid-cols-[1fr_auto_1fr] items-center px-2">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-white border border-black" />
          <div className="h-4 w-64 border border-black [background-image:repeating-linear-gradient(to_bottom,#000_0_1px,transparent_1px_3px)]" />
        </div>
        <div className="text-xl font-extrabold tracking-wide text-center">{title}</div>
        <div className="flex justify-end">
          <div className="h-4 w-64 border border-black [background-image:repeating-linear-gradient(to_bottom,#000_0_1px,transparent_1px_3px)]" />
        </div>
      </div>

      {/* Inset frame to avoid touching outer border */}
      <div className="absolute top-8 left-1.5 right-1.5 bottom-1.5 grid grid-cols-[1fr_22px] grid-rows-[1fr_22px]">
        {/* Content */}
        <div className="bg-white border-t border-l border-black overflow-auto">
          <div className="p-6 text-base">{children}</div>
        </div>

        {/* Right rail */}
        <div className="border-l border-black grid grid-rows-[22px_1fr_22px_22px] bg-neutral-200">
          <div className="border-b border-black relative bg-neutral-100">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-black rotate-45 border-l-0 border-b-0" />
          </div>
          <div className="border-b border-black [background-image:repeating-linear-gradient(45deg,rgba(0,0,0,.25)_0_1px,transparent_1px_3px)]" />
          <div className="border-b border-black relative bg-neutral-100">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-black rotate-45 border-t-0 border-r-0" />
          </div>
          <div className="bg-neutral-300 border-t border-black" />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black grid grid-cols-[22px_1fr_22px] bg-neutral-200">
          <div className="relative bg-neutral-100 border-r border-black">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-black -rotate-45 border-t-0 border-r-0" />
          </div>
          <div className="mx-1 my-1 grid grid-cols-[1fr_1.5fr_1fr] border border-black bg-white">
            <div className="border-r border-black [background-image:repeating-linear-gradient(45deg,rgba(0,0,0,.25)_0_1px,transparent_1px_3px)]" />
            <div className="bg-neutral-300" />
            <div className="border-l border-black [background-image:repeating-linear-gradient(45deg,rgba(0,0,0,.25)_0_1px,transparent_1px_3px)]" />
          </div>
          <div className="relative bg-neutral-100 border-l border-black">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-black rotate-45 border-l-0 border-b-0" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
