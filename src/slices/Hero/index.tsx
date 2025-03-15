'use client'
import { FC } from "react";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {gsap} from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "@/components/Bounded";
import Shapes from "./Shapes";

 /* Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  const component= useRef(null)

  useEffect(() => {
    let ctx = gsap.context(()=>{
    const tl = gsap.timeline()

    tl.fromTo(".name-animation",{
      x: -100, opacity:0 ,rotate: -10,
    },
    {
      x:0,
      opacity:100,
      rotate:0,
      ease:"elastic.out(1, 0.5)",
      duration:0.75,
      transformOrigin:"left top",
      stagger:
      {
        each:0.06
      }
    }
    )

    },component)
    return () => ctx.revert();
  }
  ,[])

  // Helper function to render letters with animations
  const renderLetters = (name: string, key: string) => {
    if (!name) return null;

    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  // Extract values from slice.primary
  const firstName = slice.primary.first_name?.[0]?.text || "No first name";
  const lastName = slice.primary.last_name?.[0]?.text || "No last name";
  const tagLine = slice.primary.tag_line?.[0]?.text || "";

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <Shapes></Shapes>
        <div className="col-start-1 md:row-start-1">
        <h1
  className="mb-8 font-extrabold leading-none"
  aria-label={`${firstName} ${lastName}`}
>
  <span className="text-pink-100 text-[clamp(2rem,14vmin,14rem)] tracking-tighter">
    {renderLetters(firstName, "first")}
  </span>
  <span className="-mt-[.2em] block text-pink-300 text-[clamp(2rem,10vmin,10rem)] max-w-full overflow-visible tracking-tight">
    {renderLetters(lastName,"last")}
  </span>
</h1>
   <span className="block bg-gradient-to-tr from-pink-600 via-pink-300 to-pink-600 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-100 md:text-4xl">
            {tagLine}
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
