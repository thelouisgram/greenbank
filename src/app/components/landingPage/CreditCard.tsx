import React from "react";
import Image from "next/image";
import Transparent from "../cards/Transparent";
import Green from "../cards/Green";
import White from "../cards/White";

const CreditCard = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full container relative flex justify-center">
        <div className="z-[-1] absolute w-[800px] h-[1000px] rounded-full bg-gradient-to-r from-[#2BB32A] to-transparent blur-3xl opacity-40 -top-40 -right-[35%]"></div>
      </div>
      <div className="w-full h-full flex justify-between items-center mb-[128px]">
        <div className="flex flex-col gap-6">
          <h2 className="text-white text-[40px] font-bold">
            Design your personalized <br />
            credit card.
          </h2>
          <p className="text-[16px] text-lightGreyGreen tracing-[16px] w-[424px]">
            You have the freedom to personalize the design of your credit card,
            ensuring a truly unique experience that makes you feel extraordinary
          </p>
          <button className="bg-baseGreen rounded-[64px] w-[233.5px] px-8 py-4 text-[16px] flex gap-4 justify-center h-[56px] items-center">
            <p>Create New Card</p>{" "}
            <Image
              src="/assets/arrow-right.png"
              width={22.5}
              height={16.5}
              alt="arrow-right"
            />
          </button>
        </div>
        <div className="w-[1/2] relative h-[560px]">
          <Image
            src="/assets/star.png"
            width={280}
            height={280}
            alt="star"
            className="absolute right-[350px] top-[200px]"
          />
          <div className="w-[435px] h-auto transform -skew-x-[20deg] ">
            <Transparent
              containerWidth="435px"
              padding="py-7 px-8"
              textH3Size="23px"
              textH3Leading="27.5px"
              textH5Size="14px"
              textPSize="13.74px"
              textH6Size="18px"
            />
          </div>
          <div className="w-[435px] h-auto transform -skew-x-[20deg] top-[125px] -right-[7px] absolute z-[-1]">
            <Green
              containerWidth="435px"
              padding="py-7 px-8"
              textH3Size="23px"
              textH3Leading="27.5px"
              textH5Size="14px"
              textPSize="13.74px"
              textH6Size="18px"
            />
          </div>
          <div className="w-[450px] h-auto transform -skew-x-[20deg] top-[245px] -right-[14px] absolute z-[-2]">
            <White
              containerWidth="435px"
              padding="py-7 px-8"
              textH3Size="23px"
              textH3Leading="27.5px"
              textH5Size="14px"
              textPSize="13.74px"
              textH6Size="18px"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="relative pl-8 h-[600px]">
          <div className="w-[412px] h-auto ">
            <Transparent
              containerWidth="412px"
              padding="py-7 px-8"
              textH3Size="23px"
              textH3Leading="27.5px"
              textH5Size="14px"
              textPSize="13.74px"
              textH6Size="18px"
            />
          </div>
          <div className="w-[412px] h-auto absolute z-[-1] transform skew-y-[16deg] top-48 left-0">
            <Green
              containerWidth="412px"
              padding="py-7 px-8"
              textH3Size="23px"
              textH3Leading="27.5px"
              textH5Size="14px"
              textPSize="13.74px"
              textH6Size="18px"
            />
          </div>
          <Image
            src="/assets/star.png"
            width={280}
            height={280}
            alt="star"
            className="absolute left-[300px] bottom-[70px]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[40px] font-bold">
            Find the Perfect Credit Card <br />
            for You
          </h2>
          <p className="w-[546px] text-[16px]">
            Discover your ideal credit card with ease. Our comprehensive
            selection caters to every financial need and lifestyle. Whether you
            seek cashback rewards, travel perks, or building credit, we have the
            perfect credit card waiting for you. Unleash the possibilities and
            find the credit card that fits your unique goals and aspirations.
          </p>
          <button className="bg-baseGreen rounded-[64px] w-[152px] px-8 py-4 text-[16px] flex gap-4 justify-center h-[56px] items-center">
            <p>Learn More</p>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
