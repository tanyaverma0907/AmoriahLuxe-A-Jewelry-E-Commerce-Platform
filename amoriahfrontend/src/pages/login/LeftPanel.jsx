import React from "react";

const LeftPanel = () => {
  return (
    <div className="hidden lg:flex w-1/2 relative">

      <img
        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
        alt="luxury jewelry"
        className="object-cover w-full h-full"
      />

      <div className="absolute bottom-16 left-12 text-white">

        <p className="uppercase text-sm tracking-widest mb-3 opacity-80">
          A Wise Quote
        </p>

        <h1 className="text-5xl font-semibold leading-tight">
          Get Everything <br/> You Want
        </h1>

        <p className="text-sm mt-4 max-w-sm opacity-80">
          Discover elegant jewelry crafted to elevate your style and confidence.
        </p>

      </div>

    </div>
  );
};

export default LeftPanel;