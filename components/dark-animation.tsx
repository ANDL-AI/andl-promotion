"use client";

import { useEffect, useRef } from "react";

const DarkBackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const render = () => {
      // Fill background with a dark blue–gray color
      ctx.fillStyle = "#0F172A";
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Draw a radial gradient circle at the current mouse position
      const radius = 150;
      const gradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        radius
      );
      // Using your provided accent colors for stops
      gradient.addColorStop(0, "#8B5CF6");
      gradient.addColorStop(0.3, "#7766F6");
      gradient.addColorStop(0.5, "#636FF6");
      gradient.addColorStop(0.7, "#4F79F6");
      gradient.addColorStop(1, "#3B82F6");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, radius, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
      }}
    />
  );
};

export default DarkBackgroundAnimation;
