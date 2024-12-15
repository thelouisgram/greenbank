import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Logos = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      transition={{
        ease: 'easeInOut',
        delay: 0.375,
        duration: 0.375,
      }}
      className="flex justify-between w-full"
    >
      <Image src="/assets/upwork.png" width={105.32} height={32} alt="upwork" />
      <Image src="/assets/petal.png" width={90.48} height={32} alt="petal" />
      <Image
        src="/assets/rakuten.png"
        width={107.53}
        height={32}
        alt="rakuten"
      />
      <Image src="/assets/nyt.png" width={236.8} height={32} alt="nyt" />
      <Image src="/assets/vice.png" width={101.71} height={32} alt="vice" />
      <Image src="/assets/dell.png" width={100.57} height={32} alt="dell" />
    </motion.section>
  );
};

export default Logos;
