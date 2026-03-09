"use client";
import { useState } from "react";
import Projects from "./components/project";
import Contacts from "./components/contact";
import Abouts from "./components/about";
import Heroes from "./components/hero";



export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-gray-950 text-white min-h-screen">

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

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-800 z-50
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">

          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-lg font-bold text-purple-400">Menu</h2>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 text-gray-300">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <Heroes />

      {/* About */}
      <Abouts />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contacts />

      {/* Footer */}
      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} MyPortfolio
      </footer>
    </main>
  );
}