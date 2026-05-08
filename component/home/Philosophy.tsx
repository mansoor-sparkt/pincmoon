


"use client";

import { motion } from "motion/react";
import Image from "next/image";
import philosphy from '@/assets/philosphy.jpg'

import backImageOne from '@/assets/one.png'
import backImageTwo from '@/assets/two.png'
import backImageThree from '@/assets/three.png'

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease },
});

const cards = [
  {
    number: "01",
    title: "Strong Ideas",
    body: "We begin with the idea, a story that demands to be told, a voice that deserves to be heard.",
    highlight: null,
    backImage: backImageOne,
  },
  {
    number: "02",
    title: "Distinctive Voice",
    body: "Every project carries a singular perspective. No templates, no formulas.",
    highlight: "Only vision.",
    backImage: backImageTwo,
  },
  {
    number: "03",
    title: "Cultural Intelligence",
    body: "We use both creative instinct and audience insight to find where story and culture intersect.",
    highlight: null,
    backImage: backImageThree,
  },
];

const Philosophy = () => {
  return (
    <section className="w-full relative h-auto md:h-screen overflow-hidden bg-[#f0edf4] pt-20 pb-10" id="philosophy">

      {/* Section background image */}
      <Image
        src={philosphy}
        alt="philosophy background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Gradient overlay on top of section bg */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#D7D2DA]/80 via-[#DDD3E0]/60 to-transparent pointer-events-none" />

      <div className="md:mt-20">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 mb-16">
          <motion.p
            {...fadeUp(0.1)}
            className="font-poppins text-[clamp(10px,1vw,16px)] tracking-[5px] uppercase text-[#353535] font-semibold mb-4"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            {...fadeUp(0.2)}
            className="font-playfair font-normal text-[clamp(36px,5vw,72px)] leading-[1.1] text-[#353535]"
          >
            Cinema isn&apos;t just{" "}
            <span className="italic text-[#B9947A]">content</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.3)}
            className="font-poppins font-light text-[clamp(13px,1.2vw,20px)] text-[#353535] mt-4 max-w-[900px] leading-relaxed"
          >
            It&apos;s a conversation. It&apos;s a memory. It&apos;s culture. And when done right,
            sometimes, it&apos;s change.
          </motion.p>
        </div>

        {/* ── Cards ──────────────────────────────────────────────── */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              {...fadeUp(0.2 + i * 0.15)}
              className={`relative bg-[#ddd5e4]/40 backdrop-blur-sm p-8 flex flex-col gap-4 overflow-hidden group hover:bg-[#ddd5e4]/60 transition-colors duration-500 
              ${i === 0 ? "rounded-tl-[26px] rounded-bl-[26px]" : ""}
              ${i === 2 ? "rounded-tr-[26px] rounded-br-[26px]" : ""}
            `}
            >
              {/* Card background image — isolated in its own layer */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={card.backImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-containt md:object-fill object-center"
                />
              </div>


              {/* Dark overlay so text stays readable */}
              <div className="absolute inset-0 -z-20 bg-[#1a1a2e]/30 group-hover:bg-[#1a1a2e]/20 transition-colors duration-500" />

              <span className="font-playfair-sc text-[clamp(36px,4vw,60px)] font-normal text-[#353535] leading-none">
                {card.number}
              </span>

              <h3 className="font-playfair-sc font-semibold text-[clamp(15px,1.4vw,26px)] text-[#353535] leading-snug">
                {card.title}
              </h3>

              <p className="font-poppins text-[clamp(14px,1vw,16px)] text-[#353535] font-normal leading-[1.8]">
                {card.body}
                {card.highlight && (
                  <>
                    {" "}
                    <span className="font-semibold text-[#353535]">{card.highlight}</span>
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Philosophy;