import React from 'react'
import Image from "next/image";

const Features = () => {
  return (
    <div>
      <h3 className="text-white text-[40px] text-center mb-[64px] font-bold">
        What do we offer?
      </h3>
      <div className="flex justify-evenly items-center">
        <div className="flex gap-8">
          <div className="bg-darkGreyGreen flex justify-center items-center rounded-[24px] w-16 h-16 aspect-square">
            <Image
              src="/assets/security.png"
              width={32}
              height={32}
              alt="src"
              className="w-8 h-8"
            />
          </div>
          <div>
            <h4 className="text-[24px]">Security Guarantee</h4>
            <p className="text-[16px] text-lightGreyGreen">
              Your data and funds will be securely protected.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="bg-darkGreyGreen flex justify-center items-center rounded-[24px] w-16 h-16 aspect-square">
            <Image src="/assets/pie.png" width={32} height={32} alt="src" />
          </div>
          <div>
            <h4 className="text-[24px]">Investing</h4>
            <p className="text-[16px] text-lightGreyGreen">
              Your data and funds will be securely protected.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="bg-darkGreyGreen flex justify-center items-center rounded-[24px] w-16 h-16 aspect-square">
            <Image
              src="/assets/analytics.png"
              width={32}
              height={32}
              alt="src"
            />
          </div>
          <div>
            <h4 className="text-[24px]">Multiple Method</h4>
            <p className="text-[16px] text-lightGreyGreen">
              Your data and funds will be securely protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
