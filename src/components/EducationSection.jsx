import React from "react";

const EducationSection = () => {
  const educationData = [
    {
      title: "BSc in Computer Science & Engineering",
      institute: "United International University",
      details: ["Currently in 8th trimester", "CGPA: 3.60 / 4.00"],
      side: "left",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institute: "Govt Azizul Haque College, Bogura",
      details: ["Background: Science", "GPA: 5.00 / 5.00"],
      side: "right",
    },
  ];

  return (
    <section
      id="education"
      className="px-6 md:px-16 py-16 bg-[rgb(17,34,64)]  font-mono text-white"
    >
      <h2 className="text-4xl sm:text-3xl mb-6 md:mb-20 font-bold text-center">
        <span className="text-[#64ffda]">04.</span>Education
      </h2>
      <div className="flex flex-wrap justify-around gap-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="w-full md:w-[45%] bg-[#112240] border-2 border-[#64FFDA] rounded-2xl shadow-md p-6 hover:shadow-[0_0_25px_#64ffda40] transition"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
            <p className="text-lg text-[#64ffda] font-semibold mb-4">
              {edu.institute}
            </p>
            <ul className="text-gray-400 text-md list-disc list-inside space-y-2">
              {edu.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
