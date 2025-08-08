import React from "react";
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
          <DesktopIcon label="README.txt"      icon={docIcon}     route="/readme"      initial={{ x: 24, y:  40 }} />
          <DesktopIcon label="Projects/"       icon={folderIcon}  route="/projects"    initial={{ x: 24, y: 180 }} />
          <DesktopIcon label="Work_Exp.doc"    icon={docIcon}     route="/experience"  initial={{ x: 24, y: 320 }} />
          <DesktopIcon label="Achievements.sit" icon={archiveIcon} route="/achievements" initial={{ x: 24, y: 460 }} />
          <DesktopIcon label="Contact.app"     icon={appIcon}     route="/contact"     initial={{ x: 24, y: 600 }} />


        {/* README window open by default */}
        <WindowWrap title="Read Me" initial={{ x: 240, y: 96, w: 900, h: 560 }}>
          <h2 className="text-3xl font-extrabold mb-4">Varnika Bajpai</h2>
          <p className="italic mb-6">
            Software Engineer &amp; ML Developer — building elegant solutions with clean code.
          </p>

          <h3 className="text-2xl font-extrabold mb-2">My Journey</h3>
          <p className="mb-6 max-w-3xl">
            BTech (IT) at KJ Somaiya College of Engineering (GPA 9.62). Hands-on projects across full-stack and ML,
            internships at Barclays and G-Square, plus community leadership in CSI and the Debating Society.
          </p>

          <h3 className="text-2xl font-extrabold mb-2">What I Do</h3>
          <ul className="list-disc ml-6 mb-6 space-y-1 font-bold">
            <li>Full-stack: React, Node, Express, MongoDB/Postgres</li>
            <li>ML/AI: Python, scikit-learn/LightGBM, model pipelines & analytics</li>
            <li>Data/BI: SQL/NoSQL, PowerBI, Tableau, Google Analytics</li>
          </ul>

          <div className="flex gap-3 mb-4">
            <Button variant="contained" size="large" sx={{ fontWeight: 800, borderRadius: 6, boxShadow: "none" }}>
              Download Résumé
            </Button>
            <Button variant="outlined" size="large" sx={{ fontWeight: 800, borderWidth: 2 }}>
              View Projects
            </Button>
            <Button variant="outlined" size="large" sx={{ fontWeight: 800, borderWidth: 2 }}>
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 text-blue-600">
            <a href="mailto:bajpaivarnika04@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/varnika-bajpai-6106a2258" target="_blank">LinkedIn</a>
            <a href="https://github.com/VarnikaBajpai4" target="_blank">GitHub</a>
          </div>
        </WindowWrap>
      </div>
    </div>
  );
};
