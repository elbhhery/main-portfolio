import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
// images
import Logo from "../../public/assets/iamges/logo 1.png";
// css files
import "../styles/globale.css";
export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 },
    },
  };
  return (
    <>
      {" "}
      <header className="bg-black  flex justify-between items-center p-4 md:p-8 h-[15vh] w-full">
        <div>
          <h1
            className="text-5xl font-pacifico ml-2"
            // style="font-family: 'Pacifico', cursive"
          >
            <a href="#home" className="">
              <img className="w-28 mt-4" src={Logo} alt="" />
            </a>
          </h1>
        </div>
        {/* desktop nav */}
        <nav className="desktopNav text-gray-500 hidden md:block">
          <ul className="flex">
            <li className="hover:text-white hover:scale-120 mr-8">
              <a href="#home" className="relative">
                HOME
              </a>
            </li>
            <li className="hover:text-white hover:scale-120 mr-8">
              <a href="#portfolio" className="relative">
                PORTFOLIO
              </a>
            </li>
            <li className="hover:text-white hover:scale-120 mr-8">
              <a href="#experience" className="relative">
                EXPERIENCE
              </a>
            </li>
            <li className="hover:text-white hover:scale-120 mr-8">
              <a href="#about" className="relative">
                ABOUUT
              </a>
            </li>
            <li className="hover:text-white hover:scale-120 mr-8">
              <a href="#contact" className="relative">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
        {/* mobile nav */}

        <button
          className="md:hidden block text-gray-500"
          id="menu-btn"
          onClick={() => setNavOpen(!navOpen)}
        >
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
        <AnimatePresence mode="wait">
          {navOpen && (
            <motion.nav
              key="menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="nav md:hidden block bg-[#101822] w-full absolute left-0 top-28 z-10"
            >
              <motion.ul className="flex flex-col text-center sm:flex-row gap-6 p-4 sm:justify-around sm:p-7">
                <li>
                  <a href="#home">HOME</a>
                </li>
                <li>
                  <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li>
                  <a href="#experience">EXPERIENCE</a>
                </li>
                <li>
                  <a href="#about">ABOUUT</a>
                </li>
                <li>
                  <a href="#contact">CONTACT US</a>
                </li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
