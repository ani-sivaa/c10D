'use client';

import { useEffect, useRef } from 'react';

interface FinanceBackgroundProps {
  className?: string;
}

const FinanceBackground: React.FC<FinanceBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let isMouseInCanvas = false;
    let animationFrameId: number;
    
    // Colors for different node types
    const colors = {
      investor: 'rgba(75, 156, 211, ', // UNC blue
      startup: 'rgba(0, 51, 160, ',    // Duke blue
      fund: 'rgba(0, 210, 140, '       // Green for money/funds
    };
    
    const maxDistance = 200;
    const mouseRadius = 250;
    const mouseInfluence = 1.5;
    const numNodes = 80;
    
    const nodes: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number;
      size: number;
      energy: number;
      type: 'investor' | 'startup' | 'fund';
    }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset nodes when resizing
      nodes.length = 0;
      
      // Create initial node distribution
      for (let i = 0; i < numNodes; i++) {
        const type = Math.random() < 0.4 
          ? 'investor' 
          : Math.random() < 0.7 
            ? 'startup' 
            : 'fund';
            
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: type === 'fund' 
            ? Math.random() * 3 + 2 
            : type === 'investor' 
              ? Math.random() * 2 + 1.5 
              : Math.random() * 1.5 + 0.8,
          energy: 0,
          type
        });
      }
    }

    function updateNode(node: typeof nodes[0]) {
      // Mouse interaction
      if (isMouseInCanvas) {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          node.energy = Math.min(1, node.energy + 0.1);
          
          if (distance > 50) {
            node.vx += (dx / distance) * force * mouseInfluence;
            node.vy += (dy / distance) * force * mouseInfluence;
          } else {
            node.vx -= (dx / distance) * force * mouseInfluence * 2;
            node.vy -= (dy / distance) * force * mouseInfluence * 2;
          }
        }
      }

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Add some random movement
      node.vx += (Math.random() - 0.5) * 0.15;
      node.vy += (Math.random() - 0.5) * 0.15;

      // Apply damping
      node.vx *= 0.98;
      node.vy *= 0.98;

      // Keep within bounds
      if (!canvas) return;
      if (node.x < 0 || node.x > canvas.width) {
        node.vx *= -1;
        node.x = Math.max(0, Math.min(canvas.width, node.x));
      }
      if (node.y < 0 || node.y > canvas.height) {
        node.vy *= -1;
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      }

      // Gradually reduce energy
      node.energy = Math.max(0, node.energy - 0.01);
    }

    function drawNetwork() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update all nodes
      nodes.forEach(node => updateNode(node));

      // Draw connections
      ctx.globalCompositeOperation = 'lighter';
      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i >= j) return;
          
          // Create stronger connections between investors and startups
          const shouldConnect = 
            (node.type === 'investor' && other.type === 'startup') ||
            (node.type === 'startup' && other.type === 'investor') ||
            (node.type === 'fund' && other.type === 'investor') ||
            (node.type === 'fund' && other.type === 'startup');
            
          const connectionMultiplier = shouldConnect ? 1.5 : 0.7;
          const maxConnectionDistance = maxDistance * connectionMultiplier;
          
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            const combinedEnergy = Math.max(node.energy, other.energy);
            const baseOpacity = (1 - distance / maxConnectionDistance) * (shouldConnect ? 0.5 : 0.3);
            const opacity = Math.min(0.8, baseOpacity * (0.2 + combinedEnergy * 0.8));
            
            // Node interaction forces - different interactions based on node types
            const force = (maxConnectionDistance - distance) / maxConnectionDistance;
            
            if (distance < 50) {
              // Close nodes repel
              node.vx -= (dx / distance) * force * 0.5;
              node.vy -= (dy / distance) * force * 0.5;
              other.vx += (dx / distance) * force * 0.5;
              other.vy += (dy / distance) * force * 0.5;
            } else if (shouldConnect && (node.energy > 0.1 || other.energy > 0.1)) {
              // Investors and startups attract when energized
              node.vx += (dx / distance) * force * 0.3;
              node.vy += (dy / distance) * force * 0.3;
              other.vx -= (dx / distance) * force * 0.3;
              other.vy -= (dy / distance) * force * 0.3;
            }
            
            // Draw connection line
            ctx.beginPath();
            
            // Color based on connection type
            if ((node.type === 'investor' && other.type === 'startup') || 
                (node.type === 'startup' && other.type === 'investor')) {
              // Deal flow connections
              ctx.strokeStyle = `rgba(61, 100, 223, ${opacity})`;
            } else if (node.type === 'fund' || other.type === 'fund') {
              // Fund connections (money flow)
              ctx.strokeStyle = `rgba(0, 180, 120, ${opacity})`;
            } else {
              // Other network connections
              ctx.strokeStyle = `rgba(100, 100, 200, ${opacity})`;
            }
            
            ctx.lineWidth = 1 + combinedEnergy;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });

        // Draw node
        const nodeOpacity = 0.4 + node.energy * 0.5;
        const nodeSize = node.size * (1 + node.energy);
        const nodeColor = colors[node.type];
        
        if (node.energy > 0.1) {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, nodeSize * 4
          );
          gradient.addColorStop(0, `${nodeColor}${0.3 * node.energy})`);
          gradient.addColorStop(1, nodeColor.replace('rgba', 'rgba').replace(/,[^,]*\)/, ', 0)'));
          
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(node.x, node.y, nodeSize * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = `${nodeColor}${nodeOpacity})`;
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw dollar signs on fund nodes
        if (node.type === 'fund' && node.size > 2) {
          ctx.fillStyle = `rgba(255, 255, 255, ${nodeOpacity + 0.2})`;
          ctx.font = `${Math.floor(nodeSize * 1.2)}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('$', node.x, node.y);
        }
      });

      animationFrameId = requestAnimationFrame(drawNetwork);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseInCanvas = true;
    };

    const handleMouseLeave = () => {
      isMouseInCanvas = false;
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    drawNetwork();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 opacity-30 ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default FinanceBackground;