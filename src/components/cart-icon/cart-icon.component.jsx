import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <div className="icon-wrapper">
        <ShoppingIcon className="shopping-icon" />
        <ItemCount>{cartCount}</ItemCount>
      </div>
    </CartIconContainer>
  );
};

export default CartIcon;
