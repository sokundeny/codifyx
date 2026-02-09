"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/hooks/themeHook";
import { ArrowUp, MoveRight, Facebook, Instagram } from "lucide-react";
import { navItems } from "./navBar";
import codifyx_dark from "@/assets/codifyx_word_dark.png";
import codifyx from "@/assets/codifyx_word.png";
import Image from "next/image";

interface Info {
  short: string;
  full_info: string;
}

interface SocialMedia {
  icon: React.ReactNode;
  title: string;
  url: string;
}

const info_item: Info[] = [
  {
    short: "EM",
    full_info: "Creative.codifyx@gmail.com",
  },
  {
    short: "PN",
    full_info: "+855 16 789 501",
  },
  {
    short: "AD",
    full_info: "Prek Leap, N6A, Phnom Penh, Cambodia",
  },
];

const SML: SocialMedia[] = [
  {
    icon: <Facebook />,
    title: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61580312632388",
  },
  {
    icon: <Instagram />,
    title: "Instargram",
    url: "https://www.instagram.com/creative.codifyx/",
  },
];

const Footer = () => {
  const { theme, toggle } = useTheme();

  return (
    <footer className="flex flex-col items-stretch h-168 gap-16 w-full py-20 px-16 px overflow-hidden">
      {/* top */}
      <div className="flex items-start justify-between gap-30">
        <div className="w-124 text-2xl bg-linear-to-r from-gray-400 to-gray-800 text-transparent bg-clip-text">
          We Design, Build, And Scale Digital Products That Turn Bold Ideas Into
          Powerful Experiences And Measurable Results.
        </div>

        <div>
          {info_item.map((i, index) => (
            <div
              key={index}
              className={`flex gap-3 w-88 pb-2 border-b ${
                theme == "light" ? "border-gray-300" : "border-gray-600"
              }`}
            >
              <div className="text-gray-400">{i.short}</div>
              <div>{i.full_info}</div>
            </div>
          ))}
        </div>

        <div
          className={`flex-none flex gap-2 items-center justify-center cursor-pointer
            py-2.5 px-4.5 rounded-md hover:bg-gray-50 hover:text-[#181D27]
            text-text-muted`}
        >
          <ArrowUp />
          <div>back to top</div>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-8 w-150">
            <div className="font-semibold text-2xl">Let's Build Together</div>

            <div className="flex itesm-center justify-between pb-4 border-b border-border-default">
              <div className="text-sm text-text-muted">
                Your Email Address
              </div>
              <div className="flex items-center gap-2 py-0.5 px-4 rounded-lg text-sm text-text-primary-primary hover:bg-gray-50 hover:text-[#181D27] cursor-pointer">
                Contact Us <MoveRight size={20} />
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-sm">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={"/"}
                className={`
                  relative py-2 px-3
                  ${theme == "light" && "text-gray-400"}
                  after:content-['']
                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:w-full
                  after:h-0.5
                  after:opacity-0
                  after:bg-primary
                  after:transition-all
                  after:duration-300
                  after:ease-in-out
                  hover:after:opacity-100
                `}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 text-text-muted border-t border-border-default">
          <div>© 2026 Codifyx. All rights reserved.</div>

          <div className="flex gap-4">
            {SML.map((s, index) => (
              <Link
                key={index}
                href={s.url}
                target="_blank"
                className="flex gap-2"
              >
                {s.icon}
                <div>{s.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`${theme == "dark" ? "opacity-16" : "opacity-8"}`}>
        <Image
          src={theme == "dark" ? codifyx_dark : codifyx}
          alt="Codifyx"
        />
      </div>
    </footer>
  );
};

export default Footer;
