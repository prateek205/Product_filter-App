import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/productContext.jsx";
import { FilterProvider } from "./context/filterContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductProvider>
);
