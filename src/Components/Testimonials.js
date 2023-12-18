"use client";
import Image from "next/image";
import { useEffect } from "react";
import Testimonial1 from "@/images/testimonial-2.jpg";

export default function Testimonials() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      {/* Testimonial Start */}
      <div className="container-fluid bg-testimonial py-5 my-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="owl-carousel testimonial-carousel p-5">
                <div className="testimonial-item text-center text-white">
                  <Image
                    className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                    src={Testimonial1}
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita justo dolor et stet lorem kasd dolore
                    lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                    erat. Erat dolor rebum sit ipsum.
                  </p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">Client Name</h4>
                </div>
                {/* <div className="testimonial-item text-center text-white">
                  <Image
                    className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                    src={Testimonial1}
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita justo dolor et stet lorem kasd dolore
                    lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                    erat. Erat dolor rebum sit ipsum.
                  </p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">Client Name</h4>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}
