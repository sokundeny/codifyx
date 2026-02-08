"use client";

import { useTheme } from "@/hooks/themeHook";
import {ArrowUp} from "lucide-react"

interface info {
    short: string;
    full_info: string;
}

const info_item:info[]=[
    {
        short:"EM",
        full_info:"Creative.codifyx@gmail.com"
    },
    {
        short:"PN",
        full_info:"+855 16 789 501"
    },
    {
        short:"AD",
        full_info:"Prek Leap, N6A, Phnom Penh, Cambodia"
    }
];

const Footer = () => {

    const {theme,toggle}=useTheme();

    return (
        <footer className="w-full py-20 px-16 px">

            {/* top*/}
            <div className="flex items-start justify-center gap-30">
            <div className="flex-1 text-2xl bg-linear-to-r from-gray-400 to-gray-800 text-transparent bg-clip-text">
                We Design, Build, And Scale Digital Products That Turn Bold Ideas Into Powerful Experiences And Measurable Results.
            </div>
            <div className="flex-1">
                {
                    info_item.map((i,index)=>(
                        <div className={`flex gap-3 pb-2 border-b ${theme=="light"?`border-gray-300`:`border-gray-600`}`}>
                            <div className="text-gray-400">{i.short}</div>
                            <div className="">{i.full_info}</div>
                        </div>
                    ))
                }
            </div>
            <div className={`flex-none flex gap-2 items-center justify-center 
                    py-2.5 px-4.5 rounded-md hover:bg-gray-50
                    ${theme==="dark"?"text-gray-300":"text-gray-600"}
                `}>
                <ArrowUp />
                <div>
                    back to top
                </div>
            </div>

            </div>
        </footer>
    );
}

export default Footer