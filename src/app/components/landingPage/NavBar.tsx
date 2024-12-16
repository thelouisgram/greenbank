import React from 'react';
import Image from 'next/image';
import Contact from '../buttons/Contact';
import { motion } from 'motion/react';

const NavBar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
      className="h-12 w-full flex justify-between items-center"
    >
      <Image
        src="/assets/logo.png"
        width={140}
        height={24}
        alt="logo"
        priority
      />
      <ul className="gap-8 shadow-sm text-white text-[16px] hidden md:flex">
        <li>Why Us</li>
        <li>Services</li>
        <li>Our Process</li>
        <li>Payments</li>
        <li>FAQs</li>
      </ul>
      <Contact />
    </motion.nav>
  );
};

export default NavBar;
