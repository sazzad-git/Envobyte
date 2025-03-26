import { useState } from "react";
import CheckService from "../Shared/CheckService";
import PortfolioSlider from "./PortfolioSlider";
import slideOne from "../../assets/images/images/slideOne.svg";
import slideTwo from "../../assets/images/images/slideTwo.svg";
import slideThree from "../../assets/images/images/slideThree.svg";
import slideFour from "../../assets/images/images/slideFour.svg";
import slideFive from "../../assets/images/images/slideFive.svg";
import slideSix from "../../assets/images/images/slideSix.svg";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("Website");

  const slideData = [
    {
      id: 1,
      items: [
        {
          images: [slideOne, slideTwo, slideThree, slideFour],
        },
        {
          images: [slideFive, slideSix, slideOne, slideTwo],
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          images: [slideThree, slideFour, slideFive, slideSix],
        },
        {
          images: [slideOne, slideTwo, slideThree, slideFour],
        },
      ],
    },
  ];
  return (
    <>
      <div className="">
        <div className="pt-[280px] w-[92%] mx-auto">
          {/* Check Service */}
          <CheckService
            heading="UI/UX PORTFOLIO"
            title="Check Our Previous Work"
            btn="All Portfolio"
            colorClass={true}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <PortfolioSlider slideData={slideData} />
      </div>
    </>
  );
}

export default Portfolio;
