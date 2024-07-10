import React from "react";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="p-3 overflow-hidden">
        <img className="rounded-xl" src="/pp.png" alt="" />
      </div>
      <div className="col-span-2 lg:space-y-4">
        <h2 className="text-5xl font-bold italic">
          Hi, I'm A Web Dveloper In Bangladesh!
        </h2>
        <p>
          Hi, I'm AshaAn Sojib an Energetic web developer expert in MERN Stack
          and MEAN Stack. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis nam unde laboriosam enim assumenda explicabo
          quibusdam nulla dicta eos, itaque, suscipit quas velit quaerat eaque
          quis magni a? Quae, eligendi.
        </p>
        <h3 className="text-xl italic">Marketer, Freelancer, Workers etc.</h3>
        <div>
            <button className="my-btn">Get Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
