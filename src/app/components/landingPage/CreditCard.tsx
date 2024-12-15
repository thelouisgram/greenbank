import React from 'react';
import Image from 'next/image';
import Transparent from '../cards/Transparent';
import Green from '../cards/Green';
import White from '../cards/White';
import { motion } from 'motion/react';

const CreditCard = () => {
  const text = ' Design your personalized credit card.'.split(' ');
  return (
    <section className="w-full h-full">
      <div className="w-full container relative flex justify-center">
        <div className="z-[-4] absolute w-[800px] h-[1000px] rounded-full bg-gradient-to-r from-[#2BB32A] to-transparent blur-3xl opacity-40 -top-40 -right-[35%]"></div>
      </div>
      <div className="w-full h-full flex justify-between items-center mb-[128px]">
        <div className="flex flex-col gap-6">
          <div className="md:w-[604px] text-[40px] font-bold">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.375,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{' '}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
            }}
            className="text-[16px] text-lightGreyGreen tracing-[16px] w-[424px]"
          >
            You have the freedom to personalize the design of your credit card,
            ensuring a truly unique experience that makes you feel extraordinary
          </motion.p>
          <motion.button
            initial={{
              width: '0px',
              opacity: 0,
            }}
            whileInView={{
              width: '233.5px',
              opacity: 1,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.375,
            }}
            className="bg-baseGreen rounded-[64px] w-[233.5px] px-8 py-4 text-[16px] flex justify-center h-[56px] items-center overflow-hidden"
          >
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                ease: 'easeInOut',
                duration: 0.375,
                delay: 0.375,
              }}
              className="w-[233.5px] h-full flex gap-4"
            >
              <p>Create New Card</p>{' '}
              <Image
                src="/assets/arrow-right.png"
                width={22.5}
                height={16.5}
                alt="arrow-right"
              />
            </motion.div>
          </motion.button>
        </div>
        <div className="w-[1/2] relative h-[560px]">
          <Image
            src="/assets/star.png"
            width={280}
            height={280}
            alt="star"
            className="absolute right-[350px] top-[200px]"
          />
          <motion.div
            initial={{ x: 0, skewX: -20 }}
            animate={{ x: 0, skewX: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25 }}
            className="w-[435px] h-auto transform z-10"
          >
            <Transparent containerWidth="435px" />
          </motion.div>

          {/* Middle Card (Layered with the top card) */}
          <motion.div
            initial={{ y: -125, skewX: -20 }}
            whileInView={{ y: 0, skewX: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25 }}
            className="w-[435px] h-auto transform absolute -z-[2] top-[125px] -right-[14px] "
          >
            <Green containerWidth="435px" />
          </motion.div>

          {/* Bottom Card (Layered with the other two) */}
          <motion.div
            initial={{ y: -245, skewX: -20 }}
            whileInView={{ y: 0, skewX: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25 }}
            className="w-[450px] h-auto transform absolute z-[-3] top-[245px] -right-[28px] "
          >
            <White containerWidth="435px" />
          </motion.div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="relative pl-8 h-[600px]">
          <motion.div className="w-[412px] h-auto z-[3]">
            <Transparent containerWidth="412px" />
          </motion.div>
          <motion.div
            initial={{ y: -260 }}
            whileInView={{ y: -48 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25 }}
            className="z-[-3] absolute"
          >
            <motion.div
              initial={{ skewX: 0 }}
              whileInView={{ skewX: 16 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.75 }}
              className="w-[412px] h-auto absolute z-[-3] transform skew-y-[16deg] left-0"
            >
              <Green containerWidth="412px" />
            </motion.div>
          </motion.div>
          <Image
            src="/assets/star.png"
            width={280}
            height={280}
            alt="star"
            className="absolute left-[300px] bottom-[70px]"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[40px] font-bold">
            Find the Perfect Credit Card <br />
            for You
          </h2>
          <p className="w-[546px] text-[16px]">
            Discover your ideal credit card with ease. Our comprehensive
            selection caters to every financial need and lifestyle. Whether you
            seek cashback rewards, travel perks, or building credit, we have the
            perfect credit card waiting for you. Unleash the possibilities and
            find the credit card that fits your unique goals and aspirations.
          </p>
          <button className="bg-baseGreen rounded-[64px] w-[152px] px-8 py-4 text-[16px] flex gap-4 justify-center h-[56px] items-center">
            <p>Learn More</p>{' '}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreditCard;
