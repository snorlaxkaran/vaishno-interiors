import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/pexels-pixabay-271624.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
      className="relative"
    >
      <div className="bg-[#f3f0eb] text-[#362b24] py-5 px-10 w-full lg:max-w-[46rem] eb-garamond tracking-wide absolute lg:top-1/2 lg:-translate-y-1/2 lg:ml-20 flex flex-col gap-10">
        <p className="text-center uppercase font-[family-name:var(--font-geist-sans)] text-sm font-semibold">
          Interior Design Service
        </p>
        <h1 className="lg:text-7xl text-5xl">
          Stunning interior design services, now within reach.
        </h1>
        <Button className="start-0">hello</Button>
      </div>
    </div>
  );
};

export default Hero;
