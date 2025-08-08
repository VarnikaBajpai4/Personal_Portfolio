import React from 'react'
import { MenuBar } from '../components/MenuBar'

export const Experience = () => (
  <>
    <MenuBar />
    <div className="page">
      <div className="page-window">
        <div className="titlebar"><div className="dots"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div><div className="title">Work_Exp.doc</div></div>
        <div className="page-content">
          <h3>Barclays — Technology Summer Intern (May–Jul 2025)</h3>
          <ul>
            <li>Enterprise workflow automation & internal tooling.</li>
            <li>Cross-team collaboration; ERG initiatives.</li>
          </ul>
          <h3>G-Square Solutions — Summer Intern (Jun–Jul 2024)</h3>
          <ul>
            <li>Backend ML models (Django/Flask), feature engineering & data analysis.</li>
            <li>End-to-end ML lifecycle from preprocessing to deployment.</li>
          </ul>
        </div>
      </div>
    </div>
  </>
)
