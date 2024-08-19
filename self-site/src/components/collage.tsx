import React, { useEffect } from 'react';

interface CollageProps {
  words: string[];
}

export const Collage: React.FC<CollageProps> = ({ words }) => {
  useEffect(() => {
    const wordElements = document.querySelectorAll('.floating-word');
    wordElements.forEach((word, index) => {
      const el = word as HTMLElement;
      const row = Math.floor(index / 2) + 1;
      const col = (index % 2) + 1;
      el.style.gridRow = `${row}`;
      el.style.gridColumn = `${col}`;
    });
  }, [words]);

  return (
    <div className="collage-container grid grid-cols-2 grid-rows-4 gap-2 w-full"> 
      {words.map((word, index) => (
        <span key={index} className="floating-word font-bold text-custom-dark-green text-lg">
          {word}
        </span>
      ))}
    </div>
  );
};

export default Collage;