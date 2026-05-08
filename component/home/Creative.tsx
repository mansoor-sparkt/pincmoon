// "use client";

// import { motion, useScroll, useTransform } from "motion/react";
// import Image from "next/image";
// import { useRef } from "react";

// import leftCurve from '@/assets/left-curves.png'

// const ease = [0.22, 1, 0.36, 1] as const;

// const fadeLeft = (delay = 0) => ({
//   initial: { opacity: 0, x: -40, filter: "blur(8px)" },
//   whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
//   viewport: { once: false, margin: "-80px" } as const,
//   transition: { duration: 0.9, delay, ease },
// });

// const services = [
//   {
//     title: "Feature Films",
//     tag: "FILM",
//     body: "Original, director-driven films that explore compelling characters and bold themes. Our focus is on stories that are cinematic in scale but intimate in emotion.",
//   },
//   {
//     title: "Series & Long-Format",
//     tag: "SERIES",
//     body: "Long-form narratives that allow worlds and characters to unfold over time — designed for modern streaming and broadcast platforms.",
//   },
//   {
//     title: "Branded Films",
//     tag: "BRAND",
//     body: "Creative collaborations with brands that go beyond advertising and embrace storytelling as a meaningful way to connect with audiences.",
//   },
//   {
//     title: "Creative Technology",
//     tag: "TECH",
//     body: "Through BharatVerse, we explore how technology and AI can deepen audience understanding and open new possibilities for storytelling.",
//   },
// ];

// function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
//   const ref = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // scroll down  → card rises up into view (120→0)
//   // scroll up    → card falls back down (0→120) — reversed naturally
//   const y = useTransform(scrollYProgress, [0, 0.4, 1], [120, 0, 120]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
//   const filter = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.7, 1],
//     ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]
//   );

//   return (
//     <motion.div
//       ref={ref}
//       style={{ y, opacity, filter }}
//       transition={{ delay: index * 0.05 }}
//       className="bg-white/70 backdrop-blur-sm border border-[#e0d9e6]/80 rounded-2xl px-8 py-7 flex flex-col gap-4 hover:border-[#b2947a]/40 hover:bg-white/90 transition-colors duration-500 group"
//     >
//       {/* Title + tag */}
//       <div className="flex items-center gap-4 flex-wrap">
//         <h3 className="font-playfair font-bold text-[clamp(17px,1.8vw,22px)] text-[#333d42] leading-snug">
//           {service.title}
//         </h3>
//         <span className="font-poppins text-[clamp(9px,0.75vw,11px)] tracking-[2.5px] text-[#333d42]/50 border border-[#333d42]/25 rounded-full px-3 py-1 group-hover:border-[#b2947a]/50 group-hover:text-[#b2947a] transition-colors duration-300">
//           {service.tag}
//         </span>
//       </div>

//       {/* Body */}
//       <p className="font-poppins font-normal text-[clamp(12px,1vw,14px)] leading-[1.8] text-[#333d42]/60">
//         {service.body}
//       </p>
//     </motion.div>
//   );
// }

// const Creative = () => {
//   return (
//     <section className="w-full bg-[#f5f2f0] relative overflow-hidden px-6 md:px-12 lg:px-20 py-20 lg:py-28">

//       {/* ── Concentric arc lines ───────────────────────────────── */}
//       <div className="absolute top-1/2 bottom-0 left-0 w-[55%] h-full pointer-events-none">

//         {/* <div className="relative h-1/2"> */}
//         <Image src={leftCurve} alt="curve svg" fill className="object-contain object-top" />
//         {/* </div> */}
//       </div>

//       {/* ── Main grid ──────────────────────────────────────────── */}
//       <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

//         {/* ── LEFT ──────────────────────────────────────────────── */}
//         <div className="lg:sticky lg:top-32 flex flex-col gap-6">
//           <motion.p
//             {...fadeLeft(0.1)}
//             className="font-poppins text-[clamp(10px,1vw,12px)] tracking-[4px] uppercase text-[#b2947a] font-medium"
//           >
//             What We Create
//           </motion.p>

//           <motion.h2
//             {...fadeLeft(0.2)}
//             className="font-playfair font-normal text-[clamp(36px,5vw,68px)] leading-[1.05] text-[#333d42]"
//           >
//             Ideas in the
//             <br />
//             form
//             <br />
//             <span className="italic text-[#b2947a]">they need</span>
//           </motion.h2>

// <motion.p
//   {...fadeLeft(0.35)}
//   className="font-poppins font-normal text-[clamp(13px,1.2vw,15px)] leading-[1.8] text-[#333d42]/60 max-w-[380px]"
// >
//   PincMoon develops and produces projects across multiple formats,
//   allowing ideas to evolve in the form that suits them best.
// </motion.p>
//         </div>

//         {/* ── RIGHT: scroll-driven cards ────────────────────────── */}
//         <div className="flex flex-col gap-5">
//           {services.map((s, i) => (
//             <ServiceCard key={s.tag} service={s} index={i} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// export default Creative

"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  cubicBezier,
  MotionStyle,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import leftCurve from "@/assets/left-curves.png";

