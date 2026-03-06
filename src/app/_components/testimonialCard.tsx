import { StaticImageData } from "next/image";
import Image from "next/image";

type TestimonialCardProps = {
  text: string;
  profile: StaticImageData;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, profile }) => {

  return (
    <div className="flex flex-col gap-8 p-8 w-full bg-background-muted rounded-lg text-text-primary">
      <svg
        width="48" height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M41.68 26.64L36.54 36.9C36.2 37.58 35.5 38 34.76 38H29.62C28.88 38 28.4 37.22 28.72 36.56L34 26H29C27.34 26 26 24.66 26 23V13C26 11.34 27.34 10 29 10H39C40.66 10 42 11.34 42 13V25.3C42 25.76 41.9 26.22 41.68 26.64ZM22 25.3V13C22 11.34 20.66 10 19 10H9C7.34 10 6 11.34 6 13V23C6 24.66 7.34 26 9 26H14L8.72 36.56C8.38 37.22 8.88 38 9.62 38H14.76C15.52 38 16.22 37.58 16.54 36.9L21.68 26.64C21.88 26.22 22 25.76 22 25.3Z"
          fill="currentColor"
        />
      </svg>
      
      <p className="font-normal text-xl leading-7.5">
        {text}
      </p>

      <div className="flex gap-3">
        <Image
          className="w-10 h-10 rounded-full overflow-hidden"
          src={profile}
          alt=""
          width={40}
          height={40}
        />

        <div className="flex flex-col text-sm leading-5">
          <h3 className="font-semibold text-text-primary">Cooper Kristin</h3>
          <h3 className="text-text-disabled">Product Analyst</h3>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;