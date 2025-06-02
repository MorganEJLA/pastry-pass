import { useContext} from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const desserts = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} desserts={desserts} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
