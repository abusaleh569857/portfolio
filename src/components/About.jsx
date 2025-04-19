// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaFacebook,
//   FaTwitter,
// } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import profilePic from "../assets/Images/profile.jpg";

// export default function About() {
//   const roles = ["Frontend Developer", "Web Developer", "Software Engineer"];
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const role = roles[currentRoleIndex];
//     let speed = isDeleting ? 100 : 150;

//     const timer = setTimeout(() => {
//       if (!isDeleting) {
//         setDisplayText(role.substring(0, displayText.length + 1));
//         if (displayText === role) {
//           setTimeout(() => setIsDeleting(true), 1000);
//         }
//       } else {
//         setDisplayText(role.substring(0, displayText.length - 1));
//         if (displayText === "") {
//           setIsDeleting(false);
//           setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//         }
//       }
//     }, speed);

//     return () => clearTimeout(timer);
//   }, [displayText, isDeleting, currentRoleIndex]);

//   return (
//     <div
//       id="about"
//       className="min-h-screen bg-[rgb(17,34,64)] text-white relative px-6 md:px-16 pt-16 pb-6 flex flex-col md:flex-row items-center justify-between overflow-hidden"
//     >
//       {/* Social Icons Left */}
//       <div className="hidden md:fixed md:flex flex-col items-center left-4 top-[60%] -translate-y-1/2 space-y-6 z-10">
//         {[FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter].map(
//           (Icon, i) => (
//             <a href="#" key={i} target="_blank" rel="noreferrer">
//               <Icon className="text-2xl hover:text-[#64ffda] cursor-pointer transition" />
//             </a>
//           )
//         )}
//         <div className="w-px h-24 bg-[#64ffda] mt-4"></div>
//       </div>

//       {/* Email Right */}
//       <div className="hidden md:fixed md:flex flex-col items-center right-[-90px] top-[70%] -translate-y-1/2 z-10">
//         <p className="text-sm text-gray-400 tracking-wider rotate-90">
//           abusaleh.cse.uiu@gmail.com
//         </p>
//         <div className="w-[2px] h-24 bg-[#64ffda] mt-32"></div>
//       </div>

//       {/* Container with Flex Control */}
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 mt-16 ml-0 md:ml-6">
//         {/* Text Section */}
//         <div className="z-10 md:w-3/5 text-center md:text-left">
//           <p className="text-[#64ffda] font-mono text-3xl mb-4 md:mb-6">
//             Hi, I am
//           </p>
//           <h1 className="text-[32px] md:text-6xl font-mono font-bold md:font-bold">
//             Abusaleh Alam Khan
//           </h1>
//           <h2 className="text-xl md:text-4xl font-semibold mt-3 md:mt-5 flex justify-center md:justify-start items-center gap-2 font-mono">
//             I'm a{" "}
//             <span className="text-[#64ffda] relative font-mono">
//               {displayText}
//               <span className="absolute right-[-8px] top-1 text-[#64ffda] animate-pulse">
//                 |
//               </span>
//             </span>
//           </h2>
//           <p className="text-gray-400 mt-6 w-full leading-relaxed text-md md:text-xl font-mono text-justify">
//             I'm a passionate software engineer specialized in crafting efficient
//             and scalable solutions, delivering top-notch web applications, and
//             providing freelance services that exceed client expectations. Let's
//             connect and create something amazing together!
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
//             <button
//               onClick={() => setShowModal(true)}
//               className="bg-[#64ffda] hover:bg-transparent hover:border hover:border-[#64ffda] text-[#0a192f] hover:text-[#64ffda] font-semibold py-2 px-6 rounded-md transition duration-300"
//             >
//               Check Resume
//             </button>
//             <a
//               href="/resume.pdf"
//               download
//               className="border border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] text-[#64ffda] font-semibold py-2 px-6 rounded-md transition duration-300"
//             >
//               Download
//             </a>
//           </div>
//         </div>

