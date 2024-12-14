import React from "react";
import Image from "next/image";

// Define the types for props
interface TransparentProps {
  containerWidth?: string;
  textH3Size?: string;
  textH3Leading?: string;
  textH5Size?: string;
  textPSize?: string;
  textH6Size?: string;
  padding?: string;
  cardType?: string;
}

const Transparent: React.FC<TransparentProps> = ({
  containerWidth,
  padding,
  textH3Size,
  textH3Leading,
  textH5Size,
  textPSize,
  textH6Size,
  cardType,
}) => {
  return (
    <div
      className={`aspect-[412.27/260.38] text-white bg-white/10 rounded-[36px] ${padding} shadow-lg backdrop-blur-md border border-white/50 w-${containerWidth}`}
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
        className={` ${
          cardType === "hero" ? "mt-10" : "mt-8"
        } mb-4 text-[${textH6Size}]`}
      >
        Credit Card No.
      </h6>

      <div className={`flex gap-4 ${cardType === "hero" ? "mb-10" : "mb-8"}`}>
        <h3
          className={`font-bold text-[${textH3Size}] leading-[${textH3Leading}]`}
        >
          1602
        </h3>
        <h3
          className={`font-bold text-[${textH3Size}] leading-[${textH3Leading}]`}
        >
          0911
        </h3>
        <h3
          className={`font-bold text-[${textH3Size}] leading-[${textH3Leading}]`}
        >
          2019
        </h3>
        <h3
          className={`font-bold text-[${textH3Size}] leading-[${textH3Leading}]`}
        >
          2021
        </h3>
      </div>

      <div className="flex gap-8 ">
        <div className="flex flex-col gap-3">
          <h5 className={`text-[${textH5Size}] text-[#B9BEBD]`}>Name</h5>
          <p className={`text-[${textPSize}]`}>ARMADA SIX</p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className={`text-[${textH5Size}] text-[#B9BEBD]`}>Exp.</h5>
          <p className={`text-[${textPSize}]`}>09/11</p>
        </div>
      </div>

      <Image
        src="/assets/Vector.svg"
        width={58.43}
        height={46.43}
        alt="card chip"
        className={`absolute ${cardType === "hero" ? "bottom-10 right-10" : "right-8 bottom-8"}`}
      />
    </div>
  );
};

export default Transparent;
