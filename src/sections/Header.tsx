"use client"
import { FC } from "react";
import Image from "next/image";
import { jitterLogo, menuBar, menuClose } from "@/assets/icons"
import { Button } from "@/components";

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

const Header: FC = () => {
  return (
    <header>
      <div className="container md:max-w-[25rem] lg:max-w-[80%]">
        <div className="py-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image src={jitterLogo} alt="jitter logo" width={68} height={24} />
                <ul className="hidden lg:flex items-center">
                  {navItems.map(({label, href}) => (
                    <li key={label}> <a href=""> {label}</a></li>
                  ))}
                </ul>
            </div>
                 
            <div className="relative grid items-center">
            <a href="/login" className="font-semibold pr-16 inline-block">
              Log in
            </a>
            <div className="fixed justify-self-end flex items-center justify-center text-black bg-gray w-[52px] aspect-square rounded-full">
              <svg className="fill-black" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0.5 10H15.5V8.33333H0.5V10ZM0.5 5.83333H15.5V4.16667H0.5V5.83333ZM0.5 0V1.66667H15.5V0H0.5Z"></path></svg>
          </div>
            </div>
          </div>

          
        </div>
       
        
      </div>

  

    </header>
);
};

export default Header;
