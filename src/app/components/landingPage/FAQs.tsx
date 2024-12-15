import React from 'react';

const FAQs = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full container relative flex justify-center">
        <div className="z-[-1] absolute w-[800px] h-[1000px] rounded-full bg-gradient-to-l from-[#2BB32A] to-transparent blur-3xl opacity-40 -top-40 -left-[30%]"></div>
      </div>
      <div className="px-[110px]">
        <h2 className="text-[40px] font-bold text-center mb-16">FAQs</h2>
        <div className="flex flex-col h-full gap-4">
          <div className="flex flex-col h-full gap-4">
            <div className="text-[24px] font-bold flex justify-between w-full">
              <h4>What credit score do I need to apply for a credit card?</h4>
              <h4>-</h4>
            </div>
            <p className="text-[16px] text-lightGreyGreen">
              The required credit score may vary depending on the specific
              credit card. Generally, a good to excellent credit score
              (typically 670 or above) increases your chances of approval for
              premium credit cards.
            </p>
            <div className="w-full bg-white h-[1px]" />
          </div>
          <div className="flex flex-col h-full gap-4">
            <div className="text-[24px] font-bold flex justify-between w-full">
              <h4> How can I apply for a credit card online?</h4>
              <h4>+</h4>
            </div>
            <div className="w-full bg-white h-[1px]" />
          </div>
          <div className="flex flex-col h-full gap-4">
            <div className="text-[24px] font-bold flex justify-between w-full">
              <h4>
                Are there any annual fees associated with the credit card?
              </h4>
              <h4>+</h4>
            </div>
            <div className="w-full bg-white h-[1px]" />
          </div>
          <div className="flex flex-col h-full gap-4">
            <div className="text-[24px] font-bold flex justify-between w-full">
              <h4>
                How long does it take to receive the credit card once approved?
              </h4>
              <h4>+</h4>
            </div>
            <div className="w-full bg-white h-[1px]" />
          </div>
          <div className="flex flex-col h-full gap-4">
            <div className="text-[24px] font-bold flex justify-between w-full">
              <h4> How can I check my credit card balance and transactions?</h4>
              <h4>+</h4>
            </div>
            <div className="w-full bg-white h-[1px]" />
          </div>
          <div className="flex flex-col h-full gap-4">
            <div className="text-[24px] font-bold flex justify-between w-full">
              <h4> What should I do if my credit card is lost or stolen?</h4>
              <h4>+</h4>
            </div>
            <div className="w-full bg-white h-[1px]" />
          </div>
          <div className="flex flex-col h-full gap-4">
            <div className="text-[24px] font-bold flex justify-between w-full">
              <h4>Is my credit card information secure?</h4>
              <h4>+</h4>
            </div>
            <div className="w-full bg-white h-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
