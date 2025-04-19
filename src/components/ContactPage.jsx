import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-16 bg-[rgb(17,34,64)] font-mono text-white"
    >
      <h2 className="text-4xl sm:text-3xl mb-12 font-bold text-center">
        <span className="text-[#64ffda]">06.&nbsp;</span>Contact
      </h2>

      <div className="bg-[#112240] border-2 border-[#64FFDA] rounded-2xl shadow-md hover:shadow-[0_0_25px_#64ffda40] transition p-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">
              Let's Connect
            </h3>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#64ffda]" />
              <span>abusaleh.cse.uiu@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-[#64ffda]" />
              <span>01571585335</span>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-[#64ffda]" />
              <span>01837569857</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#64ffda]" />
              <span>100 Feet Road, Madani Avenue, Badda, Dhaka</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">
              Find me on
            </h3>
            <div className="flex flex-wrap gap-5 text-2xl text-[#64ffda]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Optional message line */}
        <div className="mt-8 text-center text-gray-400">
          <p>
            Feel free to reach out for collaboration, freelance, or just a tech
            chat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
