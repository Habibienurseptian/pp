"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub } from "react-icons/fa";
import bgImage from "../images/pp.png";

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

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="relative text-center h-screen py-42 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* overlay agar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          <span ref={typedRef}></span>
        </h1>

        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Fullstack Developer who builds modern web applications.
        </p>

        <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center mx-auto">
          <a href="https://github.com/habibienurseptian" className="flex items-center">
            View My Work <FaGithub className="ml-2" />
          </a>
        </button>
      </div>
    </section>
  );
}