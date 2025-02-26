'use client';

import { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('Background component mounted');
    
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

    // Set initial canvas size
    const resize = () => {
      console.log('Resizing canvas to:', window.innerWidth, window.innerHeight);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-initialize nodes after resize
      initializeNodes();
    };
    
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
    }[] = [];
    
    const maxDistance = 200;
    const mouseRadius = 250;
    const mouseInfluence = 1.5;
    const numNodes = 80;
    const baseColor = 'rgba(15, 240, 252, ';

    // Create initial node distribution
    function initializeNodes() {
      // Clear existing nodes
      nodes.length = 0;

      if (!canvas) {
        console.error('Canvas element not found during node initialization');
        return;
      }
      
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          energy: 0
        });
      }
      console.log(`Initialized ${nodes.length} nodes`);
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
      node.vx += (Math.random() - 0.5) * 0.2;
      node.vy += (Math.random() - 0.5) * 0.2;

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
      
      // Clear the canvas
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
            
            // Node interaction forces
            const force = (maxDistance - distance) / maxDistance;
            if (distance < 50) {
              node.vx -= (dx / distance) * force * 0.5;
              node.vy -= (dy / distance) * force * 0.5;
              other.vx += (dx / distance) * force * 0.5;
              other.vy += (dy / distance) * force * 0.5;
            } else if (node.energy > 0.2 || other.energy > 0.2) {
              node.vx += (dx / distance) * force * 0.2;
              node.vy += (dy / distance) * force * 0.2;
              other.vx -= (dx / distance) * force * 0.2;
              other.vy -= (dy / distance) * force * 0.2;
            }
            
            ctx.beginPath();
            ctx.strokeStyle = baseColor + opacity + ')';
            ctx.lineWidth = 1 + combinedEnergy;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });

        // Draw node
        const nodeOpacity = 0.4 + node.energy * 0.5;
        const nodeSize = node.size * (1 + node.energy);
        
        if (node.energy > 0.1) {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, nodeSize * 4
          );
          gradient.addColorStop(0, baseColor + (0.3 * node.energy) + ')');
          gradient.addColorStop(1, 'rgba(15, 240, 252, 0)');
          
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(node.x, node.y, nodeSize * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = baseColor + nodeOpacity + ')';
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Continue animation
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

    console.log('Setting up canvas and events');
    resize();
    initializeNodes();
    
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Draw initial red rectangle to confirm visibility
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(50, 50, 100, 100);
    console.log('Drew test rectangle');
    
    // Start animation
    drawNetwork();
    console.log('Started animation');

    return () => {
      console.log('Cleaning up background component');
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
      className="fixed top-0 left-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(to bottom, #2B2B2B, #000000)',
        zIndex: 1, // Use positive z-index temporarily to diagnose visibility
        opacity: 0.8, // Higher opacity for testing
        touchAction: 'none'
      }}
    />
  );
};

export default Background;