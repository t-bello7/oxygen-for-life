"use client";
import { FC } from "react";

const Intro: FC = () => {
  return (
    <section 
    className="container mx-auto space-y-2" id="intro">
      <div>
        <h2 className="text-center text-3xl">
        About OxygenForLife
        </h2>
        <p className="font-bold">
        At OxygenForLife Ghana, we are a dedicated non-governmental organization committed to saving lives and improving health outcomes by ensuring access to medical oxygen for those who need it most. We operate in Ghana, West Africa, where the availability of medical oxygen remains a critical challenge, especially in underserved communities and remote areas
        </p>
        <p className="font-extralight">
          We are non-profit/fundraising/NGO organizations. Our mission is simple yet profound: No one should suffer or lose their life due to a lack of medical oxygen. We believe that access to this life-saving resource is a fundamental human right, and we are driven by the urgency to bridge the gap in healthcare infrastructure.
          Our Vision
        </p>
      </div>
      <div>
      Founded in 2025, we operate in Ghana, West Africa, where the availability of medical oxygen remains a critical challenge, especially in underserved communities and remote areas.
      </div>
    </section>
  );
};

export default Intro;
