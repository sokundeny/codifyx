'use client'
import TeamCard from "./teamCard";

import BrianRou from "@/assets/team/brian_rou.jpg";
import MuyMethy from "@/assets/team/muy_methy.jpg";
import PrakPychey from "@/assets/team/prak_pychey.jpg";
import SokunDeny from "@/assets/team/sokun_deny.jpg";
import VongRithea from "@/assets/team/vong_rithea.jpg";
import SokBunleap from "@/assets/team/sok_bunleap.jpg";
import KruySeyha from "@/assets/team/kruy_seyha.jpg";
import { useState } from "react";

const Team: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const members = [
    { id: 1, image: BrianRou, name: "Brian Rou", role: "Design Lead (UX/UI)", description: "Leads user experience and interface design, ensuring clarity, usability, and alignment with brand and product vision."},
    { id: 2, image: MuyMethy, name: "Muy Methy", role: "System & API Engineer", description: "Builds and maintains scalable system architecture and APIs for the products."},
    { id: 3, image: PrakPychey, name: "Prak Pychey", role: "Full-Stack Engineer", description: "Leads user experience and interface design, ensuring clarity, usability, and alignment with brand and product vision."},
    { id: 4, image: SokunDeny, name: "Sokun Deny", role: "Mobile App Engineer", description: "Leads user experience and interface design, ensuring clarity, usability, and alignment with brand and product vision."},
    { id: 5, image: VongRithea, name: "Vong Rithea", role: "Backend Engineer", description: "Leads user experience and interface design, ensuring clarity, usability, and alignment with brand and product vision."},
    { id: 6, image: SokBunleap, name: "Sok Bunleap", role: "Frontend Engineer", description: "Leads user experience and interface design, ensuring clarity, usability, and alignment with brand and product vision."},
    { id: 7, image: KruySeyha, name: "Kruy Seyha", role: "Marketing Lead", description: "Leads user experience and interface design, ensuring clarity, usability, and alignment with brand and product vision."},
  ];

  return (
    <section className="flex flex-col gap-20 items-center py-20 px-28 w-full">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 items-center font-semibold">
          <h3 className="text-primary leading-6">CREEATIVE TEAM</h3>
          <h1 className="text-4xl leading-11 text-text-primary tracking-[-0.02em]">Meet Our Co-founders</h1>
        </div>

        <p className="text-center w-161 text-xl leading-7.5 text-text-muted">
          Lorem ipsum dolor sit amet consectetur. Tristique viverra gravida egestas venenatis aliquet duis. Vitae eu ipsum augue curabitur.
        </p>
      </div>

      <div className="flex gap-2 w-full">
        {members.map((member) => (
          <TeamCard
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            description={member.description}
            isSelected={selectedId === member.id}
            onSelect={() => setSelectedId(member.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Team;