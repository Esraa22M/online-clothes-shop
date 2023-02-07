import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-drop-down.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CartItems,
  CartdropDownContainer,
  EmptyMessage,
} from "./cart-drop-down.styles.jsx";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <CartdropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem CartItem={item} key={item.id} />;
          })
        ) : (
          <EmptyMessage>cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleNavigateToCheckout}>GO TO CHECKOUT</Button>
    </CartdropDownContainer>
  );
};
export default CartDropDown;
