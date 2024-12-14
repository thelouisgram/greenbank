import Image from 'next/image';
import React from 'react'
import Transparent from '../cards/Transparent';

const Hero = () => {
  return (
    <div className="flex w-full justify-between md:min-h-[540px]">
      <div className=" flex flex-col gap-8 w-[1/2]">
        <h1 className="text-[56px] font-bold leading-[64px] -tracking-[2.5%]">
          Discover the Perfect <br /> Credit Card for You
        </h1>
        <p className="w-[498px] text-[18px] leading-6 ">
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </p>
        <button className="bg-baseGreen rounded-[64px] w-[195.5px] px-8 py-4 text-[16px] flex gap-4 justify-center h-[56px] items-center">
          <p>Get Started</p>{" "}
          <Image
            src="/assets/arrow-right.png"
            width={22.5}
            height={16.5}
            alt="arrow-right"
          />
        </button>
        <div className="flex w-full gap-4 h-auto">
          <Image
            src="/assets/people.png"
            alt="people"
            width={128}
            height={48}
            className="h-[48px] w-[128px]"
          />
          <div className="flex flex-col">
            <h3 className="white font-bold text-[16px]">10.2k+</h3>
            <p className="text-[12px] text-lightGreyGreen leading-[16px]">
              Active users around the <br />
              worlds
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-auto w-[1/2]">
        <div className="relative">
          <div className="rotate-[15deg] w-[500px] pt-10">
            <Transparent
              containerWidth="500px"
              padding="py-10 pl-14 pr-14"
              textH3Size="32px"
              textH3Leading="32px"
              textH5Size="14px"
              textPSize="12px"
              textH6Size="18px"
              cardType= 'hero'
            />
          </div>
        </div>
        <div className="w-[500px] h-[500px] bg-baseGreen rounded-full -right-[225px] absolute top-0 z-[-1]" />
      </div>
    </div>
  );
}

export default Hero
