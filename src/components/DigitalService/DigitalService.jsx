import rightBg from "../../assets/images/backgrounds/rightBg.png";
import CheckService from "../Shared/CheckService";
import TopSlider from "./TopSlider";

function DigitalService() {
  return (
    <div className="relative pt-[380px]">
      <div className="absolute top-0 right-0 h-full pt-[280px] ">
        <img
          src={rightBg}
          alt="Background"
          className="w-[381px] h-[390px] object-cover opacity-60"
        />
      </div>
      <div className="relative z-10">
        <div className="w-[92%] mx-auto">
          {/* Check Service */}
          <CheckService colorClass="text-[#FF693B]" />

          {/* Top Slider */}
          <div className="pt-[76px] pb-[86px]">
            <TopSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalService;
