import Image from 'next/image';
import React from 'react';
import Transparent from '../cards/Transparent';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="flex w-full flex-col md:flex-row gap-16 md:gap-0 justify-between md:min-h-[540px]">
      <div className="flex flex-col w-full gap-8 items-center md:items-start ">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: 'easeInOut',
            duration: 0.8,
          }}
          className="text-[48px] sm:text-[56px] font-bold md:leading-[64px] md:-tracking-[2.5%] text-center md:text-left"
        >
          Discover the Perfect <br className="hidden md;flex" /> Credit Card for
          You
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: 'easeInOut',
            duration: 0.8,
            delay: 0.2,
          }}
          className="ip:w-[498px] text-[16px] sm:text-[18px] leading-6 text-center md:text-left"
        >
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </motion.p>
        <motion.button
          initial={{
            width: '0px',
            opacity: 0,
          }}
          whileInView={{
            width: '195.5px',
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            ease: 'easeInOut',
            duration: 0.6,
          }}
          className="bg-baseGreen rounded-[64px] h-[56px] px-8 py-4 text-[16px] flex flex-col items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{
              y: 30,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              ease: 'easeInOut',
              duration: 0.6,
              delay: 0.4, // Wait for the button to fully "open" before showing content
            }}
            className="flex flex-row gap-4 items-center"
          >
            <p>Get Started</p>
            <Image
              src="/assets/arrow-right.png"
              width={22.5}
              height={16.5}
              alt="arrow-right"
            />
          </motion.div>
        </motion.button>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: 'easeInOut',
            duration: 0.8,
            delay: 0.5,
          }}
          className="flex w-full gap-4 h-auto justify-center md:justify-start items-start"
        >
          <div className="flex w-[136px] relative h-auto">
            <div className=" bg-[#3366CC] rounded-full overflow-hidden border-[3px] border-white aspect-square">
              <Image
                src="/assets/image-1.png"
                width={128}
                height={128}
                alt="ellipse"
                className="w-12 h-12"
              />
            </div>
            <div className=" bg-[#E6B800] left-10 top-0 absolute rounded-full overflow-hidden border-[3px] border-white aspect-square">
              <Image
                src="/assets/image-2.png"
                width={128}
                height={128}
                alt="ellipse"
                className="w-12 h-12"
              />
            </div>
            <div className=" bg-[#FF7F50] left-20 top-0 absolute rounded-full overflow-hidden border-[3px] border-white aspect-square">
              <Image
                src="/assets/image-3.png"
                width={128}
                height={128}
                alt="ellipse"
                className="w-12 h-12"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="white font-bold text-[16px]">10.2k+</h3>
            <p className="text-[12px] text-lightGreyGreen leading-[16px]">
              Active users around the <br />
              worlds
            </p>
          </div>
        </motion.div>
      </div>
      <div className="relative h-auto w-full flex justify-center md:justify-end">
        <div className="relative">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: 'easeInOut',
              duration: 0.7,
            }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 15 }}
              viewport={{ once: true }}
              transition={{
                ease: 'easeInOut',
                delay: 0.3,
                duration: 0.6,
              }}
              className="pl-4 xs:pl-0 pt-10"
            >
              <Transparent cardType="hero" />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{
            width: '0px',
            height: '0px',
            borderRadius: '50%',
          }}
          animate={{
            width: '500px',
            height: '500px',
            right: '-225px',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="bg-baseGreen absolute md:top-0 -top-20 right-[125px] md:-right-[225px] z-[-1] hidden sm:flex"
        />
        <motion.div
          initial={{
            width: '0px',
            height: '0px',
            borderRadius: '50%',
            y: 0,
            right: '-225px',
          }}
          animate={{
            width: '350px',
            height: '350px',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="bg-baseGreen absolute top-0 -right-[225px] z-[-1] md:hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
