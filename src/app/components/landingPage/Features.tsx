import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Features = () => {
  const featuresData = [
    {
      icon: '/assets/security.png',
      title: 'Security Guarantee',
      description: 'Your data and funds will be securely protected.',
    },
    {
      icon: '/assets/pie.png',
      title: 'Investing',
      description: 'Make informed decisions with ease and confidence.',
    },
    {
      icon: '/assets/analytics.png',
      title: 'Multiple Methods',
      description: 'Access multiple ways to manage and grow your assets.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Introduce delay between child animations
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.8 }}
        className="text-white text-[30px] sm:text-[40px] text-center mb-[48px] sm:mb-[64px] font-bold"
      >
        What do we offer?
      </motion.h3>
      <motion.div
        variants={containerVariants}
        className="flex justify-evenly items-center gap-8 flex-wrap"
      >
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-6 sm:w-[320px]"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: 'spring', stiffness: 150, damping: 10 },
              }}
              className="bg-darkGreyGreen flex justify-center items-center rounded-[18px] mb:rounded-[24px] w-10 h-10 sm:w-16 sm:h-16 aspect-square"
            >
              <Image
                src={feature.icon}
                width={512}
                height={512}
                alt={`${feature.title} icon`}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </motion.div>
            <div>
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                className="text-[18px] sm:text-[24px] text-white font-bold"
              >
                {feature.title}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                className="text-[14px] sm:text-[16px] text-lightGreyGreen"
              >
                {feature.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Features;
