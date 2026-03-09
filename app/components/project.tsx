"use client";

import { motion } from "framer-motion";
import project1 from "../images/project/poliklinik/Screenshot (111).png";
import project2 from "../images/project/maktab/Screenshot (107).png";
import project3 from "../images/project/magang/Screenshot (106).png";
import project4 from "../images/project/tiketing/Screenshot (112).png";

export default function Projects() {
  const projects = [
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
  ];

  // Parent variants untuk stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // jeda antar kartu 0.2 detik
      },
    },
  };

  // Variants untuk tiap kartu
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-14">
        My Projects
      </h2>

      {/* Parent motion div untuk stagger */}
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
            className="group rounded-xl p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:scale-105 transition"
            variants={cardVariants} // anak ikut stagger
          >
            <div className="bg-gray-900 rounded-xl p-6 h-full">
              <div className="overflow-hidden rounded-lg mb-5">
                <img
                  src={project.image.src}
                  alt={project.title}
                  className="w-full h-36 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <button className="text-blue-400 text-sm hover:text-blue-300">
                View Project →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}