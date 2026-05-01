import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    const particles = [];
    // Soft gradient colors (blue, purple, pink, orange)
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f97316"];
    
    // Create particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 40 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // We want an additive/lighter blend mode to make them look like soft glowing lights
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Movement (Zero Gravity Drift)
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls gently
        if (p.x - p.radius > width) p.x = -p.radius;
        if (p.x + p.radius < 0) p.x = width + p.radius;
        if (p.y - p.radius > height) p.y = -p.radius;
        if (p.y + p.radius < 0) p.y = height + p.radius;

        // Mouse Repel (subtle interaction)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }

        // Draw particle with soft glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        // Deep fade so it feels extremely soft
        gradient.addColorStop(0, p.color + "40"); // 25% opacity at center
        gradient.addColorStop(1, p.color + "00"); // 0% opacity at edge

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -1,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
}
