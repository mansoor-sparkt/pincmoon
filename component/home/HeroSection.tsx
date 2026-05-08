

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import starone from '@/assets/start-one.png';
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

  }

  return (
    <section className="relative">
      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#333d42]/40" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#333d42]/40" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#333d42]/40" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#333d42]/40" />

      <div className="max-w-[1440px] min-h-screen mx-auto flex flex-col justify-center items-center text-center relative overflow-hidden gap-4">

        {/* ── Star 1 – top-left ──
            Outer: entrance pop-in
            Inner: breathe loop (scale + opacity, mirrors CSS star-breathe) */}
        <motion.div
          className="absolute top-[25%] left-[15%]"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "backOut" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.38, 1],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              // matches CSS: animation: star-breathe 2.2s ease-in-out infinite
            }}
          >
            <Image
              src={starone}
              alt="star"
              className="w-[30px] md:w-[60px] lg:w-[110px] h-auto object-contain"
              width={110}
              height={110}
            />
          </motion.div>
        </motion.div>

        {/* ── Star 2 – bottom-right ──
            Outer: entrance pop-in
            Inner: breathe loop (2.5s, 0.4s delay — mirrors CSS star-2) */}
        <motion.div
          className="absolute bottom-[20%] right-[15%]"
          initial={{ opacity: 0, scale: 0, rotate: 45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "backOut" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.38, 1],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 2.5,
              delay: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              // matches CSS: animation: star-breathe 2.5s ease-in-out infinite 0.4s
            }}
          >
            <Image
              src={starone}
              alt="star"
              className="w-[30px] md:w-[60px] lg:w-[110px] h-auto object-contain"
              width={110}
              height={110}
            />
          </motion.div>
        </motion.div>

        {/* ── H1 – hero-blur-in: blur(14px) + scale(0.88) → clear, 0.2s delay ── */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(14px)", scale: 0.88 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair-sc font-normal text-[clamp(48px,9.375vw,120px)] leading-none tracking-[1px] text-[#b2947a] m-0"
        >
          Stories
        </motion.h1>

        {/* ── H2 – hero-blur-in: 0.9s, 0.5s delay ── */}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(14px)", scale: 0.88 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair-sc font-normal text-[clamp(28px,4.765vw,61px)] leading-none tracking-[0.7px] text-[#333d42] mt-2"
        >
          Shape Culture
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-poppins font-normal text-[clamp(16px,1.5625vw,20px)] leading-relaxed tracking-[0.7px] text-[#595C5F] mt-5 px-6 max-w-5xl"
        >
          PincMoon Meta Studios develops and produces films, series, and creative
          platforms that reflect the complexity, energy, and imagination of modern India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mt-10 flex-wrap justify-center px-6"
        >
          <button onClick={() => scrollToSection('projects')} className="font-poppins font-semibold text-[clamp(14px,1.1vw,16px)] tracking-[2px] uppercase text-[#F8F7F2]  hover:bg-[#a08b82]/90 px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer border-none"
            style={{
              background: "linear-gradient(145deg, #BDAFC6 6.17%, #BDABC0 15.91%, #BDA8BB 25.65%, #BDA4B5 35.39%, #BCA1AF 45.13%, #BA9EA9 54.87%, #B89BA4 64.61%, #B6989E 74.35%, #B39698 84.09%, #B09393 93.83%)",
              opacity: 0.85,
              transition: "opacity 300ms ease, filter 300ms ease",
            }}
          >
            Explore Our Work
          </button>
          <button className="font-poppins font-semibold text-[clamp(14px,1.1vw,16px)] tracking-[2px] uppercase text-[#353535] bg-transparent hover:bg-white/20 px-8 py-4 rounded-full border border-[#BDAFC6] backdrop-blur-sm transition-all duration-300 cursor-pointer">
            Our Approach
          </button>
        </motion.div>

        {/* Dot Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-4 font-poppins text-[clamp(9px,0.9vw,11px)] tracking-[2px] text-[#333d42]/50">
            {[-3, -2, -1, 0, 1, 2, 3].map((n) => (
              <span key={n} className={n === 0 ? "text-[#333d42] font-medium" : ""}>
                {Math.abs(n)}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {[-3, -2, -1, 0, 1, 2, 3].map((n) => (
              <div
                key={n}
                className={`rounded-full transition-all ${n === 0 ? "w-[6px] h-[6px] bg-[#333d42]" : "w-[4px] h-[4px] bg-[#333d42]/30"
                  }`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}