'use client';

import { useEffect, useRef } from 'react';

interface Logo {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  rotation: number;
  angularVelocity: number;
  svg: string;
  name: string;
  image?: HTMLImageElement;
}

const PhysicsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const logosRef = useRef<Logo[]>([]);

  // Load all logos from the logos folder
  const logoFiles = [
    'go.svg',
    'elixir.svg',
    'postgresql.svg',
    'redis.svg',
    'docker.svg',
    'aws.svg',
    'git.svg',
    'linux.svg',
    'typescript.svg',
    'react.svg'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize logos
    const initLogos = async () => {
      const logoPromises = logoFiles.map(async (filename) => {
        const img = new Image();
        img.src = `/logos/${filename}`;

        return new Promise<Logo>((resolve) => {
          img.onload = () => {
            resolve({
              x: Math.random() * (canvas.width - 100) + 50,
              y: Math.random() * (canvas.height - 100) + 50,
              vx: (Math.random() - 0.5) * 0.9,
              vy: (Math.random() - 0.5) * 0.9,
              radius: 30,
              rotation: 0,
              angularVelocity: 0,
              svg: `/logos/${filename}`,
              name: filename.replace('.svg', ''),
              image: img
            });
          };
          img.onerror = () => {
            // Fallback if image fails to load
            resolve({
              x: Math.random() * (canvas.width - 100) + 50,
              y: Math.random() * (canvas.height - 100) + 50,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              radius: 30,
              rotation: 0,
              angularVelocity: (Math.random() - 0.5) * 0.02,
              svg: `/logos/${filename}`,
              name: filename.replace('.svg', '')
            });
          };
        });
      });

      logosRef.current = await Promise.all(logoPromises);
    };

    initLogos().then(() => {
      animate();
    });

    // Draw amazing background pattern
    const drawBackgroundPattern = () => {
      const time = Date.now() * 0.001;

      // Create animated geometric pattern
      ctx.save();
      ctx.globalAlpha = 0.0377;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 0.5;

      // Draw animated grid pattern
      const gridSize = 60;
      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
          const offsetX = Math.sin(time + x * 0.01) * 10;
          const offsetY = Math.cos(time + y * 0.01) * 10;

          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, 2, 0, Math.PI * 2);
          ctx.stroke();

          // Connect nearby dots
          if (x < canvas.width - gridSize) {
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y + offsetY);
            ctx.lineTo(x + gridSize + Math.sin(time + (x + gridSize) * 0.01) * 10, y + Math.cos(time + y * 0.01) * 10);
            ctx.stroke();
          }
        }
      }

      // Add flowing lines
      ctx.globalAlpha = 0.0377;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.2 * (i + 1));
        for (let x = 0; x < canvas.width; x += 20) {
          const y = canvas.height * 0.2 * (i + 1) + Math.sin(time + x * 0.01 + i) * 30;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.restore();
    };

    // Physics simulation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background pattern
      drawBackgroundPattern();

      logosRef.current.forEach((logo, i) => {
        // Update position
        logo.x += logo.vx;
        logo.y += logo.vy;
        logo.rotation += logo.angularVelocity;

        // Boundary collision
        if (logo.x - logo.radius <= 0 || logo.x + logo.radius >= canvas.width) {
          logo.vx *= -0.8; // Energy loss on bounce
          logo.x = Math.max(logo.radius, Math.min(canvas.width - logo.radius, logo.x));
        }
        if (logo.y - logo.radius <= 0 || logo.y + logo.radius >= canvas.height) {
          logo.vy *= -0.8;
          logo.y = Math.max(logo.radius, Math.min(canvas.height - logo.radius, logo.y));
        }

        // Logo-to-logo collision
        for (let j = i + 1; j < logosRef.current.length; j++) {
          const other = logosRef.current[j];
          const dx = other.x - logo.x;
          const dy = other.y - logo.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = logo.radius + other.radius;

          if (distance < minDistance) {
            // Collision detected - implement elastic collision
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            // Rotate velocities
            const vx1 = logo.vx * cos + logo.vy * sin;
            const vy1 = logo.vy * cos - logo.vx * sin;
            const vx2 = other.vx * cos + other.vy * sin;
            const vy2 = other.vy * cos - other.vx * sin;

            // Collision response (elastic)
            const finalVx1 = vx2 * 0.8;
            const finalVx2 = vx1 * 0.8;

            // Rotate back
            logo.vx = finalVx1 * cos - vy1 * sin;
            logo.vy = vy1 * cos + finalVx1 * sin;
            other.vx = finalVx2 * cos - vy2 * sin;
            other.vy = vy2 * cos + finalVx2 * sin;

            // Separate overlapping logos
            const overlap = minDistance - distance;
            const separationX = (dx / distance) * overlap * 0.5;
            const separationY = (dy / distance) * overlap * 0.5;

            logo.x -= separationX;
            logo.y -= separationY;
            other.x += separationX;
            other.y += separationY;

            // Add some angular velocity on collision
            logo.angularVelocity += (Math.random() - 0.5) * 0.01;
            other.angularVelocity += (Math.random() - 0.5) * 0.01;
          }
        }

        // Draw logo
        ctx.save();
        ctx.translate(logo.x, logo.y);
        ctx.rotate(logo.rotation);

        // Draw the actual tech logo if available
        if (logo.image && logo.image.complete) {
          ctx.globalAlpha = .119999; // More visible

  
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;

          ctx.drawImage(
            logo.image,
            -logo.radius,
            -logo.radius,
            logo.radius * 2,
            logo.radius * 2
          );

          // Reset shadow
          ctx.shadowBlur = 0;
        } else {
          // Fallback: draw circle with initial
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(0, 0, logo.radius, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
          ctx.fill();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.font = '14px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(logo.name.charAt(0).toUpperCase(), 0, 0);
        }

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="physics-canvas" />;
};

export default PhysicsBackground;
