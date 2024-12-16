import React from 'react';
import Image from 'next/image';

// Define the types for props
interface GreenProps {
  containerWidth?: string; // Dynamic container width
}

const Green: React.FC<GreenProps> = ({}) => {
  return (
    <div
      className={`aspect-[412.27/260.38] h-auto text-veryDarkGreyGreen bg-baseGreen rounded-[24px] sm:rounded-[36px] py-4 px-4 sm:py-7 sm:px-8 shadow-lg backdrop-blur-md border border-white/50 w-[280px] xs:w-[325px] ss:w-[435px]`}
    >
      <div className="w-full flex justify-between items-center">
        <Image
          src="/assets/dark-exclude.png"
          width={512}
          height={512}
          alt="card details"
          className="w-10 h-10 sm:w-16 sm:h-16"
        />
        <Image
          src="/assets/dark-antenna.png"
          width={512}
          height={512}
          className="w-6 h-6 sm:w-8 sm:h-8"
          alt="card details"
        />
      </div>

      <h6 className="text-[14px] sm:text-[16px] mt-4 mb-1 sm:mt-8 sm:mb-2">
        Credit Card No.
      </h6>

      <div className="flex gap-4 mb-4 sm:mb-8 font-bold text-[18] sm:text-[28px] leading-[20px] sm:leading-[28px]">
        <h3>1602</h3>
        <h3>0911</h3>
        <h3>2019</h3>
        <h3>2021</h3>
      </div>

      <div className="flex gap-8 sm:gap-16">
        <div className="flex flex-col gap-1 sm:gap-3">
          <h5 className="text-[12px] ">Name</h5>
          <p className="text-[12px]">ARMADA SIX</p>
        </div>
        <div className="flex flex-col gap-1 sm:gap-3">
          <h5 className="text-[12px] ">Exp.</h5>
          <p className="text-[12px]">09/11</p>
        </div>
      </div>

      <Image
        src="/assets/dark-chip.png"
        width={512}
        height={512}
        alt="card chip"
        className="absolute bottom-2 sm:bottom-4 right-4 sm:right-8 w-10 h-10 sm:w-16 sm:h-16"
      />
    </div>
  );
};

export default Green;
