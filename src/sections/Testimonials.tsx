import { FC } from "react";
import Image from "next/image";
import { valueImage, impactImage } from "@/assets/images";
const Testimonials: FC = () => {
  return (
  <section className="section container max-w-[90%] space-y-12" id="testimonials">
    <div className="md:flex space-y-6">
      <div className="container space-y-4">
        <h2 className="text-center text-primary uppercase font-maximaNouvaBold text-2xl">
            Our Values
          </h2> 
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <h3 className="text-lg md:text-xl font-maximaNouvaBold font-bold">
              1. Compassion
            </h3>
            <p>
              We are driven by empathy and a deep commitment to improving the lives of others.
            </p>
            </div>
              <div>
              <h3 className="text-lg md:text-xl font-maximaNouvaBold font-bold">
              2. Equity
            </h3>
            <p>
            We believe in equal access to healthcare resources for all, regardless of socioeconomic status.
            </p>
            </div>
              <div>
              <h3 className="text-lg md:text-xl font-maximaNouvaBold font-bold">
              3. Innovation
            </h3>
            <p>
          We embrace creative solutions to address the challenges of medical oxygen access.
            </p>
            </div>
            
              <div>
              <h3 className="text-lg md:text-xl font-maximaNouvaBold font-bold">
              4. Collaboration
            </h3>
            <p>
        We work hand-in-hand with governments, healthcare providers, communities, and international partners to achieve our goals.
            </p>
            </div>
            
          </div>
      </div>
      <Image
        src={valueImage}
        alt="value"
      />
    </div>
    <div className="md:flex  space-y-12 md:flex-row-reverse">
    <div className="container space-y-6">
      <h2 className="text-center text-primary uppercase font-maximaNouvaBold text-2xl">
          Our Impact
        </h2> 
        <div className="grid md:grid-cols-2 gap-2">
          <div>
            <h3 className="text-lg md:text-xl font-maximaNouvaBold font-bold">
            1. Compassion
          </h3>
          <p>
            We are driven by empathy and a deep commitment to improving the lives of others.
          </p>
          </div>
            <div>
            <h3 className="text-lg md:text-xl font-maximaNouvaBold font-bold">
            2. Equity
          </h3>
          <p>
          We believe in equal access to healthcare resources for all, regardless of socioeconomic status.
          </p>
          </div>
            <div>
            <h3 className="text-lg md:text-xl font-maximaNouvaBold font-bold">
            3. Innovation
          </h3>
          <p>
        We embrace creative solutions to address the challenges of medical oxygen access.
          </p>
          </div>
          
            <div>
            <h3 className="text-lg md:text-xl font-maximaNouvaBold font-bold">
            4. Collaboration
          </h3>
          <p>
      We work hand-in-hand with governments, healthcare providers, communities, and international partners to achieve our goals.
          </p>
          </div>
          
        </div>
    </div>
    <Image
      src={impactImage}
      alt="impact"
    />
  </div>
  </section>);
};

export default Testimonials;
