import {
    Languages,
    Frameworks,
    Tools,
    Technologies,
  } from "@/constants";

import React from 'react'
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20' id='skills' style={{transform: 'scale(0.9)'}} >
      <SkillText />

<div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
  {Languages.map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
    />
  ))}
</div>

<div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
  {Frameworks.map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
    />
  ))}
</div>
<div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
  {Technologies.map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
    />
  ))}
</div>
<div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
  {Tools.map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
    />
  ))}
</div>

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
  )
}

export default Skills
