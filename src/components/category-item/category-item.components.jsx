import {
  CategoryContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from "./category-item.styles";
const CategoryItem = ({ category }) => {
  let { title, imageUrl } = category;
  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};
export default CategoryItem;
