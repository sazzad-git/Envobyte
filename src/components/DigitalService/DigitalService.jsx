import rightBg from "../../assets/images/backgrounds/rightBg.png";
import middleBg from "../../assets/images/backgrounds/checkMiddle.png";
import CheckService from "../Shared/CheckService";
import TopSlider from "./TopSlider";
import googleSearch from "@/assets/images/logo/googleSearch.svg";
import writing from "@/assets/images/logo/writing.svg";
import seo from "@/assets/images/logo/seo.svg";
import frame from "../../assets/images/backgrounds/frame.png";
import { useState } from "react";

function DigitalService() {
  const [activeTab, setActiveTab] = useState("Website");
  const data = [
    {
      id: 1,
      image: googleSearch,
      title: "WordPress Website",
      subtitle: "Design & Development",
    },
    {
      id: 2,
      image: writing,
      title: "Content Writing",
      subtitle: "For entire project",
    },
    {
      id: 3,
      image: seo,
      title: "Monthly SEO",
      subtitle: "Rank #1 on google ",
    },
    {
      id: 4,
      image: googleSearch,
      title: "WordPress Website",
      subtitle: "Design & Development",
    },
  ];

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
          <CheckService
            heading="DIGITAL SERVICES"
            title="Check Our Available Services"
            btn="All Services"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Top Slider */}
          <div className="pt-[76px] pb-[86px]">
            <div className="absolute top-[50px] inset-0 left-[28%] h-full pointer-events-none">
              <img
                src={middleBg}
                alt="Background"
                className="w-[831px] h-[690px] object-cover opacity-60"
              />
            </div>
            <TopSlider data={data} />
            <div className="flex justify-end gap-4 pt-[60px] pr-5">
              <p className="text-white text-[14px] font-medium">
                Creative Solution
              </p>
              <div className="border-b text-center mb-[10px] w-[60px]"></div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 -bottom-[80px] bg-no-repeat bg-bottom pointer-events-none"
          style={{
            backgroundImage: `url(${frame})`,
            opacity: 0.3,
          }}
        ></div>
      </div>
    </div>
  );
}

export default DigitalService;
