import "./App.css";
import DigitalService from "./components/DigitalService/DigitalService";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MoreDetails from "./components/MoreDetails/MoreDetails";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <DigitalService />
      <MoreDetails />
    </>
  );
}

export default App;
