import { TbBriefcaseFilled } from "react-icons/tb";

const ExperienceSection = () => {
  return (
    <div
      id="experience"
      className="px-6 md:px-16 bg-[rgb(17,34,64)] font-mono text-white pb-0 md:pb-12"
    >
      <h1 className="text-4xl sm:text-3xl xs:text-2xl mb-8 md:mb-12 font-bold text-center">
        <span className="text-[#64FFDA]">05.</span>Experience
      </h1>

      <div className="relative border-l-2 border-[#64FFDA] px-2 md:px-12 pl-0 md:pl-12 ml-0 md:ml-12">
        {/* Vertical Icons */}
        <div className="absolute left-[-1rem] top-0 h-full flex flex-col justify-between items-center">
          {/* Top Icon */}
          <div className="bg-[#64FFDA] w-10 h-10 rounded-full flex items-center justify-center">
            <TbBriefcaseFilled className="w-5 h-5 text-[#0a192f]" />
          </div>

          {/* Middle Icon */}
          <div className="bg-[#64FFDA] w-10 h-10 rounded-full flex items-center justify-center">
            <TbBriefcaseFilled className="w-5 h-5 text-[#0a192f]" />
          </div>

          {/* Bottom Icon */}
          <div className="bg-[#64FFDA] w-10 h-10 rounded-full flex items-center justify-center">
            <TbBriefcaseFilled className="w-5 h-5 text-[#0a192f]" />
          </div>
        </div>

        <div className="py-12 pl-4 md:pl-0">
          {/* Fullstack Projects */}
          <div className=" mb-10 p-6 border border-[#64FFDA] rounded-2xl shadow-[0_0_10px_0_#64FFDA50]">
            <h2 className="text-2xl font-bold text-white mb-1">
              Fullstack Developer
            </h2>
            <p className="text-lg text-[#ccd6f6] mb-2">
              Personal & University Projects • 2023 - Present
            </p>
            <p className="text-sm text-[#8892b0] mb-3">
              Built multiple fullstack projects using modern technologies.
              Experienced in building frontend and backend apps, RESTful API
              integration, authentication, and deployment. Participated in
              group-based academic projects and collaborative development.
            </p>
            <p className="text-sm text-[#8892b0]">
              <span className="font-semibold text-white">Skills:</span> React JS
              • Node JS • Express JS • MongoDB • Firebase • Tailwind CSS •
              DaisyUI
            </p>
          </div>

          {/* Project Show Achievement */}
          <div className=" mb-10 p-6 border border-[#64FFDA] rounded-2xl shadow-[0_0_10px_0_#64FFDA50]">
            <h2 className="text-2xl font-bold text-white mb-1">
              Project Showcase Recognition
            </h2>
            <p className="text-lg text-[#ccd6f6] mb-2">
              UIU CSE Project Show • Fall 2024
            </p>
            <p className="text-sm text-[#8892b0] mb-3">
              Achieved <strong>3rd Runner Up</strong> position out of 124 teams
              in the Database Management System Lab course project competition.
              Successfully demonstrated a fullstack system with a strong
              database backend and intuitive UI. Collaborated with team members
              to deliver quality under tight deadlines.
            </p>
            <p className="text-sm text-[#8892b0]">
              <span className="font-semibold text-white">Skills:</span> MySQL •
              React JS • Node JS • Express JS • Firebase • Tailwind CSS •
              DaisyUI • ERD Design • Team Collaboration (Team Leader) •
              Presentation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
