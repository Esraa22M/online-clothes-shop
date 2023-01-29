import "./cart-icon.styles.scss";
import {useContext} from 'react';
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
const CartIcon = ({...props}) => {
  let {productsQuantity} = useContext(CartContext)
  return (
    <div className="cart-icon-container" {...props}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-counter">{productsQuantity}</span>
    </div>
  );
};
export default CartIcon;
