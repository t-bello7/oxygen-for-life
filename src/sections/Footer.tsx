import { Button } from "@/components";
import { FC } from "react";
import Image from "next/image";
import { oflLogo } from "@/assets/icons";

const Footer: FC = () => {
  return (<footer className="grid items-end h-[63vh] text-white" id="contacts">
    <div className="bg-[#1B1B1B] relative h-[50vh]">
    <div className="bg-primary h-[40vh] container max-w-[90%] left-[50%] translate-x-[-50%] -top-[20vh] absolute p-4 space-y-2">
      <h3 className="font-maximaNouvaBold text-3xl">
        We cannot do this alone, Join us Today.
      </h3>
      <p>
        Whether you are an individual, organization, or government entity, your support can help us save lives and transform healthcare in Ghana.
        Together, we can ensure that no one is left behind in the fight for breath and life.
      </p>
      <Button variant="secondary">
        Join Us
      </Button>
    </div>

    <div>
      <div>

   
      <span>
        We are a dedicated non-governmental organization committed to saving lives.
      </span>
      <Image 
        src={oflLogo}
        alt="oxygen logo"
      />
      </div>
      <div>
        <span>
          improving health outcomes by ensuring access to medical oxygen for those who need it most. we operate in Ghana, West Africa, where the availability of medical oxygen remains a critical challenge.
        </span>
        <ul>
          
        </ul>
      </div>
    </div>
    </div>


  </footer>);
};

export default Footer;
