import CategoryList from "../../components/category-list/category-list.components";
import {categories} from "../../utils/data/categories.utils";
const Home = () => {
  
  return (
    <div className="App">
      <CategoryList categories={categories}></CategoryList>
    </div>
  );
};
export default Home;
