"use client";
import { useState } from "react";
import Projects from "./components/project";
import Contacts from "./components/contact";
import Abouts from "./components/about";
import Heroes from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-400">MyPortfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </nav>

      {/* Sidebar (mobile) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Menu
            </h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white text-2xl transition"
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </a>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Footer */}
          <div className="pt-6 border-t border-white/10 text-sm text-gray-400">
            <p>© {new Date().getFullYear()}</p>
            <p>MyPortfolio. All rights reserved.</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Heroes />

      {/* About Section */}
      <Abouts />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contacts />

      {/* Footer */}
      <Footer />
    </main>
  );
}