//         {/* Profile Image */}
//         <div
//           className="rounded-full p-[4px] animated-gradient-border mr-0 md:mr-8"
//           style={{ width: "328px", height: "328px" }}
//         >
//           <div className="rounded-full overflow-hidden w-full h-full">
//             <img
//               src={profilePic}
//               alt="Profile"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Resume Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
//           <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-3 text-black text-2xl font-bold hover:text-red-500"
//             >
//               &times;
//             </button>
//             <iframe
//               src="/resume.pdf"
//               title="Resume"
//               className="w-full h-[80vh] md:h-[85vh]"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import profilePic from "../assets/Images/profile.jpg";

export default function About() {
  const roles = ["Frontend Developer", "Web Developer", "Software Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let speed = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        if (displayText === role) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <div
      id="about"
      className="min-h-screen bg-[rgb(17,34,64)] text-white relative px-6 md:px-16 pt-16 pb-6 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      {/* Social Icons Left */}
      <div className="hidden md:fixed md:flex flex-col items-center left-4 top-[60%] -translate-y-1/2 space-y-6 z-10">
        <a
          href="https://github.com/abusaleh569857"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-2xl hover:text-[#64ffda] cursor-pointer transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/abusaleh-alam-khan/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-[#64ffda] cursor-pointer transition" />
        </a>
        <a
          href="https://www.instagram.com/abusalehalamkhan/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-2xl hover:text-[#64ffda] cursor-pointer transition" />
        </a>
        <a
          href="https://www.facebook.com/abusalehalam.khan"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="text-2xl hover:text-[#64ffda] cursor-pointer transition" />
        </a>
        <a href="https://x.com/Abusaleh_here" target="_blank" rel="noreferrer">
          <FaTwitter className="text-2xl hover:text-[#64ffda] cursor-pointer transition" />
        </a>
        <div className="w-px h-24 bg-[#64ffda] mt-4"></div>
      </div>

      {/* Email Right */}
      <div className="hidden md:fixed md:flex flex-col items-center right-[-90px] top-[70%] -translate-y-1/2 z-10">
        <p className="text-sm text-gray-400 tracking-wider rotate-90">
          abusaleh.cse.uiu@gmail.com
        </p>
        <div className="w-[2px] h-24 bg-[#64ffda] mt-32"></div>
      </div>

      {/* Container with Flex Control */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 mt-16 ml-0 md:ml-6">
        {/* Text Section */}
        <div className="z-10 md:w-3/5 text-center md:text-left">
          <p className="text-[#64ffda] font-mono text-3xl mb-4 md:mb-6">
            Hi, I am
          </p>
          <h1 className="text-[32px] md:text-6xl font-mono font-bold md:font-bold">
            Abusaleh Alam Khan
          </h1>
          <h2 className="text-xl md:text-4xl font-semibold mt-3 md:mt-5 flex justify-center md:justify-start items-center gap-2 font-mono">
            I'm a{" "}
            <span className="text-[#64ffda] relative font-mono">
              {displayText}
              <span className="absolute right-[-8px] top-1 text-[#64ffda] animate-pulse">
                |
              </span>
            </span>
          </h2>
          <p className="text-gray-400 mt-6 w-full leading-relaxed text-md md:text-xl font-mono text-justify">
            I'm a passionate software engineer specialized in crafting efficient
            and scalable solutions, delivering top-notch web applications, and
            providing freelance services that exceed client expectations. Let's
            connect and create something amazing together!
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#64ffda] hover:bg-transparent hover:border hover:border-[#64ffda] text-[#0a192f] hover:text-[#64ffda] font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Check Resume
            </button>
            <a
              href="/resume.pdf"
              download
              className="border border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] text-[#64ffda] font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Download
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="rounded-full p-[4px] animated-gradient-border mr-0 md:mr-8"
          style={{ width: "328px", height: "328px" }}
        >
          <div className="rounded-full overflow-hidden w-full h-full">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-black text-2xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <iframe
              src="/resume.pdf"
              title="Resume"
              className="w-full h-[80vh] md:h-[85vh]"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
