"use client"

import PrimaryButton from '@/components/primaryButton';
import SecondaryButton from '@/components/secondaryButton';
import { ArrowUpRight} from "lucide-react";
import Image from 'next/image';
import mac from "@/assets/landing_page/mac_mockup.png";
import mockLandingPage from "@/assets/landing_page/landing_page.png";

const LandingPage = () => {
  return (
    <main className='relative h-screen w-screen flex justify-center pt-20 overflow-hidden'>
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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20%] w-480">
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

        </div>
      </div>
      {/* Background ellipses */}
      <div className="absolute w-480 bottom-0 -z-10">
        
      </div>

    </main>
  )
}

export default LandingPage;