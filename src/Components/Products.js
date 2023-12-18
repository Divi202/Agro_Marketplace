import React from "react";
import Image from "next/image";
export default function Products(props) {
  return (
    <>
      <div className="col-md-3 col-sm-12">
        <div className="product_wrp">
          <div className="product_img">
            <Image src={props.image} alt="product" />
          </div>
          <div className="product_info">
            <h4> {props.name}</h4>
            <span className="product_price">{props.price}</span>
          </div>
          <div className="project_view">
            <a href="/blackgallery/FuodBorne-react/#/">
              <i className="icon-glyph-13" />
            </a>
            <a className="project-link" href="/blackgallery/FuodBorne-react/#/">
              <i className="icon-glyph-52" />
            </a>
          </div>
          <div className="flex ">
            <button type="button" className="btn btn-success mt-2 mx-2">
              Add to cart
            </button>
            <button type="button" className="btn btn-primary mt-2">
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
