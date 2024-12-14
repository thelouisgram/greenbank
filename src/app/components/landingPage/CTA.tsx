import Image from 'next/image';
import React from 'react'

const CTA = () => {
  return (
    <div className="w-full justify-between flex items-start mb-[371px]">
      <div className="h-full flex flex-col gap-6 pt-24">
        <h2 className="font-bold text-[48px] leading-[56px]">
          Easy Way to manage <br />
          your finances
        </h2>
        <p className="text-[18px] text-lightGreyGreen">
          Easy to use mobile app that support on android and ios.
        </p>
        <div className="flex gap-4 w-full">
          <div className="w-[170px] h-[64px] bg-darkGreyGreen rounded-[16px] flex justify-center items-center">
            <Image
              src="/assets/app.png"
              alt="app store"
              width={123}
              height={32}
            />
          </div>
          <div className="w-[170px] h-[64px] bg-darkGreyGreen rounded-[16px] flex justify-center items-center">
            <Image
              src="/assets/google.png"
              alt="google store"
              width={123}
              height={32}
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/assets/phone.png"
          alt="phone"
          width={604}
          height={850.41}
        />
      </div>
    </div>
  );
};

export default CTA;
