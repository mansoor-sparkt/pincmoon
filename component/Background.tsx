import Image from "next/image";
import moonBackground from '@/assets/background.jpg';

export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Image
        src={moonBackground}
        alt="background"
        fill
        priority
        className="object-cover object-center  -z-10"
      />
      {children}
    </div>
  );
}


// 'use client';

// import Image from 'next/image';
// import moonLayerImage from '@/assets/moon-layer.jpg';
// import cloudsLayerImage from '@/assets/clouds-layer.jpg';

// export default function Background({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Clouds layer - drifts slowly */}
//       <div className="absolute inset-0 animate-clouds-drift">
//         <Image
//           src={cloudsLayerImage}
//           alt="clouds background"
//           fill
//           priority
//           quality={90}
//           className="object-cover object-center"
//         />
//       </div>

//       {/* Moon layer - floats gently with glow pulse */}
//       <div className="absolute inset-0 animate-float-slow animate-glow-pulse">
//         <Image
//           src={moonLayerImage}
//           alt="moon background"
//           fill
//           priority
//           quality={90}
//           className="object-cover object-center"
//         />
//       </div>

//       {/* Content */}
//       {/* <div className="relative z-10 w-full h-full"> */}
//       {children}
//       {/* </div> */}
//     </div>
//   );
// }




// components / HeroSection.tsx
// components/ParallaxBackground.tsx
// "use client";

// import { useEffect, useRef, ReactNode } from "react";

// interface ParallaxBackgroundProps {
//   children: ReactNode;
//   className?: string;
// }

// export default function ParallaxBackground({
//   children,
//   className = "",
// }: ParallaxBackgroundProps) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Layer refs
//   const skyRef = useRef<HTMLDivElement>(null);
//   const moonRef = useRef<HTMLDivElement>(null);
//   const cloudLeftRef = useRef<HTMLDivElement>(null);
//   const cloudMidRef = useRef<HTMLDivElement>(null);
//   const cloudBottomRef = useRef<HTMLDivElement>(null);
//   const swirleRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let tx = 0, ty = 0, cx = 0, cy = 0, raf: number;

//     const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

//     const onMove = (e: MouseEvent) => {
//       const el = containerRef.current;
//       if (!el) return;
//       const r = el.getBoundingClientRect();
//       tx = ((e.clientX - r.left) / r.width - 0.5) * 2;   // -1 → 1
//       ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
//     };
//     const onLeave = () => { tx = 0; ty = 0; };

//     const el = containerRef.current;
//     el?.addEventListener("mousemove", onMove);
//     el?.addEventListener("mouseleave", onLeave);

//     let t = 0;
//     const tick = () => {
//       cx = lerp(cx, tx, 0.055);
//       cy = lerp(cy, ty, 0.055);
//       t += 0.004;

//       // ambient slow sine drift for moon
//       const moonDriftX = Math.sin(t) * 7;
//       const moonDriftY = Math.cos(t * 0.6) * 4;

//       // sky — barely moves, gives depth base
//       if (skyRef.current)
//         skyRef.current.style.transform =
//           `scale(1.1) translate(${cx * 5}px, ${cy * 3}px)`;

//       // moon — moves most, plus ambient drift
//       if (moonRef.current)
//         moonRef.current.style.transform =
//           `scale(1.1) translate(${cx * 22 + moonDriftX}px, ${cy * 14 + moonDriftY}px)`;

//       // white cloud left — moves opposite to mouse (parallax depth)
//       if (cloudLeftRef.current)
//         cloudLeftRef.current.style.transform =
//           `scale(1.1) translate(${cx * -14}px, ${cy * 10}px)`;

//       // mid warm cloud — slow, independent
//       if (cloudMidRef.current)
//         cloudMidRef.current.style.transform =
//           `scale(1.1) translate(${cx * -8}px, ${cy * 16}px)`;

//       // bottom pale cloud — very slow
//       if (cloudBottomRef.current)
//         cloudBottomRef.current.style.transform =
//           `scale(1.1) translate(${cx * 6}px, ${cy * 8}px)`;

//       // iridescent swirls bottom-right — fastest, most depth
//       if (swirleRef.current)
//         swirleRef.current.style.transform =
//           `scale(1.1) translate(${cx * -28}px, ${cy * 18}px)`;

//       raf = requestAnimationFrame(tick);
//     };
//     tick();

