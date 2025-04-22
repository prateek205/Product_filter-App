import { createContext, useContext, useEffect, useState } from "react";
import { useProduct } from "./productContext";

const FilterContext = createContext();

const initialFilters = {
  category: "All",
  brand: "All",
  color: "All",
  search: "",
  sort: "All",
};

export const FilterProvider = ({ children }) => {
  const { allProduct } = useProduct();
  const [filters, setFilters] = useState(initialFilters);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const updateFilters = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  useEffect(() => {
    let finalProduct = [...allProduct];

    if (filters.category !== "All") {
      finalProduct = finalProduct.filter(
        (p) => p.category === filters.category
      );
    }

    if (filters.brand !== "All") {
      finalProduct = finalProduct.filter((p) => p.brand === filters.brand);
    }

    if (filters.color !== "All") {
      finalProduct = finalProduct.filter((p) => p.color === filters.color);
    }

    if (filters.search !== "") {
      finalProduct = finalProduct.filter((p) =>
        p.brand.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.sort === "asc") {
      finalProduct.sort((a, b) => b.price - a.price);
    } else if(filters.sort === 'desc'){
      finalProduct.sort((a, b) => a.price - b.price);
    }

    setFilteredProduct(finalProduct);
  }, [filters, allProduct]);

  return (
    <FilterContext.Provider
      value={{ resetFilters, filters, updateFilters, filteredProduct }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
