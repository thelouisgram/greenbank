import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // state can be either number or null

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index);
    }
  };

  const questions = [
    {
      question: 'What credit score do I need to apply for a credit card?',
      answer:
        'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
    },
    {
      question: 'How can I apply for a credit card online?',
      answer:
        'You can apply for a credit card online by visiting the credit card issuer’s website, filling out the application form, and submitting the required documents.',
    },
    {
      question: 'Are there any annual fees associated with the credit card?',
      answer:
        'Some credit cards may have annual fees. These fees vary depending on the type of card and its features. Always check the terms and conditions before applying.',
    },
    {
      question:
        'How long does it take to receive the credit card once approved?',
      answer:
        'Once approved, it typically takes 7-10 business days for the card to arrive, but this can vary depending on the issuer and your location.',
    },
    {
      question: 'How can I check my credit card balance and transactions?',
      answer:
        'You can check your credit card balance and transactions online via your card issuer’s website or mobile app, or by calling their customer service.',
    },
    {
      question: 'What should I do if my credit card is lost or stolen?',
      answer:
        'If your card is lost or stolen, immediately contact your card issuer to report the incident and prevent unauthorized transactions.',
    },
    {
      question: 'Is my credit card information secure?',
      answer:
        'Yes, credit card information is encrypted and protected by security protocols such as 3D Secure and chip technology to ensure safe transactions.',
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full container relative flex justify-center">
        <div className="z-[-1] absolute w-[800px] h-[1000px] rounded-full bg-gradient-to-l from-[#2BB32A] to-transparent blur-3xl opacity-40 -top-40 -left-[30%]"></div>
      </div>
      <div className="px-2 sm:px-4 lg:px-[110px]">
        <h2 className="text-[32px] lg:text-[40px] font-bold text-center mb-16">
          FAQs
        </h2>
        <div className="flex flex-col gap-4">
          {questions.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold flex justify-between w-full cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h4>{item.question}</h4>
                <h4>{activeIndex === index ? '-' : '+'}</h4>
              </motion.div>

              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                  className="text-[14px] sm:text-[16px] text-lightGreyGreen"
                >
                  {item.answer}
                </motion.p>
              )}

              <div className="w-full bg-white h-[1px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
