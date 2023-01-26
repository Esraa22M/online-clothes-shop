import { useContext } from "react";
import { ProducsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./products.styles.scss";
const Products = () => {
  const { products } = useContext(ProducsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};
export default Products;
