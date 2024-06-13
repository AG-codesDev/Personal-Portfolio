import { motion } from "framer-motion";

const ProfilePic = ({ divVariant, divSpringTransition }) => {
  return (
    <motion.div
      variants={divVariant}
      initial={{ x: +100, opacity: 0 }}
      animate="animate"
      transition={divSpringTransition}
      className="imgBox order-1 lg:order-2"
    >
      <img
        src="src\assets\profile-pic.png"
        alt="profile-pic"
        className="h-44 w-44 lg:h-72 lg:w-72"
      />
    </motion.div>
  );
};

export default ProfilePic;
