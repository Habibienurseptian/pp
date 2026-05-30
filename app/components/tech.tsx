"use client";
import {
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiPython,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact() {
  const skills = [
    {
      name: "Laravel",
      icon: <SiLaravel className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://laravel.com",
      color: "bg-[#FFA6C9]",
    },
    {
      name: "PHP",
      icon: <SiPhp className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://www.php.net",
      color: "bg-[#C084FC]",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      color: "bg-[#FDE047]",
    },
    {
      name: "Python",
      icon: <SiPython className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://www.python.org",
      color: "bg-[#BFDBFE]",
    },
    {
      name: "React",
      icon: <SiReact className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://react.dev",
      color: "bg-[#BFDBFE]",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://nextjs.org",
      color: "bg-[#A3E635]",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://tailwindcss.com",
      color: "bg-[#FFA6C9]",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://getbootstrap.com",
      color: "bg-[#C084FC]",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      color: "bg-[#FDE047]",
    },
    {
      name: "CSS",
      icon: <SiCss className="w-5 h-5 md:w-7 md:h-7" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      color: "bg-[#BFDBFE]",
    },
  ];

  const tripledSkills = [...skills, ...skills, ...skills];

  return (
    <section
      id="tech"
      className="relative text-center py-20 md:py-28 bg-[#F0F0F0] text-black font-mono selection:bg-[#A3E635] overflow-hidden"
    >
      {/* Consistent Neubrutalist Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] opacity-[0.05] pointer-events-none"></div>

      <div className="relative z-10 w-full mx-auto">
        {/* Section Title */}
        <div className="inline-block bg-[#A3E635] border-4 border-black px-5 py-2.5 md:px-6 md:py-3 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-black">
            Tech Stack
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-black font-bold text-xs md:text-base mb-12 md:mb-16 max-w-sm md:max-w-md mx-4 md:mx-auto bg-white p-3 border-2 border-black border-dashed">
          Technologies and tools I use to build robust web applications.
        </p>

        {/* The Running/Crawling Ticker Container */}
        <div className="relative w-full border-y-4 border-black bg-white py-4 md:py-6 overflow-hidden flex shadow-[0_6px_0_0_rgba(0,0,0,1)] md:shadow-[0_8px_0_0_rgba(0,0,0,1)]">
          <motion.div
            className="flex gap-4 md:gap-8 pr-4 md:pr-8 shrink-0 min-w-max"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {tripledSkills.map((skill, index) => (
              <motion.a
                key={`${skill.name}-${index}`}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  boxShadow: "0px 0px 0px 3px #000",
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 md:gap-3 ${skill.color} text-black border-2 md:border-4 border-black font-black uppercase tracking-wider px-3 py-1.5 md:px-5 md:py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer select-none`}
              >
                <div className="bg-white p-1 md:p-1.5 border-2 border-black text-black flex items-center justify-center">
                  {skill.icon}
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-black tracking-tight">
                  {skill.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
