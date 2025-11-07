import { motion } from "framer-motion";
import hero from "../../public/assets/iamges/intro-img-Edited.png";
import "../styles/globale.css";
export default function Home() {
  return (
    <>
      <div
        id="home"
        className=" h-screen flex justify-center items-center relative bg-linear-to-b from-black via-black to-gray-800 px-6"
      >
        <motion.div
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="side-bar absolute -left-0.5"
        >
          <a
            href="https://www.linkedin.com/in/ali-soliman-2170a4246/"
            className="flex justify-between items-center w-40 ml-[-100px] bg-gray-400 pl-2 pr-4 py-4 hover:ml-0 hover:rounded-br-2xl rounded-tr-2xl"
          >
            <p className="text-2xl">LinkedIn</p>
            <i className="fa-brands fa-linkedin text-3xl"></i>
          </a>
          <a
            href="https://github.com/elbhhery"
            className="flex justify-between items-center w-40 ml-[-100px] bg-gray-400 pl-2 pr-4 py-4 hover:ml-0 hover:rounded-r-2xl"
          >
            <p className="text-2xl">GitHub</p>
            <i className="fa-brands fa-github text-3xl"></i>
          </a>
          <a
            href="https://wa.link/h9ruok"
            className="flex justify-between items-center w-40 ml-[-100px] bg-gray-400 pl-2 pr-4 py-4 hover:ml-0 hover:rounded-r-2xl"
          >
            <p className="text-[17px]">What's App</p>
            <i className="fa-brands fa-whatsapp text-3xl"></i>
          </a>
          <a
            href="https://www.facebook.com/share/1FbMvtbJ6b/"
            className="flex justify-between items-center w-44 ml-[-116px] bg-gray-400 pl-2 pr-4 py-4 hover:ml-0 hover:rounded-r-2xl"
          >
            <p className="text-2xl">Facebook</p>
            <i className="fa-brands fa-facebook text-3xl"></i>
          </a>
          <a
            href="https://x.com/alisoli18774012?t=I-ymv6UxmctavPWUnZIesA&amp;s=09"
            className="flex justify-between items-center w-40 ml-[-100px] bg-gray-400 pl-2 pr-4 py-4 hover:ml-0 hover:rounded-r-2xl rounded-br-2xl"
          >
            <p className="text-2xl">twitter</p>
            <i className="fa-brands fa-twitter text-3xl"></i>
          </a>
        </motion.div>
        {/*  */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="my-container flex justify-center gap-12 items-center flex-col md:flex-row mt-4 md:mt-0"
          >
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold md:text-7xl">
                I'm a Front end Web Developer
              </h2>
              <p className="mt-4 max-w-md text-gray-500">
                {" "}
                I have 2 years of experience building websites. I love to work
                on web application using technologies like React, TailwindCSS,
                Next.JS and TypeScript.
              </p>
              <button className=" bg-linear-to-r from-cyan-500 to-blue-500 mt-6">
                Show More
              </button>
            </div>
            <div>
              <img src={hero} alt="" className="w-56 md:w-140" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
