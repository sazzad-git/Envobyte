import { useState } from "react";
import { Button } from "../ui/button";
import ActiveTitle from "./ActiveTitle";

function CheckService({ colorClass }) {
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
    <>
      <div className="flex justify-between items-center">
        <div>
          <p
            className={`text-[16px] font-semibold pb-[16px] uppercase ${colorClass}`}
          >
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
    </>
  );
}

export default CheckService;
