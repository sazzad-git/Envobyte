import logo from "../assets/images/logo/logo.svg";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="w-[95%] mx-auto mt-[16px]">
      <nav className="flex justify-between items-center">
        <div className="pt-[5px]">
          <img className="w-[123px] h-[35px]" src={logo} alt="" />
        </div>

        <div className="flex justify-between w-[35%] pt-[19px] ">
          <p className="text-[#FF693B] uppercase text-[16px] font-black">
            Home
          </p>
          <p className="text-white uppercase text-[16px] font-semibold">
            Service
          </p>
          <p className="text-white uppercase text-[16px] font-semibold">
            combo sales
          </p>
          <p className="text-white uppercase text-[16px] font-semibold">
            portfolio
          </p>
          <p className="text-white uppercase text-[16px] font-semibold">
            about us
          </p>
          <p className="text-white uppercase text-[16px] font-semibold">
            blogs
          </p>
        </div>
        <Button variant="header" size="header">
          See Pricing
        </Button>
      </nav>
    </div>
  );
}

export default Header;
