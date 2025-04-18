import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projectData = [
  {
    title: "Portfolio Website",
    image: "https://i.ibb.co.com/8gjtwn2B/project1.jpg",
    desc: "This is a full portfolio website built using React and Tailwind CSS.",
    fullDesc:
      "This is a complete personal portfolio website that showcases my skills, projects, and contact details. It is fully responsive, has smooth animations, and includes a modern design.",
    live: true,
    link: "https://your-portfolio-link.com",
    github: "https://github.com/your-portfolio-repo",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Portfolio Website",
    image: "https://i.ibb.co.com/8gjtwn2B/project1.jpg",
    desc: "This is a full portfolio website built using React and Tailwind CSS.",
    fullDesc:
      "This is a complete personal portfolio website that showcases my skills, projects, and contact details. It is fully responsive, has smooth animations, and includes a modern design.",
    live: true,
    link: "https://your-portfolio-link.com",
    github: "https://github.com/your-portfolio-repo",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Portfolio Website",
    image: "https://i.ibb.co.com/8gjtwn2B/project1.jpg",
    desc: "This is a full portfolio website built using React and Tailwind CSS.",
    fullDesc:
      "This is a complete personal portfolio website that showcases my skills, projects, and contact details. It is fully responsive, has smooth animations, and includes a modern design.",
    live: true,
    link: "https://your-portfolio-link.com",
    github: "https://github.com/your-portfolio-repo",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      id="projects"
      className="px-4 md:px-8 py-10 bg-[rgb(17,34,64)] min-h-screen"
    >
      <h1 className="text-4xl font-bold text-center text-white mb-24">
        <span className="text-[#64FFDA]">02.&nbsp;</span>Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-1 md:mx-6">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-[#112240] border-2 border-[#64FFDA] rounded-lg hover:shadow-[0_0_15px_#64FFDA] transition-transform hover:scale-[1.03]"
            data-aos="fade-up"
          >
            <div className="border border-[#64FFDA] m-3 rounded-md overflow-hidden hover:shadow-[0_0_5px_#64FFDA]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 text-2xl font-bold text-white mb-2">
                {project.title}
                {project?.live && (
                  <span className="text-sm text-red-500 border border-red-500 px-2 py-0.5 rounded-md relative">
                    Live
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-[#64FFDA] text-black px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-sm text-justify font-mono">
                {project.desc}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-4 w-full px-4 py-2 text-center text-[#64FFDA] border border-[#64FFDA] rounded hover:bg-[#64FFDA] hover:text-black transition"
              >
                Show More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-4 py-6">
          <div className="bg-[#112240] rounded-lg max-w-5xl w-full h-[90vh] overflow-y-auto relative text-white p-6 scrollbar-thin scrollbar-thumb-[#64FFDA]/50 scrollbar-track-[#0a192f]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-1 right-1 bg-[#112240] border border-[#64FFDA] text-[#64FFDA] text-xl rounded-full w-8 h-8 flex items-center justify-center hover:text-red-500 z-50 shadow-[0_0_5px_#64FFDA]"
            >
              ✕
            </button>

            {/* Modal Content */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded shadow-[0_0_5px_#64FFDA] mb-4 w-full"
            />

            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-[#64FFDA] text-black px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-sm text-justify mb-6 font-mono">
              {selectedProject.fullDesc}
            </p>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center px-4 py-2 border border-[#64FFDA] text-[#64FFDA] rounded hover:bg-[#64FFDA] hover:text-black transition"
              >
                View Code
              </a>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center px-4 py-2 bg-[#64FFDA] text-black rounded hover:bg-[#52e0c4] transition"
              >
                View Website
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
