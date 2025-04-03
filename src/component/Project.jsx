import React from 'react'

function Project() {
  return (
    <>
      <section id="Project">
     <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
     
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center mt-2">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <br></br>
         <a href="https://satyamev-transports.netlify.app/" target="_blank" rel="noopener noreferrer"
         className="text-blue-600 hover:underline">
            <li>Transport Website</li>
         </a>
      
      </div>
      
      <div className="w-1/2 bg-black flex flex-col justify-center items-center text-white">
      <h3 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 border-2 border-white px-4 py-2">03</h3>
        <br></br>
        <h2 className="text-4xl text-gray font-bold">Projects</h2>
        <hr className="w-12 border-t-2 border-white mt-5" />
      </div>
    </div>
    </section></>
  )
}

export default Project