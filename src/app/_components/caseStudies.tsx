import CaseStudy1 from "@/assets/caseStudies/case_study1.png";
import CaseStudy2 from "@/assets/caseStudies/case_study2.png";
import CaseStudy3 from "@/assets/caseStudies/case_study3.png";
import CaseStudy4 from "@/assets/caseStudies/case_study4.png";
import CaseStudyCard from "./caseStudyCard";

const CaseStudies: React.FC = () => {
  const items = [
    { image: CaseStudy1, name: "Moonups" },
    { image: CaseStudy2, name: "Moonups" },
    { image: CaseStudy3, name: "Moonups" },
    { image: CaseStudy4, name: "Moonups" },    
  ];

  const placeHolder = {
    title: "Moonups",
    description: "Lorem ipsum dolor sit amet consectetur. Magna nibh faucibus habitant vel porttitor enim. Nulla erat sagittis viverra nunc. Id ac commodo donec sed donec purus.",
    services: [
      "Web Development",
      "Design Services"
    ],
  };

  return (
    <section className="flex flex-col gap-20 items-center py-20 px-28 w-full">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 items-center font-semibold">
          <h3 className="text-primary leading-6">CASE STUDIES</h3>
          <h1 className="text-4xl leading-11 text-text-primary tracking-[-0.02em]">Our Latest Works</h1>
        </div>

        <p className="text-center w-161 text-xl leading-7.5 text-text-muted">
          Lorem ipsum dolor sit amet consectetur. Tristique viverra gravida egestas venenatis aliquet duis. Vitae eu ipsum augue curabitur.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full">
        {items.map((item, index) => (
          <CaseStudyCard
            key={index}
            title={placeHolder.title}
            description={placeHolder.description}
            services={placeHolder.services}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;