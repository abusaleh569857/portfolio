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
      className="px-6 md:px-16 pb-6 md:pb-16 bg-[rgb(17,34,64)] font-mono text-white"
    >
      <h2 className="text-4xl sm:text-3xl mb-6 md:mb-12 font-bold text-center">
        <span className="text-[#64ffda]">06.</span>Contact
      </h2>

      {/* Contact Info Box */}
      <div className="bg-[#112240] border-2 border-[#64FFDA] rounded-2xl shadow-md hover:shadow-[0_0_25px_#64ffda40] transition p-8 max-w-4xl mx-auto mb-12">
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
            <div className="flex flex-wrap gap-5 text-4xl text-[#64ffda]">
              <a
                href="https://www.facebook.com/abusalehalam.khan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/abusaleh-alam-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/abusaleh569857"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/Abusaleh_here"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition hidden md:block"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/abusalehalamkhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/8801837569857"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>
            Feel free to reach out for collaboration, freelance, or just a tech
            chat!
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-[#112240] border-2 border-[#64FFDA] rounded-2xl shadow-md hover:shadow-[0_0_25px_#64ffda40] transition p-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-[#64ffda]">
          Send me a message
        </h3>
        <form
          action="https://formsubmit.co/abusaleh.cse.uiu@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded bg-[#0f1e3a] border border-[#64FFDA] text-white focus:outline-none transition-shadow hover:shadow-[0_0_10px_#64ffda]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded bg-[#0f1e3a] border border-[#64FFDA] text-white focus:outline-none transition-shadow hover:shadow-[0_0_10px_#64ffda]"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-[#0f1e3a] border border-[#64FFDA] text-white focus:outline-none transition-shadow hover:shadow-[0_0_10px_#64ffda]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#64ffda] hover:bg-white hover:text-[#0f1e3a] text-[#0f1e3a] font-bold py-3 px-6 rounded transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
