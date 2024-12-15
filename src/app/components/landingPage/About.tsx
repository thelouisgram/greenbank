import { motion } from 'motion/react';
import React from 'react';

const About = () => {
  return (
    <motion.section
      initial={{
        backdropFilter: 'blur(0px)',
      }} // Starting state
      animate={{
        backdropFilter: 'blur(4px)',
      }} // End state
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      className="h-[216px] w-full flex justify-center items-center rounded-[32px] shadow-lg bg-darkGreyGreen/20"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          duration: 0.2,
        }}
        className="w-[278px] flex flex-col gap-2 items-center"
      >
        <h2 className="font-bold text-white text-[48px] leading-[56px] tracking-[-3.2px]">
          16y
        </h2>
        <p className="text-baseGreen font-medium text-[16px]">Experience</p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          duration: 0.2,
          delay: 0.2,
        }}
        className="w-[278px] flex flex-col gap-2 items-center"
      >
        <h2 className="font-bold text-white text-[48px] leading-[56px] tracking-[-3.2px]">
          250+
        </h2>
        <p className="text-baseGreen font-medium text-[16px]">
          Merchant Partner
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          duration: 0.2,
          delay: 0.4,
        }}
        className="w-[278px] flex flex-col gap-2 items-center"
      >
        <h2 className="font-bold text-white text-[48px] leading-[56px] tracking-[-3.2px]">
          18+
        </h2>
        <p className="text-baseGreen font-medium text-[16px]">
          Years Experience
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          duration: 0.2,
          delay: 0.6,
        }}
        className="w-[278px] flex flex-col gap-2 items-center"
      >
        <h2 className="font-bold text-white text-[48px] leading-[56px] tracking-[-3.2px]">
          10.2k+
        </h2>
        <p className="text-baseGreen font-medium text-[16px]">
          Worldwide Clients
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
