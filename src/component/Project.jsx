import React from "react";
import { FaLaptopCode, FaBolt } from "react-icons/fa";

function ServiceItem({ icon, title }) {
  return (
    <div className="flex items-center space-x-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

function Project() {
  return (
    <section id="Project">
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-white p-20 flex flex-col justify-start mt-2">
          <h1 className="text-5xl font-bold">Projects</h1>
          <br />

          {/* Web Design Projects */}
          <ServiceItem
            icon={<FaLaptopCode className="text-3xl text-gray-800" />}
            title="Web Design"
          />
          <ul className="list-disc list-inside ml-6">
            <li>
              <a
                href="https://satyamev-transports.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Transport Website
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Manohar8269/Self-Learning-AI-for-games-_FlappyBird"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Self-Learning AI for Games (Flappy Bird)
              </a>
            </li>
          </ul>

          <br />

          {/* Graphic Design Projects */}
          <ServiceItem
            icon={<FaBolt className="text-3xl text-gray-800" />}
            title="Graphic Design"
          />
          <ul className="list-disc list-inside ml-6">
            <li>
              <a
                href="https://drive.google.com/drive/folders/17c_eiKjrF6qb4Q0Mu4NhSA80F_lPIDKt?usp=drive_link"
                className="text-blue-600 hover:underline"
              >
                Graphic Design Project
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center text-white">
          <h3 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 border-2 border-white px-4 py-2">
            03
          </h3>
          <br />
          <h2 className="text-4xl text-gray-300 font-bold">Projects</h2>
          <hr className="w-12 border-t-2 border-white mt-5" />
        </div>
      </div>
    </section>
  );
}

export default Project;
