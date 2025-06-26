"use client"
import { FC, useState } from "react";
import Image from "next/image";
import Link  from "next/link";
import { oflLogo } from "@/assets/icons"
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About us",
    href: "#intro",
  },
  {
    label: "Our Vision",
    href: "#projects",
  },
  {
    label: "Our Values",
    href: "#testimonials",
  },
  {
    label: "Join Us",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [openMobileMenu, setOpenMobileMenu ]= useState(false)
  console.log(openMobileMenu)
  return (
    <header>
      <div className="container max-w-[20rem] md:max-w-[80%] lg:max-w-[80%]">
        <div className="py-7"> 
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between gap-2 w-full">
                <div className="w-[4rem]">
                  <Image className="object-fill" src={oflLogo} alt="jitter logo"  />
                </div>
                
                <ul className="hidden md:flex items-center gap-4">
                  {navItems.map(({label}) => (
                    <Link href="" key={label}>{label}</Link>
                  ))}
                </ul>
            </div>
                 
            <div className="relative grid ems-center">
              {/* <Link href="/donate"> */}
                <Button variant="primary" className="mr-[10ch] hidden">
                    Donate
                </Button>
              {/* </Link> */}
              <button className="fixed justify-self-end flex items-center justify-center text-black bg-gray-800 fill-black z-20 md:hidden"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              >
                <AnimatePresence
                >
                {
                  openMobileMenu ? (          
                    <motion.svg className="fill-black" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clipPath="url(#clip0_794_3025)"><path d="M15.8334 5.34175L14.6584 4.16675L10.0001 8.82508L5.34175 4.16675L4.16675 5.34175L8.82508 10.0001L4.16675 14.6584L5.34175 15.8334L10.0001 11.1751L14.6584 15.8334L15.8334 14.6584L11.1751 10.0001L15.8334 5.34175Z"></path></g><defs><clipPath id="clip0_794_3025"><rect width="20" height="20" fill="white"></rect></clipPath></defs>
                    </motion.svg>
                  ) : (
                      <motion.svg className="fill-black" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0.5 10H15.5V8.33333H0.5V10ZM0.5 5.83333H15.5V4.16667H0.5V5.83333ZM0.5 0V1.66667H15.5V0H0.5Z"></path></motion.svg>
                  )
                }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
);
};

export default Header;
