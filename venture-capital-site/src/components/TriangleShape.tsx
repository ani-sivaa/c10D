"use client";

import React from 'react';

interface TriangleShapeProps {
  className?: string;
}

const TriangleShape: React.FC<TriangleShapeProps> = ({ className = '' }) => {
  return (
    <div 
      className={`absolute top-0 left-0 w-1/3 h-full bg-triangle-gradient transform -skew-x-12 -translate-x-20 ${className}`}
      aria-hidden="true"
    />
  );
};

export default TriangleShape;