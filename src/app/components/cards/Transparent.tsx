import React from 'react';
import Image from 'next/image';

// Define the types for props
interface TransparentProps {
  cardType?: string;
}

const Transparent: React.FC<TransparentProps> = ({ cardType }) => {
  return (
    <div
      className={`aspect-[412.27/260.38] text-white bg-white/10 rounded-[24px] sm:rounded-[36px] ${
        cardType === 'hero'
          ? 'py-5 px-5 sm:py-10 sm:px-14'
          : 'py-4 px-4 sm:py-7 sm:px-8'
      } shadow-lg backdrop-blur-md border border-white/50 ${cardType === 'hero' ? 'w-[325px] xs:w-[350px] sm:w-[500px]' : 'w-[280px] xs:w-[325px] ss:w-[435px]'}`}
    >
      <div className="w-full flex justify-between items-center">
        <Image
          src="/assets/exclude.png"
          width={512}
          height={512}
          alt="card details"
          className="w-10 h-10 sm:w-16 sm:h-16"
        />
        <Image
          src="/assets/antenna.png"
          width={512}
          height={512}
          alt="card details"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>

      <h6
        className={`text-[14px] sm:text-[16px] ${
          cardType === 'hero'
            ? 'mt-5 mb-1 sm:mt-10 sm;mb-3'
            : 'mt-4 mb-1 sm:mt-8 sm:mb-2'
        } `}
      >
        Credit Card No.
      </h6>

      <div
        className={`flex gap-4 ${cardType === 'hero' ? 'mb-5 sm:mb-10' : 'mb-4 sm:mb-8'} font-bold ${
          cardType === 'hero'
            ? 'text-[24px] sm:text-[32px]'
            : 'text-[18px] sm:text-[28px]'
        } ${cardType === 'hero' ? 'leading-[20px] sm:leading-[32px]' : 'leading-[20px] sm:leading-[28px]'}`}
      >
        <h3 className={``}>1602</h3>
        <h3 className={``}>0911</h3>
        <h3 className={``}>2019</h3>
        <h3 className={``}>2021</h3>
      </div>

      <div className="flex gap-8 ">
        <div className="flex flex-col gap-1 sm:gap-3">
          <h5
            className={`${
              cardType === 'hero' ? 'text-[14px]' : 'text-[12px]'
            } text-[#B9BEBD]`}
          >
            Name
          </h5>
          <p
            className={`${cardType === 'hero' ? 'text-[14px]' : 'text-[12px]'}`}
          >
            ARMADA SIX
          </p>
        </div>
        <div className="flex flex-col gap-1 sm:gap-3">
          <h5
            className={`${
              cardType === 'hero' ? 'text-[14px]' : 'text-[12px]'
            } text-[#B9BEBD]`}
          >
            Exp.
          </h5>
          <p
            className={`${cardType === 'hero' ? 'text-[14px]' : 'text-[12px]'}`}
          >
            09/11
          </p>
        </div>
      </div>

      <Image
        src="/assets/chip.png"
        width={512}
        height={512}
        alt="card chip"
        className={`absolute  w-10 h-10 sm:w-16 sm:h-16 ${
          cardType === 'hero'
            ? 'bottom-5 sm:bottom-10 right-5 sm:right-10'
            : 'right- sm:right-8 bottom-2 sm:bottom-4'
        }`}
      />
    </div>
  );
};

export default Transparent;
