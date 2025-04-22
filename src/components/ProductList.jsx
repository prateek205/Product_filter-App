import React from "react";
import "./productList.css";
import { useFilter } from "../context/filterContext";


const ProductList = () => {
    const {filteredProduct} = useFilter()

    return (
    <>
      <div className="right">
        {filteredProduct.map((prod) => {
          return (
            <div key={prod.id} className="rightCards">
              <img className="cardImg" src={prod.images} alt="red_shirt" />
              <p className="cardTitle">{prod.name}</p>
              <p className="cardDetails">
                Price: <strong> &#8377; {prod.price}</strong>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
