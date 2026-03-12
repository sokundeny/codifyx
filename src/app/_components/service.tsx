"use client"

import { ServiceType } from '@/types/type'
import { useState } from 'react';
import { ArrowUpRight, ChevronUp } from 'lucide-react'
import { ourService } from '@/repository/serviceRepository';



const Service = () => {

  const [ourServices, setOurServices] = useState<ServiceType[]>(ourService);

  const [currentServivce, setCurrentService] = useState<ServiceType>(ourServices[0]);

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggle = (index:number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="flex gap-16 items-start h-245.5 w-full py-20 px-28 rounded-sm">
      <div className="flex flex-col justify-between w-100 h-full">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-primary">
              OUR SERVICE
            </h2>
            <h1 className="text-4xl font-semibold tracking-tight">
              {currentServivce.title}
            </h1>
          </div>

          <p className="text-lg text-text-muted">
            {currentServivce.description}
          </p>
        </div>

        <p className="text-7xl">
          {`0`+currentServivce.id}
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-12 h-full">
        <h2 className="text-xl font-semibold pb-8 border-b border-border-muted">
          {currentServivce.title} Process
        </h2>
        {currentServivce.processes.map((process,index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="flex flex-col gap-8 w-full pb-8 border-b border-border-muted cursor-pointer"
          >
            <p className='flex justify-between text-xl text-text-muted  '>
              {process.title}
              <ChevronUp
                size={20}
                className={` ${!openIndices.includes(index) ? "rotate-180" : ""}`}
              />
            </p>
            {
              openIndices.includes(index) && (
                <div className="text-text-muted">
                  {process.description}
                </div>
              )
            }
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8 w-62.5 p-4 bg-background-muted">
        <div>
          {
            ourServices.map((service,index)=>(
              <div
                key={index}
                className={`
                  py-2 px-3.5
                  text-sm border-l 
                  ${currentServivce.id == service.id
                    ? 'border-primary text-primary font-semibold'
                    : 'border-border-default text-text-soft '
                }
                  cursor-pointer
                  `
                }
                onClick={() => {
                  setCurrentService(ourServices[index])
                }}
              >
                <h2 className='hover:text-primary-hover hover:translate-x-0.5'>
                  {service.title}
                </h2>
              </div>
            ))
          }
        </div>
        <div className=" flex items-center gap-2 py-4 px-3.5 rounded-lg hover:bg-primary-soft text-primary cursor-pointer transition-colors duration-300 ease-in-out ">
          Custom Website <ArrowUpRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default Service;