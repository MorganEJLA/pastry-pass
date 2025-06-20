import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, origin, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="stamps">Tried {quantity}x</span>
        <span className="origin">📍 {origin}</span>
      </div>
    </div>
  );
};

export default CartItem;
