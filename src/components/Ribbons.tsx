import React, { useEffect, useRef, useState } from 'react';

interface RibbonProps {
  className?: string;
}

interface RibbonItem {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  color: string;
  opacity: number;
  speed: number;
  amplitude: number;
  phase: number;
  direction: number;
  curveAmplitude: number;
  curveFrequency: number;
  controlPoints: {
    cp1x: number;
    cp1y: number;
    cp2x: number;
    cp2y: number;
  };
}

const Ribbons: React.FC<RibbonProps> = ({ className = '' }) => {
  const ribbonContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ribbonItems, setRibbonItems] = useState<RibbonItem[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  
  // Initialize ribbons with more pronounced S-curve shapes
  useEffect(() => {
    if (ribbonContainerRef.current) {
      const containerWidth = ribbonContainerRef.current.clientWidth;
      const containerHeight = ribbonContainerRef.current.clientHeight;
      
      // Create more pronounced S-curved ribbons
      const newRibbons = Array(10).fill(0).map((_, index) => {
        // Alternate between green and purple for DNA strand appearance
        const isGreen = index % 2 === 0;
        
        // Generate ribbon position - more distributed across the container
        const x = (index % 5) * (containerWidth / 5) + Math.random() * (containerWidth / 10);
        const y = Math.floor(index / 5) * (containerHeight / 2) + Math.random() * (containerHeight / 4);
        
        // Different ribbon lengths
        const width = 250 + Math.random() * 350; // Longer ribbons (250-600px)
        
        // Make curves much more pronounced for visible S-shapes
        const curveMagnitude = 80 + Math.random() * 150; // More dramatic curves (80-230px)
        
        // Create a true S-curve with 4 control points for double curves
        // Start point is (x, y)
        // End point is (x + width, y)
        
        // First curve bends one way
        const cp1x = x + width * 0.25;
        const cp1y = y + curveMagnitude * (Math.random() > 0.5 ? 1 : -1);
        
        // Second curve bends the opposite way to create S-shape
        const cp2x = x + width * 0.75;
        const cp2y = y + curveMagnitude * (Math.random() > 0.5 ? -1 : 1);
        
        return {
          id: index,
          x: x,
          y: y,
          width: width,
          height: 6 + Math.random() * 10,    // Thicker ribbons (6-16px)
          rotation: Math.random() * 360,
          color: isGreen 
            ? `rgba(50, 205, 50, ${0.6 + Math.random() * 0.4})`  // More opaque green (0.6-1.0)
            : `rgba(138, 43, 226, ${0.6 + Math.random() * 0.4})`, // More opaque purple (0.6-1.0)
          opacity: 0.8 + Math.random() * 0.2, // Higher opacity (0.8-1.0)
          speed: 0.2 + Math.random() * 1.0,   // Moderate movement speed
          amplitude: 60 + Math.random() * 80,  // Larger movement range
          phase: Math.random() * Math.PI * 2,  // Random starting phase
          direction: Math.random() > 0.5 ? 1 : -1, // Random direction
          curveAmplitude: 30 + Math.random() * 60, // Larger curve amplitude
          curveFrequency: 0.01 + Math.random() * 0.03, // Curve frequency
          controlPoints: {
            cp1x,
            cp1y,
            cp2x,
            cp2y
          }
        };
      });
      
      setRibbonItems(newRibbons);
    }
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ribbonContainerRef.current) {
        const rect = ribbonContainerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced S-curve animation with more dramatic movements
  useEffect(() => {
    let lastTime = 0;
    
    const animateRibbons = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      // Use time to animate the ribbons
      lastTime = timestamp;
      
      if (ribbonContainerRef.current) {
        const containerWidth = ribbonContainerRef.current.clientWidth;
        const containerHeight = ribbonContainerRef.current.clientHeight;
        
        setRibbonItems(prevRibbons => 
          prevRibbons.map(ribbon => {
            // Calculate distance from mouse
            const dx = mousePosition.x - ribbon.x;
            const dy = mousePosition.y - ribbon.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Mouse influence decreases with distance but is stronger overall
            const influence = Math.min(400 / (distance + 10), 20);
            
            // Brownian motion component (random movement)
            const brownianX = (Math.random() - 0.5) * 4 * ribbon.speed;
            const brownianY = (Math.random() - 0.5) * 4 * ribbon.speed;
            
            // Sinusoidal movement for more natural flowing
            const time = Date.now() * 0.001;
            const waveOffsetX = Math.sin(time * ribbon.speed + ribbon.phase) * ribbon.curveAmplitude * 0.4;
            const waveOffsetY = Math.cos(time * ribbon.speed + ribbon.phase) * ribbon.curveAmplitude * 0.4;
            
            // Combine movements for base position
            let newX = ribbon.x + waveOffsetX + brownianX - (dx * influence * 0.003 * ribbon.speed);
            let newY = ribbon.y + waveOffsetY + brownianY - (dy * influence * 0.003 * ribbon.speed);
            
            // Ensure ribbons stay mostly on screen with some overflow allowed
            const buffer = ribbon.width / 2;
            if (newX < -buffer) newX = containerWidth + buffer/2;
            if (newX > containerWidth + buffer) newX = -buffer/2;
            if (newY < -buffer) newY = containerHeight + buffer/2;
            if (newY > containerHeight + buffer) newY = -buffer/2;
            
            // Animate the control points for a more dramatic S-curve effect
            // This creates a flowing, undulating S shape that changes over time
            const midX = ribbon.x + ribbon.width / 2;
            
            // Create more dynamic, flowing control points for the S-curve
            // First control point - affects first half of the S
            const cp1xOffset = Math.sin(time * 0.6 + ribbon.phase) * ribbon.curveAmplitude * 0.8;
            const cp1yOffset = Math.cos(time * 0.4 + ribbon.phase * 1.2) * ribbon.curveAmplitude * 1.2;
            
            // Second control point - affects second half of the S
            const cp2xOffset = Math.cos(time * 0.5 + ribbon.phase * 0.8) * ribbon.curveAmplitude * 0.8;
            const cp2yOffset = Math.sin(time * 0.3 + ribbon.phase * 1.4) * ribbon.curveAmplitude * 1.2;
            
            // Calculate new control points with time-based offsets for more dynamic movement
            const updatedControlPoints = {
              cp1x: midX - ribbon.width * 0.25 + cp1xOffset,
              cp1y: ribbon.y + (ribbon.direction * ribbon.curveAmplitude) + cp1yOffset,
              cp2x: midX + ribbon.width * 0.25 + cp2xOffset,
              cp2y: ribbon.y - (ribbon.direction * ribbon.curveAmplitude) + cp2yOffset
            };
            
            // Enhanced mouse influence on control points - create more dramatic bending
            if (distance < 400) {
              const mouseEffect = (400 - distance) / 400 * 80;
              
              // Control point 1 - moves away from mouse more dramatically
              if (Math.abs(mousePosition.y - updatedControlPoints.cp1y) < 150) {
                updatedControlPoints.cp1y += (updatedControlPoints.cp1y > mousePosition.y) ? mouseEffect : -mouseEffect;
              }
              
              // Control point 2 - moves in opposite direction for more pronounced S-shape
              if (Math.abs(mousePosition.y - updatedControlPoints.cp2y) < 150) {
                updatedControlPoints.cp2y += (updatedControlPoints.cp2y > mousePosition.y) ? -mouseEffect : mouseEffect;
              }
            }
            
            return {
              ...ribbon,
              x: newX,
              y: newY,
              controlPoints: updatedControlPoints,
              // Slightly vary opacity for shimmer effect
              opacity: ribbon.opacity * (0.9 + Math.sin(time * 0.5) * 0.1)
            };
          })
        );
      }
      
      animationFrameRef.current = requestAnimationFrame(animateRibbons);
    };
    
    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animateRibbons);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div 
      ref={ribbonContainerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(0px)' }}>
        <defs>
          <filter id="green-glow-filter">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="rgba(50, 205, 50, 0.6)" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="purple-glow-filter">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="rgba(138, 43, 226, 0.6)" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {ribbonItems.map(ribbon => {
          // Calculate the end point based on the ribbon's width
          const endX = ribbon.x + ribbon.width;
          const endY = ribbon.y;
          
          // Create SVG path for a more pronounced S-shaped ribbon
          // Using cubic bezier curves that produce a clear S-shape
          const midX = ribbon.x + ribbon.width / 2;
          
          // Create an actual S-curve with two connected bezier curves
          const pathData = `
            M ${ribbon.x},${ribbon.y} 
            Q ${ribbon.controlPoints.cp1x},${ribbon.controlPoints.cp1y} 
              ${midX},${ribbon.y} 
            Q ${ribbon.controlPoints.cp2x},${ribbon.controlPoints.cp2y} 
              ${endX},${endY}
          `;
          
          // For smoother curved effect, use a gradient stroke
          const isGreen = ribbon.color.includes('50, 205');
          const gradientId = `gradient-${ribbon.id}`;
          
          return (
            <g key={ribbon.id}>
              {/* Define a more dramatic gradient for the ribbons */}
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isGreen ? "rgba(50, 205, 50, 0.3)" : "rgba(138, 43, 226, 0.3)"} />
                <stop offset="25%" stopColor={isGreen ? "rgba(50, 205, 50, 0.9)" : "rgba(138, 43, 226, 0.9)"} />
                <stop offset="50%" stopColor={isGreen ? "rgba(60, 215, 60, 1.0)" : "rgba(148, 53, 236, 1.0)"} />
                <stop offset="75%" stopColor={isGreen ? "rgba(50, 205, 50, 0.9)" : "rgba(138, 43, 226, 0.9)"} />
                <stop offset="100%" stopColor={isGreen ? "rgba(50, 205, 50, 0.3)" : "rgba(138, 43, 226, 0.3)"} />
              </linearGradient>
              
              {/* Main ribbon path */}
              <path
                d={pathData}
                stroke={`url(#${gradientId})`}
                strokeWidth={ribbon.height}
                fill="none"
                strokeLinecap="round"
                className={`transition-opacity duration-300 ease-out ${
                  ribbon.id % 2 === 0 ? 'ribbon-animation' : 'ribbon-animation-alt'
                }`}
                style={{
                  opacity: ribbon.opacity,
                  filter: isGreen ? 'url(#green-glow-filter)' : 'url(#purple-glow-filter)',
                  transformOrigin: 'center',
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Ribbons;
