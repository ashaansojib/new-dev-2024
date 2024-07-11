import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap/all";
import React, { useEffect, useState } from "react";

// register the gasp scrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const [skills, setSkills] = useState([]);
  
  // fetch the skills data
  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <section className="my-16">
      <div className="max-w-screen-md text-center mx-auto">
          <h2 className="text-5xl font-semibold">MY Skills</h2>
          <p className="text-accent py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            adipisci facilis cupiditate in dolore asperiores reprehenderit ut
            earum possimus. Odio eius id eaque ut, doloribus vero sint ducimus
            ex fuga!
          </p>
        </div>

      <div className="skills-container">
        {skills?.map((skill) => (
          <div key={skill.name} className="skill-item">
            <img
              src={skill.img}
              className="w-[50px] pt-6 mx-auto"
              alt={skill.name}
            />
            <p className="text-accent pb-6">{skill.percent}</p>
            <p className="text-xl pt-3">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
