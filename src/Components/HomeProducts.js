import Products from "./Products";
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
              <Products
                name="Juicy Grapes"
                price="Rs50.00"
                image={Product1}
              ></Products>
              <Products
                name="Red Watermelon"
                price="Rs150.00"
                image={Product2}
              ></Products>
              <Products
                name="Juicy Orange"
                price="Rs250.00"
                image={Product3}
              ></Products>
              <Products
                name="Fresh Banana"
                price="Rs60.00"
                image={Product4}
              ></Products>
            </div>
          </div>
        </div>
      </div>
      {/* Products End */}
    </>
  );
}
