"use client"
import Image from "next/image";
import { FC } from "react";
import { motion } from "motion/react";
import { Button } from "@/components";
import {
  giveBlood,
  favorite,
  buildingSix,
  giveBloodOne
} from "@/assets/icons";
import {
  BannerImg
} from "@/assets/images"

const info = [
  {
    id: "fwrfr",
    title: "Life Saving Imapct",
    icon: favorite,
    text: "5000+ lives impacted through oxygen programs"
  },
  {
    id: "fwrffw",
    title: "Healthcare Access",
    icon: buildingSix,
    text: "Prioritizing rural and underserved communities"
  },
  {
    id: "gergte",
    title: "Community Focus",
    icon: giveBloodOne,
    text: "Prioitizing rural and underserved communities"
  }
]

const Hero: FC = () => {
  return(
  <section className="grid md:grid-cols-2 lg:h-screen lg:gap-0">
    <div className="space-y-24 ">
      <div className="grid top-0 justify-items-center space-y-8 max-w-[88%] container">
        <motion.span 
        className="block font-maximaNouvaSemiBold text-xs w-fit py-2 px-1 text-center bg-blue-1"
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
          <span className="text-blue">
            Saving Lives in Ghana
          </span>
        </motion.span>
        <h2 className=" text-center font-extrabold text-4xl">
          Ensuring Access to <br>
          </br><span className="text-primary"> Medical Oxygen </span> in Ghana
        </h2>
      
        <span className="text-xs text-center">
        Over 70% of patients in Ghana lack access to the medical oxygen they need in critical moments.
        Join us in our mission to improve health outcomes across 
        Ghana.
        </span>
        <Button variant="primary" iconBefore={<Image alt="give-Blood" src={giveBlood}/>}>
          Quick Donate
        </Button>
        {/* <motion.ul
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
        </motion.ul> */}
      </div>

      <div 
      //  animate={{ x: ['0%', '-100%'] }}
        // transition={{
        //   repeat: Infinity,
        //   duration: 5, // duration should be a number, not a string
        //   ease: [0.25, 0.46, 0.45, 0.94], // ease should be a numeric array, not a string
        // }}
      className="container max-w-[80%] flex flex-col gap-4 md:hidden lg:flex lg:flex-row lg:max-w-full lg:gap-5">
          {
            info.map(({icon, text, id, title}) => (
              <div key={id} className="rounded-xl bg-white w-[30ch] h-[25vh] py-5 px-4 grid items-start shadow-2xl">
                <Image src={icon} alt={title} />
                <div> 
                  <span className=""> {title} </span>
                  <p>
                    {text}
                  </p>
                </div>
              </div>
            ))
          }
      </div>
    </div>
    
    <Image 
      src={BannerImg}
      alt="banner imagr"
      className="hidden md:block"
    />

  </section>
)};

export default Hero;