const easeArray = [0.22, 1, 0.36, 1] as const;
const smoothEase = cubicBezier(...easeArray);

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40, filter: "blur(8px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease: easeArray },
});

const services = [
  {
    title: "Feature Films",
    tag: "FILM",
    body: "Original, director-driven films that explore compelling characters and bold themes. Our focus is on stories that are cinematic in scale but intimate in emotion.",
  },
  {
    title: "Series & Long-Format",
    tag: "SERIES",
    body: "Long-form narratives that allow worlds and characters to unfold over time — designed for modern streaming and broadcast platforms.",
  },
  {
    title: "Branded Films",
    tag: "BRAND",
    body: "Creative collaborations with brands that go beyond advertising and embrace storytelling as a meaningful way to connect with audiences.",
  },
  {
    title: "Creative Technology",
    tag: "TECH",
    body: "Through BharatVerse, we explore how technology and AI can deepen audience understanding and open new possibilities for storytelling.",
  },
];

// Each card gets this much scroll range (in vh) to animate in
// Total section height = 100vh + (cardCount × SCROLL_PER_CARD)vh
const SCROLL_PER_CARD = 70;
const STACK_OFFSET = 18; // px each card is offset below the previous when stacked

function ServiceCard({
  service,
  index,
  progress,
  total,
}: {
  service: (typeof services)[0];
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  // Divide progress [0, 1] into equal slices per card
  const sliceSize = 1 / total;
  const start = index * sliceSize;       // when THIS card starts moving
  const land = start + sliceSize * 0.7; // when THIS card fully lands (70% into its slice)

  // Where it lands: stacked offset (first card at 0px, second at 18px, etc.)
  const landedY = index * STACK_OFFSET;

  const y = useTransform(
    progress,
    [start, land],
    ["110vh", `${landedY}px`],
    { ease: smoothEase }
  );

  const opacity = useTransform(
    progress,
    [start, start + sliceSize * 0.15],
    [0, 1]
  );

  // Cards underneath get very slightly smaller for depth
  const scale = useTransform(progress, [land, 1], [1, 1 - (total - 1 - index) * 0.015]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        zIndex: index + 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      } as MotionStyle}
    >
      <div className="rounded-[20px] p-[1px] bg-gradient-to-br from-white/80 to-[#90A1B9]/80 ">
        <div className="bg-[#F8F7F6] rounded-[20px]">
          <div className="rounded-[19px] bg-gradient-to-tl from-white from-10% to-[#D9D9D94D] to-90% py-8 px-6 md:py-[74px] md:px-[60px] gap-4 flex flex-col justify-center">
            <div className="flex items-center gap-4 flex-wrap">
              <h3 className="font-playfair-sc font-medium text-[clamp(20px,1.8vw,32px)] text-[#333d42] leading-snug">
                {service.title}
              </h3>
              <span className="font-poppins text-[clamp(12px,1vw,16px)] tracking-[2.5px] text-[#C7B6AA] border border-[#C7B6AA] rounded-full px-4 py-2">
                {service.tag}
              </span>
            </div>
            <p className="font-poppins font-light text-[clamp(14px,1vw,16px)] leading-[2.2] text-[#353535B2]/70">
              {service.body}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Creative = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Tight spring = card responds almost immediately to scroll
  // This is what makes it feel like YOU are pulling the card up
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const totalExtraScroll = services.length * SCROLL_PER_CARD;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F8F7F6] w-full"
      id="ideas"
      // 100vh = the visible sticky screen
      // + (4 × 70vh) = scroll budget for 4 cards = 380vh total
      // Feels fast because spring stiffness:100 makes cards snap in quickly
      style={{ height: `calc(100vh + ${totalExtraScroll}vh)` }}
    >
      {/* Sticky viewport — always 100vh, pinned to top */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-6 md:px-12 lg:px-20">

        {/* Background Decorative */}
        <div className="absolute bottom-0 left-0 w-[55%] h-[75%] pointer-events-none">
          <Image src={leftCurve} alt="" fill className="object-contain object-left-bottom opacity-50" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* LEFT: Static heading */}
          <div className="flex flex-col gap-6">
            <motion.p {...fadeLeft(0.1)} className="font-poppins text-[clamp(10px,0.9vw,16px)] tracking-[5px] uppercase  text-[#B09393] font-bold">
              What We Create
            </motion.p>
            <motion.h2 {...fadeLeft(0.2)} className="font-playfair-sc font-normal text-[clamp(36px,5vw,72px)] leading-[1.05] text-[#353535]">
              Ideas in the<br />form<br />
              <span className="italic text-[#B09393]">they need</span>
            </motion.h2>
            <motion.p {...fadeLeft(0.35)} className="font-poppins font-light text-[clamp(16px,1.2vw,20px)] leading-[2] text-[#353535B2]/70 max-w-[380px]">
              PincMoon develops and produces projects across multiple formats,
              allowing ideas to evolve in the form that suits them best.
            </motion.p>
          </div>

          {/* RIGHT: Stacking cards */}
          <div className="relative h-[320px] w-full">
            {services.map((s, i) => (
              <ServiceCard
                key={s.tag}
                index={i}
                service={s}
                progress={smoothProgress}
                total={services.length}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Creative;


