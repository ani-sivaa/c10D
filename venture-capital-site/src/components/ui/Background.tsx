'use client';

import { useEffect, useRef } from 'react';

export default function Background() {
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let animationFrameId: number;
    let animationTime = 0; // To track animation progress
    
    // Define VC-related emojis
    const vcEmojis = [''];
    
    const nodes: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number;
      size: number;
      energy: number;
      emoji: string;
      distance: number; // Distance from origin for wave effect
      delay: number;    // Delay factor for staggered explosion
    }[] = [];
    
    const maxDistance = 200;
    const numNodes = 60; // More nodes for a more dramatic effect
    const baseColor = 'rgba(15, 240, 252, ';

    // Define the top-left origin point
    const originX = 50;
    const originY = 50;

    // Define the usable screen area (larger portion of the screen)
    const maxWidth = canvas.width * 0.7;
    const maxHeight = canvas.height * 0.7;

    function initializeNodes() {
      // Clear existing nodes
      nodes.length = 0;
      
      // Reset animation time
      animationTime = 0;
      
      // Create a tight initial cluster in the top-left corner
      const clusterRadius = 15;
      
      for (let i = 0; i < numNodes; i++) {
        // Initial distance from origin (clustered)
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * clusterRadius;
        
        // Initial position (all nodes start very close to origin)
        const x = originX + Math.cos(angle) * distance;
        const y = originY + Math.sin(angle) * distance;
        
        // Calculate angle from origin to node for explosion direction
        const explosionAngle = Math.atan2(y - originY, x - originX);
        
        // Create explosion velocities with variation
        // Nodes further from center get more velocity for wave effect
        const explosionForce = Math.random() * 5 + 5; // Much stronger blast
        
        // Create staggered delays for each node
        const delay = Math.random() * 0.5; // Random delay up to 0.5 seconds
        
        // Maximum distance this node will travel from origin
        const maxDistFromOrigin = (Math.random() * 0.5 + 0.5) * 
                Math.min(maxWidth, maxHeight); // Between 50-100% of max distance
        
        nodes.push({
          x: x,
          y: y,
          vx: 0, // Start with zero velocity
          vy: 0, // Velocity kicks in after delay
          size: Math.random() * 10 + 12,
          energy: 0, // Start with no energy, builds up during explosion
          emoji: vcEmojis[Math.floor(Math.random() * vcEmojis.length)],
          distance: maxDistFromOrigin,
          delay: delay
        });
      }
      console.log(`Initialized ${nodes.length} nodes for blast effect`);
    }

    function resize() {
      if (!canvas) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      console.log('Canvas resized');
    }

    function updateNode(node: typeof nodes[0], deltaTime: number) {
      // Increment animation time
      animationTime += deltaTime;
      
      // Check if this node's delay has passed
      if (animationTime > node.delay) {
        // Calculate current distance from origin
        const dx = node.x - originX;
        const dy = node.y - originY;
        const distFromOrigin = Math.sqrt(dx * dx + dy * dy);
        
        // Calculate angle from origin
        const angleFromOrigin = Math.atan2(dy, dx);
        
        // If we're early in the animation, apply explosive force
        if (animationTime < 2) { // 2 seconds of explosive force
          const explosionProgress = Math.min(1, (animationTime - node.delay) / 0.5);
          const explosionForce = 5 * explosionProgress;
          
          // Apply explosion force
          node.vx = Math.cos(angleFromOrigin) * explosionForce;
          node.vy = Math.sin(angleFromOrigin) * explosionForce;
          
          // Increase energy during explosion
          node.energy = Math.min(1, node.energy + 0.05);
        } else {
          // After explosion, gradually slow down
          node.vx *= 0.98;
          node.vy *= 0.98;
          
          // Gradually reduce energy
          node.energy = Math.max(0, node.energy - 0.01);
        }
      }

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Add some random movement
      node.vx += (Math.random() - 0.5) * 0.3;
      node.vy += (Math.random() - 0.5) * 0.3;

      // Bouncy boundary conditions
      if (node.x < 0) {
        node.vx *= -0.8;
        node.x = 0;
      } else if (node.x > maxWidth) {
        node.vx *= -0.8;
        node.x = maxWidth;
      }
      
      if (node.y < 0) {
        node.vy *= -0.8;
        node.y = 0;
      } else if (node.y > maxHeight) {
        node.vy *= -0.8;
        node.y = maxHeight;
      }
    }

    function drawNetwork(timestamp: number) {
      if (!canvas || !ctx) return;
      
      // Calculate delta time for frame-rate independent animation
      const deltaTime = timestamp ? (timestamp - lastTimestamp) / 1000 : 0;
      lastTimestamp = timestamp;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update all nodes
      nodes.forEach(node => updateNode(node, deltaTime));

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
            
            // Node interaction forces - gentler for stability
            const force = (maxDistance - distance) / maxDistance;
            if (distance < 40) {
              node.vx -= (dx / distance) * force * 0.2;
              node.vy -= (dy / distance) * force * 0.2;
              other.vx += (dx / distance) * force * 0.2;
              other.vy += (dy / distance) * force * 0.2;
            }
            
            ctx.beginPath();
            ctx.strokeStyle = baseColor + opacity + ')';
            ctx.lineWidth = 1 + combinedEnergy;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });

        // Draw node glow and emoji
        const nodeOpacity = 0.4 + node.energy * 0.5;
        const nodeSize = node.size * (1 + node.energy * 0.5);
        
        if (node.energy > 0.1) {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, nodeSize * 2
          );
          gradient.addColorStop(0, baseColor + (0.3 * node.energy) + ')');
          gradient.addColorStop(1, 'rgba(15, 240, 252, 0)');
          
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(node.x, node.y, nodeSize * 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw emoji
        ctx.font = `${nodeSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.emoji, node.x, node.y);
      });

      animationFrameId = requestAnimationFrame(drawNetwork);
    }

    // Initialize and start
    let lastTimestamp = 0;
    initializeNodes();
    resize();
    window.addEventListener('resize', resize);
    
    // Start the animation
    animationFrameId = requestAnimationFrame(drawNetwork);
    console.log('Blast animation started');

    // Create a new blast every few seconds
    const resetInterval = setInterval(() => {
      initializeNodes();
      console.log('New blast initiated');
    }, 10000); // Every 10 seconds

    return () => {
      console.log('Cleaning up background component');
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(resetInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ 
        background: 'linear-gradient(to bottom, #2B2B2B, #000000)',
        touchAction: 'none',
        opacity: 0.7
      }}
    />
  );
}