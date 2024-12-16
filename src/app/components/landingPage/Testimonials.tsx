import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        delay: 0.2,
        duration: 0.5,
      }}
      className="flex flex-wrap w-full ip:grid ip:grid-cols-3 justify-center md:justify-between gap-8 px-4 sm:px-8 lg:px-16 "
    >
      {/* Testimonial 1 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          delay: 0.2,
          duration: 0.5,
        }}
        className="py-12 px-6 bg-darkGreyGreen/20 shadow-lg backdrop-blur-sm rounded-[32px] flex flex-col gap-8"
      >
        <div className="w-[56px] aspect-square rounded-full bg-darkGreyGreen flex justify-center items-center">
          <Image src="/assets/66.png" width={24} height={24} alt="66" />
        </div>
        <p className="text-[14px] sm:text-[16px] lg:text-[16px]">
          &quot;Great session! Dani was super helpful. She shared some practical
          advice on how we can go about refining our service offerings.&quot;
        </p>
        <div className="flex gap-2 items-center">
          <div className=" bg-[#3366CC] rounded-full overflow-hidden border-[3px] border-white">
            <Image
              src="/assets/image-1.png"
              width={128}
              height={128}
              alt="ellipse"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h3 className="text-[14px] sm:text-[16px] lg:text-[16px] font-medium">
              Hadid Khan
            </h3>
            <p className="text-lightGreyGreen text-[12px] sm:text-[14px] lg:text-[12px]">
              UI/UX Designer
            </p>
          </div>
        </div>
      </motion.div>

      {/* Testimonial 2 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          delay: 0.4,
          duration: 0.5,
        }}
        className="py-12 px-6 bg-darkGreyGreen/20 shadow-lg backdrop-blur-sm rounded-[32px] flex flex-col gap-8"
      >
        <div className="w-[56px] aspect-square rounded-full bg-darkGreyGreen flex justify-center items-center">
          <Image src="/assets/66.png" width={24} height={24} alt="66" />
        </div>
        <p className="text-[14px] sm:text-[16px] lg:text-[16px]">
          &quot;It&#39;s both attractive and highly adaptable. It&#39;s exactly
          what I&#39;ve been looking for, definitely worth the investment.&quot;
        </p>
        <div className="flex gap-2 items-center">
          <div className=" bg-[#E6B800] rounded-full overflow-hidden border-[3px] border-white">
            <Image
              src="/assets/image-2.png"
              width={128}
              height={128}
              alt="ellipse"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h3 className="text-[14px] sm:text-[16px] lg:text-[16px] font-medium">
              Wade Warren
            </h3>
            <p className="text-lightGreyGreen text-[12px] sm:text-[14px] lg:text-[12px]">
              Web Designer
            </p>
          </div>
        </div>
      </motion.div>

      {/* Testimonial 3 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          delay: 0.6,
          duration: 0.5,
        }}
        className="py-12 px-6 bg-darkGreyGreen/20 shadow-lg backdrop-blur-sm rounded-[32px] flex flex-col gap-8"
      >
        <div className="w-[56px] aspect-square rounded-full bg-darkGreyGreen flex justify-center items-center">
          <Image src="/assets/66.png" width={24} height={24} alt="66" />
        </div>
        <p className="text-[14px] sm:text-[16px] lg:text-[16px]">
          &quot;I am really satisfied with it. I&#39;m good to go. It really
          saves me time and effort. It&#39;s exactly what our business has been
          lacking.&quot;
        </p>
        <div className="flex gap-2 items-center">
          <div className=" bg-[#FF7F50] rounded-full overflow-hidden border-[3px] border-white">
            <Image
              src="/assets/image-3.png"
              width={128}
              height={128}
              alt="ellipse"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h3 className="text-[14px] sm:text-[16px] lg:text-[16px] font-medium">
              Jenny Wilson
            </h3>
            <p className="text-lightGreyGreen text-[12px] sm:text-[14px] lg:text-[12px]">
              Trust Administrator
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
