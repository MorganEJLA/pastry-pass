import "./crumbs-card.styles.scss";
import Button from "../button/button.component";

const CrumbsCard = ({ crumbs }) => {
  const { name, origin, imageUrl } = crumbs;

  return (
    <div className="crumbs-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="origin">{origin}</span>
      </div>

      <Button buttonType="inverted">Add to Collection</Button>
    </div>
  );
};

export default CrumbsCard;
