import { useState } from "react";
import logo from "../../assets/images/logo/logo.svg";
import ActiveTitle from "../Shared/ActiveTitle";
import { Button } from "../ui/button";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const nameList = [
    { id: 1, name: "Home" },
    { id: 2, name: "Service" },
    { id: 3, name: "combo sales" },
    { id: 4, name: "portfolio" },
    { id: 5, name: "about us" },
    { id: 6, name: "blogs" },
  ];
  return (
    <>
      <div className="pb-[100px]">
        <div className="  bg-opacity-80 fixed top-0 left-0 right-0 z-20 bg-[#03135b] pb-[23px]">
          <header className="w-[95%] mx-auto mt-[16px] ">
            <nav className="flex justify-between items-center">
              <div className="pt-[5px]">
                <img className="w-[123px] h-[35px]" src={logo} alt="" />
              </div>
              <div className="flex justify-between w-[35%] pt-[19px] ">
                <ActiveTitle
                  nameList={nameList}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  activeClass="text-[#FF693B] font-black"
                  normalClass="text-white font-semibold"
                />
              </div>
              <Button variant="header" size="header">
                See Pricing
              </Button>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;
