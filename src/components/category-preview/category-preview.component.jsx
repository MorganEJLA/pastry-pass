import { Link } from "react-router-dom";
import DessertsCard from "../crumbs-card/crumbs-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, desserts }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title ? title.toUpperCase() : "UNTITLED"}
        </Link>
      </h2>
      <div className="preview">
        {desserts
          .filter((_, idx) => idx < 5)
          .map((dessert) => (
            <DessertsCard key={dessert.id} dessert={dessert} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
