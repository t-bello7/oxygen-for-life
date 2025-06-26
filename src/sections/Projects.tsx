import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components";
import { projectImg } from "@/assets/images";

const Projects: FC = () => {
  return (
    <section className="section space-y-8" id="projects">
      <div className="container max-w-[90%]">
        <Image 
         src={projectImg}
         alt="prohject image"
         className="-ml-[5%]"
         />
      </div>
      <div className="container space-y-6">
        <h2 className="text-center text-primary uppercase font-maximaNouvaBold text-2xl">
          Our mission & Vision
        </h2> 
        <div className="space-y-3">
          <h3 className="text-2xl md:text-4xl font-maximaNouvaBold font-bold">
            Our mission is simple yet profound.
          </h3>
          <p>
            No one should suffer or lose their life due to a lack of medical oxygen. We believe that access to this life-saving resource is a fundamental human right, and we are driven by the urgency to bridge the gap in healthcare infrastructure.
          </p>
        </div>
        <div className="pt-4 space-y-3">
          <h3 className="text-2xl md:text-4xl font-maximaNouvaBold font-bold">
            Our Vision
          </h3>
          <p>
            A Ghana where every individual, regardless of their location or economic status, has access to affordable and reliable medical oxygen, ensuring better health outcomes and a brighter future for all.
          </p>
        </div>
        <Button variant="secondary">
          Learn More
        </Button>
      </div>
   
      
    </section>
  )
};

export default Projects;
