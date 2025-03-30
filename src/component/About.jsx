import React from 'react';

function About() {
  return (
    <section id="about" className="py-12">
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
        
        <div className="w-full md:w-1/2 bg-white p-6 md:p-12 flex flex-col justify-center mt-2">
          <h1 className="text-3xl md:text-5xl font-bold">About</h1>
          <br />
          <h3 className="font-semibold text-md md:text-lg mb-4">About Myself</h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
            I am currently pursuing an MCA specializing in Data Science and AI. I have gained expertise in 
            programming languages such as HTML, CSS, JavaScript, Python, Bootstrap, & React.js, along with comprehensive 
            knowledge in these fields. Leveraging my skills for impactful contributions in the tech industry.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center text-white py-12 md:py-0">
          <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 border-2 border-white px-4 py-2">
            01
          </h3>
          <br />
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">ABOUT</h2>
          <hr className="w-12 border-t-2 border-white mt-5" />
        </div>
      </div>
    </section>
  );
}

export default About;