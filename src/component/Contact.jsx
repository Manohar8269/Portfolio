import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
         
          <div className="w-1/2 bg-black flex flex-col justify-center items-center text-white">
            <h3 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 border-2 border-white px-4 py-2">04</h3>
            <br></br>
            <h2 className="text-4xl text-gray font-bold">CONTACT</h2>
            <hr className="w-12 border-t-2 border-white mt-5" />
          </div>
          
          
          <div className="w-1/2 bg-white p-12 flex flex-col justify-center mt-2">
            <h1 className="text-5xl font-bold">Contact</h1>
            <br></br>
            <br></br>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gray-200 rounded-full">
                <FaPhoneAlt className="text-xl text-gray-800" />
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="text-gray-600">8269185071</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-200 rounded-full">
                <FaEnvelope className="text-xl text-gray-800" />
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-600">thakurmanohar833@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-200 rounded-full">
                <FaMapMarkerAlt className="text-xl text-gray-800" />
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-gray-600">Vill+Post = Katghara Shankar <br></br>
                  Sub-Distict = Madhuban Didtict = Mau
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-200 rounded-full">
                <FaLinkedin className="text-xl text-gray-800" />
              </div>
              <div>
                <p className="font-semibold">LinkedIn:</p>
                <p className="text-gray-600">
                  <a href="https://www.linkedin.com/in/manohar-singh-thakur-a65b6b2b6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    linkedin.com/in/manohar-singh-thakur
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
