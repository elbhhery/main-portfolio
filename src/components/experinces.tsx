import { motion } from "framer-motion";
import HTML from "../../public/assets/iamges/html.png";
import css from "../../public/assets/iamges/css.png";
import java from "../../public/assets/iamges/java.png";
import tailwind from "../../public/assets/iamges/tailwind.png";
import typeScriptIcon from "../../public/assets/iamges/typeScriptIcon.png";
import git from "../../public/assets/iamges/git.png";
import github from "../../public/assets/iamges/github.png";
import react from "../../public/assets/iamges/react.png";
import next from "../../public/assets/iamges/next.png";
import "../styles/globale.css";
export default function Experience() {
  return (
    <div
      id="experience"
      className=" bg-linear-to-b from-gray-800 to-black pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="my-container text-center md:text-left px-6 md:px-0"
      >
        <h3 className="font-bold text-4xl border-b-4 border-gray-500 inline">
          Experience
        </h3>
        <p className="my-8">
          These are the technologies I've worked with and used them in my
          projects.
        </p>
        <div className="ex-container grid sm:grid-cols-2 md:grid-cols-3 text-center gap-4">
          <div className="card p-2.5 card-1" data-aos="fade-right">
            <img src={HTML} alt="" className="w-20 my-0 mx-auto mb-4" />
            <p>HTML</p>
          </div>
          <div className="card p-2.5 card-2" data-aos="fade-up">
            <img src={css} alt="" className="w-20 my-0 mx-auto mb-4" />
            <p>CSS</p>
          </div>
          <div className="card p-2.5 card-3" data-aos="fade-left">
            <img src={java} alt="" className="w-20 my-0 mx-auto mb-4" />
            <p>JavaScript</p>
          </div>
          <div className="card p-2.5 card-4" data-aos="fade-right">
            <img src={tailwind} alt="" className="w-20 my-0 mx-auto mb-4" />
            <p>TailwindCSS</p>
          </div>
          <div className="card p-2.5 card-5" data-aos="fade-up">
            <img
              src={typeScriptIcon}
              alt=""
              className="w-20 my-0 mx-auto mb-4"
            />
            <p>TypeScript</p>
          </div>
          <div className="card p-2.5 card-6" data-aos="fade-left">
            <img src={github} alt="" className="w-20 my-0 mx-auto mb-4" />
            <p>GitHub</p>
          </div>
          <div className="card card-7 p-2.5" data-aos="fade-right">
            <img src={next} alt="" className="w-20 my-0 mx-auto mb-4" />
            <p>Next.JS</p>
          </div>
          <div className="card card-8 p-2.5" data-aos="fade-up">
            <img src={git} alt="" className="w-20 my-0 mx-auto mb-4" />
            <p>Git</p>
          </div>
          <div className="card card-9 p-2.5" data-aos="fade-left">
            <img src={react} alt="" className="w-20 my-0 mx-auto mb-4" />
            <p>React</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
