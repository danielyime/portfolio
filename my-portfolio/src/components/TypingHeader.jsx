import React, { useState, useEffect } from 'react';

const TypingHeader = () => {
  const [text, setText] = useState('');
  const fullText = 'Daniel Yi';
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
      {text}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypingHeader;