import {
  ShoppingIconSvg,
  ItemCounter,
  CartIconContainer,
} from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = ({ ...props }) => {
  let { productsQuantity } = useContext(CartContext);
  return (
    <CartIconContainer {...props}>
      <ShoppingIconSvg />
      <ItemCounter>{productsQuantity}</ItemCounter>
    </CartIconContainer>
  );
};
export default CartIcon;
