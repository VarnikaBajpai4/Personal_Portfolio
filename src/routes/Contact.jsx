import React from 'react'
import { MenuBar } from '../components/MenuBar'

export const Contact = () => (
  <>
    <MenuBar />
    <div className="page">
      <div className="page-window">
        <div className="titlebar"><div className="dots"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div><div className="title">Contact.app</div></div>
        <div className="page-content">
          <form action="https://formspree.io/f/your-id" method="POST" style={{maxWidth:640}}>
            <div style={{display:'grid', gap:8, gridTemplateColumns:'1fr 1fr'}}>
              <input name="name" placeholder="Your name" required style={{padding:8, border:'1px solid var(--border)', borderRadius:6}} />
              <input name="email" type="email" placeholder="Your email" required style={{padding:8, border:'1px solid var(--border)', borderRadius:6}} />
            </div>
            <textarea name="message" placeholder="Your message" required style={{padding:8, border:'1px solid var(--border)', borderRadius:6, marginTop:8, minHeight:120, width:'100%'}}></textarea>
            <div style={{display:'flex', gap:8, marginTop:8}}>
              <button className="btn primary" type="submit">Send</button>
              <a className="btn ghost" href="mailto:bajpaivarnika04@gmail.com">Email</a>
              <a className="btn ghost" href="https://www.linkedin.com/in/varnika-bajpai-6106a2258" target="_blank">LinkedIn</a>
              <a className="btn ghost" href="https://github.com/VarnikaBajpai4" target="_blank">GitHub</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
)
