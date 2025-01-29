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
      <div className="bg-white p-10 max-w-xl mx-24 top-1/2 absolute hidden md:block ">
        <h1>Stunning interior design services, now within reach.</h1>
      </div>
    </div>
  );
};

export default Hero;
