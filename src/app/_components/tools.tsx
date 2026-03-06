'use client'

import ToolCard from "./toolCard";
import Figma from "@/assets/tools/figma.png";
import ReactLogo from "@/assets/tools/react.png";
import Vue from "@/assets/tools/vue.png";
import Angular from "@/assets/tools/angular.png";
import Flutter from "@/assets/tools/flutter.png";
import ReactNative from "@/assets/tools/reactnative.png";
import Node from "@/assets/tools/node_js.png";
import TypeScript from "@/assets/tools/typeScript.png";
import AWS from "@/assets/tools/aws.png";
import MongoDB from "@/assets/tools/mongodb.png";
import PgSQL from "@/assets/tools/pgsql.png";
import SQL from "@/assets/tools/sql.png";
import HTML from "@/assets/tools/html_5.png";
import CSS from "@/assets/tools/css_3.png";
import JavaScript from "@/assets/tools/js.png";
import Java from "@/assets/tools/java.png";
import Python from "@/assets/tools/python.png";
import Prisma from "@/assets/tools/prisma.png";
import AWS1 from "@/assets/tools/aws-1.png";
import Vercel from "@/assets/tools/vercel.png";
import Netlify from "@/assets/tools/netlify.png";
import Heroku from "@/assets/tools/heroku.png";
import Github from "@/assets/tools/github.png";
import Firebase from "@/assets/tools/firebase.png";
import { useTheme } from "@/hooks/themeHook";

const Tools: React.FC = () => {
  const { theme } = useTheme();

  const items = [
    { image: Figma, name: 'Figma' },
    { image: ReactLogo, name: 'React' },
    { image: Vue, name: 'Vue' },
    { image: Angular, name: 'Angular' },
    { image: Flutter, name: 'Flutter' },
    { image: ReactNative, name: 'React Native' },
    { image: Node, name: 'Node.js' },
    { image: TypeScript, name: 'TypeScript' },
    { image: AWS, name: 'AWS' },
    { image: MongoDB, name: 'MongoDB' },
    { image: PgSQL, name: 'PgSQL' },
    { image: SQL, name: 'SQL' },
    { image: HTML, name: 'HTML' },
    { image: CSS, name: 'CSS' },
    { image: JavaScript, name: 'JavaScript' },
    { image: Java, name: 'Java' },
    { image: Python, name: 'Python' },
    { image: Prisma, name: 'Prisma' },
    { image: AWS1, name: 'AWS1' },
    { image: Vercel, name: 'Vercel' },
    { image: Netlify, name: 'Netlify' },
    { image: Heroku, name: 'Heroku' },
    { image: Github, name: 'Github' },
    { image: Firebase, name: 'Firebase' },
  ];

  return (
    <section
      className={`flex flex-col gap-20 items-center p-28 
                ${theme === "dark" ? "bg-[#181D27]" : "bg-[#FAFAFA]"}`}
    >
      <div className="flex flex-col items-center gap-3 font-semibold">
        <h3 className="text-primary leading-6">
          WHAT WE USE TO BUILD YOUR PRODUCT
        </h3>
        <h1 className="text-4xl leading-11 text-text-primary tracking-[-0.02em]">
          Our Design & Development Tool Kit
        </h1>
      </div>

      <div className="grid grid-cols-6 gap-8">
        {items.map((item, index) => (
          <ToolCard key={index} image={item.image} alt={item.name} />
        ))}
      </div>
    </section>
  );
}

export default Tools;
