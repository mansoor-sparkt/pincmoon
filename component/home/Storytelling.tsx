"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";


import cardImageOne from "@/assets/story-one.jpg";
import cardImageTwo from "@/assets/story-two.jpg";

import { GlassCard } from "../ui/GlassCard";
import starone from "@/assets/start-one.png";


const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 50, filter: "blur(8px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease },
});

const Storytelling = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id='about'
      className="w-full min-h-screen px-6 md:px-12 lg:px-20 py-20 lg:pt-32 lg:py-28 flex items-center"
    >
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-start">

        {/* ── LEFT COLUMN ─────────────────────────────────────────── */}
        <div className="flex flex-col justify-center gap-6">

          {/* WHO WE ARE label */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-poppins text-[clamp(10px,1vw,16px)] tracking-[4px] uppercase text-[#B09393] font-bold"
          >
            Who We Are
          </motion.p>

          {/* Headline */}
          <motion.h2
            {...fadeUp(0.2)}
            className="font-playfair-sc font-normal text-[clamp(36px,5vw,74px)] leading-[1.05] text-[#333d42] -mt-2"
          >
            Built for{" "}
            <span className="italic text-[#B09393]">this</span>
            <br />
            <span className="italic text-[#B09393]">moment</span>
          </motion.h2>

          {/* Pull quote */}
          <motion.blockquote
            {...fadeUp(0.35)}
            className="border-l-[3px] border-[#D4607A] pl-5 mt-2"
          >
            <p className="font-poppins italic text-[clamp(16px,2vw,32px)] leading-[1.5] text-[#353535]">
              &quot;At PincMoon, storytelling is instinctive, collaborative, and deeply human.&quot;
            </p>
          </motion.blockquote>

          {/* Body copy */}
          <motion.p
            {...fadeUp(0.45)}
            className="font-poppins font-light text-[clamp(16px,1.2vw,20px)] leading-[2] tracking-[0.3px] text-[#595C5F] max-w-130"
          >
            Audiences today move fluidly between theatres, streaming platforms, social media, and global conversations. They are curious, connected, and culturally aware. We combine cinematic storytelling with audience insight — using creative instinct and cultural intelligence to develop stories that resonate with contemporary viewers.
          </motion.p>

          {/* Footer line */}
          <motion.p
            {...fadeUp(0.55)}
            className="font-poppins font-medium text-[clamp(20px,1.2vw,24px)] tracking-[0.3px] text-[#595C5F] mt-4"
          >
            We don&apos;t believe in formulas. We believe in voice.
          </motion.p>
        </div>

        {/* ── RIGHT COLUMN ─────────────────────────────────────────── */}
        <div className=" grid grid-rows-3 gap-4 md:items-start  py-4 ">

          {/* ── RIGHT COLUMN: stacked Global Reach + Emotional Truth ── */}
          <div className="grid grid-rows-2 md:grid-rows-1 row-span-2 grid-cols-1 md:grid-cols-2  gap-4 h-full pb-4 ">

            {/* Global Reach — plain white card */}
            {/* <motion.div
              {...fadeLeft(0.45)}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/80"
            >
              <p className="font-playfair font-bold text-[clamp(13px,1.3vw,16px)] text-[#333d42] leading-snug">
                Global Reach
              </p>
              <p className="font-poppins text-[clamp(11px,0.9vw,13px)] text-[#333d42]/70 leading-relaxed mt-2">
                Stories that travel across languages, platforms, and cultures.
              </p>
            </motion.div> */}

            <motion.div
              {...fadeLeft(0.3)}
              className="relative rounded-2xl overflow-hidden col-span-1 row-span-1 h-full group"
            >
              {/* Replace src with your actual image import */}
              <Image
                src={cardImageOne}
                alt="Cinematic Scale"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay — full card dark tint */}
              {/* <div className="absolute inset-0 bg-[#4a3240]/40 rounded-2xl z-10" /> */}

              {/* Grainy texture overlay */}
              {/* <div
                className="absolute inset-0 rounded-2xl z-20 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  backgroundSize: "128px 128px",
                }}
              /> */}

              {/* Full card dark tint so image behind glass reads well */}
              {/* <div className="absolute inset-0 bg-[#4a3240]/30 rounded-2xl z-10" /> */}

              {/* Glass text card */}
              <div className="absolute bottom-3 left-3 right-3 z-20">

                <div className="absolute inset-0 bg-[#4a3240]/30 rounded-2xl z-10" />
                <GlassCard>
                  <div className="p-4 ">
                    <p className="font-playfair-sc font-bold text-[clamp(20px,1.4vw,24px)] text-white leading-snug">
                      Cinematic Scale
                    </p>
                    <p className="font-poppins text-[clamp(14px,0.9vw,16px)] font-medium text-white/85 leading-relaxed mt-2">
                      Director-driven films that are cinematic in scale but intimate in emotion.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </motion.div>

            {/* Emotional Truth — dark image card with video support */}
            <motion.div
              {...fadeLeft(0.5)}
              className="relative rounded-2xl overflow-hidden h-full group bg-white backdrop-blur-sm border border-white/80"
            >
              {/* Text — top */}
              <div className="relative z-10 p-5">
                <p className="font-playfair font-bold text-[clamp(20px,1.4vw,24px)] text-[#333d42] leading-snug">
                  Global Reach
                </p>
                <p className="font-poppins text-[clamp(14px,1vw,16px)] text-[#333d42]/60 leading-relaxed mt-2">
                  Stories that travel across languages, platforms, and cultures.
                </p>
              </div>

              {/* Video — bottom half, fills remaining space */}
              <div className="relative w-full h-[290px]">
                <video
                  src="/story-three.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>

          {/* ── TOP LEFT: tall image card (Cinematic Scale) ── */}
          <motion.div
            {...fadeLeft(0.7)}
            className="relative rounded-2xl overflow-hidden col-span-1 h-full group row-span-3"
          >
            <Image
              src={cardImageTwo}
              alt="Emotional Truth"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />


            {/* <div className="absolute inset-0 bg-[#4a3240]/40 rounded-2xl z-10" /> */}

            {/* Glass text card — same pattern as Cinematic Scale */}
            <div className="absolute inset-3 z-20">

              <div className="absolute inset-0 bg-[#4a3240]/40 rounded-2xl z-10 h-full" />
              <GlassCard className="h-full">
                <div className="p-4 lg:p-5 lg:py-6 h-full flex flex-col justify-between gap-4 lg:gap-6">

                  {/* Star — top left */}
                  <div className="w-10 h-10">
                    <Image
                      src={starone}
                      alt="star"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {/* Text — bottom left */}
                  <div className="flex flex-col gap-2">
                    <p className="font-playfair-sc font-bold text-[clamp(20px,1.3vw,24px)] text-white leading-snug">
                      Emotional Truth
                    </p>
                    <p className="font-poppins text-[clamp(16px,0.9vw,20px)] text-white/85 leading-relaxed font-medium">
                      What connects everything we make is a commitment to strong ideas,
                      distinctive voices, and emotional truth. We look for stories that
                      say something, feel something, and stay with you.
                    </p>
                  </div>

                </div>
              </GlassCard>
            </div>
          </motion.div>


        </div>
        {/* ── END RIGHT COLUMN ──────────────────────────────────────── */}

      </div>
    </section>
  );
}

export default Storytelling