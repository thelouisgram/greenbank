import Image from "next/image";
import React from "react";
import Transparent from "../cards/Transparent";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="flex w-full justify-between md:min-h-[540px]">
      <div className=" flex flex-col gap-8 w-[1/2]">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.25,
          }}
          className="text-[56px] font-bold leading-[64px] -tracking-[2.5%]"
        >
          Discover the Perfect <br /> Credit Card for You
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.25,
            delay: 0.25,
          }}
          className="w-[498px] text-[18px] leading-6 "
        >
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.25,
            delay: 0.5,
          }}
          className="bg-baseGreen rounded-[64px] w-[195.5px] px-8 py-4 text-[16px] flex gap-4 justify-center h-[56px] items-center"
        >
          <p>Get Started</p>{" "}
          <Image
            src="/assets/arrow-right.png"
            width={22.5}
            height={16.5}
            alt="arrow-right"
          />
        </motion.button>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.25,
            delay: 0.75,
          }}
          className="flex w-full gap-4 h-auto"
        >
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
        </motion.div>
      </div>
      <div className="relative h-auto w-[1/2]">
        <div className="relative">
          <motion.div
            initial={{ x: 20, rotate: 0, opacity: 0 }}
            whileInView={{ x: 0, rotate: 15, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.25,
            }}
            className="w-[500px] pt-10"
          >
            <Transparent
              containerWidth="500px"
              cardType="hero"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{
            width: "0px",
            height: "0px",
            borderRadius: "50%",
            y: 0,
            right: "-225px",
          }}
          animate={{
            width: "500px",
            height: "500px",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="bg-baseGreen absolute top-0 -right-[225px] z-[-1]"
        />
      </div>
    </section>
  );
};

export default Hero;
