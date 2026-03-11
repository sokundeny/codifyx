import Image from 'next/image';
import codifyx from '@/assets/codifyx_logomark.png';
import aboutUs from '@/assets/aboutUs/about_us_pic.jpg'
import {MoveRight } from "lucide-react";

const AboutUs = () => {

  return (
    <div className='flex flex-col gap-20 w-full h-screen py-20 px-28'>
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
        <div className="bg-blue-400 w-full rounded-2xl">aa</div>
        <div className="w-full rounded-2xl">
          <Image
            src={aboutUs}
            alt='About Us Picture'
            className='h-full w-full rounded-2xl'
          />
        </div>
        <div className="flex flex-col justify-between p-10 bg-border-muted w-full rounded-2xl">
          <div className="">

          </div>
          <div className="text-9xl bg-linear-to-r ">
            +82%
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end pt-12 border-t border-border-muted ">
        <div className="text-primary">
          ABOUT CODIFYX
        </div>
        <div className="text-text-muted leading-6 w-100">
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