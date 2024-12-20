import React from 'react';
import Image from 'next/image';
import { footerData } from '../utils/footerData';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="w-full bottom-0 md:h-[371px] bg-darkGreyGreen/10 shadow-lg backdrop-blur-sm px-2 sm:px-4 md:px-0">
      <div className="container w-full lg:px-[100px] pt-20 pb-8 h-full">
        <div className="flex flex-col justify-between h-full w-full">
          {/* First section with logo and description */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* Logo and description */}
            <div className="flex flex-col gap-4 lg:w-1/3">
              <Image
                src="/assets/logo.png"
                width={140}
                height={24}
                alt="logo"
                priority
              />
              <p className="text-[16px] text-lightGreyGreen tracking-[-3%] leading-[24px] w-full lg:w-auto">
                Discover the power of our secure and rewarding credit cards
              </p>
            </div>

            {/* Footer links section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 justify-end w-full lg:w-2/3 mt-8 lg:mt-0">
              {footerData.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-4">
                    {section.heading}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <p className="text-lightGreyGreen hover:text-white transition-colors text-[16px]">
                          {link.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Second section with copyright and cookie notice */}
          <motion.div
            className="w-full flex flex-col lg:flex-row justify-between mt-8 lg:mt-20 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
          >
            <p className="text-lightGreyGreen text-[12px] text-center lg:text-left">
              copyright 2023 DoraDesign All Rights Reserved
            </p>
            <p className="text-lightGreyGreen text-[12px] text-center lg:text-right">
              This page uses cookies. See cookies details here
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
