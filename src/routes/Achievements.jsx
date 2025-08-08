import React from 'react'
import { MenuBar } from '../components/MenuBar'

export const Achievements = () => (
  <>
    <MenuBar />
    <div className="page">
      <div className="page-window">
        <div className="titlebar"><div className="dots"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div><div className="title">Achievements.sit</div></div>
        <div className="page-content">
          <div className="finder-list">
            <div className="file-card"><h4>Idea Hackathon — UBI Bharosa (3rd place)</h4><p>97% face recognition; 90%+ precision in prioritization. PERN + Python.</p></div>
            <div className="file-card"><h4>Computer Society of India</h4><p>Organized SIH & Devopia; AI/ML talks; event management & public speaking.</p></div>
            <div className="file-card"><h4>Somaiya Debating Society</h4><p>Led campaigns; presided over Big Somaiya Debate.</p></div>
          </div>
        </div>
      </div>
    </div>
  </>
)
