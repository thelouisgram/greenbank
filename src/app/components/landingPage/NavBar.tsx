import React from "react";
import Image from "next/image";
import Contact from "../buttons/Contact";

const NavBar = () => {
  return (
    <nav className="h-12 w-full flex justify-between items-center">
      <Image
        src="/assets/logo.png"
        width={140}
        height={24}
        alt="logo"
        priority
      />
      <ul className="flex gap-8 shadow-sm text-white text-[16px]">
        <li>Why Us</li>
        <li>Services</li>
        <li>Our Process</li>
        <li>Payments</li>
        <li>FAQs</li>
      </ul>
      <Contact />
    </nav>
  );
};

export default NavBar;
