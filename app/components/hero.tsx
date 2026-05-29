"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Hi, I'm Habibie <span class=\"text-black\">👋</span>",
        "I'm a Fullstack Developer",
        "I build modern web apps",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F0F0F0] text-black font-mono selection:bg-[#A3E635]">
      
      {/* Neubrutalist Grid Background Alternative to Video */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.06]"></div>

      {/* Giant Decorative Neo-Brutalist Shapes instead of smooth glows */}
      <div className="absolute top-12 left-12 w-32 h-32 bg-[#FFA6C9] border-4 border-black hidden md:block rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-16 right-16 w-40 h-40 bg-cyan-300 border-4 border-black rounded-full hidden md:block -rotate-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></div>

      {/* Main Container Card */}
      <motion.div
        className="relative z-10 text-center px-6 py-12 max-w-3xl mx-auto bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Typed Text Wrapped in a Punchy Brutalist Tag */}
        <div className="inline-block bg-yellow-300 border-4 border-black px-6 py-4 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black">
            <span ref={typedRef}></span>
          </h1>
        </div>

        {/* Description Block */}
        <motion.p
          className="text-black font-semibold text-base md:text-lg mb-8 max-w-xl mx-auto bg-slate-100 p-4 border-2 border-black border-dashed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Fullstack Developer who builds modern, fast, and scalable web applications.
        </motion.p>

        {/* Action Button */}
        <div className="inline-block">
          <motion.a
            href="https://github.com/habibienurseptian"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              translateY: "-4px", 
              translateX: "-4px",
              boxShadow: "12px_12px_0px_0px_rgba(0,0,0,1)" 
            }}
            whileTap={{ 
              translateY: "4px", 
              translateX: "4px",
              boxShadow: "2px_2px_0px_0px_rgba(0,0,0,1)" 
            }}
            className="inline-flex items-center bg-[#A3E635] text-black text-lg font-black uppercase tracking-wider px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-100 cursor-pointer"
          >
            View My Work <FaGithub className="ml-3 text-xl" />
          </motion.a>
        </div>
      </motion.div>

    </section>
  );
}