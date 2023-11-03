import AboutDiv from "./About-div/About-Div";
import "../style/About.css";
import Photo from "src/images/bg-product-1.png";
import Image from "next/image";
export default function About() {
  return (
    <div className="about-main-div">
      <div className="left-div">
        <Image
          src={Photo}
          style={{
            height: "100%",
          }}
        ></Image>
      </div>
      <div className="right-div">
        <h4 style={{ color: "Green" }}> About-us</h4>
        <p>
          {" "}
          We Provide Fresh & Healthy Fruits and Vegetables to You and Your
          Family{" "}
        </p>
        <div className="right-div1">
          <div className="right-div2">
            <AboutDiv heading="Vegetables" para="this is ">
              {" "}
            </AboutDiv>
          </div>
          <div className="right-div3">
            <AboutDiv heading="Fruits" para="this is "></AboutDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
