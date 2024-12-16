import React from 'react';
import Image from 'next/image';

// Define the types for props
interface TransparentProps {
  cardType?: string;
}

const Transparent: React.FC<TransparentProps> = ({
  cardType,
}) => {
  return (
    <div
      className={`aspect-[412.27/260.38] text-white bg-white/10 rounded-[24px] sm:rounded-[36px] ${
        cardType === 'hero'
          ? 'py-5 px-5 sm:py-10 sm:px-14'
          : 'py-4 px-4 sm:py-7 sm:px-8'
      } shadow-lg backdrop-blur-md border border-white/50 ${cardType === 'hero' ? 'w-[325px] xs:w-[350px] sm:w-[500px]' : 'w-[280px] xs:w-[325px] ss:w-[435px]'}`}
    >
      <div className="w-full flex justify-between">
        <Image
          src="/assets/Exclude.svg"
          width={58}
          height={35}
          alt="card details"
        />
        <Image
          src="/assets/Vector (Stroke).svg"
          width={26}
          height={47}
          alt="card details"
        />
      </div>

      <h6
        className={`text-[16px] ${
          cardType === 'hero'
            ? 'mt-5 mb-1 sm:mt-10 sm;mb-3'
            : 'mt-4 mb-1 sm:mt-8 sm:mb-2'
        } `}
      >
        Credit Card No.
      </h6>

      <div
        className={`flex gap-4 ${cardType === 'hero' ? 'mb-5 sm:mb-10' : 'mb-4 sm:mb-8'} font-bold ${
          cardType === 'hero' ? 'text-[24px] sm:text-[32px]' : 'text-[20px] sm:text-[28px]'
        } ${cardType === 'hero' ? 'leading-[24px] sm:leading-[32px]' : 'leading-[20px] sm:leading-[28px]'}`}
      >
        <h3
          className={``}
        >
          1602
        </h3>
        <h3
          className={``}
        >
          0911
        </h3>
        <h3
          className={``}
        >
          2019
        </h3>
        <h3
          className={``}
        >
          2021
        </h3>
      </div>

      <div className="flex gap-8 ">
        <div className="flex flex-col gap-3">
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
        <div className="flex flex-col gap-3">
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
        src="/assets/Vector.svg"
        width={58.43}
        height={46.43}
        alt="card chip"
        className={`absolute ${
          cardType === 'hero' ? 'bottom-5 sm:bottom-10 right-5 sm:right-10' : 'right-4 sm:right-8 bottom-4 sm:bottom-8'
        }`}
      />
    </div>
  );
};

export default Transparent;
