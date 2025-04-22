import { createContext, useState, useEffect, useContext } from "react";
import products from "../data/product";


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    setAllProduct(products);
  }, []);

  return (
    <ProductContext.Provider value={{allProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
