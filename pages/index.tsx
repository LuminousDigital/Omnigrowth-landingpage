"use client";

import Head from "next/head";
import { useRef } from "react";
import SEO from "@/pages/components/SEO";
import Navbar from "@/pages/components/Navbar";
import Hero from "@/pages/components/Hero";
import FeaturesCarousel from "@/pages/components/FeaturesCarousel";
import BuiltForStartups from "@/pages/components/BuiltForStartups";
import WaitlistForm from "@/pages/components/WaitlistForm";
import Footer from "@/pages/components/Footer";

export default function Home() {
  const waitlistRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <SEO title="Waitlist" />

      <section className="relative overflow-hidden bg-[#161517] z-10 mx-auto pl-4 sm:pl-8 md:pl-4 lg:pl-[200px] xl:pl-[300px] 2xl:pl-[360px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-[20rem] h-[20rem] bg-[#6370F5] opacity-80 rounded-full blur-3xl rotate-[-24deg] -left-[8rem] top-[16rem] sm:w-[24rem] sm:h-[24rem] sm:top-[18rem] md:w-[30rem] md:h-[26rem] md:top-[20rem] lg:w-[45rem] lg:h-[40rem] lg:-left-[14rem] lg:top-[20rem]" />
          <div className="absolute w-[16rem] h-[16rem] bg-[#1DA1F2] opacity-70 rounded-full blur-3xl rotate-[-24deg] -left-[8rem] top-[30rem] sm:w-[20rem] sm:h-[20rem] sm:top-[34rem] md:w-[26rem] md:h-[22rem] md:top-[38rem] lg:w-[40rem] lg:h-[35rem] lg:-left-[14rem] lg:top-[40rem]" />
          <div className="absolute w-[40rem] h-[10rem] bg-[#E1306C] opacity-70 rounded-full blur-3xl rotate-[20deg] left-[3rem] top-[1rem] sm:left-[14rem] md:left-[18rem] lg:w-[38rem] lg:h-[30rem] lg:left-[30rem] lg:-top-[15rem]" />
          {/* <div className="hidden lg:block absolute w-[30rem] h-[22rem] bg-[#FFDC80] opacity-70 rounded-full blur-3xl rotate-[4deg] left-[70rem] -top-[10rem]" /> */}
          <div
            className="absolute w-[30rem] h-[22rem] bg-[#FFDC80] opacity-70 rounded-full blur-3xl rotate-[4deg] left-[12rem] top-[-3rem] sm:left-[12rem] sm:top-[50rem] md:left-[35rem] md:top-[-10rem] lg:w-[30rem] lg:h-[20rem] lg:left-[50rem] lg:top-[-10rem] xl:left-[65rem] xl:-top-[10rem]
  "
          />
        </div>
        <Navbar />
        <Hero
          onScrollToWaitlist={() =>
            waitlistRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <main className="relative overflow-hidden mx-auto pr-4 sm:pr-8 md:pr-4 lg:pr-[200px] xl:pr-[300px] 2xl:pr-[360px]">
          <FeaturesCarousel />
          <BuiltForStartups />
          <WaitlistForm scrollRef={waitlistRef} />
          <Footer />
        </main>
      </section>
    </>
  );
}
