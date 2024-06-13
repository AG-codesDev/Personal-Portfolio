import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="bg-black h-full">
      <div className="bg-[#111111] h-screen">
        <NavBar />
        <div className="w-full lg:w-[65%] mt-2 px-5 mx-auto">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

export default App;
