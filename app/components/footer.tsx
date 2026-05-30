"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#F0F0F0] text-black font-mono selection:bg-[#A3E635] overflow-hidden">
      
      {/* Consistent Neubrutalist Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05] pointer-events-none"></div>

      {/* Main Structural Outer Wrapper with heavy top border block */}
      <motion.div
        className="relative max-w-6xl mx-auto px-6 py-16 border-t-4 border-black z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

          {/* Branding */}
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight bg-yellow-300 border-2 border-black px-3 py-1 inline-block shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              MyPortfolio
            </h2>
            <p className="text-black font-semibold text-sm mt-4 max-w-sm leading-relaxed">
              Building modern web experiences with clean design and high performance.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-xl">
            <motion.a
              href="https://github.com/habibienurseptian"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ translateY: "-2px", translateX: "-2px", boxShadow: "6px_6px_0px_0px_rgba(0,0,0,1)" }}
              whileTap={{ translateY: "2px", translateX: "2px", boxShadow: "1px_1px_0px_0px_rgba(0,0,0,1)" }}
              className="p-3 bg-[#BFDBFE] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-100 cursor-pointer"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ translateY: "-2px", translateX: "-2px", boxShadow: "6px_6px_0px_0px_rgba(0,0,0,1)" }}
              whileTap={{ translateY: "2px", translateX: "2px", boxShadow: "1px_1px_0px_0px_rgba(0,0,0,1)" }}
              className="p-3 bg-[#C084FC] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-100 cursor-pointer"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/hbbenrsptn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ translateY: "-2px", translateX: "-2px", boxShadow: "6px_6px_0px_0px_rgba(0,0,0,1)" }}
              whileTap={{ translateY: "2px", translateX: "2px", boxShadow: "1px_1px_0px_0px_rgba(0,0,0,1)" }}
              className="p-3 bg-[#FFA6C9] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-100 cursor-pointer"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>

        {/* Thick Raw Horizontal Divider */}
        <div className="my-10 border-t-4 border-black border-dashed"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-black font-bold text-sm gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="uppercase tracking-wide">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#about" className="hover:bg-[#A3E635] px-2 py-0.5 border border-transparent hover:border-black transition-all">About</a>
            <a href="#projects" className="hover:bg-[#A3E635] px-2 py-0.5 border border-transparent hover:border-black transition-all">Projects</a>
            <a href="#tech" className="hover:bg-[#A3E635] px-2 py-0.5 border border-transparent hover:border-black transition-all">Tech Stack</a>
          </div>
        </div>

      </motion.div>
    </footer>
  );
}

export default Footer;