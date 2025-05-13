import { Languages, Frameworks, Technologies, Tools } from "@/constants";
import React from "react";
import SkillText from "../sub/SkillText";


const SkillCategory = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; icon: any; color: string }[];
}) => (
  <div className="flex flex-col items-center w-full mb-6">
    <h3 className="text-xl font-semibold text-gray-300 mb-3">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {items.map(({ name, icon: Icon, color }, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
        >
          <Icon size={50} color={color} />
          <span className="text-sm text-gray-200">{name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      id="skills"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <SkillCategory title="Languages" items={Languages} />
      <SkillCategory title="Frameworks" items={Frameworks} />
      <SkillCategory title="Technologies" items={Technologies} />
      <SkillCategory title="Tools" items={Tools} />

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
