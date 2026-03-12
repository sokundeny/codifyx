"use client"

import PrimaryButton from '@/components/primaryButton';
import SecondaryButton from '@/components/secondaryButton';
import { ArrowUpRight} from "lucide-react";
import Image from 'next/image';
import mac from "@/assets/landing_page/mac_mockup.png";
import mockLandingPage from "@/assets/landing_page/landing.png";
import codifyx from "@/assets/codifyx_logomark_1.png"
import customer from "@/assets/kagura.jpg"

const LandingPage = () => {
  return (
    <main className='relative h-225.5 w-full flex justify-center pt-10 overflow-hidden'>
      <div className="flex flex-col items-center justify-start gap-12 w-5xl">
        <div className="flex flex-col items-center w-full gap-4">
          <h1 className="text-5xl text-center font-semibold leading-15">
            From Concept to Launch, We Build Digital Products That Matter
          </h1>
          <p className="w-176 text-text-muted text-xl text-center font-normal leading-7.5 ">
            Custom web and mobile applications designed to solve real problems and support your business goals.
          </p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <PrimaryButton icon={<ArrowUpRight size={14}/>} navigate='/contact'>
            Start a Project
          </PrimaryButton>
          <SecondaryButton>
            View Our work
          </SecondaryButton>
        </div>
      </div>
      {/*Macbook*/}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-15%] w-263.25">
        <div className="relative w-full"> 

          {/* Screen (behind) */}
          <div className="absolute left-[8%] top-[2%] w-[84%] h-[79%] overflow-hidden rounded-lg">
            <Image
              src={mockLandingPage}
              alt="Landing Page Screen"
              className="w-full h-full object-fill"
            />
          </div>

          {/* Macbook Frame (on top) */}
          <Image
            src={mac}
            alt="Macbook mockup"
            className="w-full h-auto relative z-10"
            priority
          />

          <div
            className={`
            flex items-center gap-4
            bg-background rounded-md py-2.5 px-6
            border border-border-default shadow-2xl
            absolute top-[-2%] left-[-2%] z-20`}>
            <div
              className="h-2 aspect-square bg-primary rounded-4xl"
            />
            <div className="text-primary">
              We Build And Scale Digital Products
            </div>
          </div>

          <div className="flex gap-3 absolute right-[-10%] top-[25%] z-20">
            <div className="flex items-center justify-center bg-primary w-14 aspect-square rounded-4xl">
              <Image
                src={codifyx}
                alt='Codifyx Logo'
                className='w-6 aspect-square'
              />
            </div>
            <div className="flex items-center bg-primary rounded-2xl py-2.5 px-4 text-white">
              Hello! How can I serve you today?
            </div>
          </div>

          <div
            className={`
            flex items-center gap-24
            bg-background rounded-md py-2.5 px-6
            border border-border-default shadow-2xl
            absolute top-[60%] left-[-2%] z-20`}>
            <div className=" relative w-6 aspect-square">
              <Image
                src={customer}
                alt={'Customer Profile'}
                className='w-full h-full object-cover rounded-4xl'
              />
              <Image
                src={customer}
                alt={'Customer Profile'}
                className='absolute top-0 -right-5 w-full h-full object-cover rounded-4xl'
              />
              <Image
                src={customer}
                alt={'Customer Profile'}
                className='absolute top-0 -right-10 w-full h-full object-cover rounded-4xl'
              />
              <div className="flex items-center justify-center text-xs absolute top-0 -right-15 w-full h-full bg-[#C7D6FF] rounded-4xl text-[#003AD1]">
                +8
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div
                className="h-2 aspect-square bg-primary rounded-4xl"
              />
              <div className="text-primary">
                Completed
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Background ellipses */}
      <div className="absolute w-480 bottom-[-170%] -z-10 blur-3xl">
        <div className="w-full aspect-square bg-radial from-[#0043F1] to-[#00278B80] to-50% rounded-full "
        />
      </div>
      <div className="absolute w-480 bottom-[-170%] -z-10 blur-3xl">
        <div className="w-full aspect-square bg-radial from-[#0043F1] to-[#00278B80] to-50% rounded-full "
        />
      </div>
      <div className="absolute w-480 bottom-[-190%] -z-10 blur-3xl">
        <div className="w-full aspect-square bg-[#3A67FF] rounded-full "
        />
      </div>
      <div className="absolute w-480 bottom-[-190%] -z-10 blur-3xl">
        <div className="w-full aspect-square bg-[#3A67FF] rounded-full "
        />
      </div>

    </main>
  )
}

export default LandingPage;