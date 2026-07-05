"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Brain, Code2, Database, Bot } from "lucide-react";

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 70; // Adjust for density
    
    // Resize handler
    const setCanvasSize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = canvas.parentElement?.clientHeight || 450;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Mouse tracking for interactivity
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const isDark = resolvedTheme !== "light";
    const particleColor = isDark ? "rgba(94, 234, 212, 0.7)" : "rgba(13, 148, 136, 0.5)";
    const lineColor = isDark ? "rgba(124, 92, 252, 0.2)" : "rgba(124, 92, 252, 0.15)";

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 1 - 0.5) * 1.5;
        this.speedY = (Math.random() * 1 - 0.5) * 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas!.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas!.height || this.y < 0) this.speedY = -this.speedY;

        // Mouse interaction
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            // Push away from mouse
            this.x -= forceDirectionX * force * 2;
            this.y -= forceDirectionY * force * 2;
          }
        }
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = particleColor;
        ctx!.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    init();

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            ctx!.beginPath();
            ctx!.strokeStyle = lineColor;
            ctx!.lineWidth = 1;
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    let animationId: number;
    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [resolvedTheme]);

  return (
    <div className="relative h-[320px] w-full md:h-[450px] overflow-hidden flex items-center justify-center">
      {/* Background Neural Net */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-80"
      />

      {/* Foreground Floating Icons */}
      <div className="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center">
        {/* Core Nexus Center */}
        <div className="absolute z-20 flex flex-col items-center justify-center bg-card/60 backdrop-blur-md border border-purple/30 rounded-full w-28 h-28 shadow-[0_0_40px_rgba(124,92,252,0.3)] animate-float">
          <span className="font-display font-bold text-xl text-foreground tracking-widest">NEXUS</span>
        </div>

        {/* Orbiting / Floating Tech Cards */}
        {/* Top Left */}
        <div className="absolute top-[10%] left-[10%] bg-card/50 backdrop-blur-md border border-cyan/30 rounded-xl p-4 shadow-[0_4px_20px_rgba(94,234,212,0.1)] animate-float-delayed flex items-center gap-3">
          <Code2 className="text-cyan w-6 h-6" />
          <span className="font-display font-medium text-sm text-foreground">Frontend</span>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-[10%] right-[10%] bg-card/50 backdrop-blur-md border border-purple/30 rounded-xl p-4 shadow-[0_4px_20px_rgba(124,92,252,0.1)] animate-float-delayed flex items-center gap-3">
          <Bot className="text-purple w-6 h-6" />
          <span className="font-display font-medium text-sm text-foreground">AI Agents</span>
        </div>

        {/* Top Right */}
        <div className="absolute top-[20%] right-[0%] bg-card/40 backdrop-blur-md border border-border rounded-xl p-3 animate-float flex items-center gap-2">
          <Brain className="text-muted-foreground w-5 h-5" />
          <span className="font-mono text-xs text-muted-foreground">LLMs</span>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-[20%] left-[0%] bg-card/40 backdrop-blur-md border border-border rounded-xl p-3 animate-float flex items-center gap-2">
          <Database className="text-muted-foreground w-5 h-5" />
          <span className="font-mono text-xs text-muted-foreground">Backend</span>
        </div>
      </div>
    </div>
  );
}
