'use client';
import React from 'react';
import Image from 'next/image';
import NavBar from './components/landingPage/NavBar';
import Hero from './components/landingPage/Hero';
import About from './components/landingPage/About';
import Logos from './components/landingPage/Logos';
import Features from './components/landingPage/Features';
import CreditCard from './components/landingPage/CreditCard';
import Testimonials from './components/landingPage/Testimonials';
import FAQs from './components/landingPage/FAQs';
import CTA from './components/landingPage/CTA';
import Footer from './components/landingPage/Footer';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="w-full flex justify-center h-full relative container">
        <div className="z-[-1] absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#2BB32A] to-transparent blur-3xl opacity-40 -top-[350px] right-0"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: 'easeInOut',
          duration: 0.1,
        }}
        className="lg:container overflow-hidden w-full h-full"
      >
        <Image
          src="/assets/dora.png"
          width={1446}
          height={5080}
          alt="tracing"
          className="absolute z-[-3]"
        />
        <Image
          src="/assets/ily_dora.png"
          width={1320}
          height={4970}
          alt="tracing"
          className="absolute z-[-3] top-36"
        />
      </motion.div>
      {/* Original gradient positioned at 1500px from the top */}
      <div className="w-full container relative">
        <div className="z-[-4] absolute w-[900px] h-[900px] top-[1500px] rounded-full bg-gradient-to-r from-[#2BB32A] to-transparent blur-3xl opacity-40 right-0 md:-right-[30%]"></div>
      </div>
      {/* Original gradient positioned at 3500px from the top */}
      <div className="w-full container relative">
        <div className="z-[-4] absolute w-[900px] h-[900px] top-[3500px] rounded-full bg-gradient-to-l from-[#2BB32A] to-transparent blur-3xl opacity-40 left-0 md:-left-[25%]"></div>
      </div>
      <div className="px-2 sm:px-4 md:px-0 container font-jakarta pt-[32px] lg:px-[100px] z-[2] flex gap-[100px] sm:gap-[128px] flex-col text-white">
        <NavBar />
        <Hero />
        <About />
        <Logos />
        <Features />
        <CreditCard />
        <Testimonials />
        <FAQs />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
