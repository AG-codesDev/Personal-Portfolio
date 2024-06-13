import PersonalDetails from "./Hero Section/PersonalDetails";
import ProfilePic from "./Hero Section/ProfilePic";
import TechStack from "./Hero Section/TechStack";

const HeroSection = () => {
  const iconVariants = {
    hover: { scale: 1.2, color: "#1da1f2" },
    tap: { scale: 0.9 },
  };

  const divVariant = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const divSpringTransition = {
    type: "spring",
    stiffness: 80,
    damping: 4,
    delay: 0.3,
  };

  return (
    <div>
      <div className="details&Img flex items-center flex-col lg:flex-row gap-2 justify-between">
        <PersonalDetails
          divVariant={divVariant}
          divSpringTransition={divSpringTransition}
          iconVariants={iconVariants}
        />
        <ProfilePic
          divVariant={divVariant}
          divSpringTransition={divSpringTransition}
        />
      </div>
      <TechStack divSpringTransition={divSpringTransition} />
    </div>
  );
};

export default HeroSection;
