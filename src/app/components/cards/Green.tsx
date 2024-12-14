import React from "react";
import Image from "next/image";

// Define the types for props
interface GreenProps {
  containerWidth?: string; // Dynamic container width
  textH3Size?: string; // Font size for H3
  textH3Leading?: string; // Line height for H3
  textH5Size?: string; // Font size for H5
  textPSize?: string; // Font size for P
  textH6Size?: string; // Font size for H6
  padding?: string; // Padding
}

const Green: React.FC<GreenProps> = ({
  containerWidth, // Default width is full
  padding,
  textH3Size,
  textH3Leading,
  textH5Size,
  textPSize,
  textH6Size,
}) => {
  return (
    <div
      className={`aspect-[412.27/260.38] text-veryDarkGreyGreen bg-baseGreen rounded-[36px] ${padding} shadow-lg backdrop-blur-md border border-white/50 w-${containerWidth}`}
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

      <h6 className={`mt-8 mb-4 text-[${textH6Size}]`}>
        Credit Card No.
      </h6>

      <div className={`flex gap-4 mb-8`}>
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

      <div className="flex gap-16">
        <div className="flex flex-col gap-3">
          <h5 className={`text-[${textH5Size}]`}>Name</h5>
          <p className={`text-[${textPSize}]`}>ARMADA SIX</p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className={`text-[${textH5Size}]`}>Exp.</h5>
          <p className={`text-[${textPSize}]`}>09/11</p>
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

export default Green;
