import "./category-preview.styles.scss";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <Link className="title" to={`${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </Link>
      {/* <span className="title">{title.toUpperCase()}</span> */}
    </h2>
    <div className="preview">
      {products
        .filter((_, index) => index < 4)
        .map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  </div>
);
export default CategoryPreview;
