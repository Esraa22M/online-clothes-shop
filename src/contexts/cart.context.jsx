import { createContext, useState, useEffect } from "react";
const addCartItem = (cartItems, product) => {
  let existingCartProductIndex = cartItems.findIndex((cartItem) => {
    return cartItem.id === product.id;
  });

  if (existingCartProductIndex >= 0) {
    let existingCartProducts = [...cartItems];
    existingCartProducts[existingCartProductIndex].quantity += 1;
    console.log(existingCartProducts);
    return existingCartProducts;
  }

  return [...cartItems, { ...product, quantity: 1 }];
};
export const CartContext = createContext({
  iscartOpen: false,
  cartItems: [],
  productsQuantity: 0,
  addItemToCart: () => {},
  setIsCartOpen: () => {},
  addItemsToCart: () => {},
});

const CartContextProvider = ({ children }) => {
  let [iscartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState(0);
  const addItemsToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const calculatingProductsQuantity = () => {
    let total = cartItems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0
    );
    return total
  };
  let value = {
    iscartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    productsQuantity,
  };
  useEffect(() => {
    setProductsQuantity(calculatingProductsQuantity());
  }, [cartItems]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartContextProvider;
