import { FC } from "react";
import { Button } from "@/components";

const navItems = [
  {
    href: "#",
    label: 'Product'
  },
  {
    href: "#",
    label: 'Customers'
  },
  {
    href: "#",
    label: 'Templates'
  },
  {
    href: "#",
    label: 'Pricing'
  }
]

const Footer: FC = () => {
  return (<footer className="bg-stone-900 text-white" id="contacts">
    <div className="container">
    footer
    </div>
  </footer>);
};

export default Footer;
