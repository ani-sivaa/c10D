'use client';

import { useEffect, useRef } from 'react';

interface FinanceBackgroundProps {
  className?: string;
}

const FinanceBackground: React.FC<FinanceBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('Finance background mounted');
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get canvas context');
      return;
    }

    // Venture capital related emojis
    const emojis = ['💰', '💸', '🚀', '📈', '💡', '🌟', '🧠', '🤝', '🏦', '🔍'];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInCanvas = false;
    let animationFrameId: number;
    
    const nodes: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number;
      size: number;
      energy: number;
      emoji: string;
    }[] = [];
    
    const maxDistance = 200;
    const mouseRadius = 250;
    const mouseInfluence = 1.5;
    const numNodes = 40; // Reduced for better performance
    const baseColor = 'rgba(75, 156, 211, '; // UNC blue for connections

    function resize() {
      if (!canvas) return;
      console.log('Resizing canvas to:', window.innerWidth, window.innerHeight);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset nodes when resizing
      nodes.length = 0;
      
      // Create initial node distribution
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 1.5 + 0.5,
          energy: 0,
          emoji: emojis[Math.floor(Math.random() * emojis.length)]
        });
      }
    }

    function updateNode(node: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      energy: number;
      emoji: string;
    }) {
      node.x += node.vx;
      node.y += node.vy;

      if (!canvas) return;
      // Boundary check and bounce
      if (node.x < 0) {
        node.x = 0;
        node.vx *= -1;
      } else if (node.x > canvas.width) {
        node.x = canvas.width;
        node.vx *= -1;
      }
      
      if (node.y < 0) {
        node.y = 0;
        node.vy *= -1;
      } else if (node.y > canvas.height) {
        node.y = canvas.height;
        node.vy *= -1;
      }

      if (isMouseInCanvas) {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouseRadius;
          const force = (maxDistance - distance) / maxDistance;

          node.vx += forceDirectionX * force * mouseInfluence;
          node.vy += forceDirectionY * force * mouseInfluence;
          node.energy = Math.min(1, node.energy + 0.02);
        } else {
          node.energy = Math.max(0, node.energy - 0.01);
        }
      } else {
        node.energy = Math.max(0, node.energy - 0.01);
      }
      
      // Add some friction
      node.vx *= 0.99;
      node.vy *= 0.99;
    }

    function drawNetwork() {
      if (!canvas || !ctx) {
        console.error('Canvas or context missing in animation frame');
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update all nodes
      nodes.forEach(node => updateNode(node));

      // Draw connections
      ctx.globalCompositeOperation = 'lighter';
      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i >= j) return;
          
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const combinedEnergy = Math.max(node.energy, other.energy);
            const baseOpacity = (1 - distance / maxDistance);
            const opacity = Math.min(0.8, baseOpacity * (0.2 + combinedEnergy * 0.8));
            
            ctx.beginPath();
            ctx.strokeStyle = baseColor + opacity + ')';
            ctx.lineWidth = 0.5 + combinedEnergy;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });

        // Draw emoji node
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Calculate emoji size based on energy
        const emojiSize = node.size * 10 * (1 + node.energy * 0.5);
        ctx.font = `${emojiSize}px Arial`;
        
        // Set opacity based on energy
        ctx.globalAlpha = 0.4 + node.energy * 0.3;
        
        // Add subtle glow effect
        if (node.energy > 0.1) {
          ctx.shadowColor = 'rgba(75, 156, 211, ' + (0.3 * node.energy) + ')';
          ctx.shadowBlur = 10 * node.energy;
        } else {
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }
        
        ctx.fillText(node.emoji, node.x, node.y);
        
        // Reset shadow and opacity
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(drawNetwork);
    }

    function onmousemove(event: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
      isMouseInCanvas = true;
    }

    function onmouseleave() {
      isMouseInCanvas = false;
    }

    console.log('Setting up canvas and events');
    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onmousemove);
    canvas.addEventListener('mouseleave', onmouseleave);
    drawNetwork();

    return () => {
      console.log('Cleaning up finance background');
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onmousemove);
      canvas.removeEventListener('mouseleave', onmouseleave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full ${className}`}
      style={{ 
        opacity: 0.3, 
        zIndex: -10,
        pointerEvents: 'auto',
        touchAction: 'none'
      }}
    />
  );
};

export default FinanceBackground;