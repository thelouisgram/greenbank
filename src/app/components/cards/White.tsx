import React from 'react';
import Image from 'next/image';

// Define the types for props
interface WhiteProps {
  containerWidth?: string; // Dynamic container width
}

const White: React.FC<WhiteProps> = () => {
  return (
    <div
      className={`aspect-[412.27/260.38] text-veryDarkGreyGreen bg-white rounded-[24px] sm:rounded-[36px] py-4 px-4 sm:py-7 sm:px-8 shadow-lg backdrop-blur-md border border-white/50 w-[280px] xs:w-[325px] ss:w-[435px]`}
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

      <h6 className="text-[16px] mt-4 mb-1 sm:mt-8 sm:mb-2">Credit Card No.</h6>

      <div className="flex gap-4 mb-4 sm:mb-8 font-bold text-[20px] sm:text-[28px] leading-[20px] sm:leading-[28px]">
        <h3>1602</h3>
        <h3>0911</h3>
        <h3>2019</h3>
        <h3>2021</h3>
      </div>

      <div className="flex gap-8 sm:gap-16">
        <div className="flex flex-col gap-3">
          <h5 className="text-[12px] text-[#B9BEBD]">Name</h5>
          <p className="text-[12px]">ARMADA SIX</p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-[12px] text-[#B9BEBD]">Exp.</h5>
          <p className="text-[12px]">09/11</p>
        </div>
      </div>

      <Image
        src="/assets/dark-chip.png"
        width={58.43}
        height={46.43}
        alt="card chip"
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8"
      />
    </div>
  );
};

export default White;
