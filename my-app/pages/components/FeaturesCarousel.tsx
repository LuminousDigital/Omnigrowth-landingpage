"use client";

import styles from "@/styles/FeaturesCarousel.module.css";
import GroupImage from "@/public/GroupImage.gif";
import type { StaticImageData } from "next/image";
import Image from "next/image";

type FeatureCardProps = {
  title: string;
  text: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

type Feature = {
  title: string;
  text: string;
};

const FeatureCard = ({ title, text, image }: FeatureCardProps) => (
  <div className="feature-card text-white">
    <div className="bg-[#D9D9D9] w-40 h-25 flex items-center justify-center rounded-lg mb-4">
      <Image
        src={image.src}
        alt={image.alt}
        width={40}
        height={40}
        className="object-contain"
        unoptimized
      />
    </div>
    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm sm:text-base md:text-lg text-[#b0b0b0]">{text}</p>
  </div>
);

const FeaturesCarousel = () => {
  const features: Feature[] = [
    {
      title: "Autonomous Strategy Engine",
      text: "From email to ads, social, SMS, and landing pages—create, launch, and manage all your campaigns in one unified platform.",
    },
    {
      title: "Fullstack Growth Automation",
      text: "Automate workflows across all your growth tools—from outreach to analytics—with one powerful AI brain.",
    },
    {
      title: "AI-Powered Creatives",
      text: "Generate high-converting copy, creatives and videos tailored to each channel using our built-in creative engine and templates.",
    },
    {
      title: "Real-Time Optimization & Learning",
      text: "Our system continuously learns from your performance data and automatically optimizes campaigns to improve results every day.",
    },
  ];

  return (
    <section className={`flex ${styles.carouselSection}`}>
      <div className="w-full">
        <h2 className="relative carousel-title">What we’re Building</h2>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            {[...Array(2)].map((_, idx: number) => (
              <div className="carousel-group" key={idx}>
                {features.map((feature: Feature, index: number) => (
                  <FeatureCard
                    key={`${idx}-${index}`}
                    title={feature.title}
                    text={feature.text}
                    image={{
                      src: GroupImage as StaticImageData,
                      alt: feature.title,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
