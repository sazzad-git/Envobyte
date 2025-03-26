import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import googleSearch from "@/assets/images/logo/googleSearch.svg";
import writing from "@/assets/images/logo/writing.svg";
import seo from "@/assets/images/logo/seo.svg";
import { Button } from "../ui/button";

function TopSlider() {
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
    <>
      <Carousel>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className="basis-1/3 px-4">
              <div
                className={`bg-[#0b2a7f] rounded-[4px] ${
                  item.image === seo ? "pt-[36px]" : "pt-[42px]"
                } pb-[42px] `}
              >
                <div className="flex items-center flex-col justify-center">
                  <img src={item.image} alt="" />
                  <h2 className="text-white font-semibold pt-4 text-[24px]">
                    {item.title}
                  </h2>
                  <p className="text-white text-[16px] font-normal pb-6">
                    {item.subtitle}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      className="cursor-pointer"
                      size="portfolio"
                      variant="portfolio"
                    >
                      Portfolio
                    </Button>
                    <Button
                      className="cursor-pointer"
                      size="order"
                      variant="order"
                    >
                      Order
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer " />
      </Carousel>
    </>
  );
}

export default TopSlider;
