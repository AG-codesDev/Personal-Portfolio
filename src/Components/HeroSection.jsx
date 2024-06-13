import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

const HeroSection = () => {
  const iconVariants = {
    hover: { scale: 1.2, color: "#1da1f2" },
    tap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <div className="container flex flex-col justify-between">
      <div className="details&Img flex items-center flex-col lg:flex-row gap-2 justify-between">
        <div className="details flex flex-col items-center lg:items-start order-2 lg:order-1 gap-2">
          <div className="Name flex items-center flex-col">
            <h1 className="bg-gradient-to-r font-semibold font-serif w-fit text-5xl lg:text-7xl from-orange-600 via-yellow-500 to-orange-400 inline-block text-transparent bg-clip-text">
              APURVA
            </h1>
            <h1 className="bg-gradient-to-r font-semibold font-serif w-fit text-5xl lg:text-7xl from-purple-600 via-purple-400 to-purple-600 inline-block text-transparent bg-clip-text">
              GAURAV
            </h1>
          </div>
          <div className="ohterDetails flex flex-col items-center lg:items-start mt-2">
            <span className="intro text-neutral-300 flex flex-col lg:flex-row lg:gap-1  items-center font-medium italic text-lg">
              {" "}
              <span className="font-bold text-xl">Frontend Developer,</span>
              loves to create user-friendly websites
            </span>
            <div className="icons flex gap-4 mt-4">
              <motion.a
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ type: "spring", stiffness: 300 }}
                href="https://github.com/ApurvaGaurav"
                target="_blank"
              >
                <FaGithub className="text-white text-3xl hover:text-sky-500 transition-all cursor-pointer" />
              </motion.a>
              <motion.a
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ type: "spring", stiffness: 300 }}
                href="https://www.linkedin.com/in/apurva-gaurav-986a11246/"
                target="_blank"
              >
                <FaLinkedin className="text-white text-3xl hover:text-sky-500 transition-all cursor-pointer" />
              </motion.a>
              <motion.a
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ type: "spring", stiffness: 300 }}
                href="https://x.com/apurva_gaurav1"
                target="_blank"
              >
                <FaXTwitter className="text-white text-3xl hover:text-sky-500 transition-all cursor-pointer" />
              </motion.a>
            </div>
            <div className="resumeBtn mt-5">
              <a
                href="https://drive.google.com/file/d/14LY6-d3VteBRfMe8Dq2IVFyWrzwumrPs/view?usp=sharing"
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  className="text-white border-sky-500 border-[2px] p-4 lg:text-lg font-medium font-Poppins rounded-full hover:bg-sky-500 hover:text-black transition-all"
                >
                  My Resume
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        <motion.div className="imgBox order-1 lg:order-2">
          <img
            src="src\assets\profile-pic.png"
            alt="profile-pic"
            className="h-44 w-44 lg:h-72 lg:w-72"
          />
        </motion.div>
      </div>
      <div className="techStack lg:mt-24 mt-6 flex-col lg:flex-row items-center justify-center gap-5 flex self-center text-white">
        <span className="text-white font-bold text-4xl">Tech Stack |</span>
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
          <RiTailwindCssFill
            size={44}
            className="cursor-pointer text-sky-700 transition-all"
          />
          <SiRedux
            size={44}
            className="cursor-pointer text-purple-500 transition-all"
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
