import Portfolio from './Portfolio'
import Experience from './Experience'
import { Observer } from 'tailwindcss-intersect';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  useEffect(() => {
    Observer.start();
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        {/* Old projects route kept as a redirect so existing links don't 404 */}
        <Route path="/projects" element={<Navigate to="/experience" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
