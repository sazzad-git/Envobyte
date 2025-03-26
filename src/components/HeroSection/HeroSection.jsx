import logo from "../../assets/images/backgrounds/heroBg.png";
import like from "../../assets/images/logo/like.svg";
import global from "../../assets/images/logo/global.svg";
import people from "../../assets/images/logo/people.svg";
import profile from "../../assets/images/logo/profile.svg";
import heroTitleImage from "../../assets/images/images/heroImage.svg";
import frame from "../../assets/images/backgrounds/frame.png";
import { Button } from "../ui/button";
import InfoTitle from "../Shared/InfoTitle";

function HeroSection() {
  const data = [
    {
      id: 1,
      image: global,
      title: "2k+",
      subtitle: "Websites build",
    },
    {
      id: 2,
      image: like,
      title: "297%",
      subtitle: "Client satisfaction",
    },
    {
      id: 3,
      image: people,
      title: "25+",
      subtitle: "Team members",
    },
    {
      id: 4,
      image: profile,
      title: "500+",
      subtitle: "Amazing clients",
    },
  ];

  return (
    <>
      <div>
        <div className="relative w-full mx-auto h-screen">
          {/* Bottom Background */}
          <div
            className="absolute inset-0 bg-cover bg-center w-[80%] h-[82vh] mx-auto"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#04135B] via-[#04135bcc] to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 h-full">
            <h1 className="text-white text-[75px] pt-[65px] text-center font-extrabold">
              DIGITAL SERVICES
            </h1>
            <p className="text-white text-[25px] pt-[8px] text-center font-extrabold">
              BUILDING YOUR EMPIRE DIGITALLY
            </p>
            {/* Button */}
            <div className="flex justify-center items-center gap-4 pt-[52px]">
              <Button variant="hero1" size="hero1">
                See Pricing
              </Button>
              <Button variant="hero2" size="hero2">
                Book an appointment
              </Button>
            </div>

            <div className="pt-[55px]">
              <InfoTitle data={data} />
            </div>
            {/* Bottom Image */}
            <div className="relative">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
                style={{
                  backgroundImage: `url(${frame})`,
                  opacity: 0.3,
                }}
              ></div>
              {/* Content */}
              <div className="relative flex w-full items-center justify-center pt-[78px]">
                <img
                  className="w-[50%] h-[553px] object-cover rounded-[4px]"
                  src={heroTitleImage}
                  alt="hero-title-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
