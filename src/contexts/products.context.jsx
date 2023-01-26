import { createContext, useState } from "react";
import PRODUCTS from "../products-data/products-data.json";
export const ProducsContext = createContext({
  products: [],
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = {
    products,
  };
  return (
    <ProducsContext.Provider value={value}>{children}</ProducsContext.Provider>
  );
};
