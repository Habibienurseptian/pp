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
        "Hi, I'm Habibie <span class=\"text-white\">👋</span>",
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* 🎥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Glow Effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Typed Text */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          <span ref={typedRef}></span>
        </h1>

        <motion.p
          className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Fullstack Developer who builds modern, fast, and scalable web applications.
        </motion.p>

        {/* Button */}
        <motion.a
          href="https://github.com/habibienurseptian"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-purple-500/30 transition"
        >
          View My Work <FaGithub className="ml-2" />
        </motion.a>
      </motion.div>

    </section>
  );
}