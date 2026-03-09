"use client";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      name: "Github",
      icon: <FaGithub size={24} />,
      url: "https://github.com/habibienurseptian",
      color: "bg-gray-800 hover:bg-gray-700",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={24} />,
      url: "https://www.facebook.com/habibi.watsuke/",
      color: "bg-blue-700 hover:bg-blue-600",
    },
    {
      name: "X",
      icon: <FaXTwitter size={24} />,
      url: "#",
      color: "bg-black hover:bg-gray-800",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/hbbenrsptn",
      color: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:from-[#833ab4]/90 hover:via-[#fd1d1d]/90 hover:to-[#fcb045]/90",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="text-center py-24 px-6">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-400 mb-8">
        Feel free to reach out for collaborations or projects.
      </p>

      <motion.div
        className="flex justify-center flex-wrap gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center ${contact.color} text-white rounded-lg w-28 h-28 transition transform hover:scale-110`}
            variants={cardVariants}
          >
            <div className="mb-2">{contact.icon}</div>
            <span className="text-sm font-semibold">{contact.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}