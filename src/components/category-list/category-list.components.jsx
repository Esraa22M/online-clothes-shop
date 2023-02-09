import CategoryItem from "../category-item/category-item.components";
import "./category-list.styles.scss";
import { categories } from "../../utils/user-data/categories.utils";

const CategoryList = () => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoryItem category={category} key={category.id}></CategoryItem>
      ))}
    </div>
  );
};
export default CategoryList;