//     return () => {
//       el?.removeEventListener("mousemove", onMove);
//       el?.removeEventListener("mouseleave", onLeave);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   const base = {
//     position: "absolute" as const,
//     inset: "-10%",           // overshoot so edges never show on pan
//     backgroundImage: "url('/background.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center center",
//     willChange: "transform",
//     transition: "transform 0.05s linear",
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={`relative overflow-hidden ${className}`}
//       style={{ isolation: "isolate" }}
//     >
//       {/* ── Layer 0: Full sky — base, barely moves ── */}
//       <div ref={skyRef} style={{ ...base }} />

//       {/*
//        * ── Layer 1: Moon isolated ──
//        * Mask cuts out ONLY the moon (upper-left quadrant of image).
//        * The moon in the image sits roughly at 35% from left, 35% from top.
//        * We oversample the mask so it blends softly into the sky.
//        */}
//       <div
//         ref={moonRef}
//         style={{
//           ...base,
//           maskImage:
//             "radial-gradient(ellipse 30% 32% at 36% 36%, black 42%, rgba(0,0,0,0.6) 58%, transparent 75%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 30% 32% at 36% 36%, black 42%, rgba(0,0,0,0.6) 58%, transparent 75%)",
//         }}
//       />

//       {/*
//        * ── Layer 2: White fluffy cloud — left-center ──
//        * In the image this big white cloud blob is at ~8% left, 45-55% height.
//        */}
//       <div
//         ref={cloudLeftRef}
//         style={{
//           ...base,
//           maskImage:
//             "radial-gradient(ellipse 28% 20% at 12% 52%, black 35%, rgba(0,0,0,0.5) 55%, transparent 72%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 28% 20% at 12% 52%, black 35%, rgba(0,0,0,0.5) 55%, transparent 72%)",
//         }}
//       />

//       {/*
//        * ── Layer 3: Warm peach mid cloud — center-right ──
//        * The warm orange/peach cloud mass sitting right of the moon, ~55-80% x, 45-65% y
//        */}
//       <div
//         ref={cloudMidRef}
//         style={{
//           ...base,
//           maskImage:
//             "radial-gradient(ellipse 38% 22% at 68% 54%, black 30%, rgba(0,0,0,0.45) 52%, transparent 70%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 38% 22% at 68% 54%, black 30%, rgba(0,0,0,0.45) 52%, transparent 70%)",
//         }}
//       />

//       {/*
//        * ── Layer 4: Pale bottom cloud mass — lower center ──
//        * The large misty pale blue/lavender cloud at the very bottom
//        */}
//       <div
//         ref={cloudBottomRef}
//         style={{
//           ...base,
//           maskImage:
//             "radial-gradient(ellipse 70% 30% at 40% 85%, black 38%, rgba(0,0,0,0.4) 58%, transparent 75%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 70% 30% at 40% 85%, black 38%, rgba(0,0,0,0.4) 58%, transparent 75%)",
//         }}
//       />

//       {/*
//        * ── Layer 5: Iridescent swirls bottom-right ──
//        * The teal/blue/rainbow swirling wisps, ~65-100% x, 60-95% y
//        * These move the most — they're visually in the foreground
//        */}
//       <div
//         ref={swirleRef}
//         style={{
//           ...base,
//           maskImage: `
//             radial-gradient(ellipse 30% 25% at 82% 72%, black 28%, rgba(0,0,0,0.4) 50%, transparent 68%),
//             radial-gradient(ellipse 22% 18% at 70% 85%, black 25%, rgba(0,0,0,0.35) 48%, transparent 65%)
//           `,
//           WebkitMaskImage: `
//             radial-gradient(ellipse 30% 25% at 82% 72%, black 28%, rgba(0,0,0,0.4) 50%, transparent 68%),
//             radial-gradient(ellipse 22% 18% at 70% 85%, black 25%, rgba(0,0,0,0.35) 48%, transparent 65%)
//           `,
//           WebkitMaskComposite: "source-over",
//           maskComposite: "add",
//         }}
//       />

//       {/* ── Moon ambient glow pulse ── */}
//       <div
//         className="absolute pointer-events-none rounded-full"
//         style={{
//           width: "clamp(180px, 28vw, 380px)",
//           height: "clamp(180px, 28vw, 380px)",
//           left: "18%",
//           top: "8%",
//           background:
//             "radial-gradient(circle, rgba(210,170,255,0.15) 0%, rgba(190,150,235,0.06) 55%, transparent 72%)",
//           animation: "pmGlow 5s ease-in-out infinite",
//           zIndex: 1,
//         }}
//       />

//       {/* ── Your page content goes here ── */}
//       <div className="relative z-10 w-full h-full">
//         {children}
//       </div>

//       <style>{`
//         @keyframes pmGlow {
//           0%, 100% { transform: scale(1); opacity: 0.65; }
//           50%       { transform: scale(1.05); opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// }