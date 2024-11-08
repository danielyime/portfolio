import Portfolio from './Portfolio'
import { Observer } from 'tailwindcss-intersect';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Observer.start();
  }, [])
  return (
    <Portfolio />
  )
}

export default App