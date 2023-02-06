import "./category.styles.scss";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let products = categoriesMap[category];
    setProducts(products);
  }, [category, categoriesMap]);
  return (
    products && (
      <>
        <h2 className="category-title">{category}</h2>
        <div className="category-route-container">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </>
    )
  );
};
export default Category;
