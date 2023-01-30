import "./check-out-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  let { clearItemFromCart, addItemsToCart, removeItemFromCart } =
    useContext(CartContext);
  let handleClearCartItem = () => clearItemFromCart(cartItem);
  const addItemHandler = ()=>addItemsToCart(cartItem);
  const removeItemHanddler=()=>removeItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="checkout-item-image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHanddler }>&#10094;</div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearCartItem}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
