import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandVite } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";

const TechStack = ({ divSpringTransition }) => {
  return (
    <motion.div
      initial={{ y: +100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={divSpringTransition}
      className="techStack lg:mt-28 mt-6 flex-col lg:flex-row items-center justify-center gap-5 flex self-center text-white"
    >
      <span className="text-white font-bold text-3xl lg:text-4xl">
        Tech Stack |
      </span>
      <div className="icons flex flex-wrap items-center justify-center gap-4 mt-2">
        <FaHtml5
          size={44}
          className="cursor-pointer text-orange-500   transition-all"
        />
        <FaCss3
          size={44}
          className="cursor-pointer text-blue-500 transition-all"
        />
        <IoLogoJavascript
          size={44}
          className="cursor-pointer text-yellow-300 transition-all"
        />
        <FaReact
          size={44}
          className="cursor-pointer text-sky-500 transition-all"
        />
        <SiRedux
          size={44}
          className="cursor-pointer text-purple-500 transition-all"
        />
        <RiTailwindCssFill
          size={44}
          className="cursor-pointer text-sky-600 transition-all"
        />
        <FaBootstrap
          size={44}
          className="cursor-pointer text-purple-700 transition-all"
        />
        <FaNpm
          size={44}
          className="cursor-pointer text-red-500 transition-all"
        />
        <TbBrandVite
          size={44}
          className="cursor-pointer text-yellow-500 transition-all"
        />
        <FiGithub size={33} className="cursor-pointer mt-2 transition-all" />
        <TbBrandFramerMotion
          size={44}
          className="cursor-pointer text-pink-600 transition-all"
        />
      </div>
    </motion.div>
  );
};

export default TechStack;
