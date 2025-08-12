import React from "react";
import { Link } from "react-router-dom";
import { MenuBar } from "./components/MenuBar";
import { DesktopIcon } from "./components/DesktopIcon";
import { WindowWrap } from "./components/Window";
import Button from "@mui/material/Button";

import folderIcon from "./assets/icons/folder.svg";
import docIcon from "./assets/icons/doc.svg";
import archiveIcon from "./assets/icons/archive.svg";
import appIcon from "./assets/icons/app.svg";

export const App = () => {
  return (
    <div className="h-full font-chicago">
      <MenuBar />

      {/* Desktop background */}
      <div className="relative h-[calc(100vh-3rem)] w-screen bg-[#c0c0c0] [background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_0_1px,transparent_1px_2px),repeating-linear-gradient(90deg,rgba(0,0,0,0.12)_0_1px,transparent_1px_2px)] bg-[length:2px_2px]">
        {/* Desktop icons (left column) */}
        <DesktopIcon label="README.txt"        icon={docIcon}     route="/readme"       initial={{ x: 24, y:  40 }} />
        <DesktopIcon label="Projects/"         icon={folderIcon}  route="/projects"     initial={{ x: 24, y: 180 }} />
        <DesktopIcon label="Work_Exp.doc"      icon={docIcon}     route="/experience"   initial={{ x: 24, y: 320 }} />
        <DesktopIcon label="Achievements.sit"  icon={archiveIcon} route="/achievements" initial={{ x: 24, y: 460 }} />
        <DesktopIcon label="Contact.app"       icon={appIcon}     route="/contact"      initial={{ x: 24, y: 600 }} />

        {/* About window open by default */}
        <WindowWrap title="About This Site" initial={{ x: 240, y: 96, w: 900, h: 560 }}>
          <h2 className="text-3xl font-extrabold mb-4">Welcome 👋</h2>
          <p className="mb-6 max-w-3xl">
            This portfolio is a mini desktop styled after classic Macintosh System 6/7.
            Click the icons on the left to explore sections. Everything is built with
            React + Vite, Tailwind, Framer Motion (dragging), and MUI (buttons/forms).
          </p>

          <h3 className="text-2xl font-extrabold mb-2">What’s on the Desktop</h3>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li><strong>README.txt</strong> — my journey & background.</li>
            <li><strong>Projects/</strong> — selected work with build logs (coming soon).</li>
            <li><strong>Work_Exp.doc</strong> — internships and roles.</li>
            <li><strong>Achievements.sit</strong> — hackathons & awards.</li>
            <li><strong>Contact.app</strong> — email & socials.</li>
          </ul>

          <div className="flex gap-3 mb-4">
            <Button component={Link} to="/readme" variant="contained" size="large" sx={{ fontWeight: 800, borderRadius: 6, boxShadow: "none" }}>
              Open README
            </Button>
            <Button component={Link} to="/projects" variant="outlined" size="large" sx={{ fontWeight: 800, borderWidth: 2 }}>
              View Projects
            </Button>
            <Button component={Link} to="/contact" variant="outlined" size="large" sx={{ fontWeight: 800, borderWidth: 2 }}>
              Contact Me
            </Button>
          </div>

          <div className="text-sm opacity-80">
            Tip: you can drag this window around. Icons are draggable too.
          </div>
        </WindowWrap>
      </div>
    </div>
  );
};
