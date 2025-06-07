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
      <div>
        <p>
        Oxygen for life provides the best oxygen support
        </p>
      </div>

      <ul>
        <p> Link to article about oxygem</p>
        <p> Link to arricke about oxygen </p>
      </ul>
      
      <div> 
        <h2> Quick Contact </h2>
        <div>
          info@oxygenforlife.com
        </div>
        <div>
          +3424-42524-42
        </div>
      </div>

    </div>
  </footer>);
};

export default Footer;
