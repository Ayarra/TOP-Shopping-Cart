import { StyledCard } from "./styles/Store.styled";

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
  return (
    <StyledCard>
      <img src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
      <h4>{item.rating}</h4>
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
