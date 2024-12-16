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
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 1.2,
      }}
      className="py-6 xs:py-8 sm:py-16 w-full flex justify-center items-center rounded-[18px] sm:rounded-[24px] md:rounded-[32px] shadow-lg bg-darkGreyGreen/20 px-2 xs:px-3 sm:px-12"
    >
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 sm:gap-y-8 sm:gap-x-12 w-full max-w-4xl relative">
        {[
          { label: 'Experience', value: '16y', delay: 0 },
          { label: 'Merchant Partner', value: '250+', delay: 0.3 },
          { label: 'Years Experience', value: '18+', delay: 0.6 },
          { label: 'Worldwide Clients', value: '10.2k+', delay: 0.9 },
        ].map((stat, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: 'easeInOut',
                duration: 0.6,
                delay: stat.delay,
              }}
              className="flex flex-col gap-1 sm:gap-2 items-center text-center"
            >
              <h2 className="font-bold text-white text-[32px] md:leading-[56px] md:tracking-[-3.2px] xs:text-[30px] sm:text-[48px]">
                {stat.value}
              </h2>
              <p className="text-baseGreen font-medium text-[14px] sm:text-[16px]">
                {stat.label}
              </p>
            </motion.div>

            {/* Separator line design */}
            {(index % 2 === 0 || index % 2 === 1) && index !== 3 && (
              <div className="block xs:hidden col-span-1 w-full h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10 my-4"></div>
            )}
            {index % 2 === 0 && index !== 3 && (
              <div className="hidden xs:block md:hidden h-full w-px bg-gradient-to-b from-white/10 via-white/40 to-white/10 mx-auto"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
};

export default About;