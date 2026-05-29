"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import project1 from "../images/project/poliklinik/Screenshot (111).png";
import project2 from "../images/project/maktab/Screenshot (107).png";
import project3 from "../images/project/magang/Screenshot (106).png";
import project4 from "../images/project/tiketing/Screenshot (112).png";
import project5 from "../images/project/siakad/siakad1.png";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  image: StaticImageData;
  color: string; // Added dynamic neubrutalist card background colors
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Poliklinik Website",
      desc: "Website untuk manajemen poliklinik dengan fitur pendaftaran online.",
      tech: ["Laravel", "Blade", "Bootstrap"],
      image: project1,
      color: "bg-[#BFDBFE]", // Pastel Blue
    },
    {
      title: "Maktab App",
      desc: "Website untuk manajemen kegiatan maktab dengan fitur booking online.",
      tech: ["Laravel", "Blade", "Tailwind"],
      image: project2,
      color: "bg-[#FFA6C9]", // Pastel Pink
    },
    {
      title: "Project Magang",
      desc: "Project magang di Dinas Ketenagakerjaan dengan fokus pada pengembangan LMS.",
      tech: ["Laravel", "Blade", "Bootstrap"],
      image: project3,
      color: "bg-[#A3E635]", // Neo Mint/Lime
    },
    {
      title: "Tiketing Website",
      desc: "Website tiketing untuk booking event dan konser.",
      tech: ["Laravel", "Blade", "Tailwind"],
      image: project4,
      color: "bg-[#FDE047]", // Pastel Yellow
    },
    {
      title: "Sistem Informasi Akademik",
      desc: "Website untuk manajemen informasi akademik dan kegiatan akademik.",
      tech: ["Laravel", "Blade", "Tailwind"],
      image: project5,
      color: "bg-[#C084FC]", // Pastel Purple
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="relative min-h-screen bg-[#F0F0F0] text-black font-mono py-28 px-6 overflow-hidden">
      
      {/* Neubrutalist Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05] pointer-events-none"></div>

      {/* Header Container */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black bg-white inline-block border-4 border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          My Projects
        </h2>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex"
          >
            {/* Card Outer Structure */}
            <div className={`relative flex flex-col w-full bg-white border-4 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200`}>
              
              {/* Image Border wrapper */}
              <div className="relative overflow-hidden border-4 border-black mb-5 h-48 w-full bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="grayscale hover:grayscale-0 contrast-115 transition duration-300"
                />

                {/* Hard Brutalist Image Label Overlay on Hover */}
                <div className="absolute bottom-3 left-3 bg-black text-white text-xs font-black uppercase tracking-wider px-3 py-1 border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                  {project.tech[0]} APP
                </div>
              </div>

              {/* Title Header with custom color banner background */}
              <div className={`${project.color} border-2 border-black p-2 mb-3 inline-block self-start shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-black font-medium text-sm mb-6 flex-grow leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack Footer Area */}
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black border-dashed mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}