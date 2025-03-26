import { Button } from "../ui/button";
import ActiveTitle from "./ActiveTitle";

function CheckService({
  colorClass,
  activeTab,
  setActiveTab,
  heading,
  title,
  btn,
}) {
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
            className={`text-[16px] font-semibold pb-[16px] uppercase tracking-[4px] ${
              colorClass ? "text-[#0C89FF]" : "text-[#FF693B]"
            }`}
          >
            {heading}
          </p>
          <h2
            className={`text-[48px] font-bold ${
              colorClass ? "text-[#001246]" : "text-white"
            }`}
          >
            {title}
          </h2>
        </div>
        <Button variant="service" size="service">
          {btn}
        </Button>
      </div>
      <div
        className={`border-b ${
          colorClass ? "border-[#0A2C8C1A]" : "border-[#425381]"
        } pt-[30px]`}
      ></div>
      <div className="flex gap-[42px] pt-[30px]">
        <ActiveTitle
          nameList={nameList}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeClass="text-[#0C89FF] font-bold"
          normalClass={`${
            colorClass ? "text-[#474747]" : "text-white"
          } font-normal`}
        />
      </div>
    </>
  );
}

export default CheckService;
