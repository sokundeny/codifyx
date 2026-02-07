"use client";

import { useTheme } from "@/hooks/themeHook";
import PrimaryButton from "./primaryButton";
import Link from "next/link";
import Image from "next/image";

import CodifyxLight from "@/assets/Codifyx_light.png";
import CodifyxDark from "@/assets/Codifyx_dark.png";
import { Mail, Sun, Moon } from "lucide-react";

interface Nav {
  title: string;
  url: string;
}

const navItems: Nav[] = [
  { title: "About Us", url: "#about" },
  { title: "Our Services", url: "#services" },
  { title: "Case Studies", url: "#cases" },
  { title: "Creative Team", url: "#team" }
];

const NavBar = () => {
  const { theme, toggle } = useTheme();

  return (
    <nav className="w-full flex justify-between items-center py-6 px-16 sticky top-0 z-50">
      
      {/* Left: Logo + Nav Items */}
      <div className="flex items-center gap-12">
        <Link href="/">
          <Image 
            src={theme === "dark" ? CodifyxDark : CodifyxLight} 
            alt="Codifyx logo" 
            className="h-8"
          />
        </Link>

        <div className="flex gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={'/'}
              className={`
                relative
                ${theme=='light'&&'text-gray-400'}
                after:content-['']
                after:absolute
                after:-bottom-2
                after:left-0
                after:w-0
                after:h-0.5
                after:bg-primary
                hover:after:w-full
              `}
            >
              {item.title}
            </Link>
          ))}
        </div>

      </div>

      {/* Right: Theme Toggle + Contact */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button onClick={toggle} className="p-2 rounded hover:bg-gray-300 transition cursor-pointer">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Contact button */}
        <Link href="">
          <PrimaryButton 
            icon={
              <Mail size={16}/>
            }
          >
            Contact Us
          </PrimaryButton>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
