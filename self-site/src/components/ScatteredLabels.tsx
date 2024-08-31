import React from 'react';

interface ScatteredLabelsProps {
  labels: string[];
}

const ScatteredLabels: React.FC<ScatteredLabelsProps> = ({ labels }) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full h-90">
      {labels.map((label, index) => (
        <span
          key={index}
          className="bg-custom-nav-bar font-bold text-black px-3 py-1 rounded-full whitespace-nowrap flex justify-center items-center"
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export default ScatteredLabels;
