import React from "react";
import vector4 from "../assets/Vector (4).svg";
import vector5 from "../assets/Vector (5).svg";
import vector6 from "../assets/Vector (6).svg";

const services = [
  {
    title: "Development",
    desc: "Create a platform with the best and coolest quality from us",
    active: true,
  },
  {
    title: "UI/UX Designer",
    desc: "We provide UI/UX Design services, and of course with the best quality",
  },
  {
    title: "Graphik Designer",
    desc: "We provide Graphic Design services, with the best designers",
  },
  {
    title: "Motion Graphik",
    desc: "Create a platform with the best and coolest quality from us",
  },
  {
    title: "Photography",
    desc: "We provide Photography services, and of course with the best quality",
  },
  {
    title: "Videography",
    desc: "Create a platform with the best and coolest quality from us",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-black font-poppins">
      {/* Brand Bar */}
      <div className="flex justify-center gap-10 bg-[#55E6A5] h-[8vh] items-center font-bold text-lg px-8">
        <span>Hubspot</span>
        <span>Buffer</span>
        <span>Stripe</span>
        <span className="flex items-center gap-1">
          <img src={vector5} alt="Framer" className="w-4" /> Framer
        </span>
        <span className="flex items-center gap-1">
          <img src={vector4} alt="Dropbox" className="w-6" /> Dropbox
        </span>
        <span>Netflix</span>
      </div>

      {/* Heading */}
      <div className="text-center py-16">
        <button className="px-5 py-1 border border-[#55E6A5] text-[#55E6A5] rounded-full text-sm tracking-wide">
          Our Services
        </button>
        <h1 className="text-4xl text-white md:text-5xl font-bold leading-tight mb-4">
          Explore what services <br /> we’re offering
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Every one of us loves something different. So explore the world
          through the lens of our visual capabilities, and find what you love
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-20 pb-20">

        {services.map((service, index) => (
          <div
  key={index}
  className={`rounded-xl p-8 text-center border transition duration-300 cursor-pointer hover:scale-105 ${
    service.active
      ? "bg-[#55E6A5] text-black border-transparent"
      : "bg-[#0B0C0E] text-white border border-[#3A3A3A] hover:bg-[#55E6A5] hover:text-black hover:border-transparent"
  }`}
>
  <div className="flex justify-center mb-6">
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full ${
        service.active ? "bg-black text-white" : "bg-[#0B0C0E] text-white"
      }`}
    >
      <img src={vector6} alt="icon" className="w-6 h-6" />
    </div>
  </div>
  <h2 className="text-lg font-bold mb-3">{service.title}</h2>
  <p className="text-sm opacity-80">{service.desc}</p>
</div>

        ))}
      </div>
    </div>
  );
};

export default Services;