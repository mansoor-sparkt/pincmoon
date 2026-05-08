"use client";

import { motion } from "motion/react";

export default function ViewfinderCorners() {
  return (
    <>
      {/* Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-5 left-5 w-10 h-10 border border-black border-r-0 border-b-0 z-[100] pointer-events-none"
      />
      {/* Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-5 right-5 w-10 h-10 border border-black border-l-0 border-b-0 z-[100] pointer-events-none"
      />
      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="fixed bottom-5 left-5 w-10 h-10 border border-black border-r-0 border-t-0 z-[100] pointer-events-none"
      />
      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-5 right-5 w-10 h-10 border border-black border-l-0 border-t-0 z-[100] pointer-events-none"
      />
    </>
  );
}
