import React from 'react'
import { MenuBar } from '../components/MenuBar'

export const Readme = () => (
  <>
    <MenuBar />
    <div className="page">
      <div className="page-window">
        <div className="titlebar"><div className="dots"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div><div className="title">Read Me</div></div>
        <div className="page-content">
          <h2>Varnika Bajpai</h2>
          <p><em>Software Engineer & ML Developer — building elegant solutions with clean code.</em></p>
          <h3>My Journey</h3>
          <p>KJSCE (BTech IT, GPA 9.62). Internships at Barclays and G-Square. Active in CSI & Debating Society.</p>
          <h3>What I Do</h3>
          <ul>
            <li>Full-stack: React, Node, Express, Mongo/Postgres</li>
            <li>ML/AI: Python, LightGBM, pipelines & analysis</li>
            <li>Data/BI: SQL/NoSQL, PowerBI, Tableau, GA</li>
          </ul>
          <div style={{display:'flex', gap:8, marginTop:8}}>
            <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">Download Résumé</a>
            <a className="btn" href="/projects">View Projects</a>
            <a className="btn" href="/contact">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  </>
)
