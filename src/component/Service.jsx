import { FaLaptopCode, FaBolt } from "react-icons/fa";

const Services = () => {
  return (
    <section id="service" className="py-12">
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center text-white py-10 px-6">
          <h3 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 border-2 border-white px-4 py-2">
            02
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold mt-4">SERVICES</h3>
          <hr className="w-12 border-t-2 border-white mt-5" />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">Our Services</h1>
          <div className="mt-8 space-y-6">
            <ServiceItem
              icon={<FaLaptopCode className="text-3xl text-gray-800" />}
              title="Web Design"
              description="Creating visually appealing and user-friendly websites with modern layouts, color schemes, and interactive elements."
            />
            <ServiceItem
              icon={<FaBolt className="text-3xl text-gray-800" />}
              title="Graphic Design"
              description="Crafting engaging visuals for branding, advertising, and digital media using typography, imagery, and layout techniques."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 text-center md:text-left">
      <div className="text-gray-700 mb-3 md:mb-0">{icon}</div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-gray-600 max-w-md">{description}</p>
      </div>
    </div>
  );
};

export default Services;
