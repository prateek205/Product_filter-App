import React from "react";
import "./filter.css";
import { useFilter } from "../context/filterContext";
import ProductList from "./ProductList";

const categories = ["All", "Electronic", "Clothing"];
const colors = ["All", "Red", "Green", "Blue", "Black", "White", "Grey"];
const brands = [
  "All",
  "Levi's",
  "Allen Solley",
  "Denim",
  "Jack N Jones",
  "JBL",
  "Silicon",
  "Apple",
];
const sortOption = [
    {value:"All", label:"All"},
    { value: "desc", label: "price-- Low to High" },
    { value: "asc", label: "price--High to Low" },
];

const Filter = () => {
  const { filters, updateFilters, resetFilters } = useFilter();

  return (
    <div className="container">
      <div className="topContainer">
        <div className="sort">
          <p className="sortTitle">Sort:</p>
          {sortOption.map((sort) => (
            <button
              className="sortBtn"
              key={sort.value}
              onClick={(e) => updateFilters("sort", sort.value)}
            >
              {sort.label}
            </button>
          ))}
        </div>
      </div>
      <div className="bottomContainer">
        <div className="left">
          <div className="leftFilter">
            <div className="filterTitleBtn">
              <h3 className="filterTitle">Filter</h3>
              <button onClick={resetFilters} className="filterBtn">Reset</button>
            </div>
            <hr />
            <div className="searchItem">
              <input
                type="text"
                placeholder="Search"
                value={filters.search}
                onChange={(e) => updateFilters("search", e.target.value)}
              />
            </div>
            <div className="filterCat">
              <p className="filterCatTitle">Category:</p>
              <ul>
                {categories.map((category) => (
                  <li key={category}>
                    <label >
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filters.category === category}
                        onChange={(e) =>
                          updateFilters("category", e.target.value)
                        }
                      />
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="filterCat">
              <p className="filterCatTitle">Brands:</p>
              <ul>
                {brands.map((brand) => (
                  <li key={brand}>
                    <label >
                      <input
                        type="radio"
                        name="brand"
                        value={brand}
                        checked={filters.brand === brand}
                        onChange={(e) => updateFilters("brand", e.target.value)}
                      />
                      {brand}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="filterCat">
              <p className="filterCatTitle">Colors:</p>
              <ul>
                {colors.map((color) => (
                  <li key={color}>
                    <label >
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={filters.color === color}
                        onChange={(e) => updateFilters("color", e.target.value)}
                      />
                      {color}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ProductList/>
      </div>
    </div>
  );
};

export default Filter;
