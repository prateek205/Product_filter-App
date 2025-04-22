# 🛒 Product Filter App (React + Vite + ContextAPI)
This is a React based **Shopping App** in which user can view the **product list** dynamically using through `useEffect()`. An without props drilling it is implement by `ContextAPI` `useContext` which can be **Filter** state globally to manage the Products. 

## 🔧 Features
#### - 🎨 Using filter method:
  - ✅ Category(radio)
  - ✅ Brand(radio)
  - 🎨 Color(radio)
  - 🔍 Search(input)  
#### - 💵 Using Sort Options for Price:
  - ⬆️ High to Low.
  - ⬇️ Low to High.
#### - 🔄️ **Reset** Button to Clear all **filters**.
#### - 📃 Display the **Product List** by Name, Price, Brand, Color.
#### - **Responsive Design** using Media Queries:
- 💻 **Desktop** - using Sidebar filter with product grid layout.
- 📲 **Mobile** - stack layout Adeptive grid.
#### - 📂 **Dummy Product Data** using seprate folder for fetching using **ContextAPI**.

## 💻 Tech Stack
- ⚛️ React
- ⚡Vite
- 📦 useContext(manage the data and filter gloablly)
- 🎨 CSS(for responsive layout and styling)
- **useEffect**,**useState**,**useContext hooks**

## 📽️ Live Demo
-To see the Live Demo here: https://shopping-cart-seven-blush.vercel.app/

## 🧠 Code Use (React+ContextAPI)
#### main.jsx
```
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
```
## 📦 Deployment
- Github Page
- Vercel
- Netlify
- Render
## 📂 Folder Structure
```
.
├── Shopping_Cart Project
├── public/
│   ├── Images
│   └── Favicon.ico
├── src/
│   ├── Assets
│   ├── Components/
│   │   ├── Filter.jsx
│   │   └── ProductList.jsx
│   ├── Context/
│   │   ├── ProductContext.jsx
│   │   └── FilterContext.jsx
│   ├── Data/
│   │   └── Product.jsx
│   ├── App.jsx
│   ├── index.css
│   └── Main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.