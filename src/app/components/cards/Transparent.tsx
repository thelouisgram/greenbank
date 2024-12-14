import React from "react";
import Image from "next/image";

// Define the types for props
interface TransparentProps {
  containerWidth?: string;
  cardType?: string;
}

const Transparent: React.FC<TransparentProps> = ({
  containerWidth,

  cardType,
}) => {
  return (
    <div
      className={`aspect-[412.27/260.38] text-white bg-white/10 rounded-[36px] ${
        cardType === "hero" ? "py-10 pl-14 pr-14" : "py-7 px-8"
      } shadow-lg backdrop-blur-md border border-white/50 w-${containerWidth}`}
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
          cardType === "hero" ? "mt-10 mb-3" : "mt-8 mb-2"
        } `}
      >
        Credit Card No.
      </h6>

      <div className={`flex gap-4 ${cardType === "hero" ? "mb-10" : "mb-8"}`}>
        <h3
          className={`font-bold ${
            cardType === "hero" ? "text-[32px]" : "text-[28px]"
          } ${cardType === "hero" ? "leading-[32px]" : "leading-[28px]"}`}
        >
          1602
        </h3>
        <h3
          className={`font-bold ${
            cardType === "hero" ? "text-[32px]" : "text-[28px]"
          } ${cardType === "hero" ? "leading-[32px]" : "leading-[28px]"}`}
        >
          0911
        </h3>
        <h3
          className={`font-bold ${
            cardType === "hero" ? "text-[32px]" : "text-[28px]"
          } ${cardType === "hero" ? "leading-[32px]" : "leading-[28px]"}`}
        >
          2019
        </h3>
        <h3
          className={`font-bold ${
            cardType === "hero" ? "text-[32px]" : "text-[28px]"
          } ${cardType === "hero" ? "leading-[32px]" : "leading-[28px]"}`}
        >
          2021
        </h3>
      </div>

      <div className="flex gap-8 ">
        <div className="flex flex-col gap-3">
          <h5
            className={`${
              cardType === "hero" ? "text-[14px]" : "text-[12px]"
            } text-[#B9BEBD]`}
          >
            Name
          </h5>
          <p
            className={`${cardType === "hero" ? "text-[14px]" : "text-[12px]"}`}
          >
            ARMADA SIX
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h5
            className={`${
              cardType === "hero" ? "text-[14px]" : "text-[12px]"
            } text-[#B9BEBD]`}
          >
            Exp.
          </h5>
          <p
            className={`${cardType === "hero" ? "text-[14px]" : "text-[12px]"}`}
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
          cardType === "hero" ? "bottom-10 right-10" : "right-8 bottom-8"
        }`}
      />
    </div>
  );
};

export default Transparent;
