"use client";
import { useState } from "react";
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
  SiPython
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact() {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    {
      name: "Laravel",
      icon: <SiLaravel size={28} />,
      url: "https://laravel.com",
      color: "bg-[#FFA6C9]",
    },
    {
      name: "PHP",
      icon: <SiPhp size={28} />,
      url: "https://www.php.net",
      color: "bg-[#C084FC]",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={28} />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      color: "bg-[#FDE047]",
    },
    {
      name: "Python",
      icon: <SiPython size={28} />,
      url: "https://www.python.org",
      color: "bg-[#BFDBFE]",
    },
    {
      name: "React",
      icon: <SiReact size={28} />,
      url: "https://react.dev",
      color: "bg-[#BFDBFE]",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={28} />,
      url: "https://nextjs.org",
      color: "bg-[#A3E635]",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={28} />,
      url: "https://tailwindcss.com",
      color: "bg-[#FFA6C9]", 
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap size={28} />,
      url: "https://getbootstrap.com",
      color: "bg-[#C084FC]",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 size={28} />,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      color: "bg-[#FDE047]",
    },
    {
      name: "CSS",
      icon: <SiCss size={28} />,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      color: "bg-[#BFDBFE]",
    },
  ];

  return (
    <section id="contact" className="relative text-center py-28 px-6 bg-[#F0F0F0] text-black font-mono selection:bg-[#A3E635] overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <div className="inline-block bg-[#A3E635] border-4 border-black px-6 py-3 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black">
            Tech Stack
          </h2>
        </div>

        <p className="text-black font-bold text-sm md:text-base mb-12 max-w-md mx-auto bg-white p-3 border-2 border-black border-dashed">
          Technologies and tools I use to build robust web applications.
        </p>

        <div className="flex justify-center flex-wrap gap-6 md:gap-8 max-w-3xl mx-auto">
          {skills.map((skill, index) => {
            if (!showAll && index > 3) return null;

            return (
              <motion.a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ 
                  translateY: "-4px", 
                  translateX: "-4px",
                  shadow: "10px_10px_0px_0px_rgba(0,0,0,1)" 
                }}
                whileTap={{ 
                  translateY: "4px", 
                  translateX: "4px",
                  shadow: "2px_2px_0px_0px_rgba(0,0,0,1)" 
                }}
                className={`flex flex-col items-center justify-center ${skill.color} text-black border-4 border-black font-black uppercase tracking-wider w-28 h-28 md:w-32 md:h-32 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-100 cursor-pointer`}
              >
                <div className="mb-2 md:mb-3 bg-white p-2 border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                  {skill.icon}
                </div>
                <span className="text-[10px] md:text-xs font-black tracking-tight">{skill.name}</span>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ translateY: "-2px", translateX: "-2px", shadow: "6px_6px_0px_0px_rgba(0,0,0,1)" }}
            whileTap={{ translateY: "2px", translateX: "2px", shadow: "2px_2px_0px_0px_rgba(0,0,0,1)" }}
            className="bg-white border-4 border-black text-black font-black uppercase tracking-wider text-sm px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-100"
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>

      </div>
    </section>
  );
}