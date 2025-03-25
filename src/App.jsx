import "./App.css";
import DigitalService from "./components/DigitalService/DigitalService";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import background from "./assets/images/backgrounds/body.png";

function App() {
  return (
    <>
      <div
        className="w-full h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header />
        <HeroSection />
        <DigitalService />
      </div>
    </>
  );
}

export default App;
