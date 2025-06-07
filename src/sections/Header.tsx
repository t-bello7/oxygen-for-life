"use client"
import { FC, useState } from "react";
import Image from "next/image";
import { oflLogo, menuBar, menuClose } from "@/assets/icons"
import { Button } from "@/components";
import { AnimatePresence, motion } from "motion/react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "Products",
    href: "#intro",
  },
  {
    label: "Customers",
    href: "#projects",
  },
  {
    label: "Templates",
    href: "#testimonials",
  },
  {
    label: "Pricing",
    href: "#contact",
  },
];

const variant = {
  hidden: {opacity: 0, scale: 0.5},
  visible: { opacity: 0, scale: 1}
}

const Header: FC = () => {
  const [openMobileMenu, setOpenMobileMenu ]= useState('false')
  return (
    <header>
      <div className="container md:max-w-[25rem] lg:max-w-[80%]">
        <div className="py-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-[4rem]">
                  <Image className="object-fill" src={oflLogo} alt="jitter logo"  />
                </div>
                
                <ul className="hidden lg:flex items-center">
                  {navItems.map(({label, href}) => (
                    <li key={label}> <a href=""> {label}</a></li>
                  ))}
                </ul>
            </div>
                 
            <div className="relative grid items-center">
              <a href="/login" className="font-semibold pr-16 inline-block font-maximaNouva z-10">
                  Donate
              </a>
              <div className="fixed justify-self-end flex items-center justify-center text-black bg-gray-800  w-[52px] fill-black z-20 "
              onClick={() => !setOpenMobileMenu}
              >
                <AnimatePresence
                >
                {
                  openMobileMenu ? (
                    
                    <motion.svg className="fill-black" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clip-path="url(#clip0_794_3025)"><path d="M15.8334 5.34175L14.6584 4.16675L10.0001 8.82508L5.34175 4.16675L4.16675 5.34175L8.82508 10.0001L4.16675 14.6584L5.34175 15.8334L10.0001 11.1751L14.6584 15.8334L15.8334 14.6584L11.1751 10.0001L15.8334 5.34175Z"></path></g><defs><clipPath id="clip0_794_3025"><rect width="20" height="20" fill="white"></rect></clipPath></defs>
                    </motion.svg>
                  ) : (
                      <motion.svg className="fill-black" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0.5 10H15.5V8.33333H0.5V10ZM0.5 5.83333H15.5V4.16667H0.5V5.83333ZM0.5 0V1.66667H15.5V0H0.5Z"></path></motion.svg>
                  )
                }
    

                </AnimatePresence>
              </div>
            </div>
          </div>

          
        </div>
       
        
      </div>

  

    </header>
);
};

export default Header;
