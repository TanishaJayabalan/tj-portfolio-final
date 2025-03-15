"use client"
import React, { FC, useEffect, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { BsDiamondFill } from "react-icons/bs";
import Bounded from "@/components/Bounded";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList: FC<TechListProps> = ({ slice }) => {

  const component = useRef(null)
  useEffect(()=>{
    let ctx = gsap.context(()=>
    {
      const tl = gsap.timeline({
        scrollTrigger:
        {
          trigger: component.current,
          start: "top bottom%",    // Changed from "1%"
          end: "bottom top",   // Changed from "20%"
          scrub: 4,
        },
      });

      tl.fromTo(".tech-row", 
      {
          x: (index)=>{
            return index % 2 ===0 
            ? gsap.utils.random(550,450) 
            : gsap.utils.random(-550,-450);
          },
        },
        {
            x: (index)=>{
              return index % 2 ===0 
              ? gsap.utils.random(-600,-400) 
              : gsap.utils.random(600,400);
            },
          ease: "power1.inOut"
          },
        );

        

    },component)
  return()=>ctx.revert()
  },[]);


  return (
    <section
    ref={component}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded as="div">
      <Heading size="xl" className="mb-8" as="h2">
        {slice.primary.heading}
      </Heading></Bounded>
      {slice.primary.tech_name.map(({tech_name,tech_colour},index) => (
        <div key={index} className="tech-row mb-8 flex items-center gap-5 text-slate-700" aria-label={tech_name || undefined}>
          {Array.from({length: 30}, (_,index) => (
            <React.Fragment key={index}>
              <span className="tech-item text-7xl font-extrabold uppercase tracking-tighter gap-4" style={{
                color: (index === 2) && tech_colour ? tech_colour : "inhereit",
              }}>
                {tech_name}
                </span>
                <span className="text-3xl">
                <BsDiamondFill></BsDiamondFill>
                </span>
            </React.Fragment>
          ))}
        </div>
            ))}
    </section>
  );
};

export default TechList;
