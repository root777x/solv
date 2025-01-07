import { motion } from 'framer-motion';

const tokenStyles = {
  base: {
    borderRadius: '50%',
    background: 'linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(122,122,122,0.1) 100%)',
    boxShadow: `
      8px 8px 24px rgba(0,0,0,0.4),
      inset 2px 2px 4px rgba(255,255,255,0.2),
      inset -2px -2px 4px rgba(0,0,0,0.2)
    `
  },
  inner: {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%)',
    border: '1px solid rgba(255,255,255,0.1)',
    filter: 'blur(1px)'
  },
  highlight: {
    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 70%)',
    opacity: 0.6
  }
};

const Token = ({ x, y, scale = 1, rotation = 0, delay = 0, depth = 0, floatRange = 50 }) => {
  const baseY = parseInt(y);
  
  return (
    <motion.div
      className="absolute"
      style={{ 
        x,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        zIndex: depth
      }}
      initial={{ opacity: 0, scale: 0, y: baseY }}
      animate={{ 
        opacity: 1,
        rotate: rotation,
        scale: [scale * 0.9, scale * 1.1, scale],
        y: [baseY, baseY - floatRange, baseY],
        z: [0, depth * 10, 0]
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <div 
        className="relative"
        style={{
          width: `${140 * scale}px`,
          height: `${140 * scale}px`,
          transform: `perspective(1000px) rotateX(45deg) rotateY(${rotation}deg)`,
          ...tokenStyles.base
        }}
      >
        <div className="absolute inset-2 rounded-full" style={tokenStyles.inner} />
        <div className="absolute inset-0 rounded-full" style={tokenStyles.highlight} />
      </div>
    </motion.div>
  );
};

const generateZonedTokens = () => {
  const zones = [
    { area: 'top-left', x: 0, y: 0 },
    { area: 'top-right', x: 50, y: 0 },
    { area: 'bottom-left', x: 0, y: 50 },
    { area: 'bottom-right', x: 50, y: 50 },
    { area: 'center', x: 25, y: 25 }
  ];

  return zones.flatMap(zone => 
    Array.from({ length: 6 }, (_, i) => ({
      x: `${zone.x + Math.random() * 50}%`,
      y: `${zone.y + Math.random() * 50}%`,
      scale: 0.3 + Math.random() * 0.7,
      rotation: Math.random() * 360,
      delay: Math.random() * 2,
      depth: Math.floor(Math.random() * 10),
      floatRange: 30 + Math.random() * 40
    }))
  );
};

export const TokenAnimation = () => {
  const tokens = generateZonedTokens();
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {tokens.map((token, i) => (
        <Token key={i} {...token} />
      ))}
    </div>
  );
};