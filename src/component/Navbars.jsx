import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        <nav className="w-full flex justify-between items-center px-10 py-4   text-gray-400 fixed top-0">
          <h1 className="text-3xl text-white font-bold underline" style={{ fontFamily: '"Great Vibes", cursive' }}>
            Manohar Singh Thakur
          </h1>
          <ul className="flex space-x-6">
            <li onClick={() => handleScroll("home")} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => handleScroll("about")} className="cursor-pointer">
              About
            </li>
            <li onClick={() => handleScroll("service")} className="cursor-pointer">
              Service
            </li>
            <li onClick={() => handleScroll("contact")} className="cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>

        <motion.h2 className="text-4xl font-bold text-white absolute top-20 left-10">
          I am a <span className="text-green-400">{typing}</span>
        </motion.h2>

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
