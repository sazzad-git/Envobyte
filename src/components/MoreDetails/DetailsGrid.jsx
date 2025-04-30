import { Button } from "../ui/button";

function DetailsGrid({ detailsData }) {
  return (
    <>
      {detailsData.map((data) => {
        return (
          <div
            key={data.id}
            className={` px-6 ${
              data.id === 1
                ? "border bg-[#0A2C8C]"
                : "border border-[#ece9e9] bg-white"
            } `}
          >
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  className=" pt-[43px] pb-[20px] w-[280px] h-[275px]"
                  src={data.image}
                  alt=""
                />
                {data.image2 && (
                  <img
                    className="absolute top-[55px] right-[60px]"
                    src={data.image2}
                  />
                )}
              </div>
            </div>
            <h3
              className={`font-semibold text-[30px] ${
                data.id === 1 ? "text-white" : "text-[#001246]"
              }`}
            >
              {data.title}
            </h3>
            <p
              className={`text-[16px] font-medium pb-3 ${
                data.id === 1 ? "text-[#65B5FF]" : "text-[#002AA3]"
              }`}
            >
              {data.subtitle}
            </p>
            <p
              className={`text-[16px] font-normal pb-[44px] ${
                data.id === 1 ? "text-white" : "text-[#424242]"
              }`}
            >
              {data.description}
            </p>
          </div>
        );
      })}
      <div className="absolute left-[45%] top-[740px] z-20">
        <Button variant="details" size="details">
          See Pricing
        </Button>
      </div>
    </>
  );
}

export default DetailsGrid;
