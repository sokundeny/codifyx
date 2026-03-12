"use client"
import React, { useRef, useEffect } from "react";
import codifyx from '@/assets/codifyx_logomark.png';
import codifyxWhite from '@/assets/codifyx_logomark_1.png';
import Image from 'next/image';
import { useTheme } from "@/hooks/themeHook";
import PrimaryButton from "@/components/primaryButton";

const CTA = () => {

  const { theme}=useTheme();
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const texts: string[] = [
    "Better Call Codifyx",
    "Result That Metter",
    "Build With Speed",
    "Design With Purpose"
  ];

  const ScrollItem = () => (
    <>
      {texts.map((text, index) => (
        <div key={index} className="flex items-center gap-8 pr-8">
          <p className="pr-6">{text}</p>
          <Image src={codifyxWhite} alt="Codifyx Logo" className="w-6 aspect-square " />
        </div>
      ))}
    </>
  );

  const DarkScrollItems = () => (
    <>
      {texts.map((text, index) => (
        <div key={index} className="flex items-center gap-8 pr-8 ">
          <p className="pr-6">{text}</p>
          <Image src={codifyx} alt="Codifyx Logo" className="w-6 aspect-square " />
        </div>
      ))}
    </>
  );


  useEffect(() => {
    const startMarquee = (
      container: HTMLDivElement,
      speed: number,
      direction: 1 | -1
    ) => {
      let x = direction === -1 ? -container.scrollWidth / 2 : 0;
      let animId: number;

      const tick = () => {
        x += direction * speed;
        const half = container.scrollWidth / 2;

        if (direction === -1 && x <= -half) x += half;
        if (direction === 1 && x >= 0) x -= half;

        container.style.transform = `translateX(${x}px)`;
        animId = requestAnimationFrame(tick);
      };

      animId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(animId);
    };

    const cleanup1 = row1Ref.current ? startMarquee(row1Ref.current, 3, -1) : undefined;
    const cleanup2 = row2Ref.current ? startMarquee(row2Ref.current, 3, -1) : undefined;

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return (
    <div className="w-full">
      <div className="relative w-full h-122.75 overflow-hidden flex items-center justify-center">

        <div className="absolute py-4 left-[-40%] w-[180%] bg-foreground rotate-12 overflow-hidden">
          <div ref={row1Ref} className="flex items-center gap-8 text-5xl whitespace-nowrap text-background-section font-bold will-change-transform">
            {
              theme != "dark"
                ? (
                  <>
                    <ScrollItem />
                    <ScrollItem />
                  </>
                )
                : (
                  <>
                    <DarkScrollItems />
                    <DarkScrollItems />
                  </>
                )
            }
          </div>
        </div>

        <div className="absolute py-4 left-[-40%] w-[180%] bg-primary -rotate-12 overflow-hidden">
          <div ref={row2Ref} className="flex items-center gap-8 text-5xl whitespace-nowrap text-white font-bold will-change-transform">
            <ScrollItem />
            <ScrollItem />
          </div>
        </div>

      </div>
      <div className="flex items-end justify-between py-20 px-28">
        <div className="text-6xl w-266 bg-linear-to-r from-[#A4A7AE] to-[#252B37] bg-clip-text text-transparent">
          Have a clear vision? Let’s bring it to life with precision and purpose.
        </div>
        <PrimaryButton navigate="/contact" >
          Start a Project
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CTA;