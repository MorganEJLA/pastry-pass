import DessertsCard from "../crumbs-card/crumbs-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, desserts }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">
          {title ? title.toUpperCase() : "UNTITLED"}
        </span>
      </h2>
      <div className="preview">
        {desserts
          .filter((_, idx) => idx < 4)
          .map((dessert) => (
            <DessertsCard key={dessert.id} dessert={dessert} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
