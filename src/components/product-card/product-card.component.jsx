import "./product-card-styles.scss";
import Button from "../button/button.component";
const ProductCard = ({product}) => {
    const {id,  name , imageUrl , price} = product;
  return (
    <div className="product-card-container" >
      <img src={imageUrl} alt={`Product-${name}`}/>
      <div className="product-card-body">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </div>
      <Button buttonType="inverted" className="button">add to card</Button>
    </div>
  );
};
export default ProductCard;