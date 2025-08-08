import React from "react";
import { PixelClock } from "../PixelClock/PixelClock";

export const MenuBar = () => (
  <div className="h-12 bg-white border-b-[5px] border-black flex items-center gap-6 px-4 font-chicago text-2xl select-none">
    <span></span>
    <span>File</span>
    <span>Edit</span>
    <span>View</span>
    <span>Special</span>
    <div className="ml-auto text-xl"><PixelClock /></div>
  </div>
);
