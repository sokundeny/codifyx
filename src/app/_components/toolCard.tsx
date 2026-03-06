import Image, { StaticImageData } from "next/image";

type ToolCardProps = {
  image: StaticImageData;
  alt: string;
};

const ToolCard: React.FC<ToolCardProps> = ({ image, alt }) => {
  return (
    <div className="p-6 w-fit h-fit bg-background-subtle rounded-lg">
      <Image
        src={image}
        width={48}
        height={48}
        alt={alt}
      />
    </div>
  );
};

export default ToolCard;
