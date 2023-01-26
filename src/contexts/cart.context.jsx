import { createContext, useState } from "react";
export const CartContext = createContext({
  iscartOpen: false,
  setIsCartOpen: () => {},
});
const CartContextProvider = ({ children }) => {
  let [ iscartOpen, setIsCartOpen ] = useState(false);
  let value = {
    iscartOpen,
    setIsCartOpen,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartContextProvider;
