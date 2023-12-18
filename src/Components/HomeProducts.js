import Image from "next/image";
import Product1 from "@/images/product_1.png";
import Product2 from "@/images/product_2.png";
import Product3 from "@/images/product_3.png";
import Product4 from "@/images/product_4.png";

export default function HomeProducts() {
  return (
    <>
      {/* Products Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
            <h6 className="text-primary text-uppercase">Products</h6>
            <h1 className="display-5">Our Fresh &amp; Organic Products</h1>
          </div>
          <div className="owl-carousel product-carousel px-5 ">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="product_wrp">
                  <div className="product_img">
                    <Image src={Product1} alt="product" />
                  </div>
                  <div className="product_info">
                    <h4> Juicy Grapes </h4>
                    <span className="product_price">$46.00</span>
                  </div>
                  <div className="project_view">
                    <a href="/blackgallery/FuodBorne-react/#/">
                      <i className="icon-glyph-13" />
                    </a>
                    <a
                      className="project-link"
                      href="/blackgallery/FuodBorne-react/#/"
                    >
                      <i className="icon-glyph-52" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="product_wrp">
                  <div className="product_img">
                    <Image src={Product2} alt="product" />

                    <div className="on_sale">
                      <span />
                    </div>
                  </div>
                  <div className="product_info">
                    <h4> Red Watermelon </h4>

                    <span className="product_price">$56.00</span>
                  </div>
                  <div className="project_view">
                    <a href="/blackgallery/FuodBorne-react/#/">
                      <i className="icon-glyph-13" />
                    </a>
                    <a
                      className="project-link"
                      href="/blackgallery/FuodBorne-react/#/"
                    >
                      <i className="icon-glyph-52" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="product_wrp">
                  <div className="product_img">
                    <Image src={Product3} alt="product" />
                    <div className="on_sale">
                      <span />
                    </div>
                  </div>
                  <div className="product_info">
                    <h4> Juicy Orange </h4>

                    <span className="product_price">$46.00</span>
                  </div>
                  <div className="project_view">
                    <a href="/blackgallery/FuodBorne-react/#/">
                      <i className="icon-glyph-13" />
                    </a>
                    <a
                      className="project-link"
                      href="/blackgallery/FuodBorne-react/#/"
                    >
                      <i className="icon-glyph-52" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="product_wrp">
                  <div className="product_img">
                    <Image src={Product4} alt="product" />
                  </div>
                  <div className="product_info">
                    <h4> Fresh Banana </h4>

                    <span className="product_price">$46.00</span>
                  </div>
                  <div className="project_view">
                    <a href="/blackgallery/FuodBorne-react/#/">
                      <i className="icon-glyph-13" />
                    </a>
                    <a
                      className="project-link"
                      href="/blackgallery/FuodBorne-react/#/"
                    >
                      <i className="icon-glyph-52" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products End */}
    </>
  );
}
