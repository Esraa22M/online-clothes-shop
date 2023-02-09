import {
  CategoryContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from "./category-item.styles";
import { useNavigate } from "react-router-dom";
const CategoryItem = ({ category }) => {
  let { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};
export default CategoryItem;
