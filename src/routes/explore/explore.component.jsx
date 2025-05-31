import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./explore.styles.scss";

const Explore = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="explore-container">
      {Object.keys(categoriesMap).map((title) => {
        const desserts = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} desserts={desserts} />
        );
      })}
    </div>
  );
};

export default Explore;
