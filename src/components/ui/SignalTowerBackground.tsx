import { useEffect, useRef, useState } from "react";

interface Wave {
  radius: number;
  opacity: number;
  speed: number;
  maxRadius: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const SignalTowerBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wavesRef = useRef<Wave[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let towerX = 0;
    let towerY = 0;

    // #FCA41C color theme
    const primaryColor = { r: 252, g: 164, b: 28 };
    const secondaryColor = { r: 255, g: 200, b: 100 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      towerX = canvas.width * 0.5;
      towerY = canvas.height * 0.42;
    };

    const createWave = (): Wave => ({
      radius: 0,
      opacity: 1,
      speed: 1.2 + Math.random() * 0.8,
      maxRadius: Math.max(canvas.width, canvas.height) * 1.2,
    });

    const initWaves = () => {
      wavesRef.current = [];
      for (let i = 0; i < 5; i++) {
        const wave = createWave();
        wave.radius = (i / 5) * 400;
        wave.opacity = 1 - wave.radius / wave.maxRadius;
        wavesRef.current.push(wave);
      }
    };

    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 1.5;
      return {
        x: towerX,
        y: towerY - 90,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        life: 0,
        maxLife: 60 + Math.random() * 60,
        size: 2 + Math.random() * 3,
      };
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 30; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const drawTower = () => {
      if (!ctx) return;

      const mouseInfluenceX = (mouseRef.current.x - canvas.width / 2) * 0.01;
      const mouseInfluenceY = (mouseRef.current.y - canvas.height / 2) * 0.005;
      const adjustedX = towerX + mouseInfluenceX;
      const adjustedY = towerY + mouseInfluenceY;

      // Base glow
      const glowGradient = ctx.createRadialGradient(
        adjustedX,
        adjustedY - 20,
        0,
        adjustedX,
        adjustedY - 20,
        150
      );
      glowGradient.addColorStop(
        0,
        `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.4)`
      );
      glowGradient.addColorStop(
        0.5,
        `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.15)`
      );
      glowGradient.addColorStop(
        1,
        `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0)`
      );
      ctx.beginPath();
      ctx.arc(adjustedX, adjustedY - 20, 150, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Tower shadow
      ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
      ctx.beginPath();
      ctx.ellipse(adjustedX + 5, adjustedY + 85, 40, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tower main structure with gradient
      const towerGradient = ctx.createLinearGradient(
        adjustedX - 30,
        adjustedY + 80,
        adjustedX + 30,
        adjustedY - 80
      );
      towerGradient.addColorStop(
        0,
        `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.9)`
      );
      towerGradient.addColorStop(
        0.5,
        `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, 1)`
      );
      towerGradient.addColorStop(
        1,
        `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.95)`
      );

      ctx.strokeStyle = towerGradient;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Main tower frame
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(adjustedX - 30, adjustedY + 80);
      ctx.lineTo(adjustedX - 8, adjustedY - 50);
      ctx.lineTo(adjustedX, adjustedY - 70);
      ctx.lineTo(adjustedX + 8, adjustedY - 50);
      ctx.lineTo(adjustedX + 30, adjustedY + 80);
      ctx.stroke();

      // Cross beams with depth
      ctx.lineWidth = 2.5;
      const beamPositions = [
        { y: 50, width: 22 },
        { y: 20, width: 18 },
        { y: -10, width: 14 },
        { y: -35, width: 10 },
      ];

      beamPositions.forEach((beam) => {
        ctx.beginPath();
        ctx.moveTo(adjustedX - beam.width, adjustedY + beam.y);
        ctx.lineTo(adjustedX + beam.width, adjustedY + beam.y);
        ctx.stroke();
      });

      // Diagonal cross beams
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(adjustedX - 22, adjustedY + 50);
      ctx.lineTo(adjustedX + 18, adjustedY + 20);
      ctx.moveTo(adjustedX + 22, adjustedY + 50);
      ctx.lineTo(adjustedX - 18, adjustedY + 20);
      ctx.moveTo(adjustedX - 18, adjustedY + 20);
      ctx.lineTo(adjustedX + 14, adjustedY - 10);
      ctx.moveTo(adjustedX + 18, adjustedY + 20);
      ctx.lineTo(adjustedX - 14, adjustedY - 10);
      ctx.stroke();

      // Antenna arms
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(adjustedX - 6, adjustedY - 60);
      ctx.lineTo(adjustedX - 25, adjustedY - 80);
      ctx.moveTo(adjustedX + 6, adjustedY - 60);
      ctx.lineTo(adjustedX + 25, adjustedY - 80);
      ctx.stroke();

      // Small antenna elements
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(adjustedX - 25, adjustedY - 80);
      ctx.lineTo(adjustedX - 28, adjustedY - 85);
      ctx.moveTo(adjustedX + 25, adjustedY - 80);
      ctx.lineTo(adjustedX + 28, adjustedY - 85);
      ctx.stroke();

      // Antenna pole
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(adjustedX, adjustedY - 70);
      ctx.lineTo(adjustedX, adjustedY - 95);
      ctx.stroke();

      // Pulsing antenna top
      const pulseIntensity = 0.6 + Math.sin(Date.now() * 0.006) * 0.4;
      const antennaGlow = ctx.createRadialGradient(
        adjustedX,
        adjustedY - 95,
        0,
        adjustedX,
        adjustedY - 95,
        40
      );
      antennaGlow.addColorStop(
        0,
        `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${pulseIntensity})`
      );
      antennaGlow.addColorStop(
        0.3,
        `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, ${
          pulseIntensity * 0.6
        })`
      );
      antennaGlow.addColorStop(
        0.6,
        `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${
          pulseIntensity * 0.2
        })`
      );
      antennaGlow.addColorStop(
        1,
        `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0)`
      );
      ctx.beginPath();
      ctx.arc(adjustedX, adjustedY - 95, 40, 0, Math.PI * 2);
      ctx.fillStyle = antennaGlow;
      ctx.fill();

      // Antenna tip
      ctx.beginPath();
      ctx.arc(adjustedX, adjustedY - 95, 6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${
        secondaryColor.b
      }, ${0.9 + pulseIntensity * 0.1})`;
      ctx.fill();

      // Inner bright dot
      ctx.beginPath();
      ctx.arc(adjustedX, adjustedY - 95, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${pulseIntensity})`;
      ctx.fill();
    };

    const drawWaves = () => {
      if (!ctx || !canvas) return;

      const mouseInfluence = 0.03;
      const offsetX = (mouseRef.current.x - canvas.width / 2) * mouseInfluence;
      const offsetY = (mouseRef.current.y - canvas.height / 2) * mouseInfluence;
      const waveOriginX = towerX + offsetX;
      const waveOriginY = towerY - 95 + offsetY;

      wavesRef.current.forEach((wave, index) => {
        if (wave.opacity <= 0.05 || wave.radius < 10) return;

        const innerRadius = Math.max(0, wave.radius - 3);

        // Main wave ring
        const gradient = ctx.createRadialGradient(
          waveOriginX,
          waveOriginY,
          innerRadius,
          waveOriginX,
          waveOriginY,
          wave.radius + 5
        );

        const alpha = wave.opacity * 0.8;
        gradient.addColorStop(
          0,
          `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0)`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${alpha})`
        );
        gradient.addColorStop(
          0.6,
          `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${
            secondaryColor.b
          }, ${alpha * 0.8})`
        );
        gradient.addColorStop(
          1,
          `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0)`
        );

        ctx.beginPath();
        ctx.arc(waveOriginX, waveOriginY, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4 + (1 - wave.radius / wave.maxRadius) * 6;
        ctx.stroke();

        // Outer glow for waves
        if (wave.opacity > 0.3) {
          ctx.beginPath();
          ctx.arc(waveOriginX, waveOriginY, wave.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${
            primaryColor.b
          }, ${wave.opacity * 0.15})`;
          ctx.lineWidth = 15;
          ctx.stroke();
        }
      });
    };

    const updateWaves = () => {
      wavesRef.current.forEach((wave) => {
        wave.radius += wave.speed;
        wave.opacity = Math.max(0, 1 - wave.radius / wave.maxRadius);

        if (wave.radius >= wave.maxRadius) {
          wave.radius = 0;
          wave.opacity = 1;
          wave.speed = 1.2 + Math.random() * 0.8;
        }
      });
    };

    const drawParticles = () => {
      if (!ctx || !canvas) return;

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.01; // slight gravity
        particle.life++;

        const lifeRatio = particle.life / particle.maxLife;
        const alpha = Math.max(0, 1 - lifeRatio);

        if (alpha > 0) {
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size
          );
          gradient.addColorStop(
            0,
            `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, ${alpha})`
          );
          gradient.addColorStop(
            0.5,
            `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${
              alpha * 0.6
            })`
          );
          gradient.addColorStop(
            1,
            `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0)`
          );

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle();
        }
      });
    };

    const animate = () => {
      if (!ctx || !canvas) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Clear canvas with transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw elements
      drawWaves();
      drawParticles();
      drawTower();

      // Update
      updateWaves();

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    initWaves();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initWaves();
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDarkMode]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};

export default SignalTowerBackground;
