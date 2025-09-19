import React from 'react'
import vector3 from "../assets/Vector (3).svg"

const Project = () => {

  const projects = [
    {
      id: 1,
      title: "Mobile App Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      tags: ["App Design", "UX Research"],
      image: vector3,
    },
    {
      id: 2,
      title: "Website Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      tags: ["Web Design", "UX Research"],
      image: vector3,
    },
    {
      id: 3,
      title: "Brand Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      tags: ["Brand Design", "UX Research"],
      image: vector3,
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Crafting strong brand visuals and designs that leave lasting impressions.",
      tags: ["Branding", "Graphics"],
      image: vector3,
    },
    {
      id: 5,
      title: "Dashboard UI",
      description: "Intuitive dashboards designed to simplify workflows and boost productivity.",
      tags: ["Dashboard", "UI/UX"],
      image: vector3,
    },
    {
      id: 6,
      title: "Marketing Campaign",
      description: "Visually engaging campaigns designed to attract and retain audiences.",
      tags: ["Marketing", "Graphics"],
      image: vector3,
    },
  ]

  return (
    <div className="bg-black text-white">

      {/* Section Header */}
      <div className="text-center py-12">
        <button className="px-5 py-1 border border-[#55E6A5] text-[#55E6A5] rounded-full text-sm tracking-wide">
          Our Project
        </button>
        <h1 className="text-4xl font-bold mt-6 mb-4">Our Project</h1>
        <p className="text-gray-400">
          Some creative designs created by our agency
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-20 pb-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`rounded-xl p-5 text-center border ${
              index === 0
                ? "bg-[#55E6A5] text-black border-transparent"
                : "bg-[#0B0C0E] text-white border-[#3A3A3A]"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />

            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              {project.tags.map((tag, i) => (
                <button
                  key={i}
                  className={`px-4 py-1 rounded-full text-sm ${
                    index === 0
                      ? "border border-black text-black"
                      : "border border-white text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <h2
              className={`text-xl font-bold mb-3 ${
                index === 0 ? "text-black" : "text-white"
              }`}
            >
              {project.title}
            </h2>
            <p
              className={`text-sm ${
                index === 0 ? "text-black/70" : "text-gray-400"
              }`}
            >
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="flex justify-center pb-16">
        <button className="px-6 py-2 border border-black text-black bg-white rounded-lg">
          View More Projects
        </button>
      </div>
    </div>
  )
}

export default Project