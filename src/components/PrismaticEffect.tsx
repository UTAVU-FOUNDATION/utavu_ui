import React, { useEffect, useRef } from 'react';

interface PrismaticEffectProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const PrismaticEffect: React.FC<PrismaticEffectProps> = ({ 
  children, 
  intensity = 'medium',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    
    if (!container || !glow) return;
    
    // Performance optimization: Use requestAnimationFrame
    let rafId: number;
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate relative position within the element
        const relativeX = x / rect.width;
        const relativeY = y / rect.height;
        
        // Map position to glow color and position
        updateGlowEffect(relativeX, relativeY);
      });
    };
    
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        container.classList.add('scrolling');
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        container.classList.remove('scrolling');
      }, 150);
    };
    
    const updateGlowEffect = (relX: number, relY: number) => {
      if (!glow) return;
      
      // Calculate angle to create dynamic shadow
      const angle = Math.atan2(relY - 0.5, relX - 0.5) * (180 / Math.PI);
      
      // Map distance from center to intensity
      const centerDist = Math.sqrt(Math.pow(relX - 0.5, 2) + Math.pow(relY - 0.5, 2)) * 2;
      const glowIntensity = Math.max(0, 1 - centerDist) * getIntensityFactor();
      
      // Apply rotation based on angle for dynamic light refraction
      glow.style.transform = `rotate(${angle}deg)`;
      
      // Green-purple balance based on position
      const greenAmount = relX;
      const purpleAmount = 1 - relX;
      
      glow.style.background = `
        radial-gradient(
          circle at ${relX * 100}% ${relY * 100}%,
          rgba(50, 205, 50, ${glowIntensity * greenAmount}),
          rgba(138, 43, 226, ${glowIntensity * purpleAmount})
        )
      `;
    };
    
    const getIntensityFactor = () => {
      switch (intensity) {
        case 'low': return 0.2;
        case 'high': return 0.5;
        default: return 0.3; // medium
      }
    };
    
    // Add event listeners with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      clearTimeout(scrollTimeout);
    };
  }, [intensity]);
  
  return (
    <div 
      ref={containerRef} 
      className={`prismatic-container ${className}`}
      data-intensity={intensity}
    >
      <div ref={glowRef} className="prismatic-glow" />
      <div className="prismatic-content">
        {children}
      </div>
    </div>
  );
};

export default PrismaticEffect;
