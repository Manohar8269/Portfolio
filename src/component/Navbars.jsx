import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Resume from "../assets/Resume.pdf";
import "./styles.css";

const roles = ["Web Developer", "Graphic Designer"];

const Navbar = () => {
  const [typing, setTyping] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <section id="home">
      <div
        className="h-screen bg-cover bg-top flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/photo.jpg')" }}
      >
        <nav className="w-full flex justify-between items-center px-10 py-4 text-gray-400 fixed top-0  bg-opacity-70">
          <div className="text-center">
            <h1 className="text-4xl text-white font-extrabold tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Manohar Singh Thakur
            </h1>
            <motion.div
              className="w-30 h-1 bg-green-400 mx-auto mt-1"
              animate={{ scaleX: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <ul className="flex space-x-6">
            {['home', 'about', 'service', 'contact'].map((item) => (
              <li
                key={item}
                onClick={() => handleScroll(item)}
                className="cursor-pointer relative text-white hover:text-green-400 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <motion.div
                  className="absolute left-0 bottom-0 w-full h-1 bg-green-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </li>
            ))}
          </ul>
        </nav>

        <motion.h2 className="text-4xl font-bold text-white absolute top-20 left-10">
          I am a <span className="text-green-400">{typing}</span>
        </motion.h2>
        
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-40 left-10 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
        >
          Download Resume
        </a>

        <div className="fixed bottom-4 right-4">
          <a href="https://wa.me/8269185071" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-12 h-12"
            />
          </a>
        </div>

        {isVisible && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-4 left-4 font-bold bg-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
          >
            ▲
          </button>
        )}
      </div>
    </section>
  );
};

export default Navbar;
