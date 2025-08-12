import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import { Readme } from './routes/Readme'
import { Projects } from './routes/Projects'
import { Experience } from './routes/Experience'
import { Achievements } from './routes/Achievements'
import { Contact } from './routes/Contact'
import { injectGA } from './analytics/ga'
import './index.css'   // <-- Tailwind
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

injectGA()

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/readme', element: <Readme /> },
  { path: '/projects', element: <Projects /> },
  { path: '/experience', element: <Experience /> },
  { path: '/achievements', element: <Achievements /> },
  { path: '/contact', element: <Contact /> }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
