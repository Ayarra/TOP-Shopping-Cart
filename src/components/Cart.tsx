import { useShoppingCart } from "../context/shoppingCartContext";
import Items from "../data/items.json";
import CartItem from "./CartItem";
import { StyledCart } from "./styles/ShoppingCart.styled";

type CartProps = {
  isOpen: boolean;
};

export default function Cart({ isOpen }: CartProps) {
  const { cartItems } = useShoppingCart();

  const total = cartItems.reduce((total, currentItem) => {
    const item = Items.find((i) => i.id === currentItem.id);
    return (
      total +
      parseFloat(item?.price.replace("$", "") || null) * currentItem.quantity
    );
  }, 0);
  return (
    <StyledCart isOpen={isOpen}>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <p>
        TOTAL:{"      "}
        {total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        })}
      </p>
    </StyledCart>
  );
}
