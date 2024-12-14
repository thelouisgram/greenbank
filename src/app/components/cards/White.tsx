import React from "react";
import Image from "next/image";

// Define the types for props
interface WhiteProps {
  containerWidth?: string; // Dynamic container width
}

const White: React.FC<WhiteProps> = ({ containerWidth }) => {
  return (
    <div
      className={`aspect-[1583/1000] text-veryDarkGreyGreen bg-white rounded-[36px] py-7 px-8 shadow-lg backdrop-blur-md border border-white/50 w-${containerWidth}`}
    >
      <div className="w-full flex justify-between">
        <Image
          src="/assets/dark-exclude.png"
          width={58}
          height={35}
          alt="card details"
        />
        <Image
          src="/assets/dark-antenna.png"
          width={26}
          height={47}
          alt="card details"
        />
      </div>

      <h6 className={`mt-8 mb-2 text-[16px] `}>Credit Card No.</h6>

      <div className={`flex gap-4 mb-8`}>
        <h3 className={`font-bold text-[28px] leading-[28px]`}>1602</h3>
        <h3 className={`font-bold text-[28px] leading-[28px]`}>0911</h3>
        <h3 className={`font-bold text-[28px] leading-[28px]`}>2019</h3>
        <h3 className={`font-bold text-[28px] leading-[28px]`}>2021</h3>
      </div>

      <div className="flex gap-16">
        <div className="flex flex-col gap-3">
          <h5 className={`text-[12px]`}>Name</h5>
          <p className={`text-[12px]`}>ARMADA SIX</p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className={`text-[12px]`}>Exp.</h5>
          <p className={`text-[12px]`}>09/11</p>
        </div>
      </div>

      <Image
        src="/assets/dark-chip.png"
        width={58.43}
        height={46.43}
        alt="card chip"
        className={`absolute bottom-8 right-8`}
      />
    </div>
  );
};

export default White;
