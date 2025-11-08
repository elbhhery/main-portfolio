import { motion } from "framer-motion";
export default function Links() {
  return (
    <div className="w-full relative  text-white  bg-linear-to-b from-gray-800 to-black">
      <div className="links">
        <div className="my-container">
          <ul className="flex justify-center items-center flex-col md:flex-row pt-18 gap-16 md:gap-16">
            <li>
              <a
                href="#portfolio"
                className="relative bg-linear-to-r from-cyan-500 to-blue-500 pl-5  shadow-[-20px_20px_1px_rgba(0,0,0,0.5)] block w-[190px] bg-[#3587f2] rotate-[-30deg] skew-x-25 translate-y-0 translate-x-0 h-20"
              >
                <i className="fa-solid fa-briefcase text-3xl absolute top-[30px]"></i>
                <span className="absolute text-white tracking-[2px] top-[30px] right-[15px]">
                  PORTFOLIO
                </span>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="relative bg-linear-to-r from-cyan-500 to-blue-500 pl-5  shadow-[-20px_20px_1px_rgba(0,0,0,0.5)] block w-[190px]  rotate-[-30deg] skew-x-25 translate-y-0 translate-x-0 h-20"
              >
                <i className="fa-solid fa-brain text-3xl absolute top-[30px]"></i>
                <span className="absolute text-white tracking-[2px] top-[30px] right-[15px]">
                  EXPERIENCE
                </span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative bg-linear-to-r from-cyan-500 to-blue-500 pl-5  shadow-[-20px_20px_1px_rgba(0,0,0,0.5)] block w-[190px] bg-[#3587f2] rotate-[-30deg] skew-x-25 translate-y-0 translate-x-0 h-20"
              >
                <i className="fa-solid fa-address-card text-3xl absolute top-[30px]"></i>
                <span className="absolute text-white tracking-[2px] top-[30px] right-2.5">
                  CONTACT US
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pt-32"
        id="about"
      >
        <div className="my-container text-center md:text-left px-6 md:px-0">
          <h3 className="font-bold text-4xl border-b-4 border-gray-500 inline">
            ABOUT ME
          </h3>
          <p className="py-4 leading-loose">
            I'm a Front-End Developer passionate about building clean,
            responsive, and modern web interfaces. I specialize in JavaScript,
            React, and Tailwind CSS, and I'm always excited to sharpen my skills
            and explore new technologies.
          </p>
          <p className="py-4 leading-loose">
            I love starting projects from scratch and transforming ideas into
            engaging digital experiences. If you're looking for a developer who
            can bring your vision to life, let's connect!
          </p>
          <p className="py-4 leading-loose">
            I value minimalistic design, user-focused interfaces, and
            performance-driven code. Together, we can create a product that not
            only looks great but also delivers real results.
          </p>
          <p className="py-4 leading-loose">
            I enjoy crafting unique, scalable front-end solutions, optimizing
            websites for better performance, and making designs fully responsive
            across all devices.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
