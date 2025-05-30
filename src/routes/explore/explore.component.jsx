import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./explore.styles.scss";

const Explore = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          desserts={categoriesMap[title]}
        />
      ))}
    </>
  );
};

export default Explore;
