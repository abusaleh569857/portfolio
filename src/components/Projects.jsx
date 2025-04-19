import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projectData = [
  {
    title: "TechElevate(Fullstack Project)",
    image: "https://i.ibb.co.com/8gjtwn2B/project1.jpg",
    desc: "TechElevate is a full-stack platform built to empower users in sharing, managing, and discovering innovative tech products. It features a role-based dashboard system for users, moderators, and admins, offering functionalities like product submission, review queues, user management, and analytics.",
    fullDesc:
      "TechElevate is a dynamic full-stack web application focused on fostering innovation and collaboration in the tech community.\n\nThe platform offers a seamless user experience with three distinct dashboards tailored to specific roles:\n\n🔹 User Dashboard:\n- Create and manage user profiles.\n- Submit tech products with rich metadata: name, image, tags, links, and descriptions.\n- Manage products (edit/delete) and track their status.\n- Subscribe to memberships.\n\n🔹 Moderator Dashboard:\n- Review newly submitted products.\n- Approve, reject, or mark them as featured.\n- Manage reported content and ensure platform quality.\n\n🔹 Admin Dashboard:\n- Access platform statistics and insights.\n- Manage user roles (assign Moderator/Admin).\n- Create, edit, and delete discount coupons.\n\n🚀 Tech Stack:\nFrontend: React.js, Tailwind CSS, Daisy UI\nBackend: Node.js with Express.js, MongoDB\nAuthentication: JWT\nHosting: Firebase (Frontend), Vercel (Backend)\n\n🎯 Goal:\nTechElevate aims to be a centralized hub for sharing tech innovations, enhancing product visibility, and fostering a curated community-driven platform.",
    live: false,
    link: "https://tech-elevate.web.app/",
    github: "https://github.com/abusaleh569857/tech-elevate-client",
    technologies: [
      "React",
      "Tailwind",
      "Express JS",
      "Daisy UI",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Responsive Landing Page(Frontend)",
    image: "https://i.ibb.co.com/4ZWNXzq0/profile4.jpg",
    desc: "A fully responsive landing page built using only raw HTML and CSS, showcasing clean layout techniques, media queries, and mobile-first design approach.",
    fullDesc: [
      "This is a static frontend project created using raw HTML and CSS — no frameworks, no libraries — just pure web fundamentals.",

      "📱 Fully Responsive: The layout adjusts seamlessly across desktop, tablet, and mobile screens using custom media queries.",

      "🎨 Clean Layout: Designed with modern sectioning, consistent spacing, and visual hierarchy to provide a smooth browsing experience.",

      "🧱 Flexbox-Based Grids: Implements responsive column layouts using CSS Flexbox without any third-party grid systems.",

      "🔍 Accessibility-Focused: Semantic HTML used for better structure and improved accessibility across screen readers.",

      "🎯 Purpose: This project demonstrates mastery over core web technologies and the ability to create real-world responsive designs without relying on UI libraries.",
    ],
    live: false,
    link: "https://abusaleh569857.github.io/B-10-Assignment-03/",
    github: "https://github.com/abusaleh569857/B-10-Assignment-03",
    technologies: ["HTML", "CSS", "Media Queries", "Flexbox"],
  },

  {
    title: "Online Visa Navigator(Fullstack)",
    image: "https://i.ibb.co.com/yc9sR0W1/profile3.jpg",
    desc: "Online Visa Navigator is a full-stack web platform that allows users to check visa requirements, apply for visas, and manage applications through a clean, responsive, and intuitive interface.",
    fullDesc: [
      "Online Visa Navigator is a modern visa management platform that simplifies how users explore and apply for visas worldwide.",

      "🔍 Visa Requirement Checker: Users can search and view visa details such as type, processing time, required documents, and fees by country.",

      "📝 Visa Application System: Authenticated users can apply directly for a visa and track their application progress in real time.",

      "🔐 Secure Authentication: Includes email/password registration, login, and Google sign-in, handled through Firebase Authentication.",

      "🧑‍💼 My Visas & Applications: Users can view, manage, and delete their submitted visa details and track personal visa application statuses.",

      "🎨 Dynamic Interface: The UI supports live filtering, searching, animated scroll effects, typewriter intro, and a toggleable light/dark theme.",

      "📱 Mobile-Friendly: Built with responsiveness in mind using React, making the platform accessible across all device sizes.",

      "🛠 Backend Features: Includes secure APIs built with Node.js & Express, protected routes via JWT, and MongoDB for visa data management.",

      "🎯 Purpose: To provide a seamless and secure platform for users to manage their visa processes with clarity and ease, eliminating complexity and confusion.",
    ],
    live: true,
    link: "https://visa-navigator-portal-df0a1.web.app/",
    github: "https://github.com/abusaleh569857/visa-navigator-client-side",
    technologies: [
      "React",

      "Firebase Authentication",
      "Context API",
      "SweetAlert2",
      "Tailwind CSS",
      "React Router",
      "React Simple Typewriter",
      "React Awesome Reveal",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "dotenv",
    ],
  },

  {
    title: "Library Management System(Fullstack)",
    image: "https://i.ibb.co.com/JWFFCb0H/profile2.jpg",
    desc: "BookHub is a modern and user-friendly platform for browsing, borrowing, and managing books across various categories. Built with React, Tailwind CSS, and Daisy UI, it ensures a smooth and accessible user experience.",
    fullDesc: [
      "BookHub is a full-featured frontend web application designed for discovering, borrowing, and managing books across various genres like Novel, Thriller, History, and Sci-Fi.",

      "📖 Seamless Book Browsing: Users can browse books by category, view real-time availability, and read detailed descriptions through an intuitive UI.",

      "🔍 Smart Search & Filter: Advanced search system allows users to quickly find books by title or category using match-based filtering.",

      "📥 Book Borrowing System: Users can borrow available books and keep track of their borrowed items from a dedicated section.",

      "💬 Interactive Modals & Reviews: Modal popups offer detailed views and user engagement features like reviews and ratings for a rich user experience.",

      "📱 Fully Responsive UI: Built with mobile-first design principles using Tailwind CSS and Daisy UI, ensuring accessibility and great UX across devices.",

      "🚀 Admin-Level Features (Backend): The backend supports JWT-based authentication, route protection, and API endpoints to manage books, users, and borrowing history securely.",

      "💡 Purpose: The main goal of BookHub is to deliver a clean, dynamic, and user-focused digital library interface that simplifies book discovery and borrowing for modern readers.",
    ],

    live: false,
    link: "https://library-managememt-system.web.app/",
    github: "https://github.com/abusaleh569857/book-hub-client",
    technologies: [
      "React",
      "Tailwind CSS",
      "Daisy UI",

      "Firebase",
      "Axios",
      "React Router",
      "Express Js",
      "MongoDB",

      "Swiper",
      "React Toastify",
      "React Spinners",

      "React Rating Stars",
      "React Slick",
      "React Icons",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      id="projects"
      className="px-4 md:px-8 py-4 md:py-10 bg-[rgb(17,34,64)] min-h-screen"
    >
      <h1 className="text-4xl font-bold text-center text-white mb-24">
        <span className="text-[#64FFDA]">02.</span>Projects
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
                {project.technologies.slice(0, 5).map((tech, i) => (
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

            <div className="flex flex-col md:flex-row gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/2 text-center px-4 py-2 border border-[#64FFDA] text-[#64FFDA] rounded hover:bg-[#64FFDA] hover:text-black transition"
              >
                View Code
              </a>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/2 text-center px-4 py-2 bg-[#64FFDA] text-black rounded hover:bg-[#52e0c4] transition"
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
