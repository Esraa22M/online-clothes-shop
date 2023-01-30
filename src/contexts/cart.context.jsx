import { createContext, useState, useEffect } from "react";
const addCartItem = (cartItems, product) => {
  let existingCartProductIndex = cartItems.findIndex((cartItem) => {
    return cartItem.id === product.id;
  });

  if (existingCartProductIndex >= 0) {
    let existingCartProducts = [...cartItems];
    existingCartProducts[existingCartProductIndex].quantity += 1;
    return existingCartProducts;
  }
  return [...cartItems, { ...product, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  let existingCartProductIndex = cartItems.findIndex(
    (item) => cartItemToRemove.id === item.id
  );
  if (cartItems[existingCartProductIndex].quantity === 1) {
    let existingCartProducts = cartItems.filter(
      (item) => item.id !== cartItemToRemove.id
    );
    return existingCartProducts;
  }
  let existingCartProducts = [...cartItems];
  existingCartProducts[existingCartProductIndex].quantity -= 1;
  return existingCartProducts;
};
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((item) => item.id !== cartItemToClear.id);

export const CartContext = createContext({
  iscartOpen: false,
  cartItems: [],
  cartTotal:0,
  productsQuantity: 0,
  setIsCartOpen: () => {},
  addItemsToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const CartContextProvider = ({ children }) => {
  let [iscartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState(0);
  const [cartTotal , setCartTotal]=useState(0)
  const addItemsToCart = (cartItemToAdd) => {
    setCartItems(addCartItem(cartItems, cartItemToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const calculatingProductsQuantity = () => {
    let total = cartItems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0
    );
    return total;
  };
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  let value = {
    iscartOpen,
    setIsCartOpen,
    cartItems,
    cartTotal,
    addItemsToCart,
    removeItemFromCart,
    productsQuantity,
    clearItemFromCart,
  };
  useEffect(() => {
    setProductsQuantity(calculatingProductsQuantity());
  }, [cartItems]);

  useEffect(()=>{
    let total = cartItems.reduce((accumulator , currentItem)=>accumulator+=currentItem.quantity*currentItem.price ,0)
    setCartTotal(total)
  },[cartItems])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartContextProvider;
