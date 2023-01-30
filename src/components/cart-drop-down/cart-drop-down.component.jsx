import { useContext  } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-drop-down.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigateToCheckout = ()=>{
    navigate("/checkout")
   }
  return (
    <div className="cart-drop-down-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem CartItem={item} key={item.id} />;
        })}
      </div>
      <Button className="button" onClick = {handleNavigateToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropDown;
