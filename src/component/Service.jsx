import { FaLaptopCode, FaBolt, } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex h-[70vh]">
      
     
      <div className="w-1/2 bg-black flex flex-col justify-center items-center text-white">
      <h3 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 border-2 border-white px-4 py-2">02</h3>
      <br></br>
        <h3 className="text-4xl font-bold">SERVICES</h3>
        <hr className="w-12 border-t-2 border-white mt-5" />
      </div>

     
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center mt-2">
      <h1 className="text-5xl font-bold">Service</h1>
      <br></br>
      <br></br>
        <ServiceItem
          icon={<FaLaptopCode className="text-3xl text-gray-800" />}
          title="Web Design"
          description="Web design is the process of creating visually appealing and user-friendly websites by combining layout, color, typography, and interactive elements. It involves designing the structure, aesthetics, and functionality to enhance user experience and accessibility across devices."
        />
        <br></br>
        <ServiceItem
           icon={<FaBolt className="text-3xl text-gray-800" />}
          title="Graphic Design"
          description="Graphic design is the art of visually communicating ideas through typography, imagery, color, and layout. It is used in branding, advertising, web design, and various digital and print media to create engaging and effective designs."
        />
        
      </div>
    </div>
  );
};

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-gray-700">{icon}</div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Services;
