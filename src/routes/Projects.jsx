import React from 'react'
import { MenuBar } from '../components/MenuBar'

const Card = ({title, desc, chips}) => (
  <div className="file-card">
    <h4>{title}</h4>
    <p>{desc}</p>
    <div className="chips">{chips.map(c => <span className="chip" key={c}>{c}</span>)}</div>
  </div>
)

export const Projects = () => (
  <>
    <MenuBar />
    <div className="page">
      <div className="page-window">
        <div className="titlebar"><div className="dots"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div><div className="title">Projects</div></div>
        <div className="page-content">
          <div className="finder-list">
            <Card title="Symbiote" desc="AI-powered team matching for hackathons. Placeholder case study." chips={['React','Node','MongoDB','Python (ML)']} />
            <Card title="MalShield" desc="LightGBM-based malware detection with YARA and static/dynamic analysis. Placeholder case study." chips={['Python','LightGBM','YARA']} />
            <Card title="More coming…" desc="New projects and detailed build logs will appear here." chips={[]} />
          </div>
        </div>
      </div>
    </div>
  </>
)
