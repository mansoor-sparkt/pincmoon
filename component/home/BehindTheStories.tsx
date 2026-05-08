"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease },
});

const people = [
  {
    name: "Meera Chopra",
    role: "FOUNDER",
    bio: [
      "Meera Chopra is an Indian actor and producer who has built a diverse career across Tamil, Telugu, and Hindi cinema. She made her acting debut with the Tamil film Anbe Aaruyire and gradually expanded into Bollywood, appearing in films like 1920 London and the critically discussed courtroom drama Section 375. Known for choosing character-driven roles, she has steadily focused on meaningful and story-led projects.",
      "In addition to acting, she founded her production house pincmoon meta studios to support fresh ideas and compelling narratives in cinema. Off screen, Meera is an active and outspoken presence on social media, often using her platform to address social issues, advocate for women's rights, and encourage open conversations around accountability and change.",
      "Through her work in films, production, and digital advocacy, Meera continues to build a space that blends entertainment with purpose.",
    ],
    tags: ["ACTOR", "PRODUCER", "TAMIL · TELUGU · HINDI", "SOCIAL ADVOCATE"],
  },
  {
    name: "Rakshit Kejriwal",
    role: "CO-FOUNDER",
    bio: [
      "Rakshit Kejriwal works at the intersection of storytelling, technology, and business strategy.",
      "At PincMoon Meta Studios, he focuses on building a forward-looking creative ecosystem, one that combines strong storytelling with emerging tools, platforms, and audience insight.",
      "His role centers on developing the studio's long-term vision and exploring new ways for stories to travel across formats, platforms, and audiences.",
    ],
    tags: ["STRATEGY", "TECHNOLOGY", "BUSINESS DEVELOPMENT", "CREATIVE ECOSYSTEM"],
  },
];

const BehindTheStories = () => {
  return (
    <section className="w-full bg-[#edeae4] px-6 md:px-12 lg:px-20 py-20 lg:py-28" id="team">
      <div className="max-w-[1280px] mx-auto">

        {/* ── Header ───────────────────────────────────────────── */}
        <motion.p
          {...fadeUp(0.1)}
          className="font-poppins text-[clamp(10px,0.9vw,16px)] tracking-[5px] uppercase text-[#B09393] font-bold mb-4"
        >
          The People
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="font-playfair-sc font-normal text-[clamp(36px,5vw,72px)] leading-[1.05] text-[#2C2C2C] mb-16"
        >
          Behind the{" "}
          <span className="italic text-[#B09393]">stories</span>
        </motion.h2>

        {/* ── Person cards ─────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              {...fadeUp(0.2 + i * 0.15)}
              className="bg-[#F8F7F2] border border-[#d4ccc4]/60 rounded-2xl px-8 md:px-12 py-10 flex flex-col gap-4 md:gap-5.5"
            >
              {/* Name + role */}
              <div className="flex flex-col gap-4 md:gap-5.5">
                <h3 className="font-playfair-sc font-bold text-[clamp(20px,2.2vw,32px)] text-[#2C2C2C] leading-snug">
                  {person.name}
                </h3>
                <p className="font-poppins text-[clamp(10px,0.85vw,17px)] tracking-[3px] uppercase text-[#B09393] font-medium">
                  {person.role}
                </p>
              </div>

              {/* Bio paragraphs */}
              <div className="flex flex-col gap-3 md:gap-6">
                {person.bio.map((para, j) => (
                  <p
                    key={j}
                    className="font-poppins font-light text-[clamp(14px,1vw,16px)] leading-[2] text-[#4a3a3a]/65"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-[#d4ccc4]/80 pt-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {person.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-poppins font-medium text-[clamp(9px,0.75vw,14px)] tracking-[2px] uppercase text-[#B8947A]    rounded-full px-4 py-1.5  hover:text-[#b2947a] transition-colors duration-300 cursor-default bg-[#B8947A1A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BehindTheStories