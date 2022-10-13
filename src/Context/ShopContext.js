import { createContext, useContext, useState } from "react";
import productData from "../Data/Products.json";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [cart, setCart] = useState([]);

  return (
    <ShopContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
