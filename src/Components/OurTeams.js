import Image from "next/image";
import Team1 from "@/images/team-1.jpg";
import Team2 from "@/images/team-2.jpg";
import Team3 from "@/images/team-3.jpg";

export default function OurTeams() {
  return (
    <>
      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
            <h6 className="text-primary text-uppercase">The Team</h6>
            <h1 className="display-5">We Are Professional Organic Farmers</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="row g-0">
                <div className="col-12">
                  <div className="position-relative">
                    <Image
                      className="img-fluid w-100"
                      src={Team1}
                      alt="Team1"
                    />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                      style={{ background: "rgba(52, 173, 84, .85)" }}
                    >
                      <h4 className="text-white">Farmer Name</h4>
                      <span className="text-white">Designation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row g-0">
                <div className="col-12">
                  <div className="position-relative">
                    <Image
                      className="img-fluid w-100"
                      src={Team2}
                      alt="Team2"
                    />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                      style={{ background: "rgba(52, 173, 84, .85)" }}
                    >
                      <h4 className="text-white">Farmer Name</h4>
                      <span className="text-white">Designation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row g-0">
                <div className="col-12">
                  <div className="position-relative">
                    <Image
                      className="img-fluid w-100"
                      src={Team3}
                      alt="Team3"
                    />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                      style={{ background: "rgba(52, 173, 84, .85)" }}
                    >
                      <h4 className="text-white">Farmer Name</h4>
                      <span className="text-white">Designation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}
