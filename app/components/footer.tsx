import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative mt-32">

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <motion.div
        className="relative max-w-6xl mx-auto px-6 py-16 border-t border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              MyPortfolio
            </h2>
            <p className="text-gray-400 mt-2 max-w-sm">
              Building modern web experiences with clean design and high performance.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 text-xl">
            <a
              href="https://github.com/habibienurseptian"
              target="_blank"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-purple-500/20 transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-blue-500/20 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/hbbenrsptn"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-pink-500/20 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;