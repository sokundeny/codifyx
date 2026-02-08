'use client'

import { useState } from "react";
import Image from 'next/image';
import Calendar from "@/components/calendar";

interface TimeSelectorProps {
  onSelect?: (time: string) => void; 
}

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
}


interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

const Contact: React.FC = () => {

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selected, setSelected] = useState({
    webDev: false,
    mobile: false,
    ux: false,
    maintenance: false,
  });
  return (
    <main className="flex flex-col gap-8 py-28 px-20 min-h-screen">

      <section
        className="relative flex flex-col items-center gap-5 py-16 px-8 w-full bg-primary text-white rounded-lg"
        aria-labelledby="contact-banner"
      >
        <h1
          id="contact-banner"
          className="font-semibold text-4xl leading-11 tracking-[-0.02em] text-center"
        >
          Connect Our Creative Team
        </h1>
        <p className="text-xl leading-7.5 tracking-normal text-center">
          Let us know how can we help.
        </p>

        <div className="absolute -top-2.5 left-0 opacity-72">
          <Image
            src="/images/codifyx logomark_1.png"
            alt="Decorative design"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        <div className="absolute -bottom-2.5 right-0 opacity-72">
          <Image
            src="/images/codifyx logomark_1.png"
            alt="Decorative design"
            width={180}
            height={180}
            className="rotate-180"
          />
        </div>
      </section>

      <section className="flex flex-row gap-8">
        <article className="flex flex-col justify-between p-16 w-132 h-fill border border-border-muted rounded-lg">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="font-semibold text-xl leading-7.5 text-[#181D27]">
              Let’s Build With Clarity & Momentum
            </h2>
            <p className="text-xs font-normal leading-4.5 text-[#535862] tracking-normal">
              Lorem ipsum dolor sit amet consectetur. Tristique viverra gravida egestas venenatis aliquet duis.
            </p>
          </div>

          <Calendar />

          <TimeSelector onSelect={setSelectedTime} />
        </article>

        <article className="flex flex-col gap-8 flex-1 p-16 border border-border-muted rounded-lg">
          
          <div className="flex flex-col gap-2 w-full">
            <h2 className="font-semibold text-xl leading-7.5 text-[#181D27]">
              Let’s Build With Clarity & Momentum
            </h2>
            <p className="text-xs font-normal leading-4.5 text-[#535862] tracking-normal">
              Lorem ipsum dolor sit amet consectetur. Tristique viverra gravida egestas venenatis aliquet duis. Vitae eu ipsum augue curabitur.
            </p>
          </div>

          <div className="flex gap-8 w-full">
            <InputField label="First Name" placeholder="Enter First Name" />
            <InputField label="Last Name" placeholder="Enter Last Name" />
          </div>

          <div className="flex gap-8 w-full">
            <InputField label="Email" placeholder="Enter Email" type="email" />
            <InputField label="Phone Number" placeholder="Enter Phone Number" type="tel" />
          </div>

          <div className="flex flex-col gap-1.5 w-full h-62.5">
            <label className="text-sm font-medium leading-5 text-[#414651]">Message</label>
            <textarea
              className="
                w-full h-full px-3.5 py-2.5 font-normal leading-6 text-[#181D27] 
                placeholder:text-[#717680] border border-[#D5D7DA] rounded-lg **:shadow-sm
                focus:outline-none focus:border-[#7596FF] focus:ring-4 focus:ring-[#F4EBFF]
                transition-all duration-200 ease-in-out"
              placeholder="Enter your message"
            />
          </div>

          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-sm leading-5 font-medium ">How can we help?</h3>
              <div className="flex justify-between w-full">
                <Checkbox
                  label="Web Development"
                  checked={selected.webDev}
                  onChange={(checked) =>
                    setSelected((prev) => ({ ...prev, webDev: checked }))
                  }
                />
                <Checkbox
                  label="Mobile App Development"
                  checked={selected.mobile}
                  onChange={(checked) =>
                    setSelected((prev) => ({ ...prev, mobile: checked }))
                  }
                />
                <Checkbox
                  label="UX/UI Design"
                  checked={selected.ux}
                  onChange={(checked) =>
                    setSelected((prev) => ({ ...prev, ux: checked }))
                  }
                />
                <Checkbox
                  label="Maintenance"
                  checked={selected.maintenance}
                  onChange={(checked) =>
                    setSelected((prev) => ({ ...prev, maintenance: checked }))
                  }
                />
              </div>
            </div>
            <button className="
              py-2.5 px-4.5 w-full bg-primary hover:bg-[#002FA8] text-white 
              leading-6 font-semibold text-base  border-primbg-primary focus:border-[#7596FF] 
              rounded-lg focus:outline-none shadow-xs hover:cursor-pointer
              focus:shadow-[0_0_0_4px_#F4EBFF,0_1px_2px_0_#0A0D120D] 
              transition-color duration-200 ease-in-out
            "
            >
              <p>Let’s Get Started</p>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};



const InputField: React.FC<InputFieldProps> = ({ label, placeholder = "", type = "text" }) => (
  <div className="flex flex-col gap-1.5 flex-1">
    <label className="text-sm font-medium leading-5 text-[#414651]">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full h-11 px-3.5 py-2.5
        text-base font-normal text-[#181D27] placeholder:text-[#717680] leading-6
        border border-[#D5D7DA] rounded-lg **:shadow-sm
        focus:outline-none focus:border-[#7596FF] focus:ring-4 focus:ring-[#F4EBFF]
        transition-color duration-200 ease-in-out
      "
    />

  </div>
);

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex gap-2 items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      <span
        className={`
          w-4 h-4
          border rounded-sm
          flex items-center justify-center
          transition-colors
          ${checked ? "bg-[#E6ECFF] border-primbg-primary" : "border-[#D5D7DA]"}
        `}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-primbg-primary"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="currentColor"
              strokeWidth="1.6666"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>

      <span className="text-sm leading-5 font-medium text-[#414651]">
        {label}
      </span>
    </label>
  );
};


const TimeSelector: React.FC<TimeSelectorProps> = ({ onSelect }) => {
  const morningTimes = ["9:00 AM", "10:00 AM", "11:00 AM"];
  const afternoonTimes = ["1:00 PM", "2:00 PM", "3:00 PM"];

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const handleSelect = (time: string) => {
    setSelectedTime(time);
    if (onSelect) onSelect(time); 
  };

  const renderTimes = (times: string[]) =>
    times.map((time) => {
      return (
        <button
          key={time}
          onClick={() => handleSelect(time)}
          className={`
            py-2.5 px-4.5 w-full font-semibold text-base leading-6 rounded-lg shadow-xs
            border
            ${time === selectedTime
              ? "bg-[#E6ECFF] border-[#E6ECFF] text-[#002FA8]"
              : "bg-white border-[#D5D7DA] text-[#414651]"
            }
            hover:cursor-pointer
          `}
        >
          {time}
        </button>
      );
    });
  
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-1.5 w-full">
        <h3 className="text-sm font-medium leading-5 text-[#181D27]">Morning Shift</h3>
        <div className="flex gap-3 w-full">{renderTimes(morningTimes)}</div>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <h3 className="text-sm font-medium leading-5 text-[#181D27]">Afternoon Shift</h3>
        <div className="flex gap-3 w-full">{renderTimes(afternoonTimes)}</div>
      </div>
    </div>
  );
};

export default Contact;
