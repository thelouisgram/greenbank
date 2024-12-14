import React from "react";

const About = () => {
  return (
    <div>
      <div className="h-[216px] w-full flex justify-center items-center bg-darkGreyGreen/20 rounded-[32px] shadow-lg backdrop-blur-sm ">
        <div className="w-[278px] flex flex-col gap-2 items-center">
          <h2 className="font-bold text-white text-[48px] leading-[56px] tracking-[-3.2px]">
            16y
          </h2>
          <p className="text-baseGreen font-medium text-[16px]">Experience</p>
        </div>
        <div className="w-[278px] flex flex-col gap-2 items-center">
          <h2 className="font-bold text-white text-[48px] leading-[56px] tracking-[-3.2px]">
            250+
          </h2>
          <p className="text-baseGreen font-medium text-[16px]">
            Merchant Partner
          </p>
        </div>
        <div className="w-[278px] flex flex-col gap-2 items-center">
          <h2 className="font-bold text-white text-[48px] leading-[56px] tracking-[-3.2px]">
            18+
          </h2>
          <p className="text-baseGreen font-medium text-[16px]">
            Years Experience
          </p>
        </div>
        <div className="w-[278px] flex flex-col gap-2 items-center">
          <h2 className="font-bold text-white text-[48px] leading-[56px] tracking-[-3.2px]">
            10.2k+
          </h2>
          <p className="text-baseGreen font-medium text-[16px]">
            Worldwide Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
