import { useContext } from "react";
import "./crumbs-card.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
const DessertsCard = ({ dessert }) => {
  const { name, origin, imageUrl } = dessert;
  const { addItemToCart } = useContext(CartContext);
  const addDessertToCart = () => addItemToCart(dessert);
  return (
    <div className="desserts-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="origin">{origin}</span>
      </div>

      <Button buttonType="inverted" onClick={addDessertToCart}>
        Add to Passport
      </Button>
    </div>
  );
};

export default DessertsCard;
