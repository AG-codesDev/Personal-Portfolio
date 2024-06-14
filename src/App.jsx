import AboutMe from "./Components/About Me/AboutMe";
import HeroSection from "./Components/Hero Section/HeroSection";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className=" h-full">
      <NavBar />
      <div className="bg-[#111111] h-screen">
        <div className="w-full lg:w-[65%] mt- px-5 mx-auto">
          <HeroSection />
        </div>
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
