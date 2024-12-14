import React from "react";
import Image from "next/image";
import { footerData } from "../utils/footerData";

const Footer = () => {
  return (
    <footer className="absolute w-full z-[3] bottom-0 h-[371px] bg-darkGreyGreen/10 shadow-lg backdrop-blur-sm ">
      <div className="container w-full lg:px-[100px] pt-20 pb-8 h-full">
        <div className="flex flex-col justify-between h-full w-full ">
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-4">
              <Image
                src="/assets/logo.png"
                width={140}
                height={24}
                alt="logo"
                priority
              />
              <p className="w-[287px] text-[16px] text-lightGreyGreen tracking-[-3%] leading-[24px]">
                Discover the power of our secure and rewarding credit cards
              </p>
            </div>
            <div className="w-auto flex gap-28 justify-end">
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
          </div>
          <div className="w-full flex justify-between">
            <p className="text-lightGreyGreen text-[12px]">
              copyright 2023 DoraDesign All Rights Reserved
            </p>
            <p className="text-lightGreyGreen text-[12px]">
              This page uses cookies. See cookies details here{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
