import About from "@/Components/About";
import HeroSection from "@/Components/HeroSection";
import OurTeams from "@/Components/OurTeams";

export default function page() {
  return (
    <>
      <HeroSection title="About Us"></HeroSection>
      <About></About>
      <OurTeams></OurTeams>
    </>
  );
}
