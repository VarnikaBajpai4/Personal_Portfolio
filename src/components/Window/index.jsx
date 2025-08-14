import React from "react";
import { motion } from "framer-motion";

export function WindowWrap({
  title = "Window",
  initial = { x: 220, y: 120, w: 880, h: 540 },
  children,
  z = 20,
  onClose,
  onFocus,
}) {
  // layout (left/top are only the resting layout position; we DO NOT change them while dragging)
  const [pos] = React.useState({ x: initial.x, y: initial.y });
  const size = { w: initial.w, h: initial.h };

  const wrapRef = React.useRef(null);

  // Keep current desktop size so constraints recompute on resize
  const [desk, setDesk] = React.useState({
    w: typeof window !== "undefined" ? window.innerWidth : 0,
    h: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  React.useEffect(() => {
    const measure = () => {
      const parent = wrapRef.current?.parentElement;
      if (parent) {
        const r = parent.getBoundingClientRect();
        setDesk({ w: r.width, h: r.height });
      } else {
        setDesk({ w: window.innerWidth, h: window.innerHeight });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // ----- build drag constraints (Framer coordinates: deltas from the element’s layout position) -----
  const MARGIN = -500; // ~2–3 cm
  const minX = MARGIN;
  const minY = MARGIN;
  const maxX = Math.max(MARGIN, desk.w - size.w - MARGIN);
  const maxY = Math.max(MARGIN, desk.h - size.h - MARGIN);

  // Convert absolute box to Framer “offset from layout position”
  const constraints = {
    left:  minX - pos.x,
    right: maxX - pos.x,
    top:   minY - pos.y,
    bottom:maxY - pos.y,
  };

  // ----- custom scrollbars state -----
  const contentRef = React.useRef(null);
  const vTrackRef = React.useRef(null);
  const hTrackRef = React.useRef(null);

  const [s, setS] = React.useState({ x: 0, y: 0, xMax: 0, yMax: 0, vw: 0, vh: 0 });

  const updateScrollState = React.useCallback(() => {
    const c = contentRef.current;
    if (!c) return;
    setS({
      x: c.scrollLeft,
      y: c.scrollTop,
      xMax: Math.max(0, c.scrollWidth - c.clientWidth),
      yMax: Math.max(0, c.scrollHeight - c.clientHeight),
      vw: c.clientWidth,
      vh: c.clientHeight,
    });
  }, []);

  React.useEffect(() => {
    updateScrollState();
    const ro = new ResizeObserver(updateScrollState);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, [updateScrollState]);

  const onContentScroll = () => updateScrollState();

  // track sizes + thumb positions
  const vTrackH = vTrackRef.current?.clientHeight ?? 1;
  const hTrackW = hTrackRef.current?.clientWidth ?? 1;
  const vThumbH = Math.max(24, vTrackH * (s.vh ? s.vh / (s.vh + s.yMax) : 1));
  const hThumbW = Math.max(24, hTrackW * (s.vw ? s.vw / (s.vw + s.xMax) : 1));
  const vThumbY = s.yMax > 0 ? (vTrackH - vThumbH) * (s.y / s.yMax) : 0;
  const hThumbX = s.xMax > 0 ? (hTrackW - hThumbW) * (s.x / s.xMax) : 0;

  // arrows
  const step = 36;
  const scrollUp = () => contentRef.current?.scrollBy({ top: -step, behavior: "auto" });
  const scrollDown = () => contentRef.current?.scrollBy({ top: step, behavior: "auto" });
  const scrollLeft = () => contentRef.current?.scrollBy({ left: -step, behavior: "auto" });
  const scrollRight = () => contentRef.current?.scrollBy({ left: step, behavior: "auto" });

  // drag vertical thumb
  const onVThumbDown = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startScroll = s.y;
    const track = vTrackRef.current?.clientHeight ?? 1;
    const range = Math.max(1, track - vThumbH);
    const ratio = s.yMax > 0 ? s.yMax / range : 0;

    const move = (me) => {
      const dy = me.clientY - startY;
      if (contentRef.current)
        contentRef.current.scrollTop = Math.min(s.yMax, Math.max(0, startScroll + dy * ratio));
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  // drag horizontal thumb
  const onHThumbDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startScroll = s.x;
    const track = hTrackRef.current?.clientWidth ?? 1;
    const range = Math.max(1, track - hThumbW);
    const ratio = s.xMax > 0 ? s.xMax / range : 0;

    const move = (me) => {
      const dx = me.clientX - startX;
      if (contentRef.current)
        contentRef.current.scrollLeft = Math.min(s.xMax, Math.max(0, startScroll + dx * ratio));
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  return (
    <motion.div
      ref={wrapRef}
      className="absolute bg-white border border-black rounded-none overflow-hidden font-chicago"
      style={{
        left: pos.x,          // layout origin (we don’t mutate these while dragging)
        top: pos.y,
        width: size.w,
        height: size.h,
        zIndex: z,
      }}
      drag
      dragConstraints={constraints}
      dragElastic={0}
      dragMomentum={false}
      onMouseDown={() => onFocus && onFocus()}
    >
      {/* hard offset shadow */}
      <div className="absolute -right-2 -bottom-2 w-full h-full bg-black/30 -z-10" />

      {/* Titlebar */}
      <div className="relative h-12 bg-[#e3e3e3] border-b border-black grid grid-cols-[1fr_auto_1fr] items-center px-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Close window"
            title="Close"
            className="group w-5 h-5 border border-black bg-white grid place-items-center hover:bg-black hover:text-white cursor-pointer"
            onClick={(e) => { e.stopPropagation(); onClose && onClose(); }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <span className="text-[11px] leading-none opacity-0 group-hover:opacity-100">×</span>
          </button>
          <div className="h-6 w-72 border-2 border-black [background-image:repeating-linear-gradient(to_bottom,#000_0_2px,transparent_2px_4px)]" />
        </div>

        <div className="text-[28px] leading-none font-extrabold tracking-wide text-center">
          {title}
        </div>

        <div className="flex items-center justify-end">
          <div className="h-6 w-72 border-2 border-black [background-image:repeating-linear-gradient(to_bottom,#000_0_2px,transparent_2px_4px)]" />
        </div>
      </div>

      {/* Inset frame (content + rails) */}
      <div className="absolute top-12 left-1.5 right-1.5 bottom-1.5 grid grid-cols-[1fr_22px] grid-rows-[1fr_22px]">
        {/* CONTENT */}
        <div
          className="bg-white border-t border-l border-black overflow-auto"
          onScroll={onContentScroll}
          ref={contentRef}
        >
          <div className="px-10 py-8 text-base leading-relaxed">{children}</div>
        </div>

        {/* RIGHT RAIL */}
        <div className="border-l border-black grid grid-rows-[22px_1fr_22px_22px] bg-neutral-200">
          <button className="border-b border-black grid place-items-center bg-neutral-100 hover:bg-white" title="Scroll up" onClick={scrollUp}>
            <div className="w-0 h-0 border-x-[5px] border-x-transparent border-b-[7px] border-b-black" />
          </button>

          <div ref={vTrackRef} className="relative border-b border-black [background-image:repeating-linear-gradient(45deg,rgba(0,0,0,.25)_0_1px,transparent_1px_3px)]">
            <div
              className="absolute left-1/2 -translate-x-1/2 w-3 border border-black bg-neutral-300 cursor-grab active:cursor-grabbing"
              style={{ top: vThumbY, height: vThumbH }}
              onMouseDown={onVThumbDown}
              title="Drag to scroll"
            />
          </div>

          <button className="border-b border-black grid place-items-center bg-neutral-100 hover:bg-white" title="Scroll down" onClick={scrollDown}>
            <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[7px] border-t-black" />
          </button>

          <div className="bg-neutral-300 border-t border-black" />
        </div>

        {/* BOTTOM BAR (hatched background) */}
        <div className="border-t border-black grid grid-cols-[22px_1fr_22px] [background-image:repeating-linear-gradient(45deg,rgba(0,0,0,.25)_0_1px,transparent_1px_3px)]">
          <button className="grid place-items-center bg-neutral-100 border-r border-black hover:bg-white" title="Scroll left" onClick={scrollLeft}>
            <div className="w-0 h-0 border-y-[5px] border-y-transparent border-r-[7px] border-r-black" />
          </button>

          <div ref={hTrackRef} className="mx-1 my-1 border border-black bg-white relative">
            <div
              className="absolute top-0 bottom-0 border border-black bg-neutral-300 cursor-grab active:cursor-grabbing"
              style={{ left: hThumbX, width: hThumbW }}
              onMouseDown={onHThumbDown}
              title="Drag to scroll"
            />
          </div>

          <button className="grid place-items-center bg-neutral-100 border-l border-black hover:bg-white" title="Scroll right" onClick={scrollRight}>
            <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-black" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
