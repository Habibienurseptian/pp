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
  image: StaticImageData; // Next.js image type
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Poliklinik Website",
      desc: "Website untuk manajemen poliklinik dengan fitur pendaftaran online.",
      tech: ["Laravel", "Blade", "Bootstrap"],
      image: project1,
    },
    {
      title: "Maktab App",
      desc: "Website untuk manajemen kegiatan maktab dengan fitur booking online.",
      tech: ["Laravel", "Blade", "Tailwind"],
      image: project2,
    },
    {
      title: "Project Magang",
      desc: "Project magang di Dinas Ketenagakerjaan dengan fokus pada pengembangan LMS.",
      tech: ["Laravel", "Blade", "Bootstrap"],
      image: project3,
    },
    {
      title: "Tiketing Website",
      desc: "Website tiketing untuk booking event dan konser.",
      tech: ["Laravel", "Blade", "Tailwind"],
      image: project4,
    },
    {
      title: "Sistem Informasi Akademik",
      desc: "Website untuk manajemen informasi akademik dan kegiatan akademik.",
      tech: ["Laravel", "Blade", "Tailwind"],
      image: project5,
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="relative max-w-6xl mx-auto py-28 px-6">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        My Projects
      </h2>

      <motion.div
        className="grid md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative rounded-2xl overflow-hidden"
          >
            {/* Glow Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 h-full transition duration-500 group-hover:-translate-y-2">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-4 h-40 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="px-4 py-2 bg-white text-black text-sm rounded-lg font-medium hover:bg-gray-200 transition">
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition">
                {project.title}
              </h3>

              <p className="text-white text-sm mb-4">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 hover:bg-blue-500/20 transition"
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