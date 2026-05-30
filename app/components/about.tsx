"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../images/ph.jpeg";

export default function About() {
  const fullText = "About Me";

  const descriptionLines = [
    "Saya mahasiswa jurusan teknik informatika yang fokus membangun aplikasi web modern dengan performa tinggi dan UI yang menarik. Saya memiliki ketertarikan pada frontend development, UI/UX, dan teknologi web terbaru."
  ];

  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  } as const;

  return (
    <section id="about" className="py-28 px-6 relative bg-[#F0F0F0] text-black font-mono selection:bg-[#A3E635]">
      
      {/* Consistent Neubrutalist Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05] pointer-events-none"></div>

      {/* Main Single Master Grid Layout */}
      <motion.div 
        className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Grid Item 1: Profile Block */}
        <motion.div variants={itemVariants} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center">
          <div className="relative group bg-[#FFA6C9] border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="relative w-40 aspect-[3/4] border-4 border-black overflow-hidden bg-gray-200">
              <img
                src={profileImage.src}
                alt="Profile"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
          <div className="text-black mt-4 text-center bg-yellow-300 border-4 border-black p-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[11px] uppercase tracking-wider leading-relaxed">
            Passionate Web Developer who loves building modern web experiences.
          </div>
        </motion.div>

        {/* Grid Item 2: Biography Detail Block */}
        <motion.div variants={itemVariants} className="bg-[#A3E635] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight inline-block bg-white border-2 border-black px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
              {typedTitle}
              <span className="inline-block w-1.5 h-4 bg-black ml-1 animate-ping"></span>
            </h2>
            <div className="text-black font-semibold text-sm leading-relaxed text-justify">
              {descriptionLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid Item 3: Education Card */}
        <motion.div variants={itemVariants} className="bg-[#BFDBFE] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black mb-4 uppercase border-b-4 border-black pb-2 flex items-center gap-2">
              <span>🎓</span> Education
            </h3>
            <div className="relative pl-3 border-l-4 border-black">
              <h4 className="font-black text-base uppercase tracking-tight">S1 Teknik Informatika</h4>
              <p className="text-[11px] font-bold bg-white inline-block border border-black px-2 py-0.5 my-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                UDINUS • 2022 - Now
              </p>
              <p className="text-xs font-medium mt-1 bg-white/70 p-2 border-2 border-black border-dashed leading-relaxed">
                Mempelajari rekayasa perangkat lunak, struktur data, dan pengembangan aplikasi enterprise.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid Item 4: Experience Card */}
        <motion.div variants={itemVariants} className="bg-[#C084FC] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black mb-4 uppercase border-b-4 border-black pb-2 flex items-center gap-2">
              <span>💼</span> Experience
            </h3>
            <div className="relative pl-3 border-l-4 border-black">
              <h4 className="font-black text-base uppercase tracking-tight">Web Intern</h4>
              <p className="text-[11px] font-bold bg-white inline-block border border-black px-2 py-0.5 my-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Disnaker • 2025
              </p>
              <p className="text-xs font-medium mt-1 bg-white/70 p-2 border-2 border-black border-dashed leading-relaxed">
                Mengembangkan aplikasi web Learning Management System (LMS) menggunakan Laravel dan Bootstrap CSS.
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}