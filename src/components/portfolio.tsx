import { motion } from "framer-motion";
import audio from "../../public/assets/iamges/audio.png";
import leaon from "../../public/assets/iamges/leaon.png";
import myportfolio from "../../public/assets/iamges/my-portfolio.png";
import portfolio1 from "../../public/assets/iamges/portfolio.png";
import portfolio2 from "../../public/assets/iamges/portfolio2.png";
import kasper from "../../public/assets/iamges/kasper.png";
export default function Portfolio() {
  return (
    <div
      className="portfolio bg-linear-to-b from-black via-black to-gray-800 py-32"
      id="portfolio"
    >
      <div className="my-container text-center md:text-left px-6 md:px-0">
        <h3 className="font-bold text-4xl border-b-4 border-gray-500 inline">
          PORTFOLIO
        </h3>
        <p className="my-8 ">Check out some of my work right here</p>
        <div className="md:grid-cols-2 grid gap-4 p-1.5">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="shadow-[0px_1px_3px_3px_gray] overflow-hidden relative h-auto group"
          >
            <div className="h-full">
              <img
                className="h-full group-hover:blur-[20px]"
                src={myportfolio}
                alt=""
              />
            </div>
            <div className="des py-2 px-2 absolute w-full -bottom-full bg-gray-800 group-hover:bottom-0">
              <a
                href="#home"
                className="text-2xl md:text-3xl inline-block  font-bold hover:text-gray-500"
              >
                MY PORTFOLIO
              </a>
              <div className="mt-4 flex justify-around">
                <p>Live Demo</p>
                <p>GitHub</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="card shadow-[0px_1px_3px_3px_gray] overflow-hidden relative h-auto group"
          >
            <div>
              <img src={audio} alt="" className="group-hover:blur-[20px]" />
            </div>
            <div className="des py-2 px-2 absolute w-full -bottom-full bg-gray-800 group-hover:bottom-0">
              <a
                href="https://luminous-paletas-3526fb.netlify.app/"
                className="text-2xl md:text-3xl inline-block  font-bold hover:text-[#e89980]"
              >
                Audiophile e-commerce
              </a>
              <div className="mt-4 flex justify-around">
                <a href="https://luminous-paletas-3526fb.netlify.app/">
                  Live Demo
                </a>
                <a href="https://github.com/elbhhery/audioPhile-E-commerce">
                  Code Source
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card shadow-[0px_1px_3px_3px_gray] overflow-hidden relative h-auto group"
            initial={{ opacity: 0, x: -80, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div>
              <img
                src={portfolio2}
                alt=""
                className="group-hover:blur-[20px]"
              />
            </div>
            <div className="des py-2 px-2 absolute w-full -bottom-full bg-gray-800 group-hover:bottom-0">
              <a
                href="https://elbhhery.github.io/Brand-Template/"
                className="text-2xl md:text-3xl inline-block  font-bold hover:text-[#696662]"
              >
                TOW PAGE Design
              </a>
              <div className="mt-4 flex justify-around">
                <a href="https://elbhhery.github.io/Brand-Template/">
                  Live Demo
                </a>
                <a href="https://github.com/elbhhery/Brand-Template">GitHub</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card shadow-[0px_1px_3px_3px_gray] overflow-hidden relative h-auto group"
            initial={{ opacity: 0, x: 80, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div>
              <img
                src={portfolio1}
                alt=""
                className="group-hover:blur-[20px]"
              />
            </div>
            <div className="des py-2 px-2 absolute w-full -bottom-full bg-gray-800 group-hover:bottom-0">
              <a
                href="https://elbhhery.github.io/My-Portfolio/"
                className="text-2xl md:text-3xl inline-block  font-bold hover:text-[#3d3f71]"
              >
                PROFESSIONAL PORTFOLIO
              </a>
              <div className="mt-4 flex justify-around">
                <a href="elbhhery.github.io/My-Portfolio/">Live Demo</a>
                <a href="https://github.com/elbhhery/My-Portfolio">GitHub</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card shadow-[0px_1px_3px_3px_gray] overflow-hidden relative h-auto group"
            initial={{ opacity: 0, rotateY: -180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          >
            <div>
              <img src={kasper} alt="" className="group-hover:blur-[20px]" />
            </div>
            <div className="des py-2 px-2 absolute w-full -bottom-full bg-gray-800 group-hover:bottom-0">
              <a
                href="https://elbhhery.github.io/kasper-design/"
                className="text-2xl md:text-3xl inline-block  font-bold hover:text-[#156378]"
              >
                Kasper Design
              </a>
              <div className="mt-4 flex justify-around">
                <a href="elbhhery.github.io/kasper-design/">Live Demo</a>
                <a href="https://github.com/elbhhery/kasper-design">GitHub</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotateY: -180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
            className="card shadow-[0px_1px_3px_3px_gray] overflow-hidden relative h-auto group"
            data-aos="flip-right"
          >
            <div className="h-full">
              <img
                src={leaon}
                alt=""
                className="h-full group-hover:blur-[20px]"
              />
            </div>
            <div className="des py-2 px-2 absolute w-full -bottom-full bg-gray-800 group-hover:bottom-0">
              <a
                href="https://elbhhery.github.io/leon-template/"
                className="text-2xl md:text-3xl inline-block  font-bold hover:text-[#10cab7]"
              >
                LEON DESGIN
              </a>
              <div className="mt-4 flex justify-around">
                <a href="elbhhery.github.io/leon-template/">Live Demo</a>
                <a href="https://github.com/elbhhery/leon-template">GitHub</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
