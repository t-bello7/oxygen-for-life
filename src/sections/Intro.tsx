"use client";
import { FC } from "react";
import Image from "next/image";
import {
  coins,
  buildingThree,
  alarmClock,
  ambulance,
  medicalMask,
  health
} from "@/assets/icons"

const aboutItems = [
  {
    icon: medicalMask,
    title: 'Supply Medical Oxygen:',
    description: 'We partner with hospitals, clinics, and healthcare providers to deliver medical oxygen to facilities in need, especially in rural and underserved areas.'
  },
  {
    icon: coins,
    title: 'Subsidize Costs',
    description: 'We work to reduce the financial burden of medical oxygen for patients and healthcare facilities through subsidies and innovative financing models.'
  },
  {
    icon: buildingThree,
    title: 'Capacity Building',
    description: 'We train healthcare workers on the safe and effective use of medical oxygen equipment and provide technical support to healthcare facilities.'
  },
  {
    icon: alarmClock,
    title: 'Advocacy and Awareness',
    description: 'We advocate for policy changes and increased investment in medical oxygen infrastructure while raising awareness about its importance in saving lives.'
  },
  {
    icon: ambulance,
    title: 'Emergency Response',
    description: 'In times of crisis, such as disease outbreaks or natural disasters, we mobilize resources to provide emergency oxygen supplies to affected areas.'
  },
  {
    icon: health,
    title: 'Supply Medical Oxygen:',
    description: 'We partner with hospitals, clinics, and healthcare providers to deliver medical oxygen to facilities in need, especially in rural and underserved areas.'
  },
]

const Intro: FC = () => {
  return (
    <section className="container mx-auto space-y-6 bg-[FAFFF4]" id="intro">
        <h2 className="text-center text-primary uppercase font-maximaNouvaBold text-2xl">
          what we do?
        </h2> 
        <h3 className="text-2xl md:text-4xl font-maximaNouvaBold font-bold">
           We Offer help to the society
        </h3>
        <p>
          No one should suffer or lose their life due to a lack of medical oxygen. We believe that access to this life-saving resource is a fundamental human right, e.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 container max-w-[85%]">
          {
            aboutItems.map(item => (
              <div key={item.title} className="p-4 space-y-2 border border-primary rounded-2xl">
                <Image className="w-6 md:w-9 aspect-square" src={item.icon} alt={item.title} />
                <h4 className="font-bold text-sm md:text-base text-primary"> {item.title} </h4>
                <p className="text-xs md:text-sm ">
                  { item.description}
                </p>
              </div>
            ))
          }
        </div>      
    </section>
  );
};

export default Intro;
