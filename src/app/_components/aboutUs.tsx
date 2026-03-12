"use client"

import Image from 'next/image';
import codifyx from '@/assets/codifyx_logomark.png';
import codifyxWhite from '@/assets/codifyx_logomark_1.png';
import aboutUs from '@/assets/aboutUs/about_us_pic.jpg'
import {MoveRight } from "lucide-react";
import { useTheme } from '@/hooks/themeHook';

const AboutUs = () => {

  const {theme}=useTheme();

  return (
    <div className='flex flex-col gap-20 w-full h-245.5 py-20 px-28'>
      {/* Header */}
      <div className="flex flex-col items-center w-full gap-12">
        <Image 
          src={codifyx} 
          alt={'Codifyx Logo'}
          className='w-12 aspect-square'
        />
        <div className={`text-4xl text-center leading-11 text-text-soft`}>
          We Design And Build Digital Products By Focusing On What Truly Matters. Clarity, Usability, And Long-Term Value For Your Business And Users.
        </div>
      </div>
      {/* Body */}
      <div className="flex gap-4 justify-center items-stretch h-full">
        <div className="flex flex-col justify-between p-10 bg-[linear-gradient(to_top_right,#001E6B,#002584,#002C9E,#003AD1)] w-full rounded-2xl">
          <div className="w-12 aspect-square">
            <Image
              src={codifyxWhite}
              alt='Codify Logo'
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-sm text-white">
              Built for Clarity
            </div>
            <div className="text-xl text-white">
              We design experiences, not just screens. Every decision is guided by user needs, clear thinking, and meaningful outcomes.
            </div>
          </div>
        </div>
        <div className="w-full rounded-2xl">
          <Image
            src={aboutUs}
            alt='About Us Picture'
            className='h-full w-full rounded-2xl'
          />
        </div>
        <div className={`flex flex-col justify-between p-10 w-full rounded-2xl bg-background-section border ${theme == "dark" ? "border-[#252B37]" :"border-background-muted"}`}>
          <div className="flex flex-col gap-6">
            <div className="text-text-muted text-sm">
              Your business growth, measured
            </div>
            <div className="text-5 text-text-primary">
              We prioritize functionality, performance, and long-term value in everything we build.
            </div>
          </div>
          <div className={`text-9xl bg-[linear-gradient(to_left,#00278B,#002EA5,#0035BE,#0043F1)] bg-clip-text text-transparent `}>
            +82%
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end pt-12 border-t border-border-muted ">
        <div className="text-primary">
          ABOUT CODIFYX
        </div>
        <div className="text-text-muted leading-6 w-162">
          Codifyx is a software development studio focused on building custom web and mobile applications. We work closely with our clients to turn complex requirements into reliable, scalable digital products.
        </div>
        <div className={`flex-none flex gap-2 items-center justify-center cursor-pointer
            py-2.5 px-4.5 rounded-md hover:bg-gray-50 hover:text-[#181D27]
            text-text-muted`}>
          Book A Call <MoveRight size={20} />
        </div>
      </div>
    </div>
  )
}

export default AboutUs