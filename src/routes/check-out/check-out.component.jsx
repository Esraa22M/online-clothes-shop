import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/check-out-item/check-out-item.component";
import "./check-out-styles.scss";
const Checkout = () => {
  const { cartItems,cartTotal } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="check-out-header">
        <div className="check-out-header-block">
          <span>Product</span>
        </div>
        <div className="check-out-header-block">
          <span>Description</span>
        </div>
        <div className="check-out-header-block">
          <span>Quantity</span>
        </div>
        <div className="check-out-header-block">
          <span>Price</span>
        </div>
        <div className="check-out-header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};
export default Checkout;
