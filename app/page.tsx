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
    // Added scroll-smooth so page sections glide gracefully into frame
    <main className="bg-[#F0F0F0] text-black min-h-screen overflow-x-hidden font-mono selection:bg-[#A3E635] scroll-smooth">
      
      {/* Global Neubrutalist Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05] pointer-events-none"></div>

      {/* Navbar Container */}
      <nav className="relative z-30 max-w-6xl mx-auto p-6 flex justify-between items-center">
        {/* Branding Label */}
        <h1 className="text-xl font-black uppercase tracking-tight bg-white border-4 border-black px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          MyPortfolio
        </h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="bg-white hover:bg-[#A3E635] text-black font-bold uppercase text-sm border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            About
          </a>
          <a href="#projects" className="bg-white hover:bg-[#A3E635] text-black font-bold uppercase text-sm border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            Projects
          </a>
          <a href="#contact" className="bg-white hover:bg-[#A3E635] text-black font-bold uppercase text-sm border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            Contact
          </a>
        </div>

        {/* Hamburger Mobile Menu Toggle Trigger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 bg-yellow-300 border-4 border-black w-12 h-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          aria-label="Open Navigation Menu"
        >
          <span className="w-6 h-[3px] bg-black"></span>
          <span className="w-6 h-[3px] bg-black"></span>
          <span className="w-6 h-[3px] bg-black"></span>
        </button>
      </nav>

      {/* Overlay Background Backdrop Shadow Layer */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 pointer-events-auto ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Smooth Sliding Mobile Sidebar Menu Container */}
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-[#F0F0F0] border-r-4 border-black z-50 flex flex-col p-6 shadow-[10px_0px_0px_0px_rgba(0,0,0,1)] transform transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header Panel */}
        <div className="flex justify-between items-center mb-10 bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-lg font-black uppercase tracking-tight">
            Menu
          </h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-red-400 hover:bg-red-500 text-black border-2 border-black font-black w-8 h-8 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm transition-all"
          >
            ✕
          </button>
        </div>

        {/* Mobile Nav Links Menu Grid Stack */}
        <div className="flex flex-col gap-4">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="bg-white border-4 border-black p-3 font-black uppercase tracking-wider text-center text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="bg-white border-4 border-black p-3 font-black uppercase tracking-wider text-center text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-white border-4 border-black p-3 font-black uppercase tracking-wider text-center text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Contact
          </a>
        </div>

        {/* Flexible Spacing Buffer Filler */}
        <div className="flex-1"></div>

        {/* Sidebar Copyright Block */}
        <div className="pt-4 border-t-4 border-black border-dashed text-xs font-black uppercase tracking-wide">
          <p>© {new Date().getFullYear()}</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>

      {/* Main Page Content Dynamic Component Pipeline */}
      <Heroes />
      <Abouts />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
}