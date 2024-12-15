import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Testimonials = () => {
  return (
    <motion.section
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        delay: 0.2,
        duration: 0.5,
      }}
      className="flex w-full justify-between gap-8"
    >
      <div className="py-12 px-6 bg-darkGreyGreen/20 shadow-lg backdrop-blur-sm rounded-[32px] flex flex-col gap-8">
        <div className="w-[56px] aspect-square rounded-full bg-darkGreyGreen flex justify-center items-center">
          <Image src="/assets/66.png" width={24} height={24} alt="66" />
        </div>
        <p className="text-[16px]">
          &quot;Great session! Dani was super helpful. She shared some practical
          advice on how can lorem ip we go about refining our service
          offerings.&quot;
        </p>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/Ellipse.png"
            width={48}
            height={48}
            alt="ellipse"
          />
          <div className="">
            <h3 className="text-[16px] font-medium">Hadid Khan</h3>
            <p className="text-lightGreyGreen text-[12px] tracing-[20px]">
              UIUX Designer
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 px-6 bg-darkGreyGreen/20 shadow-lg backdrop-blur-sm rounded-[32px] flex flex-col gap-8">
        <div className="w-[56px] aspect-square rounded-full bg-darkGreyGreen flex justify-center items-center">
          <Image src="/assets/66.png" width={24} height={24} alt="66" />
        </div>
        <p className="text-[16px]">
          &quot;It&#39;s is both attractive and highly adaptable. It&#39;s
          exactly what I&#39;ve been looking fore finitely wo lorem ipsum
          dolorth the investment.&quot;
        </p>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/Ellipse (1).png"
            width={48}
            height={48}
            alt="ellipse"
          />
          <div>
            <h3 className="text-[16px] font-medium">Wade Warren</h3>
            <p className="text-lightGreyGreen text-[12px] tracing-[20px]">
              Web Designer
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 px-6 bg-darkGreyGreen/20 shadow-lg backdrop-blur-sm rounded-[32px] flex flex-col gap-8">
        <div className="w-[56px] aspect-square rounded-full bg-darkGreyGreen flex justify-center items-center">
          <Image src="/assets/66.png" width={24} height={24} alt="66" />
        </div>
        <p className="text-[16px] ">
          &quot;&#34;I am really satisfied with it. I&#39;m good to go. It
          really saves me time and effort. It&#39;s is exactly what our business
          has been lacking.&quot;
        </p>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/Ellipse (2).png"
            width={48}
            height={48}
            alt="ellipse"
          />
          <div>
            <h3 className="text-[16px] font-medium">Jenny Wilson</h3>
            <p className="text-lightGreyGreen text-[12px] tracing-[20px]">
              Trust Administrator
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
