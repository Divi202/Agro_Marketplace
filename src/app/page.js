import About from "@/Components/About";
import AfterCarousel from "@/Components/AfterCarousel";
import Carousel from "src/Components/Carousel.js";
export default function Home() {
  return (
    <div>
      <Carousel></Carousel>
      <AfterCarousel></AfterCarousel>
      <About></About>
    </div>
  );
}
