import React from 'react'

function About() {
  return (
    
    <>
    <section id="about">
     <div className="flex h-[70vh]">
     
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center mt-2">
        <h1 className="text-5xl font-bold">About</h1>
        <br></br>
        <h3 className="font-semibold text-lg mb-4">About my Self</h3>
        <p className="text-gray-600">
        I am currently pursuing an MCA with specializing in Data Science and AI.I have gained expertise in 
        programming languages such as HTML, CSS, JavaScript, Python, Bootstrap, & React.js along with comprehensive 
        knowledge in these fields. leveraging my skills for impactful contributions in the tech industry.
        </p>
      </div>
      
      <div className="w-1/2 bg-black flex flex-col justify-center items-center text-white">
      <h3 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 border-2 border-white px-4 py-2">01</h3>
        <br></br>
        <h2 className="text-4xl text-gray font-bold">ABOUT</h2>
        <hr className="w-12 border-t-2 border-white mt-5" />
      </div>
    </div>
    </section>
    </>
  )
}

export default About