"use client";

import { useRef } from "react";
import Image from "next/image";
import Macbook from "@/public/Macbook.png";

type HeroProps = {
  onScrollToWaitlist: () => void;
};

const Hero = ({ onScrollToWaitlist }: HeroProps) => {
  return (
    <section className="relative z-10 flex justify-between items-center w-full pt-13 mb-10 max-w-[115rem]">
      <div className="flex flex-col gap-2 sm:gap-2 pt-5 lg:pt-1">
        <h1
          className="text-[22px] sm:text-[34px] md:text-[28px] lg:text-[30px] xl:text-[42px] font-bold leading-snug text-white mb-3 lg:mb-0"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          We are Building The <br />
          World’s Most Advanced <br />
          <span className="text-white">AI Growth Engine</span>
        </h1>
        <p className="text-[#B0B0B0] text-[13px] sm:text-[-10px] md:text-[15px] lg:text-[17px] leading-tight tracking-wide max-w-[420px] mb-4 sm:mb-4 lg:mb-1 pr-10">
          Omnigrowth is an autonomous, AI-powered platform that plans, executes,
          and optimizes your entire growth strategy — so you can focus on
          building.
        </p>
        <div>
          <button
            onClick={onScrollToWaitlist}
            className="relative flex items-center gap-2 bg-[#B0B0B0]/30 hover:bg-[#A0A0A0]/30 text-white text-[15px] sm:text-[16px] md:text-[25px] lg:text-[22px] font-semibold px-6 sm:px-12 lg:px-10 lg:py-2 py-3 sm:py-1 rounded-2xl shadow transition cursor-pointer"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Join Waitlist
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-9 fill-[#272847]"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden sm:block relative z-10 mt-10 sm:mt-0">
        <Image
          src={Macbook}
          alt="Dashboard Preview"
          className="object-contain w-[400px] md:w-[550px] lg:w-[550px] xl:w-[600px]"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
