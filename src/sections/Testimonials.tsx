import { FC } from "react";
import Image from "next/image";



const Testimonials: FC = () => {
  const testimonialIndex = 0
  return (
  <section className="section" id="testimonials">
    <div className="container">
      <div>
        <div>
          image
        </div>
        <div> Mr Misu </div>
        <div> CEO Compajny </div>
        <p>
          Everything we do centers on protecting  you
        </p>
      </div>
    </div>
  </section>);
};

export default Testimonials;
