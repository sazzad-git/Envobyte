import React from "react";

function InfoTitle({ data }) {
  return (
    <>
      <div className="flex justify-center items-center gap-[27px]">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-center gap-[27px]"
          >
            <div className="flex px-[32px] py-[14px] gap-4">
              <div className="border-[1.54px] rounded-[4px] pr-[11px] pb-[11px] pt-[13px] pl-[13px]">
                <img className="h-8 w-8" src={item.image} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-semibold text-[24px]">
                  {item.title}
                </h3>
                <p className="text-white font-semibold text-[16px]">
                  {item.subtitle}
                </p>
              </div>
            </div>
            {index !== data.length - 1 && (
              <div className="h-[48px] border"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default InfoTitle;
