import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../products-data/products-data";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";
export const CategoriesContext = createContext({
  categoriesMap: {},
});
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  const value = {
    categoriesMap,
  };
  //you just did it once no need for it anymore
  // useEffect(()=>{
  //   addCollectionAndDocuments('categories' , SHOP_DATA)
  // },[])
  useEffect(() => {
    const getCategoryMap = async () => {
      let categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    };
    getCategoryMap()
  }, []);
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
