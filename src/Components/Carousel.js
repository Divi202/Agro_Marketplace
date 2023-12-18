"use client";
import Image from "next/image";
import { useEffect } from "react";
//  import slideshow photes
import Photo1 from "@/images/SS_photo1.jpg";
import Photo2 from "@/images/SS_photo2.jpg";
export default function Carousel() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              className="d-block w-100"
              src={Photo1}
              width={1600}
              height={500}
              alt="Carousel photo 1"
            />
          </div>
          <div className="carousel-item">
            {" "}
            <Image
              className="d-block w-100"
              src={Photo2}
              width={1600}
              height={500}
              alt="Carousel photo 2"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="d-block w-100"
              src={Photo1}
              width={1600}
              height={500}
              alt="Carousel photo 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
