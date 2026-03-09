"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../images/ph.jpeg";

export default function About() {
  // Typed text untuk About Me
  const fullText = "About Me";
  const fullDescription = "Saya adalah seorang web developer yang fokus membangun aplikasi web modern dengan performa tinggi dan UI yang menarik. Saya memiliki ketertarikan pada frontend development, UI/UX, dan teknologi web terbaru.";
  const [typedTitle, setTypedTitle] = useState("");
  const [typedDescription, setTypedDescription] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedDescription(fullDescription.slice(0, index + 1));
      index++;
      if (index === fullDescription.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Variants untuk staggered timeline
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row gap-12 shadow-2xl">

        {/* Profile + Animated Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative group border-loop">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition"></div>
            <img
              src={profileImage.src}
              alt="Profile"
              className="relative w-48 h-48 object-cover rounded-xl border border-white/10"
            />
          </div>

          {/* Animated Description */}
          <motion.div
            className="text-gray-400 mt-4 text-center md:text-left max-w-xs space-y-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={itemVariants}>
              Passionate Web Developer who loves building modern web experiences and solving real problems with code.
            </motion.p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-10">

          {/* About with Typed Title */}
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                {typedTitle}
              <span className="inline-block w-1 h-5 bg-gray-400 ml-1 animate-pulse"></span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-justify">
                {typedDescription}
              <span className="inline-block w-1 h-5 bg-gray-400 ml-1 animate-pulse"></span>
            </p>
          </div>

          {/* Timeline */}
          <motion.div className="grid md:grid-cols-2 gap-10" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-purple-400">🎓 Education</h3>
              <div className="relative border-l border-purple-500/40 pl-6 space-y-6">
                <motion.div variants={itemVariants}>
                  <div className="absolute -left-[7px] w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h4 className="font-semibold">S1 Teknik Informatika</h4>
                  <p className="text-sm text-gray-400">
                    Universitas Dian Nuswantoro • 2022 - Now
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <div className="absolute -left-[7px] w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h4 className="font-semibold">SMA Negeri 1 Slawi</h4>
                  <p className="text-sm text-gray-400">
                    SMA Negeri 1 Slawi • 2019 - 2022
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-blue-400">💼 Experience</h3>
              <div className="relative border-l border-blue-500/40 pl-6 space-y-6">
                <motion.div variants={itemVariants}>
                  <div className="absolute -left-[7px] w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold">Internship</h4>
                  <p className="text-sm text-gray-400">
                    Dinas Ketenagakerjaan Kota Semarang • Juli 2025 - September 2025
                  </p>
                  <p className="text-sm text-gray-500">
                    Mengembangkan aplikasi web menggunakan Laravel, Blade, dan Bootstrap CSS.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}