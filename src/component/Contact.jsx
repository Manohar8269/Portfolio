import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="flex flex-col-reverse md:flex-row h-auto md:h-[70vh]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">Contact</h1>
          <div className="mt-6 space-y-6">
            <ContactItem icon={<FaPhoneAlt />} title="Phone" text="8269185071" />
            <ContactItem icon={<FaEnvelope />} title="Email" text="thakurmanohar833@gmail.com" />
            <ContactItem icon={<FaMapMarkerAlt />} title="Address" text={`Vill+Post: Katghara Shankar\nSub-District: Madhuban\nDistrict: Mau`} />
            <ContactItem 
              icon={<FaLinkedin />} 
              title="LinkedIn" 
              text={<a href="https://www.linkedin.com/in/manohar-singh-thakur-a65b6b2b6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/manohar-singh-thakur</a>} 
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center text-white py-10 px-6">
          <h3 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 border-2 border-white px-4 py-2">
            03
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">CONTACT</h2>
          <hr className="w-12 border-t-2 border-white mt-5" />
        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 text-center md:text-left">
      <div className="p-3 bg-gray-200 rounded-full text-gray-800 mb-3 md:mb-0 text-xl">{icon}</div>
      <div>
        <p className="font-semibold">{title}:</p>
        <p className="text-gray-600 whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
};

export default Contact;
