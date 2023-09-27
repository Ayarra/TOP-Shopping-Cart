import { useState } from "react";
import { StyledCard, StyledRating } from "./styles/Store.styled";
type watchCardProps = {
  item: {
    _id: string;
    name: string;
    size: number;
    color: string[];
    price: number;
    img: string;
    rating: number;
    company: string;
  };
};

const WatchCard = ({ item }: watchCardProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <StyledCard>
      <img src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
      <StyledRating>
        <svg
          checked={checked}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>star</title>
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>star</title>
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>star</title>
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>star</title>
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>star</title>
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </StyledRating>
      <h3>{item.price}</h3>
      {/* <div>
        {item.color.map((color) => (
          <div style={{ color: { color }, width: 30 }}>{color}</div>
        ))}
      </div> */}
      <button>Add to Cart</button>
    </StyledCard>
  );
};
export default WatchCard;
