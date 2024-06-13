import { motion } from "framer-motion";

const navVariant = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const springTransition = {
  type: "spring",
  stiffness: 80,
  damping: 5,
  delay: 0.3,
};

const NavBar = () => {
  return (
    <motion.div
      variants={navVariant}
      initial="initial"
      animate="animate"
      transition={springTransition}
      className="flex justify-center py-4"
    >
      <div className="navBar-items border-[0.5px] w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 justify-between font-Poppins font-medium bg-black rounded-full border-white p-5 flex text-neutral-300">
        <a className="hover:text-sky-400 transition-all" href="">
          Home
        </a>
        <a className="hover:text-sky-400 transition-all" href="">
          About
        </a>
        <a className="hover:text-sky-400 transition-all" href="">
          Projects
        </a>
        <a className="hover:text-sky-400 transition-all" href="">
          Contact
        </a>
      </div>
    </motion.div>
  );
};

export default NavBar;
