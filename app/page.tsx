"use client";
import { useState } from "react";
import Projects from "./components/project";
import Contacts from "./components/contact";
import Abouts from "./components/about";
import Heroes from "./components/hero";
import Footer from "./components/footer";
import { motion, AnimatePresence } from "framer-motion";


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

      {/* Overlay + Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-full md:w-72 z-50"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <div className="h-full bg-white/5 backdrop-blur-2xl border-r border-white/10 p-6 flex flex-col">
                
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
                  {[
                    { name: "About", href: "#about" },
                    { name: "Projects", href: "#projects" },
                    { name: "Contact", href: "#contact" },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative text-gray-300 text-lg font-medium"
                    >
                      <span className="relative z-10 group-hover:text-white transition">
                        {item.name}
                      </span>

                      {/* Hover Glow */}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 transition-all group-hover:w-full"></span>
                    </motion.a>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* Bottom Section */}
                <div className="pt-6 border-t border-white/10 text-sm text-gray-400">
                  <p>© {new Date().getFullYear()}</p>
                  <p>MyPortfolio. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero */}
      <Heroes />

      {/* About */}
      <Abouts />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contacts />

      {/* Footer */}
      <Footer />
    </main>
  );
}