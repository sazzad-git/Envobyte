import rightBg from "../../assets/images/backgrounds/rightBg.png";
import { Button } from "../ui/button";
import ActiveTitle from "../Shared/ActiveTitle";
import { useState } from "react";

function DigitalService() {
  const [activeTab, setActiveTab] = useState("Website");
  const nameList = [
    {
      id: 1,
      name: "Website",
    },
    {
      id: 2,
      name: "UI/UX",
    },
    {
      id: 3,
      name: "seo",
    },
    {
      id: 4,
      name: "Logo Design",
    },
    {
      id: 5,
      name: "Banner Design",
    },
    {
      id: 6,
      name: "Google Ads",
    },
  ];

  return (
    <div className="relative pt-[280px]">
      <div className="absolute top-0 right-0 h-full pt-[180px] ">
        <img
          src={rightBg}
          alt="Background"
          className="w-[381px] h-[390px] object-cover opacity-60"
        />
      </div>
      <div className="relative z-10">
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#FF693B] text-[16px] font-semibold pb-[16px] uppercase">
                DIGITAL SERVICES
              </p>
              <h2 className="text-white text-[48px] font-bold">
                Check Our Available Services
              </h2>
            </div>
            <Button variant="service" size="service">
              All Service
            </Button>
          </div>
          <div className="border-b border-[#425381] pt-[30px]"></div>
          <div className="flex gap-[42px] pt-[30px]">
            <ActiveTitle
              nameList={nameList}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activeClass="text-[#0C89FF] font-bold"
              normalClass="text-white font-normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalService;
