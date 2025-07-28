import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();
  const particlesRef = useSignal<Particle[]>([]);
  const mouseRef = useSignal({ x: 0, y: 0 });
  const animationRef = useSignal<number>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = $(() => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });

    const createParticles = $(() => {
      if (!canvas) return;
      
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }

      particlesRef.value = particles;
    });

    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Check if dark mode is active and set background
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        // Dark mode background with gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#0f172a');
        gradient.addColorStop(0.5, '#1e293b');
        gradient.addColorStop(1, '#334155');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Light mode background with gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.5, '#f8fafc');
        gradient.addColorStop(1, '#f1f5f9');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const particles = particlesRef.value;
      const mouse = mouseRef.value;

      particles.forEach((particle, index) => {
        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.vx -= (dx / distance) * force * 0.01;
          particle.vy -= (dy / distance) * force * 0.01;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Check if dark mode is active
        const isDark = document.documentElement.classList.contains('dark');
        const particleColor = isDark 
          ? `rgba(96, 165, 250, ${particle.opacity * 1.5})` 
          : `rgba(102, 126, 234, ${particle.opacity})`;
        
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            const connectionColor = isDark 
              ? `rgba(96, 165, 250, ${0.25 * (1 - distance / 100)})` 
              : `rgba(102, 126, 234, ${0.1 * (1 - distance / 100)})`;
            
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animationRef.value = requestAnimationFrame(animate);
    };

    const handleMouseMove = $((e: MouseEvent) => {
      mouseRef.value = { x: e.clientX, y: e.clientY };
    });

    const handleResize = $(() => {
      resizeCanvas();
      createParticles();
    });

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      // Force a redraw when theme changes
      if (canvas && ctx) {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
          // Dark mode background with gradient
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, '#0f172a');
          gradient.addColorStop(0.5, '#1e293b');
          gradient.addColorStop(1, '#334155');
          ctx.fillStyle = gradient;
        } else {
          // Light mode background with gradient
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, '#ffffff');
          gradient.addColorStop(0.5, '#f8fafc');
          gradient.addColorStop(1, '#f1f5f9');
          ctx.fillStyle = gradient;
        }
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    cleanup(() => {
      if (animationRef.value) {
        cancelAnimationFrame(animationRef.value);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    });
  });

  return (
    <canvas
      ref={canvasRef}
      class="fixed inset-0 pointer-events-none z-0"
      style="background: transparent;"
    />
  );
}); 