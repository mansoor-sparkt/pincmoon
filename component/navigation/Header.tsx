// "use client";

// import { motion } from "motion/react";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import logo from '@/assets/pincmoon-logo.png'

// const navItems = ["About Us", "Projects", "Team", "Services"];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToComingSoon = () => {
//     const target = document.getElementById("coming-soon-target");
//     target?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 w-full flex justify-between items-center px-8 py-2 uppercase text-xs tracking-[2px] z-[90] transition-[background-color,backdrop-filter] duration-700 ease-in-out ${scrolled
//         ? "backdrop-blur-md bg-white/30"
//         : "bg-transparent backdrop-blur-none"
//         }`}
//     >
//       {/* Animated border — separate element so it fades independently */}
//       <div
//         className={`absolute bottom-0 left-0 right-0 h-px bg-white/20 transition-opacity duration-700 ease-in-out ${scrolled ? "opacity-100" : "opacity-0"
//           }`}
//       />

//       {/* Logo */}
//       <div className="logo">
//         <Image
//           src={logo}
//           alt="Pincmoon Logo"
//           width={160}
//           height={96}
//           className="w-40 h-24 object-contain"
//           priority
//         />
//       </div>

//       {/* Nav Links */}
//       <div className="flex gap-8 text-[#333d42]">
//         {navItems.map((item, i) => (
//           <motion.span
//             key={item}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
//             onClick={scrollToComingSoon}
//             className="cursor-pointer hover:text-[#b2947a] transition-colors duration-300"
//           >
//             {item}
//           </motion.span>
//         ))}
//       </div>

//       {/* Get In Touch */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className="flex items-center gap-2 cursor-pointer group text-[#333d42]"
//       >
//         <span className="w-2 h-2 bg-red-600 rounded-full group-hover:scale-125 transition-transform duration-300" />
//         <span className="hover:text-[#b2947a] transition-colors duration-300">
//           Get In Touch
//         </span>
//       </motion.div>
//     </motion.nav>
//   );
// }


"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/pincmoon-logo.png";

const navItems = [
  { label: "About Us", id: "about" },
  { label: "Philosophy", id: "philosophy" },
  { label: "Ideas", id: "ideas" },
  { label: "Projects", id: "projects" },
  { label: "Team", id: "team" },
  { label: "Studio", id: "studio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     setScrolled(window.scrollY > 10);
  //   }, 50);

  //   const handleScroll = () => setScrolled(window.scrollY > 10);
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     clearTimeout(timer);
  //     window.removeEventListener("scroll", handleScroll);
  //   }
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Use a small threshold. If Lenis is active, window.scrollY
  //     // is still updated, but we wrap it in requestAnimationFrame
  //     // for maximum performance.
  //     requestAnimationFrame(() => {
  //       const isScrolled = window.scrollY > 10;
  //       setScrolled(isScrolled);
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);


  // Inside Navbar component in Header.tsx
  useEffect(() => {
    // 1. Define the logic
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // 2. Run it immediately (fixes the refresh problem)
    handleScroll();

    // 3. Listen for future scrolls
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full overflow-hidden flex justify-between items-center px-6 md:px-8 py-0  h-[72px] uppercase text-xs tracking-[2px] z-[90] transition-[background-color,backdrop-filter] duration-700 ease-in-out ${scrolled || menuOpen
          ? "backdrop-blur-md bg-white/70 border-b border-white/20"
          : "bg-transparent backdrop-blur-none"
          }`}
      >
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <Image
            src={logo}
            alt="Pincmoon Logo"
            width={160}
            height={96}
            className="w-32 md:w-40 h-auto object-contain"
            priority
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 text-[#333d42]">
          {navItems.map((item, i) => (
            <motion.span
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-[#b2947a] transition-colors duration-300"
            >
              {item.label}
            </motion.span>
          ))}
        </div>

        {/* Desktop Get In Touch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="hidden md:flex items-center gap-2 cursor-pointer group text-[#333d42]"
        >
          <PulseDot />
          <span className="group-hover:text-[#b2947a] transition-colors duration-300">
            Get In Touch
          </span>
        </motion.div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 z-[91]"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-[#333d42] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-[#333d42] transition-all duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-[#333d42] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
          />
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-[72px] overflow-x-hidden left-0 right-0 z-[88] transition-[background-color,backdrop-filter] duration-700 ease-in-out ${scrolled || menuOpen ? "bg-white/70 backdrop-blur-xl" : "bg-transparent backdrop-blur-none"} border-b border-white/30 flex flex-col items-center py-6 gap-0 md:hidden`}
          >
            {navItems.map((item, i) => (
              <motion.span
                key={item.id}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-center py-4 text-xs tracking-[3px] uppercase text-[#333d42] cursor-pointer hover:text-[#b2947a] hover:bg-[#b2947a]/5 transition-all duration-300 border-b border-[#b2947a]/10"
              >
                {item.label}
              </motion.span>
            ))}
            <div className="flex items-center gap-2 mt-5 text-xs tracking-[2px] uppercase text-[#333d42] cursor-pointer">
              <PulseDot />
              <span>Get In Touch</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Perfectly-paced pulsating dot — ~2.4s cycle, not too fast, not too slow
function PulseDot() {
  return (
    <span className="relative flex items-center justify-center w-4 h-4">
      {/* Outer ring */}
      <span className="absolute inline-flex w-4 h-4 rounded-full bg-red-600/30 animate-[ping_2.4s_ease-in-out_infinite]" />
      {/* Inner solid dot */}
      <span className="relative inline-flex w-2 h-2 rounded-full bg-red-600 animate-[pulse_2.4s_ease-in-out_infinite]" />
    </span>
  );
}