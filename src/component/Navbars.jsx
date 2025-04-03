import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Resume from "../assets/Resume.pdf";

const roles = ["Web Developer", "Graphic Designer"];

const Navbar = () => {
  const [typing, setTyping] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setTyping((prev) => prev + currentRole[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setTyping((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <section id="home">
      <div className="h-screen bg-cover bg-top flex flex-col justify-center items-center px-4 sm:px-10" style={{ backgroundImage: "url('/photo.jpg')" }}>
        <nav className="w-full flex justify-between items-center px-6 py-4 text-gray-400 fixed top-0 bg-opacity-70 z-50">
          <div>
            <h1 className="text-2xl sm:text-4xl text-white font-extrabold tracking-wider relative">
              Manohar Singh Thakur
           
              <motion.div
                className="absolute left-0 bottom+3 w-full h-1 bg-green-400"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </h1>
          </div>
          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </div>
          <ul className={`absolute md:static bg-black md:bg-transparent top-16 left-0 w-full md:w-auto md:flex space-x-6 p-4 md:p-0 ${menuOpen ? "block" : "hidden"}`}>
            {["home", "about", "service", "Project","contact"].map((item) => (
              <li key={item} onClick={() => handleScroll(item)} className="text-white cursor-pointer hover:text-green-400 transition py-2 md:py-0 text-center">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </nav>

        <motion.h2 className="text-3xl sm:text-4xl font-bold text-white absolute top-32 left-6 sm:left-10">
          I am a <span className="text-green-400">{typing}</span>
        </motion.h2>

        <a href={Resume} target="_blank" rel="noopener noreferrer" className="absolute top-48 left-6 sm:left-10 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition">
          Download Resume
        </a>

        <div className="fixed bottom-4 right-4">
          <a href="https://wa.me/8269185071" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10 sm:w-12 sm:h-12" />
          </a>
        </div>

        {isVisible && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-4 left-4 font-bold bg-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition">
            ▲
          </button>
        )}
      </div>
    </section>
  );
};

export default Navbar;