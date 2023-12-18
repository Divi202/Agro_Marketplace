import React from "react";
import HeroSection from "@/Components/HeroSection";
import Testimonials from "@/Components/Testimonials";
import HomeService from "@/Components/HomeService";

function page() {
  return (
    <>
      <HeroSection title="Our Services"></HeroSection>
      <HomeService></HomeService>
      <Testimonials></Testimonials>
    </>
  );
}

export default page;
