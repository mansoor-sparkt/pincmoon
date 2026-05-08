"use client";

import { motion } from "motion/react";
import Image from "next/image";
import clapperboard from "@/assets/clapperboard.png";

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

const PincMoonStudio = () => {
  return (
    <section className="w-full bg-[#f0ece8] px-6 md:px-12 lg:px-20 py-20 lg:py-28 overflow-hidden" id='studio'>
      <div className="max-w-[1280px] mx-auto">

        {/* ── Heading ──────────────────────────────────────────── */}
        <motion.h2
          {...fadeUp(0.1)}
          className="font-playfair-sc font-normal text-[clamp(36px,5vw,72px)] leading-[1.05] text-[#2C2C2C] mb-16 lg:mb-20"
        >
          From the{" "}
          <span className="italic text-[#B09393]">studio</span>
        </motion.h2>

        {/* ── Content grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Clapperboard image ──────────────────────── */}
          <motion.div
            {...fadeLeft(0.2)}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [-2, 2, -2], y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full  aspect-square"
            >

              <Image
                src={clapperboard}
                alt="PincMoon Clapperboard"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-contain drop-shadow-2xl"
              />


              {/* ── Placeholder clapperboard SVG ── */}
              {/* <div className="w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 400 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-xl"
                >
               
                  <rect x="40" y="110" width="320" height="230" rx="12" fill="url(#boardGrad)" />
                  
                  <rect x="40" y="80" width="320" height="50" rx="8" fill="url(#topGrad)" />
                
                  <rect
                    x="38" y="28"
                    width="240" height="38" rx="6"
                    fill="url(#armGrad)"
                    transform="rotate(-12 38 28)"
                  />
                 
                  {[0, 1, 2, 3, 4, 5].map((s) => (
                    <rect
                      key={s}
                      x={55 + s * 36} y="22"
                      width="18" height="38" rx="2"
                      fill="#f5c4d0"
                      fillOpacity="0.5"
                      transform="rotate(-12 38 28)"
                    />
                  ))}
                
                  {[0, 1, 2, 3, 4, 5, 6].map((s) => (
                    <rect
                      key={s}
                      x={48 + s * 42} y="80"
                      width="22" height="50"
                      fill="#f5c4d0"
                      fillOpacity="0.35"
                    />
                  ))}
                 
                  <text x="70" y="162" fontFamily="monospace" fontSize="13" fill="#c4889a" letterSpacing="1">PRODUCTION: GANDHI TALKS</text>
                  <text x="70" y="192" fontFamily="monospace" fontSize="12" fill="#c4889a">SCENE:</text>
                  <text x="280" y="182" fontFamily="monospace" fontSize="11" fill="#c4889a">TAKE:</text>
                  <text x="292" y="205" fontFamily="monospace" fontSize="20" fontWeight="bold" fill="#c4889a">01</text>
                  <line x1="70" y1="215" x2="330" y2="215" stroke="#e8b4c0" strokeWidth="1" />
                  <text x="70" y="238" fontFamily="monospace" fontSize="12" fill="#c4889a">DIRECTOR:</text>
                  <text x="70" y="262" fontFamily="monospace" fontSize="12" fill="#c4889a">CAMERA:  3D OPTICS</text>
                  <text x="70" y="286" fontFamily="monospace" fontSize="12" fill="#c4889a">DATE:    2026.10.12</text>
                  <text x="70" y="310" fontFamily="monospace" fontSize="12" fill="#c4889a">STUDIO:  PINCMOON</text>
                 
                  <circle cx="80" cy="107" r="10" fill="#e8b4c0" />
                  <circle cx="320" cy="107" r="10" fill="#e8b4c0" />
               
                  <path
                    d="M355 270 L360 290 L380 295 L360 300 L355 320 L350 300 L330 295 L350 290 Z"
                    fill="url(#starGrad)"
                  />
                  <defs>
                    <linearGradient id="boardGrad" x1="40" y1="110" x2="360" y2="340" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f9d4de" />
                      <stop offset="1" stopColor="#e8b4c8" />
                    </linearGradient>
                    <linearGradient id="topGrad" x1="40" y1="80" x2="360" y2="130" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f0c0d0" />
                      <stop offset="1" stopColor="#dda0b8" />
                    </linearGradient>
                    <linearGradient id="armGrad" x1="38" y1="28" x2="280" y2="66" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f5ccd8" />
                      <stop offset="1" stopColor="#e8aabf" />
                    </linearGradient>
                    <linearGradient id="starGrad" x1="330" y1="270" x2="380" y2="320" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f5d0dc" />
                      <stop offset="1" stopColor="#d4a0b8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div> */}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Text ───────────────────────────────────── */}
          <div className="flex flex-col gap-8 md:gap-12">
            <motion.p
              {...fadeRight(0.3)}
              className="font-poppins font-light text-[clamp(16px,1.2vw,20px)] leading-[1.9] text-[#4a3a3a]/65"
            >
              PincMoon Meta Studios is built as a collaborative space for
              filmmakers, writers, technologists, and creative thinkers.
            </motion.p>

            <motion.p
              {...fadeRight(0.4)}
              className="font-poppins font-light text-[clamp(16px,1.2vw,20px)] leading-[1.9] text-[#4a3a3a]/65"
            >
              We are interested in stories that travel: Across languages,
              platforms, and cultures.
            </motion.p>

            <motion.p
              {...fadeRight(0.5)}
              className="font-poppins font-light text-[clamp(16px,1.2vw,20px)] leading-[1.9] text-[#4a3a3a]/65"
            >
              Stories that are bold enough to take risks. And human enough
              to matter.
            </motion.p>

            {/* Pull quote */}
            <motion.div
              {...fadeRight(0.6)}
              className="mt-2"
            >
              <p className="font-poppins font-semibold italic text-[clamp(16px,1.2vw,20px)] leading-[1.9] text-[#B8947A]">
                Because in the end, cinema isn&apos;t just content.
                <br />
                It&apos;s a conversation. It&apos;s a memory. It&apos;s culture. And when
                done right, sometimes, it&apos;s change.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PincMoonStudio