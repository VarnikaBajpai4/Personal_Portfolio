import React from "react";
import { Link } from "react-router-dom";
import { MenuBar } from "./components/MenuBar";
import { DesktopIcon } from "./components/DesktopIcon";
import { WindowWrap } from "./components/Window";
import Button from "@mui/material/Button";

import { Readme } from "./routes/Readme";
import { Experience } from "./routes/Experience";
import { Achievements } from "./routes/Achievements";
import { Contact } from "./routes/Contact";

import folderIcon from "./assets/icons/folder.svg";
import docIcon from "./assets/icons/doc.svg";
import archiveIcon from "./assets/icons/archive.svg";
import appIcon from "./assets/icons/app.svg";

import GAListener from "./components/GAListener";

export const App = () => {

  const [open, setOpen] = React.useState({
    about: true,  
    readme: false,
    experience: false,
    achievements: false,
    contact: false,
  });
  const [zMap, setZMap] = React.useState({
    about: 30, readme: 31, experience: 32, achievements: 33, contact: 34
  });
  const [zTop, setZTop] = React.useState(34);

  const focusWin = (key) => {
    setZMap(prev => {
      const nextTop = zTop + 1;
      setZTop(nextTop);
      return { ...prev, [key]: nextTop };
    });
  };

  const openWin = (key) => {
    setOpen(o => ({ ...o, [key]: true }));
    focusWin(key); 
  };
  const closeWin = (key) => setOpen((o) => ({ ...o, [key]: false }));

  return (
    <div className="h-full font-chicago">
      <GAListener /> 
      <MenuBar />

      {/* Desktop background */}
      <div className="relative h-[calc(100vh-3rem)] w-screen overflow-hidden
                bg-[#c0c0c0]
                [background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_0_1px,transparent_1px_2px),repeating-linear-gradient(90deg,rgba(0,0,0,0.12)_0_1px,transparent_1px_2px)]
                bg-[length:2px_2px]">
        {/* Desktop icons (left column) */}
        <DesktopIcon label="README.txt"        icon={docIcon}     onOpen={() => openWin("readme")}        initial={{ x: 24, y:  40 }} />
        <DesktopIcon label="Projects/"         icon={folderIcon}  route="/projects"                        initial={{ x: 24, y: 180 }} />
        <DesktopIcon label="Work_Exp.doc"      icon={docIcon}     onOpen={() => openWin("experience")}     initial={{ x: 24, y: 320 }} />
        <DesktopIcon label="Achievements.sit"  icon={archiveIcon} onOpen={() => openWin("achievements")}   initial={{ x: 24, y: 460 }} />
        <DesktopIcon label="Contact.app"       icon={appIcon}     onOpen={() => openWin("contact")}        initial={{ x: 24, y: 600 }} />

        {/* About window open by default */}
        {open.about && (
          <WindowWrap
            title="About This Site"
            initial={{ x: 240, y: 96, w: 900, h: 560 }}
            z={zMap.about}
            onClose={() => closeWin("about")}
            onFocus={() => focusWin("about")}
          >


          <h1 className="sr-only">
            Varnika — Software Engineer & ML Developer Portfolio
          </h1>


          <h2 className="text-3xl font-extrabold mb-4">Welcome 👋</h2>
          <p className="mb-6 max-w-3xl">
            This portfolio is a mini desktop styled after classic Macintosh System 6/7.
            Double-click the icons on the left to explore sections. Everything is built with
            React + Vite, Tailwind, Framer Motion (dragging), and MUI (buttons/forms).
          </p>
          

          <h2 className="text-2xl font-extrabold mb-2">What’s on the Desktop</h2>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li><strong>README.txt</strong> — my journey & background.</li>
            <li><strong>Projects/</strong> — selected work with build logs (coming soon).</li>
            <li><strong>Work_Exp.doc</strong> — internships and roles.</li>
            <li><strong>Achievements.sit</strong> — hackathons & awards.</li>
            <li><strong>Contact.app</strong> — email & socials.</li>
          </ul>

          <div className="flex gap-3 mb-4">
            <Button component={Link} to="/readme" variant="contained" size="large" sx={{ fontWeight: 800, borderRadius: 6, boxShadow: "none" }}>
              Open README (full page)
            </Button>
            <Button onClick={() => openWin("readme")} variant="outlined" size="large" sx={{ fontWeight: 800, borderWidth: 2 }}>
              Open as Window
            </Button>
          </div>

          <div className="text-sm opacity-80">Tip: you can drag this window around. Icons are draggable too.</div>
        </WindowWrap>
        )}


        {open.readme && (
          <WindowWrap title="Read Me" initial={{ x: 300, y: 140, w: 860, h: 520 }} z={zMap.readme} onClose={() => closeWin("readme")} onFocus={() => focusWin("readme")}>
            <Readme />
          </WindowWrap>
        )}
        {open.experience && (
          <WindowWrap title="Work_Exp.doc" initial={{ x: 340, y: 170, w: 860, h: 520 }} z={zMap.experience} onClose={() => closeWin("experience")} onFocus={() => focusWin("experience")}>
            <Experience />
          </WindowWrap>
        )}
        {open.achievements && (
          <WindowWrap title="Achievements.sit" initial={{ x: 380, y: 200, w: 860, h: 520 }} z={zMap.achievements} onClose={() => closeWin("achievements")} onFocus={() => focusWin("achievements")}>
            <Achievements />
          </WindowWrap>
        )}
        {open.contact && (
          <WindowWrap title="Contact.app" initial={{ x: 420, y: 230, w: 700, h: 460 }} z={zMap.contact} onClose={() => closeWin("contact")}  onFocus={() => focusWin("contact")}>
            <Contact />
          </WindowWrap>
        )}
      </div>
    </div>
  );
};
