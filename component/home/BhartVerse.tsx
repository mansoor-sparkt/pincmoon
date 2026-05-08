"use client";

import { motion } from "motion/react";
import Image from "next/image";
import bharatVerseImage from "@/assets/bharatverse.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50, filter: "blur(8px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 50, filter: "blur(8px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease },
});

const BharatVerse = () => {
  return (
    <section className="w-full bg-[#f0ece8] relative px-6 md:px-12 lg:px-20 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* ── LEFT: Image ───────────────────────────────────────── */}
        <motion.div
          {...fadeLeft(0.2)}
          className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden"
        >

          <Image
            src={bharatVerseImage}
            alt="India from space at night - BharatVerse"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />

          {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1a1200] via-[#2a1f00] to-[#0d0d0d] flex items-center justify-center">
            <p className="font-poppins text-white/20 text-sm tracking-widest uppercase">
              BharatVerse Image
            </p>
          </div> */}
        </motion.div>

        {/* ── RIGHT: Info card ──────────────────────────────────── */}
        <motion.div
          {...fadeRight(0.3)}
          className="bg-white/60 backdrop-blur-sm border border-[#e0d9d4]/80 rounded-2xl p-8 lg:p-12 flex flex-col h-full gap-12"
        >
          <div className="grid gap-3">
            {/* Platform label */}
            <motion.p
              {...fadeUp(0.4)}
              className="font-poppins text-[clamp(10px,0.9vw,16px)] tracking-[5px] uppercase  text-[#B09393] font-bold"
            >
              Platform
            </motion.p>

            {/* Title */}
            <motion.h2
              {...fadeUp(0.45)}
              className="font-playfair-sc font-normal text-[clamp(36px,5vw,72px)] leading-[1.05] text-[#353535]"
            >
              BharatVerse
            </motion.h2>

            {/* First paragraph */}
            <motion.p
              {...fadeUp(0.5)}
              className="font-poppins font-normal text-[clamp(16px,1.2vw,20px)] leading-[1.9] text-[#4a3a3a]/70 "
            >
              BharatVerse is PincMoon&apos;s exploration of the future of
              storytelling.
            </motion.p>

          </div>

          {/* Second paragraph */}
          <motion.p
            {...fadeUp(0.55)}
            className="font-poppins font-normal text-[clamp(16px,1.2vw,20px)] leading-[1.9] text-[#4a3a3a]/70"
          >
            The platform uses AI and cultural analysis to study audience
            behavior, emerging themes, and narrative patterns across
            India&apos;s diverse entertainment landscape.
          </motion.p>

          {/* Pull quote */}
          <motion.p
            {...fadeUp(0.65)}
            className="font-poppins font-semibold italic text-[clamp(16px,1.2vw,20px)] leading-[1.9] text-[#B8947A]"
          >
            The goal is simple: To help creators understand audiences better
            and build stories that truly resonate.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}

export default BharatVerse