import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="w-full flex flex-col ip:flex-row items-center justify-between ip:items-start">
      <motion.div
        className="h-full flex flex-col gap-6 pt-24 text-center md:text-left md:w-[50%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <motion.h2
          className="font-bold text-[28px] ip:text-[32px] sm:text-[40px] md:text-[48px] leading:[28px] sm:leading-[48px] md:leading-[56px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Easy Way to manage <br />
          your finances
        </motion.h2>
        <motion.p
          className="text-[14px] ip:text-[16px] sm:text-[18px] text-lightGreyGreen"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Easy to use mobile app that supports both Android and iOS.
        </motion.p>
        <div className="flex gap-2 md:gap-4 w-full justify-center md:justify-start">
          <motion.div
            className="w-[170px] h-[64px] bg-darkGreyGreen rounded-[16px] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src="/assets/app.png"
              alt="app store"
              width={123}
              height={32}
            />
          </motion.div>
          <motion.div
            className="w-[170px] h-[64px] bg-darkGreyGreen rounded-[16px] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src="/assets/google.png"
              alt="google store"
              width={123}
              height={32}
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="mt-8 md:mt-0 md:w-[50%] flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
      >
        <Image
          src="/assets/phone.png"
          alt="phone"
          width={604}
          height={850.41}
          className="max-w-full"
        />
      </motion.div>
    </div>
  );
};

export default CTA;
