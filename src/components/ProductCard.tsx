import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
import Rating from "./Rating";
import {
  StyledAddCartButton,
  StyledCard,
  StyledModifyCartButton,
} from "./styles/Card.styled";

type ItemProps = {
  item: {
    id: string;
    colors: string[];
    img: string;
    price: string;
    brand: string;
    name: string;
    description: string;
    rating: number;
    sizes: string[];
  };
};

const ProductCard = ({ item }: ItemProps) => {
  const {
    getProductQuantity,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useShoppingCart();

  const quantity = getProductQuantity(item.id);
  return (
    <StyledCard>
      <img src={item.img} alt="product img" />
      <h2>
        <Link to={`/product/${item.id}`}>{item.name}</Link>
      </h2>
      <Rating rating={item.rating}></Rating>
      <h3>{item.price}</h3>
      {quantity === 0 ? (
        <StyledAddCartButton onClick={() => increaseProductQuantity(item.id)}>
          Add to Cart
        </StyledAddCartButton>
      ) : (
        <StyledModifyCartButton>
          <button onClick={() => decreaseProductQuantity(item.id)}>-</button>
          <div>
            <span>{quantity}</span> in cart
          </div>
          <button onClick={() => increaseProductQuantity(item.id)}>+</button>
        </StyledModifyCartButton>
      )}
    </StyledCard>
  );
};

export default ProductCard;
