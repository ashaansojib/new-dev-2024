import React from "react";
import { FaFigma } from "react-icons/fa6";

const Skills = () => {
  return (
    <section className="my-16">
      <div className="max-w-screen-md text-center mx-auto">
        <h2 className="text-5xl font-semibold">MY Skills</h2>
        <p className="text-accent py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          adipisci facilis cupiditate in dolore asperiores reprehenderit ut
          earum possimus. Odio eius id eaque ut, doloribus vero sint ducimus ex
          fuga!
        </p>
      </div>
      <div className="grid grid-cols-6 gap-4 justify-between">
        <div className="text-center">
          <div className="skill-item">
            <img src="/figma.svg" className="w-[50px] pt-6" alt="" />
            <p className="text-accent pb-6">65%</p>
          </div>
          <p className="text-xl pt-3">Figma</p>
        </div>
        <div className="text-center">
          <div className="skill-item">
            <img src="/js.svg" className="w-[50px] pt-6" alt="" />
            <p className="text-accent pb-6">65%</p>
          </div>
          <p className="text-xl pt-3">Figma</p>
        </div>
        <div className="text-center">
          <div className="skill-item">
            <img src="/react.svg" className="w-[50px] pt-6" alt="" />
            <p className="text-accent pb-6">65%</p>
          </div>
          <p className="text-xl pt-3">Figma</p>
        </div>
        <div className="text-center">
          <div className="skill-item">
            <img src="/sketch.svg" className="w-[50px] pt-6" alt="" />
            <p className="text-accent pb-6">65%</p>
          </div>
          <p className="text-xl pt-3">Figma</p>
        </div>
        <div className="text-center">
          <div className="skill-item">
            <img src="/wp.svg" className="w-[50px] pt-6" alt="" />
            <p className="text-accent pb-6">65%</p>
          </div>
          <p className="text-xl pt-3">Figma</p>
        </div>
        <div className="text-center">
          <div className="skill-item">
            <img src="/xd.svg" className="w-[50px] pt-6" alt="" />
            <p className="text-accent pb-6">65%</p>
          </div>
          <p className="text-xl pt-3">Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
