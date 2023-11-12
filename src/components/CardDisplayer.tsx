import ProductCard from "../components/ProductCard";
import Items from "../data/items.json";
import { StyledCardDisplayer } from "./styles/Store.styled";

type filters = {
  brands: string[];
  sizes: string[];
  colors: string[];
};

type CardDisplayerProps = {
  sorting: string;
  filters: filters;
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
  sizes: string[];
};

function filterProducts(products: ItemProps[], filters: filters) {
  // filter by brand
  if (filters.brands.length) {
    return products.filter((product) => filters.brands.includes(product.brand));
  }

  // filter by sizes
  if (filters.sizes.length) {
    return products.filter((product) =>
      filters.sizes.some((size) => product.sizes.includes(size))
    );
  }

  // filter by sizes
  if (filters.colors.length) {
    return products.filter((product) =>
      filters.colors.some((color) => product.colors.includes(color))
    );
  }
  return products;
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

  const filteredProducts = filterProducts(sortedItems, filters);

  return (
    <StyledCardDisplayer>
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} item={item}></ProductCard>
      ))}
    </StyledCardDisplayer>
  );
}
