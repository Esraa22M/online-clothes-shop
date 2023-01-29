import "./cart-item.styles.scss";
const CartItem = ({ CartItem }) => {
  let { name, imageUrl, quantity, price } = CartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`product - ${name}`} />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <span className="product-quantity-and-price">{quantity} x ${price}</span>
      </div>
    </div>
  );
};
export default CartItem;
