import React from "react";
import HeroSection1 from "../components/hero/HeroSection1";
import AboutSection from "../components/about/AboutSection";
import DesignSection from "../components/designcollection/DesignSection";
import SustainabilitySection from "../components/sustainability/SustainabilitySection";
import EffortlessSection from "../components/effortlesssection/EffortlessSection";
import CollectionSection from "../components/collection/CollectionSection";
import BestSellingSection from "../components/bestselling/BestSellingSection";

import LuxuryCtaSection from "../components/LuxuryCtaSection";

const HomePage = () => {
  return (
    <div className="bg-[#f8f5f1] text-gray-800 overflow-x-hidden">

      {/* HERO */}
      <div className="relative">
        <HeroSection1 />
      </div>

      {/* DIVIDER */}
      <div className="h-20 bg-gradient-to-b from-transparent to-[#f8f5f1]" />

      {/* ABOUT */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff40] to-transparent pointer-events-none" />
        <AboutSection />
      </section>



      {/* DESIGN */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,139,43,0.08),transparent_60%)]" />
        <DesignSection />
      </section>

      {/* SUSTAINABILITY */}
      <section className="relative">
        <SustainabilitySection />
      </section>

      {/* EFFORTLESS */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5f1] via-[#f3ede6] to-[#f8f5f1]" />
        <EffortlessSection />
      </section>

      {/* COLLECTION */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_70%)]" />
        <CollectionSection />
      </section>

      {/* BEST SELLING */}
      <section className="relative">
        <BestSellingSection />
      </section>

      <section>
        <LuxuryCtaSection />
      </section>

      {/* FOOTER */}
     

    </div>
  );
};

export default HomePage;