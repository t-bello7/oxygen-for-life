"use client"
import Image from "next/image";
import { FC } from "react";
import { motion } from "motion/react";
import { Button } from "@/components";
import {
  ghanaLogo,
  whoLogo
} from "@/assets/images"

const logos = [ghanaLogo, whoLogo]; 

const Hero: FC = () => {
  return(
  <section>
    <div className="grid sticky top-0 md:grid-cols-12 md:h-screen items-center md:items-stretch space-y-8 max-w-[80%] container"
    >
      <motion.span 
      className="font-maximaNouvaSemiBold text-xs w-fit py-2 px-1 text-center bg-gray-3"
      initial={{
        opacity: 0,
        scale: 0.4
      }}
      animate={{
        opacity: 1,
        scale: 1,
        // cubic-bezier(.25,.46,.45,.94)
        transition: { type: "spring", duration: 0.3, bounce: 0.2 },
      }}
      >
        <span className="font-maximaNouvaBold"> Expanding Oxygen Access, </span>
        <span className="text-primary">
          Saving Young Lives
        </span>
      </motion.span>
      <h2 className=" text-center font-extrabold text-4xl">
        Supplying Oxygen <br>
        </br> to Communities in Ghana
      </h2>
      <Button variant="primary">
        Quick Donate
      </Button>
      <span className="text-xs text-center">
      Over 70% of patients in Ghana lack access to the medical oxygen they need in critical moments.
      </span>
      <motion.ul
        className="flex items-center overflow-hidden"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 5, // duration should be a number, not a string
          ease: [0.25, 0.46, 0.45, 0.94], // ease should be a numeric array, not a string
        }}
      >
        {logos.map((logo, index) => (
          <li key={index} className="flex-shrink-0 w-32 h-20 relative list-none">
            <Image src={logo} alt={`logo-${index}`} fill className="object-contain" />
          </li>
        ))}
      </motion.ul>
    </div> 
  </section>
)};

export default Hero;
