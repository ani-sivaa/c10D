'use client';

import React, { useEffect, useRef } from 'react';

const SimpleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('Simple background mounted');
    
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get canvas context');
      return;
    }

    // Draw a simple red rectangle to test visibility
    ctx.fillStyle = 'rgba(255, 0, 0, 0.8)'; // Bright red with high opacity
    ctx.fillRect(100, 100, 400, 400);
    
    // Draw a circle near the center of the screen
    ctx.beginPath();
    ctx.arc(window.innerWidth / 2, window.innerHeight / 2, 100, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 255, 0.8)'; // Bright blue
    ctx.fill();
    
    console.log('Canvas size:', canvas.width, canvas.height);
    console.log('Drew test shapes on canvas');
    
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ 
        zIndex: 1000, // Very high z-index to ensure visibility
        opacity: 1,    // Full opacity 
        border: '5px solid green', // Very visible border
        pointerEvents: 'none'
      }}
    />
  );
};

export default SimpleBackground;