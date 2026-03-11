import { StaticImageData } from "next/image";
import Image from "next/image";
import ServiceTag from "./serviceTag";

type CaseStudyCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  services: string[];
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, image, services }) => {

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="relative group overflow-hidden">
        <Image src={image} alt={title} className="object-cover w-full" />

        <div className="absolute inset-0 bg-[#0A0A0AA3] opacity-0 
                        group-hover:opacity-100 transition-opacity
                        duration-300"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100">
          <button className="flex items-center justify-center w-12 h-12 rounded-xl 
                            bg-black/4 backdrop-blur-xs outline outline-black/20
                              hover:cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4582 4.16699V12.5003C16.4582 12.8453 16.1782 13.1253 15.8332 13.1253C15.4882 13.1253 15.2082 12.8453 15.2082 12.5003V5.67619L5.44151 15.4428C5.31984 15.5645 5.15982 15.6261 4.99982 15.6261C4.83982 15.6261 4.67979 15.5653 4.55813 15.4428C4.31396 15.1987 4.31396 14.8028 4.55813 14.5586L14.3248 4.79199H7.49982C7.15482 4.79199 6.87482 4.51199 6.87482 4.16699C6.87482 3.82199 7.15482 3.54199 7.49982 3.54199H15.8332C15.9148 3.54199 15.9957 3.55875 16.0724 3.59041C16.2249 3.65375 16.3466 3.77542 16.4107 3.92875C16.4416 4.00458 16.4582 4.08533 16.4582 4.16699Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-xl leading-7.5 text-text-primary">
          {title}
        </h3>
        <p className="w-[85%] text-text-muted">{description}</p>
      </div>

      <div className="flex gap-2">
        {services.map((service, index) => (
          <ServiceTag key={index} text={service} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard