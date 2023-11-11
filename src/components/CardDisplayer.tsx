import ProductCard from "../components/ProductCard";
import Items from "../data/items.json";
import { StyledCardDisplayer } from "./styles/Store.styled";

type CardDisplayerProps = {
  sorting: string;
  filters: { brands: string[] };
};

type filters = {
  brands: string[];
};

type ItemProps = {
  id: string;
  colors: string[];
  img: string;
  price: string;
  brand: string;
  name: string;
  description: string;
  rating: number;
  size: number[];
};

function filter(arr: ItemProps[], filters: filters) {
  // filter by brand
  if (filters.brands.length) {
    return arr.filter((item) => filters.brands.includes(item.brand));
  }
  return arr;
}

export default function CardDisplayer({
  sorting,
  filters,
}: CardDisplayerProps) {
  const sortedItems = [...Items];

  if (sorting === "Price - Low to High") {
    sortedItems.sort(
      (a, b) =>
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
    );
  } else if (sorting === "Price - High to Low") {
    sortedItems.sort(
      (a, b) =>
        parseFloat(b.price.replace("$", "")) -
        parseFloat(a.price.replace("$", ""))
    );
  } else if (sorting === "Avg. Customer Review") {
    sortedItems.sort((a, b) => b.rating - a.rating);
  }

  const filtredItems = filter(sortedItems, filters);

  return (
    <StyledCardDisplayer>
      {filtredItems.map((item) => (
        <ProductCard key={item.id} item={item}></ProductCard>
      ))}
    </StyledCardDisplayer>
  );
}
