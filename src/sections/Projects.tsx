import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components";



const Projects: FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container ">
        <h2 className="text-center text-3xl">
          Latest Causes  
        </h2> 
        <span> Oxygen for life provides oxygen for hospitals and patients in need. </span>
        <div>
          <div>
            <span> $0 Raised / $1000 Goal </span>
            <p> General Hospital </p>
            <Button variant="primary" >
              Donate  
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;
