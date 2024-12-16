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
      <div className="w-full h-full flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-center mb-[100px] ip:mb-[128px]">
        <div className="h-full w-full flex flex-col gap-6 items-center text-center md:text-start md:items-start">
          <div className="md:w-[604px] text-[30px] sm:text-[40px] font-bold">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.6,
                  delay: i * 0.1,
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
              duration: 0.6,
              delay: 0.3,
            }}
            className="text-[16px] text-lightGreyGreen tracing-[16px] md:w-[424px]"
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
              duration: 0.6,
            }}
            className="bg-baseGreen rounded-[64px] w-[233.5px] px-8 py-4 text-[16px] flex justify-center h-[56px] items-center overflow-hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.5,
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
        <div className="md:w-[1/2] relative h-[460px] sm:h-[560px] ">
          <Image
            src="/assets/star.png"
            width={280}
            height={280}
            alt="star"
            className="absolute right-[350px] top-[200px] hidden sm:flex"
          />
          <motion.div
            initial={{ x: 0, skewX: -15, opacity: 0 }}
            whileInView={{ x: 0, skewX: -15, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.3 }}
            className="h-auto transform z-10"
          >
            <Transparent />
          </motion.div>
          <motion.div
            initial={{ y: -125, skewX: -15, opacity: 0 }}
            whileInView={{ y: 0, skewX: -15, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }}
            className="h-auto transform absolute -z-[2] top-[125px] -right-[10px] md:-right-[14px] "
          >
            <Green />
          </motion.div>
          <motion.div
            initial={{ y: -245, skewX: -15, opacity: 0 }}
            whileInView={{ y: 0, skewX: -15, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.7 }}
            className="h-auto transform absolute z-[-3] top-[245px] -right-[14px] md:-right-[28px]"
          >
            <White />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col-reverse text-center md:text-left  gap-16 md:flex-row items-center justify-between ">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.6,
            staggerChildren: 0.2,
          }}
          className="relative md:pl-8 h-[400px] sm:h-[500px] text-left"
        >
          <motion.div className="h-auto z-[3]">
            <Transparent />
          </motion.div>
          <motion.div
            initial={{ y: -260 }}
            whileInView={{ y: -48 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.3 }}
            className="z-[-3] absolute"
          >
            <motion.div
              initial={{ skewX: 0 }}
              whileInView={{ skewX: 16 }}
              transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }}
              className="h-auto absolute z-[-3] transform skew-y-[16deg] left-0"
            >
              <Green />
            </motion.div>
          </motion.div>
          <Image
            src="/assets/star.png"
            width={280}
            height={280}
            alt="star"
            className="absolute left-[300px] bottom-[70px] hidden sm:flex"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.6,
            staggerChildren: 0.2,
          }}
          className="flex flex-col gap-6 w-[1/2] items-center md:items-start"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[30px] sm:text-[40px] font-bold "
          >
            Find the Perfect Credit Card <br className="hidden sm:flex" />
            for You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] text-lightGreyGreen tracing-[16px] md:w-[424px]"
          >
            Discover your ideal credit card with ease. Our comprehensive
            selection caters to every financial need and lifestyle. Whether you
            seek cashback rewards, travel perks, or building credit, we have the
            perfect credit card waiting for you. Unleash the possibilities and
            find the credit card that fits your unique goals and aspirations.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-baseGreen rounded-[64px] w-[152px] px-8 py-4 text-[16px] flex gap-4 justify-center h-[56px] items-center"
          >
            <p>Learn More</p>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreditCard;
