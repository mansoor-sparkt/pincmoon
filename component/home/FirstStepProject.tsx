"use client";

import { motion } from "motion/react";
import Image from "next/image";
import gandhiTalksPoster from "@/assets/gandhi-talks-poster.png";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease },
});

const tags = ["DIRECTOR-DRIVEN", "SILENT FILM", "CONTEMPORARY INDIA"];

const FirstStepProject = () => {
  return (
    <section className="w-full bg-[#B0939399]   relative px-6 md:px-12 lg:px-20 py-16 lg:py-24 overflow-hidden" id='projects'>

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto mb-12">
        <motion.p
          {...fadeUp(0.1)}
          className="font-poppins text-[clamp(10px,0.9vw,16px)] tracking-[5px] uppercase text-[#FFFFFF] font-medium mb-4"
        >
          Projects
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="font-playfair-sc font-normal text-[clamp(36px,5vw,72px)] leading-[1.05] text-[#2C2C2C]"
        >
          Our first{" "}
          <span className="italic text-[#FFFFFF]">bold step</span>
        </motion.h2>
      </div>

      {/* ── Card ───────────────────────────────────────────────── */}
      <motion.div
        {...fadeUp(0.3)}
        className="max-w-[1280px] mx-auto rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2  bg-[#A56375] backdrop-blur-sm border border-white/10 relative h-full lg:min-h-[833px]"

      >
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            opacity: 0.08,
            mixBlendMode: 'overlay',
          }}
        />
        {/* ── LEFT: Film poster ──────────────────────────────────── */}
        <div className="relative w-full h-full aspect-[4/6]  lg:min-h-[380px] ">

          <Image
            src={gandhiTalksPoster}
            alt="Gandhi Talks Poster"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top lg:object-fill"
          />


          {/* Bottom fade into right panel on large screens */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#9e6b75]/40 hidden lg:block" /> */}
        </div>

        {/* ── RIGHT: Info panel ─────────────────────────────────── */}
        <div className="relative flex flex-col justify-between gap-8 p-4 lg:py-8 lg:p-10 bg-[#9e6b75]/50">





          <div className="rounded-[20px] p-[1px] h-full bg-linear-to-r from-white/80 to-[#90A1B9]/80 shadow-lg">
            <div className="bg-[#A56375] rounded-[20px] h-full">
              <div className="rounded-[19px] bg-linear-to-r from-[#B4B4B41A] from-10%  to-[#D9D9D94D] to-90% p-[30px]  md:px-[60px] md:py-[30px] h-full w-full">
                {/* Top block */}
                <div className="flex flex-col gap-6 pb-12 lg:pb-32">
                  {/* Label */}
                  <motion.p
                    {...fadeUp(0.4)}
                    className="font-poppins text-[clamp(10px,0.9vw,16px)] tracking-[3px] uppercase  font-bold text-[#F8F7F6]"
                  >
                    Feature Film
                  </motion.p>

                  {/* Title */}
                  <motion.h3
                    {...fadeUp(0.45)}
                    className="font-playfair-sc text-[clamp(28px,3.5vw,52px)] leading-[1.1]  font-semibold text-[#F8F7F6]"
                  >
                    <span className="font-semibold">Gandhi</span>{" "}
                    <span className="font-medium text-[#E6DFDD]">Talks</span>
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    {...fadeUp(0.5)}
                    className="font-poppins font-medium text-[clamp(16px,1.1vw,20px)] leading-[1.8] text-[#F8F7F6]"
                  >
                    Gandhi Talks is a silent dark comedy set in contemporary India.
                    The film explores the relevance of non-violence in an increasingly
                    chaotic world, using humour and visual storytelling to examine how
                    ideals collide with reality.
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    {...fadeUp(0.55)}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_160px] items-center gap-2 mt-1"
                  >
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-poppins text-[clamp(12px,0.75vw,16px)] tracking-[1.73px] text-[#B8947A] rounded-full px-6 py-3 hover:border-white/60 hover:bg-[#d6d1cf] transition-colors duration-300 cursor-default bg-[#E6DFDD] font-medium text-center"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>



                {/* Bottom pull quote */}
                <motion.p
                  {...fadeUp(0.65)}
                  className="font-poppins font-semibold text-[clamp(16px,1.1vw,20px)] leading-[1.7]  text-[#E6DFDD] border-t border-white/15 pt-6"
                >
                  The film represents PincMoon&apos;s belief that bold storytelling
                  can challenge conventions while still connecting with audiences.
                </motion.p>

              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section >
  );
}

export default FirstStepProject