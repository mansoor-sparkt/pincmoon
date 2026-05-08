// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'motion/react';

// interface Ripple {
//   id: number;
//   x: number;
//   y: number;
// }

// interface RippleWaveProps {
//   maxRipples?: number;
// }

// export function RippleWave({ maxRipples = 6 }: RippleWaveProps) {
//   const [ripples, setRipples] = useState<Ripple[]>([]);
//   const rippleCountRef = useRef(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = container.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const newRipple: Ripple = {
//         id: rippleCountRef.current++,
//         x,
//         y,
//       };

//       setRipples((prev) => {
//         const updated = [...prev, newRipple];
//         return updated.length > maxRipples ? updated.slice(-maxRipples) : updated;
//       });

//       // Remove ripple after animation completes
//       setTimeout(() => {
//         setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
//       }, 1200);
//     };

//     container.addEventListener('mousemove', handleMouseMove);
//     return () => container.removeEventListener('mousemove', handleMouseMove);
//   }, [maxRipples]);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 overflow-hidden pointer-events-none z-0"
//     >
//       <AnimatePresence>
//         {ripples.map((ripple) => (
//           <motion.div
//             key={ripple.id}
//             initial={{ scale: 0, opacity: 0.6 }}
//             animate={{ scale: 4, opacity: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{
//               duration: 1.2,
//               ease: [0.4, 0, 0.2, 1],
//             }}
//             className="absolute w-24 h-24 border border-white/10 rounded-full"
//             style={{
//               left: ripple.x - 48,
//               top: ripple.y - 48,
//             }}
//           />
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface RippleWaveProps {
  maxRipples?: number;
  parentRef: React.RefObject<HTMLDivElement>;
}

export function RippleWave({ maxRipples = 6, parentRef }: RippleWaveProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleCountRef = useRef(0);

  useEffect(() => {
    const container = parentRef.current;
    if (!container) {
      console.log("[v0] RippleWave: parent container not found");
      return;
    }

    console.log("[v0] RippleWave: event listener attached to parent");

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple: Ripple = {
        id: rippleCountRef.current++,
        x,
        y,
      };

      setRipples((prev) => {
        const updated = [...prev, newRipple];
        return updated.length > maxRipples ? updated.slice(-maxRipples) : updated;
      });

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1200);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [maxRipples, parentRef]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute w-24 h-24 border-2 border-[#333d42]/30 rounded-full pointer-events-none"
            style={{
              left: ripple.x - 48,
              top: ripple.y - 48,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

