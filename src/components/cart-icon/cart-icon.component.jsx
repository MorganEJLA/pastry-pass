import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <div className="icon-wrapper">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    </div>
  );
};

export default CartIcon;
