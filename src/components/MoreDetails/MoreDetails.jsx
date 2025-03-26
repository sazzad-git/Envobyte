import group from "../../assets/images/logo/Group.svg";
import multiHand from "../../assets/images/logo/multiHand.svg";
import nineOne from "../../assets/images/logo/nineOne.svg";
import question from "../../assets/images/logo/question.svg";
import wab from "../../assets/images/backgrounds/wab.png";
import wabTwo from "../../assets/images/backgrounds/wab2.png";
import { Button } from "../ui/button";
import DetailsGrid from "./DetailsGrid";
import Portfolio from "./Portfolio";

function MoreDetails() {
  const detailsData = [
    {
      id: 1,
      image: group,
      title: "Why Chose Envobyte",
      subtitle: "Experienced & trustworthy",
      description:
        "We're experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.",
    },
    {
      id: 2,
      image: multiHand,
      title: "What's Your Benefit",
      subtitle: "No hassle with best price",
      description:
        "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.",
    },
    {
      id: 3,
      image: nineOne,
      image2: question,
      title: "What is Combo Offer",
      subtitle: "Get 9 services in one package",
      description:
        "You're getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!",
    },
  ];

  return (
    <>
      <div className="bg-white pt-[83px] relative">
        <p className="text-[#0C89FF] text-center font-semibold text-[16px] uppercase tracking-[3px]">
          MORE DETAILS
        </p>
        <h1 className="text-[48px] text-[#0A2C8C] font-bold text-center">
          Get Your Answers
        </h1>
        <div className="w-[60.48%] mx-auto pb-[38px]">
          <div className="flex justify-center pt-[18px]">
            <div className="flex z-10">
              <DetailsGrid detailsData={detailsData} />
            </div>
          </div>
        </div>

        {/* Background Section */}
        <div>
          {/* First Background Image */}
          <div
            className="absolute w-full h-full bg-cover top-[570px] pointer-events-none"
            style={{ backgroundImage: `url(${wab})` }}
          ></div>

          {/* Second Background Image */}
          <div
            className="absolute w-full h-full bg-cover top-[570px]"
            style={{ backgroundImage: `url(${wabTwo})` }}
          >
            <div className="absolute z-10">
              <Portfolio />
              <div className="flex justify-end gap-4 pt-[43px] pr-20">
                <p className="text-[#353535] text-[14px] font-medium tracking-[4px]">
                  Creative portfolio
                </p>
                <div className="border-b border-[#353535] text-center mb-[10px] w-[60px]"></div>
              </div>
            </div>
          </div>

          {/* White Background (Extra 50vh) */}
          <div className="absolute top-[calc(570px+100%)] w-full h-[60vh] bg-white"></div>
        </div>
      </div>
    </>
  );
}

export default MoreDetails;
