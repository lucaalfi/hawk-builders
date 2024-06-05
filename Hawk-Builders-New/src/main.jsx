import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexTailwind from './pages/indexTailwind.jsx';
import ProjectsTailwind from './pages/projectsTailwind.jsx';

export default function HawkBuildersRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexTailwind />}/>
        <Route path="/home" element={<IndexTailwind />}/>
        <Route path="/projects" element={<ProjectsTailwind />} />
        <Route path="/*" element={<IndexTailwind />} />
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HawkBuildersRoutes />
  </React.StrictMode>,
)
