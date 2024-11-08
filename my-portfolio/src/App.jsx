import Portfolio from './Portfolio'
import Projects from './Projects'
import { Observer } from 'tailwindcss-intersect';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    Observer.start();
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App