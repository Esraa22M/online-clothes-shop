import { useContext } from "react";
import "./product-card-styles.scss";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemsToCart } = useContext(CartContext);
  let addProductToCart = () => addItemsToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`Product-${name}`} />
      <div className="product-card-body">
        <span className="product-name">{name}</span>
        <span className="product-price">${price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPES_CLASSES["inverted"]}
        className="button"
        onClick={addProductToCart}
      >
        add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
