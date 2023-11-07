import { useShoppingCart } from "../context/shoppingCartContext";
import Items from "../data/items.json";
import { StyledItemStack } from "./styles/ShoppingCart.styled";
type CartItemProps = {
  id: string;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = Items.find((i) => i.id === id);
  if (item == null) return;

  return (
    <StyledItemStack>
      <img src={item.img} />
      <div>
        <div>
          {item.name}
          {quantity > 1 && <span> ({quantity}x)</span>}
        </div>
        <div>{item.price}</div>
      </div>
      <div>
        ${(parseFloat(item.price.replace("$", "")) * quantity).toFixed(2)}
        <button onClick={() => removeFromCart(id)}>X</button>
      </div>
    </StyledItemStack>
  );
}
