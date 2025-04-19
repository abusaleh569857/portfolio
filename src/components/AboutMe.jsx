import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      id="about"
      className="px-4 md:px-8 py-4 md:py-10 bg-[rgb(17,34,64)] min-h-screen text-white"
    >
      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="text-[#64FFDA]">01.</span>About Me
      </h1>

      <div
        className="max-w-4xl mx-auto bg-[#112240] border border-[#64FFDA] rounded-lg p-6 md:p-10 shadow-[0_0_15px_#64FFDA] text-justify font-mono"
        data-aos="fade-up"
      >
        <p className="mb-6 text-gray-300 text-[15px] leading-relaxed">
          Hello! I'm{" "}
          <span className="text-[#64FFDA] font-semibold">
            Abusaleh Alam Khan
          </span>
          , a passionate and curious web developer currently pursuing{" "}
          <span className="text-[#64FFDA] font-semibold">
            Computer Science & Engineering
          </span>{" "}
          at United International University.
        </p>

        <p className="mb-6 text-gray-300 text-[15px] leading-relaxed">
          My journey into programming began in{" "}
          <span className="text-[#64FFDA] font-semibold">2022</span> when I
          enrolled in university. I started learning from{" "}
          <span className="text-[#64FFDA]">class lectures</span>,{" "}
          <span className="text-[#64FFDA]">YouTube tutorials</span>, and{" "}
          <span className="text-[#64FFDA]">W3Schools documentation</span>. My
          very first project was a simple portfolio website built only with{" "}
          <span className="text-[#64FFDA]">HTML & CSS</span>. Since then, I have
          become proficient in{" "}
          <span className="text-[#64FFDA]">
            JavaScript, React, Node.js, C, and C++
          </span>
          , and currently I’m exploring{" "}
          <span className="text-[#64FFDA]">
            Next.js, GSAP, Redux, and Three.js
          </span>
          .
        </p>

        <p className="mb-6 text-gray-300 text-[15px] leading-relaxed">
          I enjoy working in{" "}
          <span className="text-[#64FFDA]">collaborative teams</span> and have a
          strong interest in{" "}
          <span className="text-[#64FFDA]">frontend development</span>. However,
          I also find backend development quite engaging. I am highly interested
          in{" "}
          <span className="text-[#64FFDA] font-semibold">
            remote job opportunities
          </span>
          , and I’m always looking for ways to become a better developer and a
          stronger team player.
        </p>

        <p className="mb-6 text-gray-300 text-[15px] leading-relaxed">
          I love building responsive, accessible, and modern UIs using{" "}
          <span className="text-[#64FFDA]">React</span> and{" "}
          <span className="text-[#64FFDA]">Tailwind CSS</span>. I focus on
          crafting clean layouts, smooth user interactions, and seamless
          design-to-code implementations to create intuitive web experiences.
        </p>

        <p className="mb-6 text-gray-300 text-[15px] leading-relaxed">
          Outside of coding, I’m a huge fan of{" "}
          <span className="text-[#64FFDA]">cricket</span> 🏏. I also love
          spending quality time with my family and helping out with family work.
          Exploring new <span className="text-[#64FFDA]">tech trends</span> and
          tools is a part of my daily routine—I truly believe in{" "}
          <span className="text-[#64FFDA] font-semibold">
            lifelong learning
          </span>
          .
        </p>

        <p className="mb-2 text-gray-300 text-[15px] leading-relaxed">
          Currently, I’m working on a variety of academic and personal projects,
          such as:
        </p>

        <ul className="list-disc ml-6 mb-6 text-gray-300 text-[15px] leading-relaxed">
          <li>Developing dynamic web applications using React</li>
          <li>Learning backend with Node.js, Express, and JWT</li>
          <li>Creating DBMS projects with complex SQL logic</li>
          <li>Exploring AI-powered features in web apps</li>
        </ul>

        <p className="mb-6 text-gray-300 text-[15px] leading-relaxed">
          My ultimate goal is to{" "}
          <span className="text-[#64FFDA] font-semibold">
            launch my own startup
          </span>{" "}
          one day, where I can solve real-life problems through technology and
          innovative thinking.
        </p>

        <p className="italic text-[#64FFDA] text-[15px] border-t border-[#64FFDA] pt-4 mt-8 text-center">
          “If you work with honesty and dedication, and have the mindset to
          never give up, success will surely find its way to you one day. It’s
          not time to give up just yet.”
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
