import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function PortfolioSlider({ slideData }) {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {slideData.map((item) => (
            <CarouselItem key={item.id} className="">
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {item.items[0].imagesOne.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className="w-[499px] h-[280px] object-cover"
                    />
                  ))}
                </div>
                <div className="flex gap-8">
                  {item.items[1].imagesTwo.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className="w-[499px] h-[280px] object-cover"
                    />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </>
  );
}

export default PortfolioSlider;
