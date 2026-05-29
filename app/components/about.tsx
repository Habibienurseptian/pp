"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../images/ph.jpeg";

export default function About() {
  const fullText = "About Me";

  const descriptionLines = [
    "Saya seorang web developer yang fokus membangun aplikasi web modern dengan performa tinggi dan UI yang menarik. Saya memiliki ketertarikan pada frontend development, UI/UX, dan teknologi web terbaru."
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
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
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

      <div className="max-w-6xl mx-auto relative bg-white border-4 border-black p-8 md:p-12 flex flex-col md:flex-row gap-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10">

        {/* Profile + Passion Card Side */}
        <div className="flex flex-col items-center">
          <div className="relative group bg-[#FFA6C9] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="relative w-48 aspect-[3/4] border-4 border-black overflow-hidden bg-gray-200">
              <img
                src={profileImage.src}
                alt="Profile"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>

          {/* Animated Passion Text Block */}
          <motion.div
            className="text-black mt-6 text-center max-w-xs bg-yellow-300 border-4 border-black p-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-wider leading-relaxed">
              Passionate Web Developer who loves building modern web experiences and solving real problems with code.
            </motion.p>
          </motion.div>
        </div>

        {/* Biography & Timeline Content Side */}
        <div className="flex-1 space-y-12">

          {/* About Title & Bio Card */}
          <div className="bg-[#A3E635] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight inline-block bg-white border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              {typedTitle}
              <span className="inline-block w-2 h-6 bg-black ml-1.5 animate-ping"></span>
            </h2>

            {/* Animated Description */}
            <motion.div
              className="space-y-2 text-black font-semibold mt-4 text-base leading-relaxed text-justify"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {descriptionLines.map((line, i) => (
                <motion.p key={i} variants={itemVariants}>
                  {line}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Education Brutalist Card */}
            <motion.div variants={itemVariants} className="bg-[#BFDBFE] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black mb-6 uppercase border-b-4 border-black pb-2 flex items-center gap-2">
                <span>🎓</span> Education
              </h3>
              <div className="space-y-6">
                <div className="relative pl-4 border-l-4 border-black">
                  <h4 className="font-black text-lg uppercase">S1 Teknik Informatika</h4>
                  <p className="text-sm font-bold bg-white inline-block border border-black px-2 my-1">
                    Universitas Dian Nuswantoro • 2022 - Now
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Brutalist Card */}
            <motion.div variants={itemVariants} className="bg-[#C084FC] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black mb-6 uppercase border-b-4 border-black pb-2 flex items-center gap-2">
                <span>💼</span> Experience
              </h3>
              <div className="space-y-6">
                <div className="relative pl-4 border-l-4 border-black">
                  <h4 className="font-black text-lg uppercase">Internship</h4>
                  <p className="text-sm font-bold bg-white inline-block border border-black px-2 my-1">
                    Dinas Ketenagakerjaan Kota Semarang • Juli 2025 - September 2025
                  </p>
                  <p className="text-sm font-medium mt-2 bg-white/60 p-2 border-2 border-black border-dashed leading-relaxed">
                    Mengembangkan aplikasi web learning management system menggunakan Laravel, Blade, dan Bootstrap CSS.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}