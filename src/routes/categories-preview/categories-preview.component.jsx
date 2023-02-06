import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.components";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title, index) => {
        let products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            products={products}
            title={title}
          ></CategoryPreview>
        );
      })}
    </>
  );
};
export default CategoriesPreview;
