import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/index.jsx';
import Projects from './pages/projects.jsx';
// import './index.css'

export default function HawkBuildersRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HawkBuildersRoutes />
  </React.StrictMode>,
)
