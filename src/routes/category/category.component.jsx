import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import DessertsCard from "../../components/crumbs-card/crumbs-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [desserts, setDesserts] = useState(categoriesMap[category]);

  useEffect(() => {
    setDesserts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {desserts &&
          desserts.map((dessert) => (
            <DessertsCard key={dessert.id} dessert={dessert} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
