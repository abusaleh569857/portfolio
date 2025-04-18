import React from "react";

const SkillsPage = () => {
  const frontendSkills = [
    { name: "HTML", icon: "/icons/HTML.png" },
    { name: "CSS", icon: "/icons/CSS.png" },
    { name: "SASS", icon: "/icons/SASS.png" },
    { name: "JavaScript", icon: "/icons/JavaScript.png" },
    { name: "React JS", icon: "/icons/React JS.png" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.png" },
    { name: "DaisyUI", icon: "/icons/DaisyUI.png" },
  ];

  const backendSkills = [
    { name: "Node JS", icon: "/icons/Node JS.png" },
    { name: "Express JS", icon: "/icons/Express JS.png" },
    { name: "MongoDB", icon: "/icons/MongoDB.png" },
    { name: "MySQL", icon: "/icons/MySQL.png" },
    { name: "Firebase", icon: "/icons/Firebase.png" },
    { name: "JWT", icon: "/icons/JWT.png" },
  ];

  const languageSkills = [
    { name: "C", icon: "/icons/C.png" },
    { name: "C++", icon: "/icons/C++.png" },
    { name: "Java", icon: "/icons/Java.png" },
    { name: "JavaScript", icon: "/icons/JavaScript.png" },
  ];

  const toolSkills = [
    { name: "Git", icon: "/icons/Git.png" },
    { name: "GitHub", icon: "/icons/Github.png" },
    { name: "Postman", icon: "/icons/Postman.png" },
    { name: "Vercel", icon: "/icons/Vercel.png" },
    { name: "Netlify", icon: "/icons/Netlify.png" },
    { name: "VS Code", icon: "/icons/VS Code.png" },
  ];

  const renderSkills = (title, skills) => (
    <div
      id="skills"
      className="w-full md:w-[48%] bg-[#112240] border-2 border-[#64FFDA]  rounded-2xl shadow-[0_0_20px_#64ffda20] p-6 transition hover:shadow-[0_0_25px_#64ffda40]"
    >
      <h3 className="text-white text-2xl font-semibold text-center mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-gray-400 rounded-xl py-2 px-4 text-white text-lg bg-[#0f284e] hover:border-[#64ffda] transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain"
            />
            <span className="text-gray-400 text-md font-mono font-bold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="Skills"
      className="px-6 md:px-16 py-16 bg-[rgb(17,34,64)] font-mono text-white"
    >
      <h2 className="text-4xl sm:text-3xl mb-10 font-bold text-center">
        <span className="text-[#64ffda]">03.&nbsp;</span>Skills
      </h2>
      <div className="flex flex-wrap justify-around gap-6">
        {renderSkills("Frontend", frontendSkills)}
        {renderSkills("Backend", backendSkills)}
        {renderSkills("Languages", languageSkills)}
        {renderSkills("Tools", toolSkills)}
      </div>
    </section>
  );
};

export default SkillsPage;
