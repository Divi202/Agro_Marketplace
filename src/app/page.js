import AfterCarousel from "@/Components/AfterCarousel";
import Carousel from "@/Components/Carousel.js";
import About from "@/Components/About";
import HomeService from "@/Components/HomeService";
import Features from "@/Components/Features";
import HomeProducts from "@/Components/HomeProducts";
import Testimonials from "@/Components/Testimonials";
import OurTeams from "@/Components/OurTeams";

export default function Home() {
  return (
    <div>
      <Carousel></Carousel>
      <AfterCarousel></AfterCarousel>
      <About></About>
      <HomeService></HomeService>
      <Features></Features>
      <HomeProducts></HomeProducts>
      <Testimonials></Testimonials>
      <OurTeams></OurTeams>
    </div>
  );
}
