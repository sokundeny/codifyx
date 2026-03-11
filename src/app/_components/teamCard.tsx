import Image, { StaticImageData } from "next/image";

type TeamCardProps = {
  image: StaticImageData;
  name: string;
  role: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
};

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  description,
  isSelected,
  onSelect,
}) => {
  return (
    <button
      onClick={onSelect}
      className={`
        group relative h-120 rounded-lg overflow-hidden
        transition-[flex-grow] duration-700 ease-in-out
        hover:cursor-pointer ${isSelected ? "flex-4" : "flex-1"}
      `}
    >
      <Image
        src={image}
        alt={name}
        fill
        className={`
          object-cover rounded-lg
          transition-transform duration-500 ease-in-out
          group-hover:scale-110
        `}
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#0043F1] to-[#0043F1]/30" />

      <div className="relative h-full w-full p-8 text-white">
        <div
          className={`
            absolute transition-all duration-700 ease-in-out
            ${
              isSelected
                ? "bottom-8 left-8 rotate-0"
                : "bottom-26 left-1/2 -translate-x-[calc(50%-5px)] -rotate-90"
            }
          `}
        >
          <div className={`flex flex-col gap-3 text-left`}>
            <div className="flex flex-col items-start w-52 text-left">
              <h1 className="font-semibold text-xl">{name}</h1>
              <p className="text-base text-[#FDFDFD]">{role}</p>
            </div>

            <div
              className={`
                transition-all ease-in-out
                ${
                  isSelected
                    ? "opacity-100 max-h-40 duration-1850"
                    : "opacity-0 max-h-0 overflow-hidden duration-300"
                }
              `}
            >
              <p className="text-base text-[#FDFDFD] max-w-md">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TeamCard;
