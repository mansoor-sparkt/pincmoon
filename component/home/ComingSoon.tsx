"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function ComingSoonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="coming-soon-target"
      ref={ref}
      className="h-screen w-full flex flex-col justify-center items-center text-center relative [scroll-margin-top:80px]"
    >
      {/* Moon Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute w-[500px] h-[500px] rounded-full z-[1] pointer-events-none
                   max-[768px]:w-[300px] max-[768px]:h-[300px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(230,210,250,0.3) 60%, transparent 80%)",
          filter: "blur(10px)",
        }}
      />

      {/* Star 3 - top left (star-three.png) */}
      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -20 }}
        animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.4, ease: "backOut" }}
        className="absolute top-[20%] left-[20%] w-[60px] h-[60px] scale-150 z-[5]
                   max-[768px]:top-[10%] max-[768px]:left-[10%]"
      >
        <Image
          src="/assets/star-three.png"
          alt="star"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Star 4 - bottom right (star-two.png) */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotate: 20 }}
        animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.6, ease: "backOut" }}
        className="absolute bottom-[30%] right-[20%] w-[60px] h-[60px] scale-[2] z-[5]
                   max-[768px]:bottom-[20%] max-[768px]:right-[10%]"
      >
        <Image
          src="/assets/star-two.png"
          alt="star"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Coming Soon Text */}
      <motion.h1
        initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-playfair font-normal text-[120px] leading-none tracking-[1px] uppercase text-[#a8948d] z-[2]
                   max-[1024px]:text-[clamp(60px,10vw,90px)]
                   max-[768px]:text-[50px] max-[768px]:tracking-[2px]"
      >
        COMING SOON!
      </motion.h1>
    </section>
  );
}
